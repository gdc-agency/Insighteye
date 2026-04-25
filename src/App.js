import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import HomeThree from "./pages/home-3";
import HomeTwo from "./pages/home-2";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/NoPage";
import Blog from './pages/blog';
import BlogDetails from './pages/blog/blog-details';
import BlogStandard from "./pages/blog/blog-standard";
import Team from "./pages/team";
import TeamTwo from "./pages/team/team-2";
import TeamDetails from "./pages/team/team-details";
import Case from "./pages/case";
import CaseDetails from "./pages/case/case-details";
import Faq from "./pages/faq";
import Service from "./pages/service";
import ServiceTwo from "./pages/service/service-2";
import ServiceDetails from "./pages/service/service-details";
import ServiceDetailsTwo from "./pages/service/service-details-2";
import ServiceDetailsThree from "./pages/service/service-details-3";
import ServiceDetailsFour from "./pages/service/service-details-4";
import ServiceDetailsFive from "./pages/service/service-details-5";
import ServiceDetailsSix from "./pages/service/service-details-6";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home-2" element={<HomeTwo />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog-standard" element={<BlogStandard />} />
        <Route path="/blog/blog-details" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/team-2" element={<TeamTwo />} />
        <Route path="/team/team-details" element={<TeamDetails />} />
        <Route path="/case" element={<Case />} />
        <Route path="/case/case-details" element={<CaseDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/service-2" element={<ServiceTwo />} />
        <Route path="/service/service-details" element={<ServiceDetails />} />
        <Route path="/service/service-details-2" element={<ServiceDetailsTwo />} />
        <Route path="/service/service-details-3" element={<ServiceDetailsThree />} />
        <Route path="/service/service-details-4" element={<ServiceDetailsFour />} />
        <Route path="/service/service-details-5" element={<ServiceDetailsFive />} />
        <Route path="/service/service-details-6" element={<ServiceDetailsSix />} />
      </Routes>
    </BrowserRouter>
  );
}
