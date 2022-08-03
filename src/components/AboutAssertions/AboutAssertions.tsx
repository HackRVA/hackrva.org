import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.whatWeAreWrapper}>
            <div className={styles.checkedWrapper} >
              <div className={styles.whatWeAreHeader}>
                <h1>We are...</h1>
              </div>
              <ul>
                <li><i aria-hidden="true" className="fas fa-check" ></i>a 100% volunteer run makerspace</li>
                <li><i aria-hidden="true" className="fas fa-check" ></i>A community workshop</li>
                <li><i aria-hidden="true" className="fas fa-check" ></i>A 501c3 Non-Profit Organization</li>
                <li><i aria-hidden="true" className="fas fa-check" ></i>Enthusiastically open-ended and open-minded</li>
                <li><i aria-hidden="true" className="fas fa-check" ></i>Education & Interest Group Focused</li>
              </ul>
            </div>
            <div>
              <div className={styles.exWrapper}>
                <div className={styles.whatWeAreHeader}>
                  <h1>We are NOT...</h1>
                </div>
                <ul>
                  <li><i aria-hidden="true" className="fas fa-times" ></i>
                    A fablab or for-profit business
                    <p>We are not focused on re-creating, fabricating, or finishing an idea for anyone.</p>
                  </li>
                  <li><i aria-hidden="true" className="fas fa-times" ></i>
                    An incubator
                    <p>While some of our members maybe interested in your business opportunity, our organization does not operate in that type of collective manner.</p>
                  </li>
                  <li><i aria-hidden="true" className="fas fa-times" ></i>
                    A tool rental business
                    <p>Tools are not allowed to leave HackRVA Property</p>
                  </li>
                  <li><i aria-hidden="true" className="fas fa-times" ></i>
                    a fully staffed operation
                    <p>Response time varies and Machine downtime is possible. Active members help keep things running smoothly.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
