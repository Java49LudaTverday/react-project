import { Employee } from "../models/Employee";
import { getRandomNumber } from "../utils/random";
import employeeConfig from '../config/employee-config.json';
const PERCENT = 10;
const BORDER_SALARY = 20000;
export class Company {
    private employees: Employee[] = [];
    addEmployee(employee: Employee): void {
        const idEmployee: number = getRandomNumber(employeeConfig.minId, employeeConfig.maxID);
        employee.id = idEmployee;
        this.employees.push(employee);
    }
    updateEmployee(empl: Employee): void {
        const index = this.employees.findIndex(e => e.id == empl.id);        
        if (index >= 0 ) {           
           this.employees[index] = empl;
        }
    }
    getEmployee(id: number): Employee | null {
        const ind: number = this.employees.findIndex(empl => empl.id === id);
        return ind < 0 ? null : this.employees[ind];
    }
    removeEmployee(id: number): void {
        const index: number = this.employees.findIndex(e => e.id === id);
        index >= 0 && this.employees.splice(index, 1);
    }
    getAllEmployees(): Employee[] {

        return this.employees.slice();
    }
}
function updateSalary(salary: number): number {
    return salary < BORDER_SALARY ? salary += salary * PERCENT / 100 : salary -= salary * PERCENT / 100;
}