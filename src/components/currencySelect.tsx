import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {currencies} from "../utils/currency";
import {PropsCurrencySelector} from "../models/Props.model";

export const CurrencySelect = (props: PropsCurrencySelector) => {
    return(
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
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
        </FormControl>
    )
}