import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './LogIn/log-in/log-in.component';
import { WelcomeComponent } from './Welcome Page/welcome/welcome.component';
import { EventComponent } from './Events/event/event.component';
import { GroupComponent } from './Groups/group/group.component';
import { PollsComponent } from './Polls/polls/polls.component';
import { NewGroupComponent } from './Groups/new-group/new-group.component';
import { NewEventComponent } from './Events/new-event/new-event.component';
import { NewPollComponent } from './Polls/new-poll/new-poll.component';
import { EditPollComponent } from './Polls/edit-poll/edit-poll.component';
import { GroupDetailsComponent } from './Groups/group-details/group-details.component';
import { EditGroupComponent } from './Groups/edit-group/edit-group.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';
import { PollDetailsComponent } from './Polls/poll-details/poll-details.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';



const routes: Routes = [

  { path: '', component: LogInComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'Event', component: EventComponent },
  { path: 'Group', component: GroupComponent },
  { path: 'Poll', component: PollsComponent },
  { path: 'New_Group', component: NewGroupComponent },
  { path: 'New_Event', component: NewEventComponent },
  { path: 'New_poll', component: NewPollComponent },
  { path: 'Edit_poll/:id', component: EditPollComponent },
  { path: 'Group_Detials/:id', component: GroupDetailsComponent },
  { path: 'groupedit/:id', component: EditGroupComponent },
  { path: 'Event_Details/:id', component: EventDetailsComponent },
  { path: 'Poll_Details/:id', component: PollDetailsComponent },
  { path: 'Edit_Event/:id', component: EditEventComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
