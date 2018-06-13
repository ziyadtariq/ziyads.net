import React, {Component} from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
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
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-html5.png" alt="logo-html5">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-css3.png" alt="logo-css3">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-sass.png" alt="logo-sass">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-js.png" alt="logo-js">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-bootstrap.png" alt="logo-bootstrap">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-jquery.gif" alt="logo-jquery">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-babel.jpg" alt="logo-babel">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-reactjs.png" alt="logo-reactjs">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-redux.png" alt="logo-jest">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-webpack.png" alt="logo-jest">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-jest.png" alt="logo-jest">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-git.png" alt="logo-git">
                            </Thumbnail>
                        </div>
                        <div className="tools">
                            <Thumbnail src="images/langtools/logo-github.png" alt="logo-github">
                            </Thumbnail>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}