import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

const AppFooter = () => {

  const [year, setYear] = useState(2021);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Container fluid className="bg-light py-3">
      <Row>
        <Col className="text-center">
          <span>
            Smartblock Technologies SpA &copy; {year}
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default AppFooter;
