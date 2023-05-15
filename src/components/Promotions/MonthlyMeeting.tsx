import React from 'react';
import styles from './styles.module.css';

export default function (): JSX.Element {
    return (
        <div className={styles.adContainer}>
            <div>
                <h1>
                    Monthly Member Meeting
                </h1>
                <img alt="Monthly Member Meeting Last wednesday of the month" src="img/member_meeting.png"></img>
                <p></p>
            </div>
        </div>
    )
}
