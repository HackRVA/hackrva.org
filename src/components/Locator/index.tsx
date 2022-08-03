import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function OpenHouseAd(): JSX.Element {
    return (
        <div className={styles.openHouseAd}>
            <div className='container'>
                <h1>Attend Our Open House</h1>
                <p>Join us for Open house on Thursdays at 7pm </p>
            </div>
        </div>
    )
}

export default function Locator(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <>
            <OpenHouseAd />
            <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1600%20E%20Roseneath%20Rd%20Richmond,%20va%2023231+(HackRVA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <div class="container-fluid mx-sm-5"></div>
        </>
    );
}
