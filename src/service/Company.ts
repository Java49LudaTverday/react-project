import { Employee } from "../models/Employee";
const PERCENT = 10;
const BORDER_SALARY = 20000;
export class Company {
    // constructor(private employees: Employee[]){

    // }
    private employees: Employee[] = [];
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    updateEmployee(empl: Employee): void {
        const emplUpdatedCopy = { ...empl };
        if (emplUpdatedCopy != null) {
            const salary: number = empl.salary;
            emplUpdatedCopy.salary = updateSalary(salary);
            const ind: number = this.employees.findIndex(empl => empl.id === emplUpdatedCopy.id);
            const employeesCopy = JSON.parse(JSON.stringify(this.employees));
            employeesCopy[ind].salary = emplUpdatedCopy.salary
            this.employees = employeesCopy;
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