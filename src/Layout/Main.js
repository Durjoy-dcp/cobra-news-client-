import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Components/Shared/LeftSide/LeftSide';
import RightSide from '../Components/Shared/RightSide/RightSide';
import Footer from '../Components/Shared/Footer/Footer';
import NavHeader from '../Components/Shared/NavHeader/NavHeader';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Container className="mt-3">
                <Row>

                    <Col lg="2">
                        <div className='d-lg-block d-none'>
                            <LeftSide></LeftSide>
                        </div>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSide></RightSide>
                    </Col>
                </Row>


            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;