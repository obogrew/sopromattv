import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js'
import 'video.js/dist/video-js.css'
import 'videojs-chromecast/dist/videojs-chromecast.css'
import Social from './Social.js'
import Sponsors from './Sponsors.js'
import Share from './Share.js'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import EventPlan from './EventPlan.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faBars}  from '@fortawesome/free-solid-svg-icons';

function App() {
	const videoJsOptions = {
  autoplay: true,
  controls: true,
  fluid: true,
  aspectRatio: '9:16',
  responsive: true,
  breakpoints: {
  tiny: 300,
  xsmall: 400,
  small: 500,
  medium: 600,
  large: 700,
  xlarge: 800,
  huge: 900
},
  sources: [{
    src: 'https://wowza.istranet.ru:1936/freecams/sopromattv/playlist.m3u8',
    type: 'application/x-mpegURL'
  },
  {
    src: 'https://wowza.istranet.ru:1936/freecams/sopromattv/Manifest',
    type: 'video/mp4'
  },
  {
    src: 'https://wowza.istranet.ru:1936/freecams/sopromattv/manifest.mpd',
    type: 'application/dash+xml'
  }],
  chromecast:{
     appId:'Sopromat.tv'
  },
  controlBar: {
    playToggle: true,
    captionsButton: false,
    chaptersButton: false,            
    subtitlesButton: false,
    remainingTimeDisplay: true,
    progressControl: {
      seekBar: false
    },
    fullscreenToggle: true,
    playbackRateMenuButton: false,
  },
}
  return (
    
    <div className="App">
      <Navbar className="bg-secondary text-uppercase" id="mainNav" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="js-scroll-trigger">Sopromat.tv</Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" id="navbarResponsive">
            <Nav className="mr-auto">
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link href="" className="py-3 px-0 px-lg-3 rounded js-scroll-trigger">Ru</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link href="" className="py-3 px-0 px-lg-3 rounded js-scroll-trigger">En</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main class="mt-5">

        <Row className="mt-5">
          <Col sm="0" md="1" lg="2"></Col>
          <Col sm="12" md="10" lg="8">
            <Container fluid="true">
              <Social />
              <VideoPlayer {...videoJsOptions} />
              <h3>Программа:</h3>
              <EventPlan />
            </Container>
          </Col>
          <Col sm="0" md="1" lg="2"></Col>
        </Row>
        <Row className="">
          <Col></Col>
          <Col sm="10" xs="12">
            <h3>Наши друзья и партнеры:</h3>
            <Sponsors />
          </Col>
          <Col></Col>
        </Row>
      </main>
    </div>

  );
}

export default App;
