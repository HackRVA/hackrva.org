import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import "./styles.module.css"
import styles from "./styles.module.css"

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

export default function () {
  return (
    <div className={styles.paypalButtonGroup}>
      <PButton planID={process.env.REACT_APP_PAYPAL_PLAN_ID_39} label="Standard $39" />
      <PButton planID={process.env.REACT_APP_PAYPAL_PLAN_ID_50} label="Premium $50" />
      <PButton planID={process.env.REACT_APP_PAYPAL_PLAN_ID_35} label="Storage Locker $35" />
    </div>
  );
}
