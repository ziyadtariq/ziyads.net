import React from 'react';
import { Grid } from 'react-bootstrap';
import Intro from './Intro';
import Tools from './Tools';
import Services from './Services';
import Footer from './Footer';
import ContactForm from './ContactForm';

function Home(props) {
  return (
    <Grid fluid>
      <Intro/>
      <Tools/>
      <Services/>
      <ContactForm/>
      <Footer/>
    </Grid>
  );
}

export default Home;