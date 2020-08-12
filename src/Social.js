import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCaretSquareDown}  from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css'

import { SocialMediaIconsReact } from 'social-media-icons-react';

const links = [
    'https://vk.com/kanskvideo',
    'https://www.facebook.com/kanskfest/',
    'https://www.instagram.com/kansk_fest/'
];

class Social extends React.Component {

    render() {
        return (
            <Container>
                <Navbar className="" id="socialNav" expand="md">
                    <Container >
                        <Navbar.Brand className="js-scroll-trigger">Смотрите нас на:</Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler-right text-uppercase font-weight-bold 
                        bg-primary 
                        text-white rounded" type="button" 
                        data-toggle="collapse" data-target="#socialNav" 
                        aria-controls="navbarResponsive" aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faCaretSquareDown} />
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav" id="navbarResponsive">
                            <Nav className="mr-auto">
                                <Nav.Item className="mx-0 mx-lg-1">
                                    <SocialMediaIconsReact icon="vk"
                                        url="https://vk.com/kanskvideo"
                                        borderColor="rgba(0,0,0,0.25)"
                                        borderWidth="5"
                                        borderStyle="solid"
                                        iconColor="rgba(255,255,255,1)"
                                        backgroundColor="rgba(5,5,5,1)"
                                        iconSize="5" roundness="50%"
                                        size="50" className="px-2" />
                                </Nav.Item>
                                <Nav.Item className="mx-0 mx-lg-1">
                                    <SocialMediaIconsReact icon="instagram"
                                        url="https://www.instagram.com/kansk_fest/"
                                        borderColor="rgba(0,0,0,0.25)"
                                        borderWidth="5"
                                        borderStyle="solid"
                                        iconColor="rgba(255,255,255,1)"
                                        backgroundColor="rgba(5,5,5,1)"
                                        iconSize="5" roundness="50%"
                                        size="50" className="px-2" />
                                </Nav.Item>
                                <Nav.Item className="mx-0 mx-lg-1">
                                    <SocialMediaIconsReact icon="facebook"
                                        url="https://www.instagram.com/kansk_fest/"
                                        borderColor="rgba(0,0,0,0.25)"
                                        borderWidth="5"
                                        borderStyle="solid"
                                        iconColor="rgba(255,255,255,1)"
                                        backgroundColor="rgba(5,5,5,1)"
                                        iconSize="5" roundness="50%"
                                        size="50" className="px-2" />
                                </Nav.Item>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container >
        )
    }
}
export default Social
