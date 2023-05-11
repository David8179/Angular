import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  allPolls: any;

  constructor(
    private router: Router,
    private services: AppServicesService
  ) { }

  ngOnInit(): void {
    this.getAllPolls();
  }

  getAllPolls() {
    this.services.getAllPolls().subscribe({
      next: (res) => {
        this.allPolls = res;
      }
    })
  }

  pollDelete(id: any) {
    if (window.confirm('Are you sure want to delete this poll?')) {
      this.services.delPoll(id).subscribe({
        next: (res) => {
          console.log(res);
          alert('poll Deleted Successfully!');
          this.getAllPolls();
          return this.router.navigateByUrl('/Poll');
        }
      });
    }
    else {
      alert('Failed to delete Poll!')
    }
  }

  toggleButton(id: any, startTime: any, endTime: any) {
    const buttonLabel = this.getButtonLabel(id, startTime, endTime);

    if (buttonLabel === 'Start') {
      this.startAction(id, 'start');
    } else if (buttonLabel === 'Stop') {
      this.stopAction(id, 'stop');
    } else {
      alert('Unable to start or stop the poll!');
      this.getAllPolls();
    }
  }

  getButtonLabel(id: any, startTime: string, endTime: string): any {
    const currentTime = new Date().getTime();
    const pollStartTime = new Date(startTime).getTime();
    const pollEndTime = new Date(endTime).getTime();

    if (currentTime < pollStartTime) {
      return 'Start';
    } else if (currentTime >= pollStartTime && currentTime < pollEndTime) {
      return 'Stop';
    } else {
      return 'NO Action';
      this.getAllPolls();
    }
  }



  startAction(id: any, actionText: any) {
    debugger;
    this.services.start_stop(id, actionText).subscribe({
      next: (res) => {
        console.log(res);
        alert('Poll Started!');
        this.getAllPolls();
      }
    });
  }

  stopAction(id: any, actionText: any) {
    this.services.start_stop(id, actionText).subscribe({
      next: (res) => {
        console.log(res);
        alert('Poll Stopped!');
        this.getAllPolls();
      }
    });
  }

  editPoll(id: any) {
    return this.router.navigate(['/Edit_poll/', id]);
  }

  details(id: any) {
    return this.router.navigate(['/Poll_Details/', id]);
  }

  create() {
    return this.router.navigateByUrl('/New_poll');
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
