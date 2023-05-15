import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import "./styles.module.css"
import styles from "./styles.module.css"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function createSubscription(planID) {
  return function (data, actions) {
    return actions.subscription.create({
      plan_id: planID
    });
  }
}

function onSuccess(details, data) {
  alert("Transaction completed by " + details.payer.name.given_name);

  // OPTIONAL: Call your server to save the transaction
  // return fetch("/paypal-transaction-complete", {
  //   method: "post",
  //   body: JSON.stringify({
  //     orderID: data.orderID
  //   })
  // });
}

function PButton({ label, planID }) {
  return <div className={styles.paypalButton}>
    <div className={styles.membershipLabel}>
      {label}
    </div>
    <div>
      <PayPalButton
        style={{
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        }}
        options={{
          clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
          vault: true,
          disableFunding: "credit,card",
          intent: "subscription",
        }}

        createSubscription={createSubscription(planID)}
        onSuccess={onSuccess}
      />
    </div>
  </div>
}


export default function ({hide}) {
  const {siteConfig} = useDocusaurusContext();
  console.log("hide value", hide)
  if (!siteConfig.customFields.REACT_APP_PAYPAL_PLAN_ID_39) {
    return <div className={hide === true ? styles.paypalButtonGroupHide : styles.paypalButtonGroup }>paypal buttons could not be loaded</div>
  }
  return (
    <div className={hide === true ? styles.paypalButtonGroupHide : styles.paypalButtonGroup }>
      <PButton planID={siteConfig.customFields.REACT_APP_PAYPAL_PLAN_ID_39} label="Standard $39" />
      <PButton planID={siteConfig.customFields.REACT_APP_PAYPAL_PLAN_ID_50} label="Premium $50" />
      <PButton planID={siteConfig.customFields.REACT_APP_PAYPAL_PLAN_ID_35} label="Storage Locker $35" />
    </div>
  );
}
