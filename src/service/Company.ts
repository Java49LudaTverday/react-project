import { Employee } from "../models/Employee";

export class Company {
    // constructor(private employees: Employee[]){

    // }
    private employees: Employee[] = [];
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    updateEmployee(empl: Employee): void {
        const emplUpdated = this.getEmployee(empl.id);
        if (emplUpdated != null){
            emplUpdated.department = empl.department;
            emplUpdated.salary = empl.salary;
        }

    }
    getEmployee(id: number): Employee|null {
        const ind: number = this.employees.findIndex(empl => empl.id === id);
        return ind < 0 ? null : this.employees[ind];
    }
    removeEmployee(id: number): void{
        const index: number = this.employees.findIndex(e => e.id === id);
        index>=0 && this.employees.splice(index, 1);
    }
    getAllEmployees(): Employee[] {

        return this.employees.slice();
    }
}