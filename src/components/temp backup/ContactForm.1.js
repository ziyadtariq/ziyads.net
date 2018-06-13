import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl,HelpBlock, Button} from 'react-bootstrap';
import validator from 'validator';

export default class ContactForm extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            fields: {
                name: '',
                email: '',
                message: ''
            },
            errors: {
                nameError: '',
                emailError: '',
                messageError: ''
            }
        };
    }

    getNameValidationState() {
        const name = this.state.fields.name;

        if(name) {
            const status = validator.matches(name, /^[a-zA-Z][a-zA-Z \-']+$/g)? 'success': 'error';
            return status;
        } return null;
    }
    getEmailValidationState() {
        const email = this.state.fields.email;

        if(email) {
            const status = validator.isEmail(email)? 'success': 'error';
            return status;
        }  return null;
    }
    getMessageValidationState() {
        const message = this.state.fields.message;

        if(message) {
            const status = validator.matches(message, /^[a-zA-Z][a-zA-Z0-9 \-'",;.?\n\t\r]+$/g)? 'success': 'error';
            return status;
        }  return null;
    }
  
    
// handleChange, input errors checking and updating state
    handleChange(e) {
        const inputId = e.target.id;
        const inputVal = e.target.value;
        const inputLength = e.target.value.length;
        switch (inputId) {
            case "nameInput":
                const nameCheck = validator.matches(inputVal, /^[a-zA-Z][a-zA-Z \-']+$/g );

                if (inputLength == 0) {
                    this.setState(() => {
                        return {
                            fields: {
                                name: inputVal,
                            },
                            errors: {
                                nameError: ''
                            }
                        }
                    });
                } else if (nameCheck && inputLength !=0 ) {
                    this.setState(() => {
                        return {
                            fields: {
                                name: inputVal,
                            },
                            errors: {
                                nameError: ''
                            }
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            fields: {
                                name: inputVal,
                            },
                            errors: {
                                nameError: 'Please start with a letter, then only letters or spaces and - \' characters if any.'
                            }
                        }
                    })
                }
                break;

            case "emailInput":
                const emailCheck = validator.isEmail(inputVal);

                if (inputLength == 0) {
                    this.setState(() => {
                        return {
                            fields: {
                                email: inputVal
                            },
                            errors: {
                                emailError: ''
                            }
                        }
                    });
                } else if (emailCheck && inputLength !=0 ) {
                    this.setState(() => {
                        return {
                            fields: {
                               email: inputVal
                            },
                            errors: {
                                emailError: ''
                            }
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            fields: {
                               email: inputVal
                            },
                            errors: {
                                emailError: 'Please complete a valid email address.'
                            }
                        }
                    })
                }
                break;

            case "messageInput":
                const messageCheck = validator.matches(inputVal, /^[a-zA-Z][a-zA-Z0-9 \-'",;.?\n\t\r]+$/g);

                if (inputLength == 0) {
                    this.setState(() => {
                        return {
                            fields: {
                                message: inputVal
                            },
                            errors: {
                                messageError: ''
                            }
                        }
                    });
                } else if (messageCheck && inputLength !=0 ) {
                    this.setState(() => {
                        return {
                            fields: {
                                message: inputVal
                            },
                            errors: {
                                messageError: ''
                            }
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            fields: {
                                message: inputVal
                            },
                            errors: {
                                messageError: 'Please start with a letter, then letters numbers and/or spaces and -\'?",;. characters if any.'
                            }
                        }
                    })
                }
                break;
            default:
                console.log("Start typing");
                break;
        }
    }

// handleSubmit, clearing state and input fields
    handleSubmit(e) {
        e.preventDefault();

        //submitting data
        alert("Form Submitted with the name "+ this.state.fields.name);
        
        //clearing input fields
        e.target.nameInput.value = "";
        e.target.emailInput.value = "";
        e.target.messageInput.value = "";
       
        //clearing state
        this.state = {
            fields: {
                name: '',
                email: '',
                message: ''
            },
            errors: {
                nameError: '',
                emailError: '',
                messageError: ''
            }
        };

    }
    

    
    render() {
      return (
        <Row className="show-grid grey-bg row-padding" id="contact">
            <Col xs={12}>         
            <div>
                <div className="section-header">
                    <h1>Say Hi!</h1>
                </div>
                <div className="section-content">
                    <p>For any more information or questions please send few lines and I will reply very soon.</p>
                </div>
                <p>Name is {this.state.fields.name}</p>
                <p>Email is {this.state.fields.email}</p>
                <p>Message is {this.state.fields.message}</p>
            </div>
            </Col>
            <Col xsHidden sm={6}>
                <div id="mapsPlaceHolder"><p>Map Place Holder</p></div>
            </Col>  
            <Col xs={12} sm={6}>  
                <form onSubmit={this.handleSubmit}>
                
                    <FormGroup
                    controlId="nameInput"
                    validationState={this.getNameValidationState()}
                    >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Name here"
                        required
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>{this.state.errors.nameError}</HelpBlock>
                    </FormGroup>

                    <FormGroup
                    controlId="emailInput"
                    validationState={this.getEmailValidationState()}
                    >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        placeholder="Email here"
                        required
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{this.state.errors.emailError}</HelpBlock>
                    </FormGroup>
                    
                    <FormGroup 
                    controlId="messageInput"
                    validationState={this.getMessageValidationState()}
                    >
                        <ControlLabel>Message</ControlLabel>
                        <FormControl 
                        componentClass="textarea" 
                        placeholder="Message here" 
                        rows="5"
                        required
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <HelpBlock>{this.state.errors.messageError}</HelpBlock>

                    <Button bsStyle="info" type="submit">Send</Button>
                </form>
            </Col>            
        </Row>
      );
    }
}