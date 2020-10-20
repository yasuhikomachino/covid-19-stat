import dailyDataByCountryJson from "../data/daily_data_by_country.json";

export type DailyDataByCountry = typeof dailyDataByCountryJson;
export type DailyDataItem = typeof dailyDataByCountryJson[0];
