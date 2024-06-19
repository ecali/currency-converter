import {InputConverter} from "./inputConverter";

export const Converter = () => {
    return(
        <div className={'flex flex-col gap-6'}>
            <p className={'text-gray-700 md:text-lg text-sm text-center'}>Enter the amount and select the currencies to convert between.<br /> Our Simple Currency Converter will provide you with the latest exchange rates instantly.</p>
            <InputConverter />
        </div>
    )
}