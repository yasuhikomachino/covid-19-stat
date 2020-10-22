import React, { createContext, useState, useEffect } from "react";
import { fetchDailyDataByCountry } from "../api/api";
import dailyDataByCountryJson from "../data/daily_data_by_country.json";
import { DailyDataByCountry } from "../types/data";

type ContextProps = {
    dailyDataByCountry: DailyDataByCountry;
    country: string;
    setCountry: (country: string) => void;
}

export const CovidContext = createContext({} as ContextProps);

const CovidContextProvider: React.FC = (props) => {
    const [dailyDataByCountry, setDailyDataByCounty] = useState(dailyDataByCountryJson);
    const [country, setCountry] = useState('japan')

    useEffect(() => {
        (async () => {
            setDailyDataByCounty(await fetchDailyDataByCountry(country));
        })();
    }, [country]);

    return (
        <CovidContext.Provider
            value={{
                dailyDataByCountry,
                country,
                setCountry
            }}
        >
            {props.children}
        </CovidContext.Provider>
    );
};

export default CovidContextProvider;
