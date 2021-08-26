import PageWrapper from '@components/page-wrapper';
import Head from 'next/head';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EndpointsModules: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'API Modules - Smartblock Docs'}</title>
      </Head>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='fw-bold'>API Modules</h1>
            <hr />
            <p>...</p>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default EndpointsModules;
