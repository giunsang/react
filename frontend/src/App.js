import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './styles.css';
import save from './save.png';
import get from './get.png';
import {BiHomeAlt2} from "react-icons/bi";
import {CgMenuGridR} from "react-icons/cg";
import SQL from './SQL_Modal';
import {BsCaretRightFill} from "react-icons/bs";
import { saveAs } from 'file-saver';

function TopBar() {
   const handleSaveFile = () => {
       const fileContent = '이것은 예시';

       const file = new File([fileContent], 'myfile.txt', { type: 'text/plain;charset=utf-8' });
       saveAs(file);
     };

  return (
    <Row className="bg-primary text-black topbar">
      <Col className="text-right">
         <text id = "Tittle">
            First menu
         </text>
         <button className="bg-primary button" href="#">
                  <Image src={get} width="20" height="20" style={{ marginRight: '5px' }} />
         </button>
         <button className="bg-primary button" href="#" onClick={handleSaveFile}>
                  <Image src={save} width="20" height="20" style={{ marginRight: '5px' }} />
         </button>
         <button className="bg-primary button" href="#" >
                   <BsCaretRightFill size="30" color="#d0fc5c" style={{ marginRight: '5px' }} />
         </button>
      </Col>
    </Row>
  );
}

function Sidebar() {
  return (
    <Nav className="flex-column bg-dark sidebar">
      <row>
      <Nav.Item id="Home_b">
            <Nav.Link href="#">
              <BiHomeAlt2 id ="Home_i" size="35px" color="#ffffff" />
              <span id ="Home_t"className="ml-2 text-white">HOME</span>
            </Nav.Link>
      </Nav.Item>
      </row>

      <Nav.Item>
        //여기 드래그 앤 드롭
      </Nav.Item>
    </Nav>
  );
}


function App() {



    const [message, setMessage] = useState([]);
    const [showModal, setShowModal] = useState(false);

   const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  useEffect(() => {
    fetch('/hello')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <Container fluid>
      <TopBar>
      </TopBar>
         <Sidebar/>
      <Row>
        <Col>
                </Col>
        <Col sm={10} md={9} lg={10}>
          <Row>
            <Col>
                <SQL showModal={showModal} handleClose={handleClose} />
                //여기가 캔버스
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
