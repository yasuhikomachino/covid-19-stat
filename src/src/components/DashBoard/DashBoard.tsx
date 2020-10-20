import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CovidContext } from "../../contexts/CovidContext";
import CountryPicker from "../CountryPicker/CountryPicker";
import DailyReport from "../DailyReport/DailyReport";
import MotalityRate from "../MotalityRate/MotalityRate";
import OverView from "../OverView/OverView";

const DashBoard: React.FC = () => {
    const { fetchDailyDataByCountry } = useContext(CovidContext);

    useEffect(() => {
        fetchDailyDataByCountry("japan");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
