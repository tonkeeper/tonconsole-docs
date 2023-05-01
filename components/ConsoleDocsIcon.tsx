import {FunctionComponent} from "react";
import {useTheme} from "next-themes";

export const ConsoleDocsIcon: FunctionComponent = () => {
    const theme = useTheme();
    console.log(theme);
    const color = theme.resolvedTheme === 'light' ? 'black' : 'white';

    return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14L4 14L14 4L14 14Z" fill={color}/>
        <path opacity="0.8" d="M14 14L4 28L4 14L14 14Z" fill={color}/>
        <path opacity="0.8" d="M28 4L14 4L14 14L28 4Z" fill={color}/>
        <path opacity="0.4" d="M14 14L28 28L4 28L14 14Z" fill={color}/>
        <path opacity="0.6" d="M28 28L28 4L14 14L28 28Z" fill={color}/>
    </svg>

}
