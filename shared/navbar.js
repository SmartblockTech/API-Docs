import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import SmartblockLogo from '@images/smartblock-logo.svg';
import BasePathLink from '@helpers/base-path-link';

const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <BasePathLink href="/" passHref>
        <Navbar.Brand>
          <Image
            src={SmartblockLogo}
            alt="Smartblock"
            height="45" />
        </Navbar.Brand>
      </BasePathLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <BasePathLink href="/" passHref>
            <Nav.Link>
              Home
            </Nav.Link>
          </BasePathLink>
          <BasePathLink href="/getting-started" passHref>
            <Nav.Link>
              Getting Started
            </Nav.Link>
          </BasePathLink>
          <NavDropdown title="Topics" id="topics-dropdown">
            <BasePathLink href="/getting-started" passHref>
              <NavDropdown.Item>Configuration</NavDropdown.Item>
            </BasePathLink>
            <BasePathLink href="/security" passHref>
              <NavDropdown.Item>Security</NavDropdown.Item>
            </BasePathLink>
          </NavDropdown>
          <NavDropdown title="Endpoints" id="endpoints-dropdown">
            <BasePathLink href="/endpoints/overview" passHref>
              <NavDropdown.Item>Overview</NavDropdown.Item>
            </BasePathLink>
            <BasePathLink href="/endpoints/specials" passHref>
              <NavDropdown.Item>Special Endpoints</NavDropdown.Item>
            </BasePathLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default AppNavBar;
