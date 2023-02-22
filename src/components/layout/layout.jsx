import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Footer from "./Footer";
import Header from "./Header";
import { Script } from "gatsby";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <TawkMessengerReact
        propertyId="63bfb5b447425128790d012d"
        widgetId="1gmidriej"
      />

      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export const head = () => (
  <Script
    src="https://js.chargebee.com/v2/chargebee.js"
    data-cb-site="speakerbox"
   />
);
export default Layout;
