import { Component, OnInit } from '@angular/core';
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];
  
  ModalTitle?:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIDFilter?:string;
  DepartmentNameFilter?:string;
  DepartmentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentID:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    debugger;
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  editClick(item:any)
  {
this.dep=item;
this.ActivateAddEditDepComp=true;
this.ModalTitle="Edit Department";
  }

  deleteClick(item:any)
  {
    debugger;
    if(confirm('Are You Sure?'))
    {
      debugger;
      this.service.deleteDepartment(item.DepartmentID).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListWithoutFilter=data;
    });
  }

  FilterFn()
  {
    var DepartmentIDFilter=this.DepartmentIDFilter;
    var DepartmentNameFilter=this.DepartmentNameFilter;


    let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

    // this.DepartmentList=this.DepartmentListWithoutFilter.filter(function(el:any){
    //   return el.DepartmentID.toString().toLowerCase().includes(
    //     DepartmentIDFilter.toString().trim().toLowerCase()
    //   )&&
    //   el.DepartmentName.toString().toLowerCase().includes(
    //     DepartmentNameFilter.toString().trim().toLowerCase()
    //   )
    // });
  }

  sortResult(prop:any,asc:any)
  {
    this.DepartmentList=this.DepartmentListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
        
      }else{
       return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
      }
    });
  }
}
