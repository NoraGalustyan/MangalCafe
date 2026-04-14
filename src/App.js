// App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import PhoneButton from "./components/PhoneButton";
import About from "./sections/About";
import Menu from "./sections/Menu";
import WhyUs from "./sections/WhyUs";
import Gallery from "./sections/Gallery";
import Delivery from "./sections/Delivery";
import Contacts from "./sections/Contacts";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Gallery />
        <Menu />
        <WhyUs />
        <Delivery />
        {/* <Contacts /> */}
      </main>
      <PhoneButton />
      <ScrollButton />
      <Footer />
    </>
  );
}
export default App;
