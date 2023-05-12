import React from 'react';
import OpenHouseAd from "./OpenHouse"
import MonthlyMeeting from './MonthlyMeeting';
import styles from  './styles.module.css';
import UpcomingEvents from '../UpcomingEvents';

export default function (): JSX.Element {
    return (
        <>
            <div className={styles.adBanner}>
                <OpenHouseAd />
                <MonthlyMeeting />
                <UpcomingEvents />
            </div>
        </>
    )
}
