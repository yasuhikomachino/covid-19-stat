import axios from "axios";
import { DailyDataByCountry } from "../types/data";

const apiUrl = "https://api.covid19api.com/total/country";

export const fetchDailyDataByCountryApi = async (country: string) => {
    const { data } = await axios.get<DailyDataByCountry>(`${apiUrl}/${country}`);
    return data;
};
