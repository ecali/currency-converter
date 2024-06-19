import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {CurrencySelect} from "./currencySelect";
import {Cached, RotateLeft} from "@mui/icons-material";
import {Loader} from "./Loader";
import {useConverter} from "../hooks/useConverter";

export const InputConverter = () => {
    const [firstCurrency, setFirstCurrency] = useState<string>('')
    const [secondCurrency, setSecondCurrency] = useState<string>('')
    const [amount, setAmount] = useState('')
    const [result, setResult] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const {convert} = useConverter()

    const isDisabled = () => {
        return firstCurrency === '' || secondCurrency === '' || amount === ''
     }

     const convertCurrency = () => {
        setShowResult(true)
        setLoading(true)
         if(firstCurrency === secondCurrency){
             setResult(amount)
             setLoading(false)
         }else{
             convert(firstCurrency, secondCurrency).then(res => {
                 setResult((res.data.data[secondCurrency] * Number(amount)).toFixed(2).toString())
             }).finally(() => setLoading(false))
         }
     }

     const reset = () => {
        setAmount('')
         setShowResult(false)
         setFirstCurrency('')
         setSecondCurrency('')
         setResult('')
     }

    return (
        <div className={'flex flex-col w-[90%] md:w-[800px] mx-auto bg-gray-200 rounded-2xl p-5 gap-5'}>
            <p className={'text-gray-700 font-semibold text-center'}>Converter</p>
            <div className={'flex w-full gap-3'}>
                <CurrencySelect currency={firstCurrency} setCurrency={setFirstCurrency} label={'First Currency'} disabled={showResult} />
                <CurrencySelect currency={secondCurrency} setCurrency={setSecondCurrency} label={'Second Currency'} disabled={showResult} />
            </div>
            <div className={'flex w-full gap-3'}>
                <TextField disabled={showResult} value={amount} onChange={(e) => setAmount(e.target.value)} type={'number'} id="outlined-basic" label="Ammount to convert" variant="outlined" fullWidth />
                {showResult ?
                    <Button onClick={reset} className={'bg-violet-800'} variant={'contained'} color="primary" fullWidth startIcon={<RotateLeft />}>RESET</Button>
                    :<Button onClick={convertCurrency} disabled={isDisabled()} className={'bg-violet-800'} variant={'contained'} color="secondary" fullWidth startIcon={<Cached />}>Convert</Button>
                }
            </div>
            {showResult && <div className={'flex w-full items-center justify-center h-50px'}>
                <div className={'border-gray-600 rounded-2xl p-5 border-2 w-[90%] items-center flex flex-col'}>
                    <p className={'font-bold uppercase'}>Result</p>
                    {loading && <Loader />}
                    {result && <div className={'flex w-full flex-colm justify-center'}>
                        <p className={'text-gray-700 md:text-lg text-sm text-center'}>{amount} {firstCurrency} equals <b>{result}</b> {secondCurrency}</p>
                    </div>}
                </div>
            </div>}
        </div>
    )
}