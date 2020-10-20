import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { CovidContext } from "../../contexts/CovidContext";

const Header: React.FC = () => {
    const { dailyDataByCountry } = useContext(CovidContext);
    const latest = dailyDataByCountry[dailyDataByCountry.length - 1];
    return (
        <Navbar className="border-bottom">
            <Navbar.Brand>COVID-19 STAT</Navbar.Brand>
            <Nav.Item className="ml-auto">
                <span className="text-muted">Last update: {new Date(latest.Date).toDateString()}</span>
            </Nav.Item>
        </Navbar>
    );
};

export default Header;
