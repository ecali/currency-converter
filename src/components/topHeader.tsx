import {Toggle} from "./Toggle";
import {DarkMode, LightMode} from "@mui/icons-material";

export const TopHeader = () => {
    return(
        <div className={'w-full flex bg-violet h-[30px] justify-end px-3 items-center mb-3'}>
            <div className={'flex gap-3'}>
                <LightMode className={'text-yellow-400'} />
                <Toggle />
                <DarkMode className={'text-gray-600'} />
            </div>

        </div>
    )
}