import React, { useEffect, useState } from "react";
import { isBrowser, isMobileSafari, useWindowSize } from "../../lib/healpers";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { height : windowHeight } = useWindowSize()

  const [lockHeight, setLockHeight] = useState(false);
  
  const hasChin = isMobileSafari()

  useEffect(() => {
    if((isBrowser && !lockHeight) || !hasChin) {
      document.body.style.setProperty('--vh', `${windowHeight * 0.01}px`)
      setLockHeight(hasChin)
    }
    
  }, [windowHeight, hasChin]);
  
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
