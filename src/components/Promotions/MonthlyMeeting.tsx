import React from 'react';
import styles from './styles.module.css';

export default function (): JSX.Element {
    return (
        <div className={styles.adContainer}>
            <div>
                <h1>
                    Monthly Member Meeting
                </h1>
                <img src="img/member_meeting.png"></img>
                <p></p>
            </div>
        </div>
    )
}
