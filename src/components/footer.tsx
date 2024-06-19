import {Tooltip, Zoom} from "@mui/material";

export const Footer = () => {
    return (
        <div className={'flex text-violet-800 w-full absolute bottom-0 h-[50px] justify-center bg-gray-200 items-center'}>
            Make with ❤️ and ☕️ by
            <Tooltip title={'See my Github profile'} TransitionComponent={Zoom}>
                <a className={'font-bold ml-1'} href={'https://github.com/ecali'} about={'blank'}>Elvio</a>
            </Tooltip>
        </div>
    )
}