import React from 'react';
import Footer from '@theme-original/Footer';
import Locator from '../../components/Locator'
import Promotions from '@site/src/components/Promotions';
import PaypalButtons from '@site/src/components/PaypalButtons';

// placing paypal buttons here in a hidden state because paypal has some weird 
// way to load in their button scripts.
// if we don't do this, the first time we navigate to the join page, all the buttons do not render
function PaypalButtonsFix() {
  return <PaypalButtons hide />
}

export default function FooterWrapper(props) {
  return (
    <>
      <div>
        <Promotions />
        <PaypalButtonsFix />
      </div>
      <Locator />
      <Footer {...props} />
    </>
  );
}
