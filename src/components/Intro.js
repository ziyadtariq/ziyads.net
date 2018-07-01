import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Intro(props) {
    return(
        <Row className="show-grid row-padding" id="intro">
            <Col xs={12} sm={6}>
                <div id="first-h1">
                    <div className="section-header">
                        <h1>Hi, my name is Ziyad</h1>
                        <h3>Front End Web Developer<br/> and Self Learner.</h3>
                    </div>
                    <div className="section-content">
                        <p>I build the fornt end for web applications using the latest tools and tech.</p>
                        <a className="btn btn-primary" href="#contact" role="button">Hire me!</a>
                    </div>
                </div>
            </Col>
        </Row>
    );
  }