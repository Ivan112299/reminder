import { Component, OnInit } from '@angular/core';
import { reminders } from './../../fake-data/reminders'
import { Remind } from 'src/app/models/remind';

export type RemindTableData = {
  name: string,
  creationTime: string,
  executionTime: string,
  status: string
}

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.less']
})
export class RemindersComponent implements OnInit {


  remindersData: RemindTableData[] = [];
  displayedColumns: string[] = [ 'status', 'name', 'creationTime', 'executionTime'];

  ngOnInit(): void {
    this.remindersData = reminders.map(remind => ({
      name: remind.name,
      creationTime: remind.creationTime,
      executionTime: remind.executionTime,
      status: remind.status.name
    }))
  }

}
