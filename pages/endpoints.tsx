import { FC } from 'react';
import PageWrapper from '@components/page-wrapper';
import BasePathLink from '@components/base-path-link';
import { Col, Container, Row, Table } from 'react-bootstrap';
import SchemaAsTableSpec from '@components/schema-spec-table';
import Head from 'next/head';

const Endpoints: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'Endpoints - Smartblock Docs'}</title>
      </Head>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='fw-bold'>Endpoints</h1>
            <hr />
            <p>
              The endpoints are distributed by modules which are available according to an authorization policy.
              This means that certain endpoints can only be acceced with an specific configuration, see the endpoint
              specific <b>accessibility notes</b> for more information.
            </p>
            <h2 id='authorization-policy' className='fw-bold'>
              Authorization Policy
            </h2>
            <p>
              The Smartblock REST API use , mainly, a <a href='https://jwt.io/' target='_blank' rel='noreferrer noopener'>JSON Web Token</a>&nbsp;
              or just <b>JWT</b> (<a href='https://datatracker.ietf.org/doc/html/rfc7519' target='_blank' rel='noreferrer noopener'>RFC 7519</a>) 
              based authentication system. Additionally, we provide the <BasePathLink href='/direct-token'>Smartblock Direct Token</BasePathLink>&nbsp;
              authentication for specific endpoints, which is specially useful for flexible resources. Note if you make a request without a valid 
              authorization token, the endpoint will return a response using the <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401' 
              target='_blank' rel='noreferrer noopener'>HTTP 401 Unauthorized client error</a>. To avoid this, ensure to add the correct header:
            </p>
            <p>Check the <BasePathLink href='/http-error-codes'>HTTP error codes</BasePathLink> for more details.</p>
            <p>
              If you are using JWT:
              <br />
              <code>
                Authorization: Bearer {'<json-web-token>'}
              </code>
            </p>
            <p>
              Or, if you are using SDT:
              <br />
              <code>
                Direct-Token: {'<smartblock-direct-token>'}
              </code>
            </p>
            <h2 id='response-format' className='fw-bold'>
              Response format
            </h2>
            <p>
              In mosses, the API will resolve a response body in JSON format. The JSON properties are formatted using the following rules:
            </p>
            <SchemaAsTableSpec schemaSpecRef='defaultResponse' context='responses' />
            <h2 id='modules' className='fw-bold'>Modules</h2>
            <p>Go to the <BasePathLink href='/endpoints/modules'>endpoints modules section</BasePathLink></p>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default Endpoints;
