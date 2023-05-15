import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const StepsList: FeatureItem[] = [
  {
    title: 'Review Our Terms and conditions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Review Our Membership Agreement',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Contact us with any questions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Step({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* <Image /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function MembershipSteps(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Steps</h1>
        <div className="row">
          {StepsList.map((props, idx) => (
            <Step key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
