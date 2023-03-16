import { Employee } from "../models/Employee";
import { getRandomNumber } from "../utils/random";
import employeeConfig from '../config/employee-config.json';
//import {app} from '../config/firebase-config';
import { app } from "../config/firebase-config";
import {collection, CollectionReference,  getFirestore, getDocs, setDoc, doc, deleteDoc} from 'firebase/firestore';
import { Observable } from "rxjs";
import {collectionData} from "rxfire/firestore";

const PERCENT = 10;
const BORDER_SALARY = 20000;
const EMPLOYEES = 'employees';
export class CompanyFirebase {
    private employeesCol = collection(getFirestore(app), EMPLOYEES);
    async addEmployee(employee: Employee): Promise< void> {
        const idEmployee: number = getRandomNumber(employeeConfig.minId, employeeConfig.maxID);
        employee.id = idEmployee;
        await setDoc(doc(this.employeesCol, employee.id.toString()), employee);
     //  this.updateEmployee(employee);
    }
   async updateEmployee(empl: Employee): Promise< void> {
        await setDoc(doc(this.employeesCol, empl.id.toString()), empl);
    }
   async  removeEmployee(id: number):Promise<void> {
        await deleteDoc(doc(this.employeesCol,id.toString()));
    }
     getAllEmployees(): Observable< Employee[]> {
        // const docsSnapshot = await getDocs(this.employeesCol)   ;
        // return  docsSnapshot.docs.map(doc => doc.data() as Employee); 
        return collectionData(this.employeesCol) as Observable<Employee[]>;
    }
}
function updateSalary(salary: number): number {
    return salary < BORDER_SALARY ? salary += salary * PERCENT / 100 : salary -= salary * PERCENT / 100;
}