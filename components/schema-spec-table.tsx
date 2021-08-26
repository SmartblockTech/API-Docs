import React, { FC, useState, DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import Table, { TableProps } from 'react-bootstrap/Table';
import { WS_CHAR_CODE, VB_CHAR_CODE } from '@lib/ascii-chars';
import { ExtendedString } from '@helpers/extended-string';
import { BOX_DRAWINGS_LIGHT_HORIZONTAL, BOX_DRAWINGS_LIGHT_LEFT, BOX_DRAWINGS_LIGHT_UP_AND_RIGHT, BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT } from '@lib/unicode-chars';

type SchemaSpecMeta = {
  _type: string[] | string;
  _description?: string;
} | {
  _type: never;
  _description: never;
};

type SchemaSpec = {
  [key: string]: SchemaSpec
} & SchemaSpecMeta;

type InlineSchema<T = SchemaSpec> = {
  inlineSchema: T;
};

type SchemaAsRef = Partial<InlineSchema<never>> & {
  schemaSpecRef: string;
  context: 'requests' | 'responses';
};

type SchematicProps<T = SchemaSpec> = InlineSchema<T> | SchemaAsRef;

type SpecTableProps<T = SchemaSpec> = SchematicProps<T> & {
  tableProps?: TableProps;
  theadProps?: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
  tbodyProps?: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
};

type SchemaKeyMap = {
  map: string;
  parentDepth?: string;
  depthLevel: number
};

type SchemaSpecHandler = SchemaSpec & {
  getTypes: () => string[];
};

const SchemaAsTableSpec: FC<SpecTableProps> = (props: SpecTableProps) => {

  const { tableProps, tbodyProps, theadProps, ...schematicProps } = props;

  const [ schema, setSchema ] = useState<SchemaSpec>();
  const [ schemaKeysMap, setSchemaKeysMap ] = useState<SchemaKeyMap[]>([]);
  const [ schemaKeyDepthDeep, setSchemaKeyDepthDeep ] = useState<number>(0);

  const getCurrentValuesWithKeyMap = (object: SchemaSpec, keyMap: string): SchemaSpecHandler => {
    const keyMapAsArray = keyMap.split('.');
    let currentObject = object;
    keyMapAsArray.forEach(key => currentObject = currentObject[key as keyof typeof object] as SchemaSpec);
    const getTypes = () => {
      return currentObject._type
        ? currentObject._type.toString().replace(/ /gi, '').split(',')
        : [] as string[];
    }
    const { _type, _description, ...otherProps } = currentObject;
    return {
      ...otherProps,
      _type: _type as (string | string[] | never),
      _description: _description as (string | never),
      getTypes
    } as SchemaSpecHandler;
  }

  const getCurrentDepthDeepPrefix = (currentDepth: number = schemaKeyDepthDeep, currentKeyMap: string) => {
    const spaces = currentDepth > 2
      ? currentDepth - 2
      : 0;
    const rawWhiteSpaces = String.fromCharCode(WS_CHAR_CODE).repeat(3 * spaces);
    const depthsInLevel = schemaKeysMap.filter(key => key.parentDepth && key.depthLevel === currentDepth);
    const currentSchemaKeyMap = depthsInLevel.find(depth => depth.map === currentKeyMap);
    let depthPrefixContextMarker: string = BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT;
    if (currentSchemaKeyMap) {
      const currentSchemaKeyMapIndex = depthsInLevel.indexOf(currentSchemaKeyMap);
      if (currentSchemaKeyMapIndex === depthsInLevel.length - 1) {
        depthPrefixContextMarker = BOX_DRAWINGS_LIGHT_UP_AND_RIGHT;
      }
    }
    const treePrefix = currentDepth > 1
      ? <span>
        {[depthPrefixContextMarker, BOX_DRAWINGS_LIGHT_HORIZONTAL, BOX_DRAWINGS_LIGHT_LEFT].join('')}
      </span>
      : null;
    return (
      <span style={{ whiteSpace: 'pre' }}>
        {rawWhiteSpaces}
        {treePrefix}
      </span>
    );
  }

  useEffect(() => {
    if (schematicProps.inlineSchema) {
      setSchema(schematicProps.inlineSchema)
    } else if (!schema) {
      fetch('/' + (schematicProps as SchemaAsRef).context + '.json', { method: 'get' })
        .then(response => response.json())
        .then((json: { schemas: { [key: string]: SchemaSpec; } }) => {
          const foundSchemaSpec = json.schemas[(schematicProps as SchemaAsRef).schemaSpecRef];
          if (foundSchemaSpec) {
            setSchema(foundSchemaSpec);
          }
        })
        .catch(errorReason => {
          console.error('Schema spec file not found.', errorReason);
        });
    }
  }, [schema, schematicProps]);

  useEffect(() => {
    if (schema) {
      const getObjectDeepKeys = (schemaToMap: { [key: string]: any }): string[] => {
        return Object.keys(schemaToMap)
          .filter(key => schemaToMap[key] instanceof Object)
          .map(key => getObjectDeepKeys(schemaToMap[key]).map(k => `${key}.${k}`))
          .reduce((previousValue, currentValue) => previousValue.concat(currentValue), Object.keys(schemaToMap))
          .filter(keyChain => !keyChain.match(/_/g));
      }
      const getDeepPropLevels = (rawObject: { [key: string]: any }) => {
        const keyList = getObjectDeepKeys(rawObject);
        const keyMap = keyList.map<SchemaKeyMap>(
          key => {
            const matches = key.match(/./g);
            const depthLevel = (matches?.filter(char => char === '.').length ?? 0) + 1;
            const parentDepth = depthLevel > 1
              ? key
                  .split('.')
                  .filter((_mapFragment, index, map) => index !== map.length)
                  .toString()
                  .replace(/,/gi, '.')
              : undefined;
            return {
              map: key,
              depthLevel,
              parentDepth
            };
          }
        )
        setSchemaKeysMap(keyMap);
        return 1 + keyList.length > 0
          ? keyList
              .sort((current, next) => (next.match(/./g)?.length ?? 0) - (current.match(/./g)?.length ?? 0))[0]
              .match(/./g)?.filter(char => char === '.').length ?? 0
          : 0;
      }
      setSchemaKeyDepthDeep(getDeepPropLevels(schema));
    }
  }, [schema]);

  return schema && schemaKeyDepthDeep > 0
    ? <Table variant='light' bordered striped {...tableProps} >
      <thead {...theadProps} >
        <tr>
          <th colSpan={schemaKeyDepthDeep}>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody {...tbodyProps} >
        {
          schemaKeysMap
            .sort((current, next) => current.map.localeCompare(next.map))
            .map((key, index) => <tr key={index}>
            <td colSpan={schemaKeyDepthDeep} className='font-monospace'>
              <span style={{ whiteSpace: 'pre' }}>
                {getCurrentDepthDeepPrefix(key.depthLevel, key.map)}
                {key.map.split('.').pop()}
              </span>
            </td>
            <td colSpan={1}>
              {
                getCurrentValuesWithKeyMap(schema, key.map).getTypes().map(
                  (currentType, key, map) => (
                    <span key={key}>
                      <code>{currentType}</code>
                      {
                        map.length - 1 > key
                          ? new ExtendedString(String.fromCharCode(VB_CHAR_CODE)).surroundWith(String.fromCharCode(WS_CHAR_CODE))
                          : null
                      }
                    </span>
                  )
                )
              }
            </td>
            <td colSpan={1}>
              {getCurrentValuesWithKeyMap(schema, key.map)._description}
            </td>
          </tr>)
        }
      </tbody>
    </Table>
    : <p className='text-center'>No schema specification found</p>;
}

export default SchemaAsTableSpec;
