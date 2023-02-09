export type NavigatorProps = {
    className: ClassNames,
    routers: Array <RoutersProps>
    //RoutersProps[]
}
type RoutersProps = {
    path: string, label: string
}
type ClassNames = {
    ulClassName:string;
    liClassName:string
}