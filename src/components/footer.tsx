import {Tooltip, Zoom} from "@mui/material";

export const Footer = () => {
    return (
        <div className={'flex text-violet w-full absolute bottom-0 h-[50px] justify-center bg-secondary items-center'}>
            Make with ❤️ and ☕️ by
            <Tooltip title={'See my Github profile'} TransitionComponent={Zoom}>
                <a className={'font-bold ml-1'} href={'https://github.com/ecali'} target={'_blank'}>Elvio</a>
            </Tooltip>
        </div>
    )
}