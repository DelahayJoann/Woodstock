import React from 'react';
import Img1 from './images/img1.png'
import Img2 from './images/img2.png'
import Img3 from './images/team.jpg'


import './App.css';
import Section from './components/Section';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <Jumbotron><NavBar/></Jumbotron>
    <div id="about"></div>
    <Section title="ABOUT US" disposition="right" img={Img1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas et lacinia augue, ut tincidunt eros.
      Duis ultrices pulvinar diam vel vestibulum.
      Integer placerat mi id nunc scelerisque, id lobortis elit pharetra.
      Nullam luctus commodo tristique. Maecenas a auctor magna. Ut eget consequat dolor.
      Mauris dolor libero, cursus sed rutrum aliquam, luctus in dui. Mauris ornare id enim vel rutrum.
      Nullam eget lacinia ligula. Sed interdum fermentum cursus.
    </Section>
    <div id="shop"></div>
    <Section title="SHOP" img={Img2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas et lacinia augue, ut tincidunt eros.
      Duis ultrices pulvinar diam vel vestibulum.
      Integer placerat mi id nunc scelerisque, id lobortis elit pharetra.
      Nullam luctus commodo tristique. Maecenas a auctor magna. Ut eget consequat dolor.
      Mauris dolor libero, cursus sed rutrum aliquam, luctus in dui. Mauris ornare id enim vel rutrum.
      Nullam eget lacinia ligula. Sed interdum fermentum cursus.
    </Section>
    <div id="team"></div>
    <Section title="GOOD MINDSET" titleteam="CREATIVE TEAM" disposition="team" img={Img3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas et lacinia augue, ut tincidunt eros.
      Duis ultrices pulvinar diam vel vestibulum.
      Integer placerat mi id nunc scelerisque, id lobortis elit pharetra.
      Nullam luctus commodo tristique. Maecenas a auctor magna. Ut eget consequat dolor.
      Mauris dolor libero, cursus sed rutrum aliquam, luctus in dui. Mauris ornare id enim vel rutrum.
      Nullam eget lacinia ligula. Sed interdum fermentum cursus.
    </Section>
    <div id="contact"></div>
    <Section title="CONTAC US" disposition="contact">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="text" class="form-control" id="firstname" placeholder="Firstname"/>
          </div>
          <div class="form-group col-md-6">
            <input type="text" class="form-control" id="lastname" placeholder="Lastname"/>
          </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="Email" placeholder="Email"/>
        </div>
        <div class="form-group">
          <textarea class="form-control" name="" id="message" rows="6" placeholder="Message"></textarea>
        </div>
        <button type="submit" class="btn link2">Send</button>
      </form>
    </Section>
  </>
);

export default App;
