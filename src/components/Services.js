import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default function Services(props) {
    return(
        <Row className="show-grid grey-bg row-padding" id="services">
            <Col xs={12}>
                <div className="section-header">
                    <h1>My Services</h1>
                </div>
                <div className="section-content">
                    <p>I build, maintain and upgrade the fornt end for websites, making sure always to write clean code.</p>
                </div>
            </Col>
            <Col xs={12}>
                <div className="flex-container">
                    <div className="services" id="srv-dev">
                        <Image src="images/services/web-development.png" alt="Development"/>
                        <h3 >Development</h3>
                    </div>
                    <div className="services" id="mnt-dev">
                    <Image src="images/services/web-maintenance.png" alt="Maintenance"/>
                        <h3>Maintenence</h3>
                    </div>
                    <div className="services" id="upg-dev">
                        <Image src="images/services/web-upgrade.png" alt="Upgrade"/>
                        <h3>Upgrade</h3>
                    </div>
                </div>
            </Col>
        </Row>
    );
  }