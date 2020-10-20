import React from "react";
import DashBoard from "../DashBoard/DashBoard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CovidContextProvider from "../../contexts/CovidContext";

function App(): JSX.Element {
    return (
        <CovidContextProvider>
            <Header />
            <DashBoard />
            <Footer />
        </CovidContextProvider>
    );
}

export default App;
