import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {


  employees: Employees[] = [];
  selectedEmployees = [];

  groups = {
    group_name: "",
    description: ""
  }


  constructor(
    private router: Router,
    private services: AppServicesService
  ) { }

  ngOnInit(): void {
    this.employeeList();
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
      });
  }

  create() {
    let err = ''
    if (!this.groups.group_name) {
      err = "Please enter Group Name"
    }
    else if (!this.groups.description) {
      err = "Please enter Description"
    }
    if (err) {
      alert(err)
    }

    else {
      let body = {
        group_name: this.groups.group_name,
        description: this.groups.description,
        employees_list: this.selectedEmployees
      }
      this.services.createGroup(body).subscribe({
        next: (res) => {
          console.log(res);
          alert('New Group Created Successfully!');
          return this.router.navigateByUrl('/Group');
        },

        error: (error) => {
          console.log(error)
          alert('Please Select atleast One Employee!')

        }
      });
    }
  }

  group() {
    return this.router.navigateByUrl('Group');
  }

  event() {
    return this.router.navigateByUrl('/Event');
  }

  poll() {
    return this.router.navigateByUrl('/Poll');
  }
  signOut() {
    alert('You are Signed Out!')
    return this.router.navigateByUrl('/');
  }
  goBack() {
    this.router.navigateByUrl('/Group');
  }

}