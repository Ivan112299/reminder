import { StatusName } from "../models/status";

export const statusTranslation: Record<StatusName, string>= {
  New: 'Новый',
  Executed: 'Исполнен',
  Scheduled: 'Запланирован',
  Overdue: 'Просрочен'
}