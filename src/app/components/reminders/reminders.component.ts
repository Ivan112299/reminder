import { RemindersService } from './../../services/reminds.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { reminders } from './../../fake-data/reminders'
import { Remind } from 'src/app/models/remind';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

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
export class RemindersComponent implements OnInit, OnDestroy {
  remindersData: RemindTableData[] = [];

  displayedColumns: string[] = ['status', 'name', 'creationTime', 'executionTime'];

  private destroy$ = new Subject<void>();

  constructor(private router: Router, private remindersService: RemindersService) {}

  ngOnInit(): void {
    this.remindersService.reminders$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.remindersData = data.map(reminder => ({
        name: reminder.name,
        creationTime: reminder.creationTime,
        executionTime: reminder.executionTime,
        status: reminder.status.name
      }))
    })

  }

  onDblclickOpenForm(row: RemindTableData) {
    this.router.navigate([`main`, `${row.name}`])
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
