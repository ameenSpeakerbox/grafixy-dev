import './src/style/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Script } from 'gatsby';
import React from 'react'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`,
  );

  if (answer === true) {
    window.location.reload();
  }
};

export const registerServiceWorker = () => true;

export const wrapPageElement = ({ element }) => (
  <>
    <Script
      src="https://js.chargebee.com/v2/chargebee.js"
      data-cb-site="speakerbox"
    />
    {element}
  </>
);
