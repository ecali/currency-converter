import axios from "axios";
export const useConverter = () => {
    const convert = async (baseCurrency: string, currency: string) => {
        const params = {
            apikey: process.env.REACT_APP_API_KEY,
            base_currency: baseCurrency,
            currencies: currency
        }
        return await axios.get('https://api.freecurrencyapi.com/v1/latest?', {params})
    }

    return {convert}
}