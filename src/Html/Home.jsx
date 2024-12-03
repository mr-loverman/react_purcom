import React from 'react';
import styles from './Home.module.css';
import logo from '../assets/Bms.png';

const Home = () => {
    return (
        <div className={styles.div}>
            <div className={styles.divImg}>
                <img src={logo} className={styles.img}></img>
            </div>

            <div className={styles.divText}>
                <h3 className={styles.h3}>Bulacan Modernized Service</h3>
                <p className={styles.p}>
                    We are a service company that seeks to provide service from schools, to even companies using modernized jeepneys. Not only do we provide service, but we also provide financial security to our very own jeepney drivers by taking the burden of purchasing the modernized jeepneys. With this strategy, we hope to ease the difficulty of commuting for students and even worker alike.

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </p>
            </div>
        </div>
    );
};

export default Home;