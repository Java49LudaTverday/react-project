export function getRandomNumber(minValue: number, maxValue: number, isMinInclusive: boolean = true, isMaxInclusive: boolean = false): number {
    
    if (!isMinInclusive) {
        minValue++;
    }
    if (isMaxInclusive) {
        maxValue++;
    }
    if (minValue == maxValue) {
        throw "min may not be equaled to max";
    }
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }
    return minValue + Math.trunc(Math.random() * (maxValue - minValue));
}

export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
    const resMatrix: number[][] = [[]];
    for (let i = 0; i < rows; i++) {
        resMatrix[i] = [];
        for (let j = 0; j < columns; j++) {
            resMatrix[i][j] = getRandomNumber(min, max, true, true);
        }
    }
    return resMatrix;   
   
   /* let rowsNumbers: number[][] = [];
    let columnsNumbers: number[] = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let x: number = getRandomNumber(min, max, true, true)
            columnsNumbers.push(x);
            if (j == (columns - 1)) {
                rowsNumbers.push(columnsNumbers);
                columnsNumbers = [];
            }
        }
    }
    // for (let a = 0; a < rowsNumbers.length; a++) {
    //     console.log(rowsNumbers[a])
    // }
    return rowsNumbers;*/
}
export function getRandomArrayElement<T>(array: T[]): T {
    return array[getRandomNumber(0, array.length)];
}
export function getRandomDate(minYear: number, maxYear: number) {
    const year: number = getRandomNumber(minYear, maxYear);
    const month: number = getRandomNumber(0, 12);
    const day: number = getRandomNumber(0, 32);
    return new Date(year, month, day);
}


//////////////////////////////////
// console.log("1 t,f)" + getRandomNumber(3, 1));
// console.log("2 t,t)" + getRandomNumber(1, 3, true, true));
// console.log("3 f,t)" + getRandomNumber(1, 3, false, true));
// console.log("4 f,f)" + getRandomNumber(1, 2, false, false));

// let arr = getRandomMatrix(6, 5, 1, 5);
// console.log("End: " + getRandomArrayElement(arr));
// console.log("Date:" + getRandomDate(-1, -4));