import PageWrapper from '@helpers/page-wrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HTTPMethods = () => {
  return (
    <PageWrapper>
      <Container className="my-5">
        <Row>
          <Col>
            <h1>Allowed HTTP Methods</h1>
            <p>All the endpoints will only accept request using with one or more of the following HTTP methods:</p>
            <ul>
              <li>OPTIONS</li>
              <li>GET</li>
              <li>POST</li>
              <li>PUT</li>
              <li>PATCH</li>
              <li>DELETE</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default HTTPMethods;
