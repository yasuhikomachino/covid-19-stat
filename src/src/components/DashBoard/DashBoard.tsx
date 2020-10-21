import React from "react";
import { Container } from "react-bootstrap";
import CountryPicker from "../CountryPicker/CountryPicker";
import DailyReport from "../DailyReport/DailyReport";
import MotalityRate from "../MotalityRate/MotalityRate";
import OverView from "../OverView/OverView";

const DashBoard: React.FC = () => {
    return (
        <Container className="p-3">
            <CountryPicker />
            <OverView />
            <MotalityRate />
            <DailyReport />
        </Container>
    );
};

export default DashBoard;
