import {PropsCurrencySelector} from "../models/Props.model";
import {currencies} from "../utils/currency";

export const CurrencySelect = (props: PropsCurrencySelector) => {
    return (

        <div className={'flex flex-col w-full'}>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-primary">{props.label}</label>
            <select value={props.currency} disabled={props.disabled} onChange={(e) => props.setCurrency(e.target.value)} id="currencies" className="bg-primary border text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a currency</option>
                {currencies.map(currency => <option key={currency.code} value={currency.code}>({currency.code}) {currency.name}</option>)}
            </select>
        </div>



        /*<FormControl fullWidth disabled={props.disabled}>
            <InputLabel classes={'text-secondary'} id={props.label.toLowerCase().replaceAll(' ', '-')} >{props.label}</InputLabel>
            <Select
                labelId={props.label.toLowerCase().replaceAll(' ', '-')}
                id={props.label.toLowerCase().replaceAll(' ', '-')}
                value={props.currency}
                label={props.label}
                onChange={(e) => props.setCurrency(e.target.value)}
            >
                {currencies.map(currency => (
                    <MenuItem className={props.currency === currency.code ? 'font-bold' : ''} key={currency.code} value={currency.code}>{currency.name} ({currency.code})</MenuItem>
                ))}
            </Select>
        </FormControl>*/
    )
}