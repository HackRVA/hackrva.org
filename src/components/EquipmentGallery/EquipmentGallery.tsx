import React from 'react';
import Gallery from 'react-photo-gallery';
import styles from './styles.module.css';

export default function (props): JSX.Element {
    return <div className={styles.container}>
        <div className={styles.listContainer}>
            <h1 className="text-center">{props.title}</h1>
            <ul className={styles.noBullets}>
                {
                    props.equipment.map(x => {
                        return <li>{x}</li>
                    })
                }
            </ul>
            <a href={props.fullListURL}>Full List</a>
        </div>
        <div className="container">
            <Gallery photos={props.photos}/>
        </div>
    </div>
}
