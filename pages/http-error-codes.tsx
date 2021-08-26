import PageWrapper from '@components/page-wrapper';
import Head from 'next/head';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HTTPErrorCodes: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'HTTP Error Codes - Smartblock Docs'}</title>
      </Head>
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className='fw-bold'>HTTP Error Codes Reference</h1>
            <br />
            <p>
              ...
            </p>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default HTTPErrorCodes;
