import React from 'react';
import { Row, Col} from 'react-bootstrap';

export default function Footer(props) {
    return(
        <Row className="show-grid"  id="footer">
            <Col xs={12}>
                <Row className="social">
                    <Col xs={12}>
                        <div>
                            <a className="fa-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziyads"><i className="fa fa-linkedin-square"></i></a>
                            <a className="fa-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/ziyadsnet"><i className="fa fa-github "></i></a>
                        </div>
                    </Col>
                </Row>
                <Row className="footer">
                    <Col xs={12} >
                        <div>
                            ©2018 ziyads.net
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
  }