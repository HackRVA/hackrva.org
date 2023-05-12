import React from 'react';
import Footer from '@theme-original/Footer';
import Locator from '../../components/Locator'
import Promotions from '@site/src/components/Promotions';


export default function FooterWrapper(props) {
  return (
    <>
      <div>
        <Promotions />
      </div>
      <Locator />
      <Footer {...props} />
    </>
  );
}
