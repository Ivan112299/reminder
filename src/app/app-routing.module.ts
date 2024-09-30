
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderComponent } from './components/remind/reminder.component';
import { RemindersComponent } from './components/reminders/reminders.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: RemindersComponent
  },
  {
    path: 'main/:id', component: ReminderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
