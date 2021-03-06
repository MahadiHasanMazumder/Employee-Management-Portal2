import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeComponent} from './employee/employee.component';
import{DepartmentComponent} from './department/department.component';

const routes: Routes = [
  {path:'EmployeeDepartment',component:DepartmentComponent},
  {path:'employee',component:EmployeeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
