import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Intro from './Intro';
import Tools from './Tools';
import Services from './Services';
import Footer from './Footer';
import ContactForm from './ContactForm';

export default class Home extends Component {
  render() {
    return (
        <Grid fluid>
            <Intro/>
            <Tools/>
            <Services/>
            <ContactForm/>
            <Footer/>
        </Grid>
    )
  }
}
