import PageWrapper from '@components/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FC } from 'react';
import Head from 'next/head';

const Security: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'Security - Smartblock Docs'}</title>
      </Head>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='fw-bold'>API Security</h1>
            <hr />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default Security;
