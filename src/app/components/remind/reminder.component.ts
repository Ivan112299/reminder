import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { statusTranslation } from 'src/app/fake-data/translations';
import { StatusName } from 'src/app/models/status';
import { RemindersService } from 'src/app/services/reminds.service';

@Component({
  selector: 'app-remind',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.less']
})
export class ReminderComponent implements OnInit {

  statusTranslation: [string, string][] = Object.entries(statusTranslation)

  reminderForm = this.fb.group({
    name: '',
    description: '',
    creationTime: '',
    executionTime: '',
    status: ''
  })

  selectedReminderName: string | null = null

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private remindersService: RemindersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      const selectedReminer = this.remindersService.reminders$.value.find(reminder => reminder.name === params['id'])

      const formData = {
        name: selectedReminer?.name,
        description: selectedReminer?.description,
        creationTime: selectedReminer?.creationTime,
        executionTime: selectedReminer?.executionTime,
        status: selectedReminer?.status.name,
      }

      this.reminderForm.patchValue(formData)
      this.selectedReminderName = selectedReminer?.name ?? null;
    })
  }

  onClickSaveData() {
    const saveData = {
      name: this.reminderForm.value.name ?? '',
      description: this.reminderForm.value.description ?? '',
      creationTime: new Date(this.reminderForm.value.creationTime ?? '').toISOString(),
      executionTime: this.reminderForm.value.executionTime ?? '',
      status: {
        name: this.reminderForm.value.status as StatusName,
      }
    }
    this.remindersService.updateReminder(saveData, this.selectedReminderName)
    this.router.navigate([`main`])
  }

  onClickCloseForm() {
    this.router.navigate([`main`])
  }
}
