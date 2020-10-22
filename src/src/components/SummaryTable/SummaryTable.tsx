import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { fetchSummaryData } from "../../api/api";
import summaryDataJson from "../../data/summary.json";
import { SummaryCounty } from "../../types/data";

const headers: string[] = [
    "Country",
    "NewConfirmed",
    "TotalConfirmed",
    "NewDeaths",
    "TotalDeaths",
    "NewRecovered",
    "TotalRecovered"
];

const buildRow = (row: SummaryCounty, headers: string[]) => {
    return (
        <tr key={row.Country}>
            { headers.map((value: string, index: number) => {
                return <td key={index}>{row[value as keyof SummaryCounty]}</td>
            })}
        </tr>
    )
};

const SummaryTable: React.FC = () => {
    const [summaryData, setSummaryData] = useState(summaryDataJson);

    useEffect(() => {
        (async () => {
            setSummaryData(await fetchSummaryData());
        })();
    }, [])

    return (
        <div className="mt-5 pt-5 border-top">
            <h2>Summary By Country</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {headers && headers.map((value: string, index: number) => {
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
