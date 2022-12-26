// react libraries
import React from "react";

// containers
import { Blog, Features, Footer, Header } from "./containers";

// components
import { Brand, CTA, Navbar } from "./components";

// srtyles
import "./app.css";

// main app component
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
