import React, {Component} from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import langtools from '../langtools.json';
import '../styles/tools.css'

export default class Tools extends Component {
    render() {
        return(
            <Row className="show-grid row-padding" id="tools">
                <Col xs={12}>
                    <div className="section-header">
                        <h1>My Tools</h1>
                    </div>
                    <div className="section-content">
                        <p>I use the latest technology for client-side development, This includes at this time:</p>
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="flex-container">
                        {
                            langtools.map(image=>(
                                <div className="tools" key={image.key}>
                                    <Thumbnail src={`images/langtools/${image.name}`} alt={image.name}>
                                    </Thumbnail>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        )
    }
}