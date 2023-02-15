import { Employee } from "../models/Employee";
import { getRandomDate, getRandomNumber } from "../utils/random";
import configEmpl from "../config/employee-config.json"


export type Stat = {
    min: number; max: number; avr: number
}
export function statAge(employees: Array<Employee>): Stat {
    const dateCurrent: Date = new Date();
    const yearCurrent: number = dateCurrent.getFullYear();
    const minResYear = getAgeEmployee(employees[0], yearCurrent);
    return employees.reduce((res, empl) => {
        const ageEmpl: number = getAgeEmployee(empl, yearCurrent);
        if (ageEmpl < res.min) {
            res.min = ageEmpl
        }
        if (ageEmpl > res.max) {
            res.max = ageEmpl
        }
        res.avr += Math.floor(ageEmpl / employees.length);
        return res;
    }, { min: minResYear, max: minResYear, avr: 0 })
}

export function statSalary(employees: Array<Employee>): Stat {
    return employees.reduce((res, empl) => {
        if (empl.salary < res.min) {
            res.min = empl.salary
        }
        if (empl.salary > res.max) {
            res.max = empl.salary
        }
        res.avr +=  Math.floor(empl.salary / employees.length);
        return res;
    }, { min: employees[0].salary, max: employees[0].salary, avr: 0 })
}

export function createRandomEmployee(employees: Employee[]): Employee {
    return {
        id: getID(employees),
        name: getRandomName(),
        birthDate: getBirthDate(),
        department: configEmpl.department[getRandomNumber(0, configEmpl.department.length)],
        salary: getRandomNumber(configEmpl.minSalary, configEmpl.maxSalary)
    }
}

function getRandomName(): string {
    const NAMES: string[] = ['Dan', 'Dima', 'Yury', 'Vladimir', 'Moshe', 'Bill', 'Emma', 'Olivia'];
    return NAMES[getRandomNumber(0, NAMES.length)];
}

function getBirthDate(): string {
    const randomDate = getRandomDate(configEmpl.minBirthYear, configEmpl.maxBirthYear);
    const dateArr = randomDate.toISOString().split("T");
    return dateArr[0];
}

function getID(employees: Employee[]): number {
    let id: number = getRandomNumber(configEmpl.minId, configEmpl.maxID);
    let res: boolean = isIDUnique(employees,id);
    while (res) {
        id = getRandomNumber(configEmpl.minId, configEmpl.maxID);
        res = isIDUnique(employees,id);
    }
    return id;
}

function getAgeEmployee(employee: Employee, currentYear: number): number {
    const yearEmpl: number = +employee.birthDate.slice(0, 4);
    const ageEmpl: number = currentYear - yearEmpl;
    return ageEmpl;
}

function isIDUnique(employees: Employee[], id: number): boolean {
    return employees.reduce((res, empl) => empl.id === id ? res = true : res , false)
}