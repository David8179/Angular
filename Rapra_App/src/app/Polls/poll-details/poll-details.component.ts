import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees, Options } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.css']
})
export class PollDetailsComponent implements OnInit {

  polls: any;
  employees: Employees[] = [];
  selectedEmployees = [];
  response: any;

  options: Options[] = [];
  selectedOptions = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private services: AppServicesService
  ) { }

  ngOnInit(): void {
    this.getPollDetails();
    this.optionList();
    this.employeeList();
  }

  getPollDetails() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      if (id) {
        this.services.getPollById(id).subscribe(res => {
          this.response = res;
          this.polls = [this.response];
          console.log(this.polls);
        });
      }
    });
  }

  employeeList() {
    this.services.employeeList().subscribe(
      (res: any) => {
        this.employees = res;
      });
  }

  optionList() {
    this.services.optionList().subscribe((res: any) => {
      this.options = res;
    });
  }

  goBack() {
    return this.router.navigateByUrl('/Poll');
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
