import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BreakCarosoul from '../../BreakCarosoul/BreakCarosoul';
import { AuthContext } from '../../../UserContext/UserContext';

const RightSide = () => {
    const { user, LogOut, signIn } = useContext(AuthContext);
    const handleToSignInwithGoogle = () => {
        signIn()
            .then(result => console.log("successfully logged in "))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {
                (!user?.uid) && <ButtonGroup vertical className='mb-2'>
                    <Button onClick={handleToSignInwithGoogle} variant="outline-primary"><FaGoogle /> Login wih Google</Button>
                    <Button variant="outline-dark"><FaGithub /> Login with Github</Button>

                </ButtonGroup>
            }

            <div>
                <h4>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item className='my-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='my-2'><FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='my-2'><FaTwitch /> Twitch</ListGroup.Item>

                </ListGroup>
            </div>
            <div>

                <BreakCarosoul></BreakCarosoul>
            </div>
        </div>
    );
};

export default RightSide;