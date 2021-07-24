import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  
  ModalTitle?:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  ngOnInit(): void {
    this.RefreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeID:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:'Anonymous'
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }
  closeClick(){
    debugger;
    this.ActivateAddEditEmpComp=false;
    this.RefreshEmpList();
  }

  editClick(item:any)
  {
this.emp=item;
this.ActivateAddEditEmpComp=true;
this.ModalTitle="Edit Employee";
  }

  deleteClick(item:any)
  {
    debugger;
    if(confirm('Are You Sure?'))
    {
      debugger;
      this.service.deleteEmployee(item.EmployeeID).subscribe(data=>{
        alert(data.toString());
        this.RefreshEmpList();
      });
    }
  }

  RefreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }
}

