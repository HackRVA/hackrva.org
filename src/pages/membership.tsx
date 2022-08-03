import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { PayPalButton } from "react-paypal-button-v2";

import styles from './index.module.css';
import Locator from '../components/Locator';
import MembershipSteps from '../components/MembershipSteps';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Become A Member</h1>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

function MembershipExplanation(): JSX.Element {
  return (
    <div className="container">
      <h1>Subscription</h1>
      <p>
        We currently use subscription services through PayPal which gives members the ability to
        easily manage their own membership. Please contact us for an alternate method if you are
        unable to use PayPal.
      </p>
      <br />
      <ul className="no-bullets">
        <li>
          <strong>Standard:</strong> 24/7 building access + 1 parking pass – $35/month
        </li>
        <li>
          <strong>Premium:</strong> 24/7 building access + 1 parking pass + onsite storage container – $50/month
        </li>
      </ul>

    </div>
  )
}

function OnboardingDescription(): JSX.Element {
  return (
    <div className="container">
      <h1>Onboarding</h1>
      <p>
        We have open house events announced on MeetUp and Facebook. If you can’t make it for those,
        send us an email at info@hackrva.org and we can arrange a tour. New members must be
        on-boarded (set up RFID access, given parking pass and review membership agreement,
        safety rules, supply locations, etc) before they can gain entry to the space. When you decide to join,
        contact us at info@hackrva.org and we can arrange on-boarding procedures for you. We have no paid
        staff and manage this in our spare time so please be patient with us.
      </p>
      <br />
      <strong>
        You should wait until you have gone through this process before setting up a membership subscription in PayPal so you don’t pay before your membership is active.
      </strong>
    </div>
  )
}

const paypalButtonsRawHTML = `
<div>
<script src="https://www.paypal.com/sdk/js?client-id=ATa_wug0C9pxWoVpedyzVd6_oR30_nP_0l6H9JO4xekeGkuDPn3FWGwnjpUpLLxyQMVDWjJr8IHDZMfo&amp;vault=true&amp;intent=subscription&amp;disable-funding=credit,card" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          'plan_id': 'P-6VF70733P87878006MA67KCI'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID);
      }
  }).render('#paypal-button-container');
  
    paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          'plan_id': 'P-3AS319493S062904LMA67KNY'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID);
      }
  }).render('#premium-paypal-button-container');
</script>
<div id="btns-container">
  <div class="ppal-btn">
    <div class="membership-label">
      Standard $35
    </div>
    <div id="paypal-button-container"></div>  
  </div>
  
<div id="a-dumb-space">

</div>

<div class="ppal-btn">
    <div class="membership-label">
      Premium $50
     </div>
     <div id="premium-paypal-button-container"></div>  
  </div>
</div>
</div>
`
function SubscriptionButtons(): JSX.Element {
  return (
    <div className="container">
      <div className="content" dangerouslySetInnerHTML={{__html: paypalButtonsRawHTML}}></div>
      <div className={styles.paypalButtonContainer}>
        <PayPalButton
          amount="$35"
          shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
          }}
        />
        <PayPalButton
          amount="$50"
          shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
          }}
        />
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Join ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <br />
        <MembershipSteps />
        <br />
        <OnboardingDescription />
        <br />
        <MembershipExplanation />
        <SubscriptionButtons />
        <br />
      </main>
      <Locator />
    </Layout>
  );
}
