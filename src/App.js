import React, { useState } from "react";
import "./App.css";
import Sessions from "./Components/Sessions";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import IssueFullPage from "./Components/IssueFullPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TeamContainer from "./Components/Team/TeamContainer";
import SponsorsContainer from "./Components/Sponsors/SponsorsContainer";
import { useEffect } from "react";
import MentorCard from "./Components/Panel/MentorCard";
import Panel from "./Components/Panel/Panel";
import Particles from "./Components/Particles";
import Registration from "./Components/Registration";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Swags from "./Components/Swags/Swags";
import Timeline from "./Components/Timeline";
import FAQ from "./Components/FAQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FAQCont from "./Components/FAQCont";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import AddSession from "./Components/AddSession";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Particles />
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <AboutUs />
                        <Timeline />
                        <Organization />
                        <Sessions />
                        <SponsorsContainer />
                        {/* <Registration /> */}
                        <FAQCont/>
                        <TeamContainer />
                        <Contact />
                        <Footer />
                    </Route>
                    <Route exact path={"/swags"}>
                        <Swags />
                    </Route>
                    <Route exact path="/issue">
                        <IssueFullPage />
                    </Route>
                    <Route exact path="/panel">
                        <Panel />
                    </Route>
                    <Route exact path="/FAQs">
                        <FAQ />
                    </Route>
                    <Route exact path="/error">
                        <Error/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
