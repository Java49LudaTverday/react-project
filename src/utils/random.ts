export function getRandomNumber(minValue: number, maxValue: number, isMinInclusive: boolean = true, isMaxInclusive: boolean = false): number {
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    } else if (minValue == maxValue && (!isMinInclusive || !isMaxInclusive)) {
         throw "min may not be equaled to max";
    } else if (minValue + 1 === maxValue && !isMinInclusive && !isMaxInclusive) {
         throw "min or max must be inclusive";
    } else if (!isMinInclusive && !isMaxInclusive) {
        minValue += 1;
    } else if (isMinInclusive && isMaxInclusive) {
        maxValue += 1;
    } else if (!isMinInclusive && isMaxInclusive) {
        minValue += 1; maxValue += 1;
    }

    return minValue + Math.floor(Math.random() * (maxValue - minValue));
}
export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
    let rowsNumbers: number[][] = [];
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
    return rowsNumbers;
}
export function getRandomArrayElement(array: any[]): any {
    return array[getRandomNumber(0, array.length, true, false)];
}
export function getRandomDate(minYear: number, maxYear: number) {
    if (minYear < 0) {
        minYear *= -1;
    }
    if (maxYear < 0) {
        maxYear *= -1;
    }
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