import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { CovidContext } from "../../contexts/CovidContext";
import { DailyDataItem } from "../../types/data";

const DailyReport: React.FC = () => {
    const { dailyDataByCountry } = useContext(CovidContext);
    const dates = dailyDataByCountry.map(({ Date }: { Date: string }) => Date);
    return (
        <div className="my-5">
            <h2>Daily Report</h2>
            <Line
                data={{
                    labels: dates.map((date: string) => new Date(date).toDateString()),
                    datasets: [
                        {
                            data: dailyDataByCountry.map((data: DailyDataItem) => data.Confirmed),
                            label: "Total Confirmed",
                            borderColor: "#16607A",
                            backgroundColor: "rgba(22, 96, 122, 0.1)",
                            radius: 1,
                            fill: true,
                        },
                        {
                            data: dailyDataByCountry.map((data: DailyDataItem) => data.Recovered),
                            label: "Total Recovered",
                            borderColor: "#003905",
                            backgroundColor: "rgba(187, 216, 152, 0.1)",
                            radius: 1,
                            fill: true,
                        },
                        {
                            data: dailyDataByCountry.map((data: DailyDataItem) => data.Deaths),
                            label: "Total Deaths",
                            borderColor: "#353135",
                            backgroundColor: "rgba(53, 49, 53, 0.1)",
                            radius: 1,
                            fill: true,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default DailyReport;
