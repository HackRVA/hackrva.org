import React from 'react';
import styles from './styles.module.css';
// import openHouseImage

export default function (): JSX.Element {
    return (
        <div className={styles.adContainer}>
            <div>
                <h1>Attend Our Open House</h1>
                <img alt="Open House Image" src="img/open_house.png"></img>
                <p>Open Houses every Thursday 7pm-9pm,
                    arrive anytime, take a tour and learn more about HackRVA.</p>
            </div>
        </div>
    )
}
