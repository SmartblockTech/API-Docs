import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import BasePathLink from '@components/base-path-link';
import { FC } from 'react';
import { imageRefs } from '@helpers/image-refs';

const AppNavBar: FC<Record<string, never>> = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <BasePathLink href="/" passHref>
        <Navbar.Brand>
          <Image
            src={imageRefs.smartblockLogo.src}
            alt="Smartblock"
            height="45" />
        </Navbar.Brand>
      </BasePathLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <BasePathLink href="/getting-started" passHref>
            <Nav.Link>
              Getting Started
            </Nav.Link>
          </BasePathLink>
          <BasePathLink href="/endpoints" passHref>
            <Nav.Link>
              API Endpoints
            </Nav.Link>
          </BasePathLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default AppNavBar;
