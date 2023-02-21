export type NavigatorProps = {
    routers: Array <RoutersProps>
    //RoutersProps[]
}
export type RoutersProps = {
    path: string, label: string, flAdmin: boolean, flAuth: boolean 
}
// type ClassNames = {
//     ulClassName:string;
//     liClassName:string
// }