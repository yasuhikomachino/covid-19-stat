import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { CovidContext } from "../../contexts/CovidContext";

const MotalityRate:React.FC = () => {
    const { dailyDataByCountry } = useContext(CovidContext);
    const latest = dailyDataByCountry[dailyDataByCountry.length - 1];
    const motalityRate = (latest.Deaths * 100) / latest.Confirmed;

    return (
        <div className="my-5">
            <h3>Motality Rate {motalityRate.toFixed(2)} %</h3>
            <Pie
                data={{
                    labels: ["Total Confirmed", "Total Recovered", "Total Deaths"],
                    datasets: [
                        {
                            data: [latest.Confirmed, latest.Recovered, latest.Deaths],
                            borderColor: ["transparent", "transparent", "transparent"],
                            backgroundColor: ["#ddebec", "#bbd898", "#e0e0e0"],
                        },
                    ],
                }}
            />
        </div>
    );
};

export default MotalityRate;
