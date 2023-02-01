import React from "react";
import { Row } from "./Row";
type Props = {
    numbers: number[][]
}
export const Matrix: React.FC<Props> = ({numbers}) => {
    function getRows(): JSX.Element[] {
         return numbers.map((row,i) => <Row row={row} key={i}/>
        );
    }
    return <div style={{display: "flex", flexDirection: "column"}}>
        {getRows()}
    </div>
}