import axios from 'axios';

const API_EKY = '9f04091cb09a9606ca7cebc02d2684b6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_EKY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}