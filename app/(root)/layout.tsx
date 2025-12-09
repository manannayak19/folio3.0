import React from "react";
//import Header from "../../components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center">
        {/* mx-auto handles Left/Right centering */}
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
