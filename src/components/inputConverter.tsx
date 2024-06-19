import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {CurrencySelect} from "./currencySelect";
import {Cached} from "@mui/icons-material";

export const InputConverter = () => {
    const [firstCurrency, setFirstCurrency] = useState<string>('')
    const [secondCurrency, setSecondCurrency] = useState<string>('')

    return (
        <div className={'flex flex-col w-[90%] md:w-[800px] mx-auto bg-gray-200 rounded-2xl p-5 gap-5'}>
            <p className={'text-gray-700 font-semibold text-center'}>Converter</p>
            <div className={'flex w-full gap-3'}>
                <CurrencySelect currency={firstCurrency} setCurrency={setFirstCurrency} label={'First Currency'} />
                <CurrencySelect currency={secondCurrency} setCurrency={setSecondCurrency} label={'Second Currency'} />
            </div>
            <div className={'flex w-full gap-3'}>
                <TextField type={'number'} id="outlined-basic" label="Ammount to convert" variant="outlined" fullWidth />
                <Button className={'bg-violet-800'} variant={'contained'} color="secondary" fullWidth startIcon={<Cached />}>Convert</Button>
            </div>

        </div>
    )
}