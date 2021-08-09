import React from 'react';
import Head from 'next/head';
import PageWrapper from '@helpers/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasePathLink from '@helpers/base-path-link';

const Home = () => {
  // <Head> adds/replace attributes in <head> DOM element, such as the <title> element
  // If <Head> is not provided, it will default to that found in `_app.js`
  return (
    <React.Fragment>
      <Head>
        <title>Smartblock Docs</title>
      </Head>
      <PageWrapper>
        <Container style={{ height: '80vh' }}>
          <Row className="h-100 align-content-center">
            <Col>
              <h1 className="fw-bold">Smartblock API Documentation</h1>
              <p>To learn how to use the API, you must go to the <BasePathLink href="/getting-started">getting started</BasePathLink> section</p>
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </React.Fragment>
  );
};

export default Home;

