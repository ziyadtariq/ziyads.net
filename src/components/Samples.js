import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Samples extends Component {
    render() {
        return(
            <Row className="show-grid row-padding" id="samples">
                <Col xs={12}>
                    <div>
                        <div className="section-header">
                            <h1>Work Samples</h1>
                        </div>
                        <div className="section-content">
                            <p>Here are some work samples showing different technologies in action:</p>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}