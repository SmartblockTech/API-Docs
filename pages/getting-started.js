import PageWrapper from '@helpers/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GettingStarted = () => {
  return (
    <PageWrapper pageTitle="Getting Started">
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="fw-bold">Getting Started</h1>
            <hr />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default GettingStarted;
