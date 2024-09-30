import { Injectable } from "@angular/core";
import { reminders } from './../fake-data/reminders'
import { Remind } from "../models/remind";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class RemindersService {

  reminders$ = new BehaviorSubject<Remind[]>(reminders)

  updateReminder(reminder:Remind, prevName: string | null){
    const newReminders = this.reminders$.value.map((rem) => {
      if (rem.name === prevName) {
        return reminder
      } else {
        return rem
      }
    })

    this.reminders$.next(newReminders)

  }

}