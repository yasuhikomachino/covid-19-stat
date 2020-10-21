import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { fetchSummaryDataApi } from "../../api/api";
import summaryDataJson from "../../data/summary.json";

const headers = [
    "Country",
    "NewConfirmed",
    "TotalConfirmed",
    "NewDeaths",
    "TotalDeaths",
    "NewRecovered",
    "TotalRecovered"
];

const buildRow = (row: any, headers: any) => {
    return (
        <tr key={row.Country}>
            { headers.map((value: string, index: number) => {
                return <td key={index}>{row[value]}</td>
            })}
        </tr>
    )
};

const SummaryTable: React.FC = () => {
    const [summaryData, setSummaryData] = useState(summaryDataJson);

    const fetchSummaryData = async () => {
        setSummaryData(await fetchSummaryDataApi());
    };

    useEffect(() => {
        fetchSummaryData();
    }, [])

    return (
        <div className="mt-5 pt-5 border-top">
            <h2>Summary By Country</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {headers && headers.map((value, index) => {
                            return <th key={index}><div>{value}</div></th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {summaryData && summaryData.Countries && summaryData.Countries.map((value: any) => {
                        return buildRow(value, headers);
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default SummaryTable;
