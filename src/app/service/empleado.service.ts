import { Injectable } from '@angular/core';
import { EmpleadoRequest } from '../models/EmpleadoRequest';
import { SalarioResponse } from '../models/SalarioResponse';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  calcularSalario(empleado: EmpleadoRequest): SalarioResponse {
    const regularSalary = empleado.hoursWorked * empleado.hourlyWage;
    const overtimeSalary = empleado.overtimeHours * empleado.hourlyWage * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.10;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}
