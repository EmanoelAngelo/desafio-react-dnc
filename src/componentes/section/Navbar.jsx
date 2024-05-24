import React from "react";
import styles from "./Navbar.module.css"; // Importa o CSS como um módulo

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importa os ícones

function CustomNavbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            {/* Primeira lista com a classe "first-list" */}
            <ul className={`${styles.navbar} ${styles['first-list']}`}>
              <li>
                <Nav.Link href="#Projects" className={styles['navbar-link']}>Projetos</Nav.Link>
              </li>
              <li>
                <Nav.Link href="technology" className={styles['navbar-link1']}>Tecnologia</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#About" className={styles['navbar-link1']}>Sobre mim</Nav.Link>
              </li>
            </ul>
          </Col>
          <Col>
            {/* Segunda lista com a classe "second-list" */}
            <ul className={`${styles.navbar} ${styles['second-list']}`}>
              <li><a href='https://github.com/EmanoelAngelo?tab=repositories' className={styles['navbar-link2']}><FaGithub size={17} /></a></li>
              <li><a href='https://www.linkedin.com/in/emanoelangelo/' className={styles['navbar-link2']}><FaLinkedin size={19} /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CustomNavbar;
