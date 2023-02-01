import React from "react";
import { LifeMatrix } from "../service/LifeMatrix";
import { getRandomMatrix } from "../utils/random";
import { Matrix } from "./Matrix";
type Props = {
    dimentions: number;
    ticInterval: number;
}
export const Life: React.FC<Props> = ({ dimentions, ticInterval }) => {
    const lifeMatrix = React.useRef<LifeMatrix>();
    const [numbers, setNumbers] = React.useState<number[][]>([]);
    function tic() {
        if (lifeMatrix.current == null) {
        lifeMatrix.current = new LifeMatrix(getRandomMatrix(dimentions, dimentions, 0, 1));
        // lifeMatrix.current = new LifeMatrix(matrix);
       }
        setNumbers(lifeMatrix.current.nextStep());
    }
    React.useEffect(() => {
        const interval = setInterval(tic, ticInterval);
        return () => clearInterval(interval);
    }, [ticInterval])

    return <div>
        <Matrix numbers={numbers} />
    </div>
}
 //let matrix = [[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0]]
// let matrix2 = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0], [0,0,0,0,0,0]];
// let matrix3 = [[0,0,0,0,0],[0,1,0,0,0],[0,0,1,1,0],[0,1,1,0,0],[0,0,0,0,0]]
// let matrix4 = [[0,1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
// let matrix5 = [[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0],[1,1,0,1,1,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]]