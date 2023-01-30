//import { getRandomMatrix } from "../utils/random";

export class LifeMatrix {
    constructor(private _numbers: number[][]) { }
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        let resArr: number[][] = [];
        for (let i: number = 0; i < this._numbers.length; i++) {
            let previouslyRow: number = i - 1;
            let nextRow: number = i + 1;
            resArr[i] = [];
            if (nextRow == this._numbers.length) {
                nextRow = 0;
            }
            if (previouslyRow < 0) {
                previouslyRow = this._numbers.length - 1;
            }
            for (let j = 0; j < this._numbers[i].length; j++) {                
                let neighbour: number = 0;
                let leftNeighbour: number = j - 1;
                let rightNeighbour: number = j + 1;

                if (rightNeighbour === this._numbers[i].length) {
                    rightNeighbour = 0;
                }
                if (leftNeighbour < 0) {
                    leftNeighbour = this._numbers[i].length - 1;
                }

                if ( this._numbers[i][rightNeighbour] === 1) {
                    neighbour++;
                }
                if ( this._numbers[i][leftNeighbour] === 1) {
                    neighbour++;
                }
                neighbour += this.rowConditionNeighbour(previouslyRow,j, rightNeighbour,leftNeighbour);
                neighbour += this.rowConditionNeighbour(nextRow,j, rightNeighbour,leftNeighbour);
                
                if (this._numbers[i][j] == 1) {
                    (neighbour === 2 || neighbour === 3) ? resArr[i][j] = 1 : resArr[i][j] = 0;
                } else { 
                    neighbour === 3 ? resArr[i][j] = 1 : resArr[i][j] = 0;                    
                }
            }
        }
        this._numbers = resArr;
        return this._numbers;
    }
    rowConditionNeighbour( nRow: number,j: number,rightNeighbour:number,leftNeighbour:number): number {
        let neighbour:number = 0;
        if (this._numbers[nRow][j] === 1) {
            neighbour++;           
        }
        if ( this._numbers[nRow][rightNeighbour] === 1) {
           neighbour++;         
        }
        if ( this._numbers[nRow][leftNeighbour] === 1) {
           neighbour++;           
        }
        return neighbour;
    }
}


 //if (previoslyRow >= 0) {
                    
                    // if (this._numbers[previoslyRow][j] === 1) {
                    //     neighbour++;
                    // }
                    // if ( this._numbers[previoslyRow][rightNeighbour] === 1) {
                    //     neighbour++;
                    // }
                    // if ( this._numbers[previoslyRow][leftNeighbour] === 1) {
                    //     neighbour++;
                    // }
                //}
 // if (nextRow < this._numbers.length) {
                    
                    // if (this._numbers[nextRow][j] === 1) {
                    //     neighbour++;
                    // }
                    // if ( this._numbers[nextRow][rightNeighbour] === 1) {
                    //     neighbour++;
                    // }
                    // if ( this._numbers[nextRow][leftNeighbour] === 1) {
                    //     neighbour++;
                    // }
                //}
// if (neighbour === 3) {
                    //     resArr[i][j] = 1;
                    // } else {
                    //     resArr[i][j] = 0;
                    // }
//if (neighbour === 2 || neighbour === 3) {
                    //     resArr[i][j] = 1;
                    // } else {
                    //     resArr[i][j] = 0;
                    // }