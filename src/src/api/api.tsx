import axios from "axios";
import { DailyDataByCountry } from "../types/data";

const apiUrl = "https://api.covid19api.com";

export const fetchDailyDataByCountryApi = async (country: string) => {
    const { data } = await axios.get<DailyDataByCountry>(`${apiUrl}/total/country/${country}`);
    return data;
};

export const fetchSummaryDataApi = async () => {
    const { data } = await axios.get(`${apiUrl}/summary`);
    return data;
};
