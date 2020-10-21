import React from "react";
import { Container } from "react-bootstrap";
import CountryPicker from "../CountryPicker/CountryPicker";
import DailyReport from "../DailyReport/DailyReport";
import MotalityRate from "../MotalityRate/MotalityRate";
import OverView from "../OverView/OverView";
import SummaryTable from "../SummaryTable/SummaryTable";

const DashBoard: React.FC = () => {
    return (
        <Container className="p-3">
            <CountryPicker />
            <OverView />
            <MotalityRate />
            <DailyReport />
            <SummaryTable />
        </Container>
    );
};

export default DashBoard;
