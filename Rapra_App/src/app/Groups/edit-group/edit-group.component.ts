import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees, Groups } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  groups: any = [];
  response: any;
  groupId: any;

  employees: Employees[] = [];
  selectedEmployees = [];

  constructor(
    private router: Router,
    private services: AppServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGroupById();
    this.employeeList();
  }

  getGroupById() {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get("id");

      if (this.groupId) {
        this.services.getGroupByid(this.groupId).subscribe(res => {
          this.response = res;
          this.groups.push(this.response)
          console.log(this.groups);
        });
      }
    });
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        // console.log(res);
        this.employees = res;
      });
  }

  updateGroup(group: any) {
    this.services.editGroup(group).subscribe({
      next: (res) => {
        console.log(res);
        alert('Group Details Updated Successfully!');
        return this.router.navigateByUrl('/Group');
      }
    });
  }

  delete() {
    alert('Are you sure wan to delete this Employee from Group?');
    return this.router.navigateByUrl('/Edit_Group');
  }
  back() {
    return this.router.navigateByUrl('/Group');
  }

  group() {
    return this.router.navigateByUrl('/Group');
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

}
