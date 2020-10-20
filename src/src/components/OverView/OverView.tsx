import React, { useContext } from "react";
import { Card, CardDeck } from "react-bootstrap";
import CountUp from "react-countup";
import { CovidContext } from "../../contexts/CovidContext";
import style from "./OverView.module.css";

const OverView: React.FC = () => {
    const { dailyDataByCountry } = useContext(CovidContext);
    const latest = dailyDataByCountry[dailyDataByCountry.length - 1];

    return (
        <div className="my-5">
            <h2>Overview</h2>
            <CardDeck>
                <Card className={style.confirmed}>
                    <Card.Header>Total Confirmed</Card.Header>
                    <Card.Body>
                        <Card.Title className={style.title}>
                            <CountUp
                                start={0}
                                end={latest.Confirmed}
                                duration={1}
                                separator=","
                            />
                        </Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.recovered}>
                    <Card.Header>Total Recovered</Card.Header>
                    <Card.Body>
                        <Card.Title className={style.title}>
                            <CountUp
                                start={0}
                                end={latest.Recovered}
                                duration={1}
                                separator=","
                            />
                        </Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.death}>
                    <Card.Header>Total Deaths</Card.Header>
                    <Card.Body>
                        <Card.Title className={style.title}>
                            <CountUp
                                start={0}
                                end={latest.Deaths}
                                duration={1}
                                separator=","
                            />
                        </Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default OverView;
