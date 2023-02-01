import React from "react";
type Props = {
    row: number[];
}
export const Row: React.FC<Props> = ({row})=> {
    function getSize() {
        return Math.min(window.innerHeight, window.innerWidth) / row.length - 2;
    }
    function getStyle(num: number): React.CSSProperties{
        const width = getSize();
        return {
            backgroundColor: num == 1 ? "black" : "white",
            width: width,
            height: width,
            border: "solid gray 1px"
        }
    }

    return <div style={{display:"flex"}}>
        {row.map((num,i) => <div style={getStyle(num)} key={i}></div>)}
    </div>
}