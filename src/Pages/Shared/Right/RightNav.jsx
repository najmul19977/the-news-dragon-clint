import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGooglePlusG, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzoon from '../Qzoon/Qzoon';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h3>Login With </h3>
            <Button className='mb-2' variant="outline-primary"><FaGooglePlusG /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login With  Github</Button>
            <div>
                <h4 className='mt-4 mb-2'>Find us on</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                       <FaFacebookF/> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                    <FaTwitter/>Twitter
                    </ListGroup.Item>
                    <ListGroup.Item as="li" disabled>
                        <FaInstagram/>Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzoon></Qzoon>
            <div>
                <img src={bg} alt=""/>
                
                
            </div>
        </div>
    );
};

export default RightNav;