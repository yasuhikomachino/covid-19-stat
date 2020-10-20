import React, { createContext, useState } from "react";
import { fetchDailyDataByCountryApi } from "../api/api";
import dailyDataByCountryJson from "../data/daily_data_by_country.json";
import { DailyDataByCountry } from "../types/data";

interface IContextProps {
    fetchDailyDataByCountry: (country: string) => void;
    dailyDataByCountry: DailyDataByCountry;
    changeCountry: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CovidContext = createContext({} as IContextProps);

const CovidContextProvider:React.FC = (props: any) => {
    const [dailyDataByCountry, setDailyDataByCounty] = useState(dailyDataByCountryJson);

    const fetchDailyDataByCountry = async (country: string) => {
        setDailyDataByCounty(await fetchDailyDataByCountryApi(country));
    };

    const changeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const country = event.currentTarget.value;
        fetchDailyDataByCountry(country);
    };

    return (
        <CovidContext.Provider
            value={{
                dailyDataByCountry,
                fetchDailyDataByCountry,
                changeCountry: changeCountry,
            }}
        >
            {props.children}
        </CovidContext.Provider>
    );
};

export default CovidContextProvider;
