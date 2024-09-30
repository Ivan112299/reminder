import { Status } from './status';

export type Remind = {
  name: string,
  description: string,
  creationTime: string,
  executionTime: string,
  status: Status
}