import React, { useEffect, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { isBrowser, isMobileSafari, useWindowSize } from "../../lib/healpers";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { height: windowHeight } = useWindowSize();

  const [lockHeight, setLockHeight] = useState(false);

  const hasChin = isMobileSafari();

  useEffect(() => {
    if ((isBrowser && !lockHeight) || !hasChin) {
      document.body.style.setProperty("--vh", `${windowHeight * 0.01}px`);
      setLockHeight(hasChin);
    }
  }, [windowHeight, hasChin]);

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

export default Layout;
