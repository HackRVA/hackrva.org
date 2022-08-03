import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Locator from '../components/Locator';
import EquipmentGallery from '../components/EquipmentGallery/EquipmentGallery';
import AboutAssertions from '../components/AboutAssertions/AboutAssertions';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About HackRVA</h1>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

function HackerspaceExplanation(): JSX.Element {
  return (
    <div className="container">
      <h1>What is a hackerspace?</h1>
      <p>
        A <a href="https://en.wikipedia.org/wiki/Hackerspace">hackerspace</a> is a community where people with an interest in arts, manufacturing,
        computing and technology can gather to work on projects while sharing ideas,
        equipment, and knowledge
      </p>
      <a href="https://wiki.hackerspaces.org/">wiki.hackerspaces.org</a>
    </div>
  )
}

const electronicsPhotos = [
  {
    src: '/hackrva.org/img/equipment/electronics/2020-02-23-17.10.52.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/electronics/DSC5199-1.jpg',
    width: 2,
    height: 1
  },
];

const electroncsEquipment = [
  "PCB Making Equipment",
  "PCB Making Software",
  "Heat Platen",
  "Solder Reflow Station",
  "Oscilloscopes",
  "Precision Multimeter",
  "Benchtop Power Supplies",
]

const woodshopPhotos = [
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8935-1 (1).jpg',
    width: 4,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8937.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8938.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8939.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8940.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8941.jpg',
    width: 1,
    height: 2
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8946.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8947.jpg',
    width: 1,
    height: 2
  },
  {
    src: '/hackrva.org/img/equipment/woodshop/DSC8954.jpg',
    width: 2,
    height: 1
  },
];

const woodshopEquipment = [
  "Table Saw",
  "Band Saw",
  "Miter Saw",
  "Planer",
  "Jointer",
  "Router Table",
  "Belt Sander",
  "Drum Sander",
  "Sand Blaster",
]

const textilePhotos = [
  {
    src: '/hackrva.org/img/equipment/arts/DSC8870.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/arts/DSC8963.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/arts/DSC8965.jpg',
    width: 2,
    height: 1
  },
  {
    src: '/hackrva.org/img/equipment/arts/IMG_5118.jpg',
    width: 2,
    height: 1
  },
]

const textileEquipment = [
  "Cut Pile Tuft Gun",
  "Loop Pile Tuft Gun",
  "Brother Electroknit KH-910",
  "Singer Stylist 457",
  "3D Doodler",
]

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='container'>
        <br />
        <HackerspaceExplanation />
        <br />
        <AboutAssertions />

        <br />
        <EquipmentGallery
          title="Electronics"
          photos={electronicsPhotos}
          equipment={electroncsEquipment}
          fullListURL="https://wiki.hackrva.org/index.php/Equipment#Electronics_Tools" />
        <br />
        <EquipmentGallery
          title="Textiles"
          photos={textilePhotos}
          equipment={textileEquipment}
          fullListURL="https://wiki.hackrva.org/index.php/Equipment#Arts.2FCrafts" />
        <br />
        <EquipmentGallery
          title="Woodshop"
          photos={woodshopPhotos}
          equipment={woodshopEquipment}
          fullListURL="https://wiki.hackrva.org/index.php/Equipment#Shop_Equipment" />
        <br />

      </main>
      <Locator />
    </Layout>
  );
}
