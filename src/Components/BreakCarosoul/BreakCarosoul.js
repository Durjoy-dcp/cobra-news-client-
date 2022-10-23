import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ss1 from '../../assests/ss1.png';
import ss2 from '../../assests/ss2.png';
const BreakCarosoul = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ss1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ss2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BreakCarosoul;