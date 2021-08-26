import { FC } from 'react';
import PageWrapper from '@components/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasePathLink from '@components/base-path-link';
import Head from 'next/head';

const Home: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'Home - Smartblock Docs'}</title>
      </Head>
      <Container className='h-100'>
        <Row className='h-100 align-content-center'>
          <Col>
            <h1 className='fw-bold'>Smartblock Documentation</h1>
            <p>To learn how to use the API and other resources, you must go to the <BasePathLink href='/getting-started'>getting started</BasePathLink> section</p>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Home;
