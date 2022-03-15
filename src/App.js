import "./App.css";
import Home from "./components/Home";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ServiceDetails from "./components/ServiceDetails";
import ContactUs from "./components/ContactUs";
import CaseStudy from "./components/CaseStudy";
import CaseStudyDetails from "./components/CaseStudyDetails";
import MediationDetails from "./components/case study details/MediationDetails";
import PizzaDelivery from "./components/case study details/PizzaDelivery";
import Portfolio from "./components/Portfolio";
import DataManagement from "./components/case study details/DataManagement";
import AssetsManagement from "./components/case study details/AssetsManagement";
import MessagingApp from "./components/case study details/MessagingApp";
import ErrorPage from "./components/ErrorPage";

import swDev from "./swDev";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/case-study" element={<CaseStudy />}></Route>
        <Route path="/casestudy-details" element={<CaseStudyDetails />}></Route>
        <Route path="/service-details" element={<ServiceDetails />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>

        <Route path="/mediation-details" element={<MediationDetails />}></Route>
        <Route
          path="/pizza-delivery-details"
          element={<PizzaDelivery />}
        ></Route>
        <Route
          path="/datamanagement-details"
          element={<DataManagement />}
        ></Route>
        <Route
          path="/assets-management-details"
          element={<AssetsManagement />}
        ></Route>
        <Route path="/messaging-app-details" element={<MessagingApp />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
swDev();
export default App;
