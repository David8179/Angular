import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {



  groups: any = [];
  response: any;

  employees: Employees[] = [];
  selectedEmployees = [];

  constructor(
    private router: Router,
    private services: AppServicesService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getGroupById(this.groups.id)
  }

  getGroupById(id: any) {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      if (id) {
        this.services.getGroupByid(id).subscribe(res => {
          this.response = res;
          this.groups.push(this.response)
        });
      }
    });

    this.employeeList();
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res;
      });
  }
  goBack() {
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
