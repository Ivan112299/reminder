import { Pipe, PipeTransform } from "@angular/core";
import {statusTranslation} from '../fake-data/translations'
import { StatusName } from "../models/status";
  
@Pipe({
    name: "translateStatus"
})
export class TranslatePipe implements PipeTransform {
  transform(value: StatusName): string {
      
    return statusTranslation[value] ?? ''
  }
}