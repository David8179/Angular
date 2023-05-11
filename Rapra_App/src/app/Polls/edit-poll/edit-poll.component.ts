import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees, Options } from 'src/app/Models/InternalApp.model';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.css']
})
export class EditPollComponent implements OnInit {


  employees: Employees[] = [];
  selectedEmployees = [];
  response: any;
  id: any;
  options: Options[] = [];
  selectedOptions = [];
  polls: any;
  constructor(private router: Router,
    private services: AppServicesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPollId();
    this.optionList();
    this.employeeList();
  }

  getPollId() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");

      if (this.id) {
        this.services.getPollById(this.id).subscribe(res => {
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

  changePoll(poll: any) {
    // debugger
    // let body = {
    //   id: this.polls.id,
    //   poll_name: this.polls[0].poll_name,
    //   poll_employees_list: this.selectedEmployees,
    //   options_list: this.selectedOptions,
    //   poll_start: this.polls[0].poll_start,
    //   poll_end: this.polls[0].poll_end

    // }
    this.services.editPoll(poll).subscribe({
      next: (res) => {
        console.log(res)
        alert('Changes Applied Successfully!');
        return this.router.navigateByUrl('/Poll');
      }
    })
  }

  cancel() {
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