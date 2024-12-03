import React, { useState } from 'react';
import Button from '../Buttons/Button.jsx';
import styles from './Headers.module.css';
import About from '../Html/About.jsx';
import Home from '../Html/Home.jsx';
import Contact from '../Html/Contact.jsx';
import francis from '../assets/Francis.jpg';
import jj from '../assets/jj.jpg';
import godwin from '../assets/godwin.jpg';
import kim from '../assets/kim.jpg';
import logo from '../assets/Bms.png';
import Footer from '../Footer/Footer.jsx'


function Header() {

    const [components, setActiveComponent] = useState([<Home></Home>]);
    
    const handleSetAbout = () => {
      setActiveComponent(<About key="about" />); // Set About component
  };

  const handleSetHome = () => {
      setActiveComponent(<Home key="home" />); // Set Home component
  };

    const handleSetContact = () => {
      setActiveComponent(<Contact key="contact" />); // Set Home component
  };

  const handleSetAuthors = () => {
    setActiveComponent(
      <>

        <div className={styles.cardDiv}>

          <div className={styles.containerText}>
            <img src={kim} className={styles.imageLeft}></img>
            <div className={styles.textDivRight}>
              <h3>Kim Vincent T. Reyes</h3>

              <p>College student at Dr. Yanga's Colleges Inc <br></br>
                taking the course of Bachelors in Computer Engineering
              </p>
            </div>
          </div>

          <div className={styles.containerReverse}>
            <img src={francis} className={styles.imageRight}></img>
            <div className={styles.textDivLeft}>
              <h3>Francis Danielle B. Ardona</h3>

              <p>College student at Dr. Yanga's Colleges Inc <br></br>
                taking the course of Bachelors in Computer Engineering
              </p>
            </div>
          </div>

          <div className={styles.containerText}>
            <img src={godwin} className={styles.imageLeft}></img>
            <div className={styles.textDivRight}>
              <h3>Godwin D. Cristobal</h3>

              <p>College student at Dr. Yanga's Colleges Inc <br></br>
                taking the course of Bachelors in Computer Engineering
              </p>
            </div>
          </div>

          <div className={styles.containerReverse}>
            <img src={jj} className={styles.imageRight}></img>
            <div className={styles.textDivLeft}>
              <h3>John Joseph R. Teodoro</h3>

              <p>College student at Dr. Yanga's Colleges Inc <br></br>
                taking the course of Bachelors in Computer Engineering
              </p>
            </div>
          </div>

        </div>
      </>
    ); // Set Authors component (with Card components)
  };


    return (
        <>
          <div className={styles.header}>
              <Button key='homeButton' onClick={handleSetHome} label="Home"></Button>
              <Button key='aboutButton' onClick={handleSetAbout} label="About"></Button>
              <Button key='authorsButton' onClick={handleSetAuthors} label="Founders"></Button>
              <Button key='contactButton' onClick={handleSetContact} label="Contact"></Button>

              <a className={styles.logoDiv} onClick={handleSetHome}>
                <img src={logo} className={styles.logo}></img>
                <h4>Bulacan Modernized <br></br> Service</h4>
              </a>
  
          </div>

          {/* Dynamic components will be rendered here */}
          <div key='divContainer' className={styles.container}>
            {components}
          </div>

          <Footer></Footer>
      </>
    );
};

export default Header;