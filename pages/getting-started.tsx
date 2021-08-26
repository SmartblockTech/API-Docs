import PageWrapper from '@components/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FC } from 'react';
import Head from 'next/head';
import BasePathLink from '@components/base-path-link';

const GettingStarted: FC = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'Getting Started - Smartblock Docs'}</title>
      </Head>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='fw-bold'>Getting Started</h1>
            <hr />
            <p>
              Welcome to the Smartblock Documentation, the integrated solution for project management and process tracking 
              with blockchain integration. First of all, you will need to set up a REST client to interact with the API.
            </p>
            <h2 id='api'>API</h2>
            <p>The Smartblock API is a flexible and simple group of services which uses a <a href='https://restfulapi.net/' target='_blank' rel='noreferrer noopener'>REST API architectural style</a></p>
            <h3 id='api-access'>How to access</h3>
            <p>First, make sure to have an account access token or an <BasePathLink href='/direct-token'>Smartblock Direct Token</BasePathLink></p>
            <p className='fst-italic text-muted'>For more details, go to the <BasePathLink href='/endpoints#authorization-policy'>authorization policy reference</BasePathLink>.</p>
            <p>Once you have your private token, select the appropriate environment for your application:</p>
            <p>
              <b>For production:</b> <a href='api.smartblock.cl' target='_blank' rel='noopener noreferrer nofollow'>api.smartblock.cl</a>
            </p>
            <p>
              <b>For development:</b> <a href='dev.api.smartblock.cl' target='_blank' rel='noopener noreferrer nofollow'>dev.api.smartblock.cl</a>
            </p>
            <p>
              To enforce a correct integration workflow, all request must include a <BasePathLink href='/endpoints#minimal-headers-configuration'>minimal headers configuration</BasePathLink>.
            </p>
            <p>
              If you have additional questions, create a new <a href='https://github.com/SmartblockTech/Issue-Tracker/issues/new/choose' target='_blank' rel='noreferrer noopener'>issue</a> with 
              your question in our <a href='https://github.com/SmartblockTech/Issue-Tracker' target='_blank' rel='noreferrer noopener'>issue tracker</a>.
            </p>
            {/* <h2 id='other-resources'>Other resources</h2>
            <p>
              Additionally, we have a couple of service that you may want to try:
            </p> */}
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default GettingStarted;
