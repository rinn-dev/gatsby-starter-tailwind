import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
