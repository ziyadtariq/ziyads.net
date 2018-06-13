import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl,HelpBlock, Button} from 'react-bootstrap';
import validator from 'validator';

export default class ContactForm extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
                name: '',
                email: '',
                message: '',
                nameError: '',
                emailError: '',
                messageError: ''
        };
    }

// input validation
    getNameValidationState() {
        const name = this.state.name;

        if(name) {
            const status = validator.matches(name, /^[a-zA-Z][a-zA-Z \-']+$/g)? 'success': 'error';
            return status;
        } return null;
    }
    getEmailValidationState() {
        const email = this.state.email;

        if(email) {
            const status = validator.isEmail(email)? 'success': 'error';
            return status;
        }  return null;
    }
    getMessageValidationState() {
        const message = this.state.message;

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

                if (inputLength === 0) {
                    this.setState(() => {
                        return {
                            name: inputVal,
                            nameError: ''
                        }
                    });
                } else if (nameCheck && inputLength !==0 ) {
                    this.setState(() => {
                        return {
                            name: inputVal,
                            nameError: ''
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            name: inputVal,
                            nameError: 'Please start with a letter, then only letters or spaces and - \' characters if any.'
                        }
                    })
                }
                break;

            case "emailInput":
                const emailCheck = validator.isEmail(inputVal);

                if (inputLength === 0) {
                    this.setState(() => {
                        return {
                            email: inputVal,
                            emailError: ''
                        }
                    });
                } else if (emailCheck && inputLength !==0 ) {
                    this.setState(() => {
                        return {
                            email: inputVal,
                            emailError: ''  
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            email: inputVal,
                            emailError: 'Please complete a valid email address.'
                        }
                    })
                }
                break;

            case "messageInput":
                const messageCheck = validator.matches(inputVal, /^[a-zA-Z][a-zA-Z0-9 \-'",;.?\n\t\r]+$/g);

                if (inputLength === 0) {
                    this.setState(() => {
                        return {
                            message: inputVal,
                            messageError: ''
                        }
                    });
                } else if (messageCheck && inputLength !==0 ) {
                    this.setState(() => {
                        return {
                            message: inputVal,
                            messageError: ''
                        }
                    });
                } else {
                    this.setState(() => {
                        return {
                            message: inputVal,
                            messageError: 'Please start with a letter, then letters numbers and/or spaces and -\'?",;. characters if any.'
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
        alert("Form Submitted with the name "+ this.state.name.toUpperCase());
        
        //clearing input fields
        e.target.nameInput.value = "";
        e.target.emailInput.value = "";
        e.target.messageInput.value = "";
       
        //clearing state
        this.setState(() => {
            return {
                name: '',
                email: '',
                message: '',
                nameError: '',
                emailError: '',
                messageError: ''
            }
        });
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
                    <HelpBlock>{this.state.nameError}</HelpBlock>
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
                    <HelpBlock>{this.state.emailError}</HelpBlock>
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
                    <HelpBlock>{this.state.messageError}</HelpBlock>

                    <Button bsStyle="info" type="submit">Send</Button>
                </form>
            </Col>            
        </Row>
      );
    }
}