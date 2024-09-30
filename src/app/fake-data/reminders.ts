import { Remind } from "../models/remind";

export const reminders: Remind[] = [
  {
    name: 'Имя1',
    description: 'Описание 1',
    creationTime: '2024-09-25T16:03:54.172Z',
    executionTime: '2024-09-30T16:03:54.172Z',
    status: {
      name: 'New'
    }
  },
  {
    name: 'Имя2',
    description: 'Описание 2',
    creationTime: '2024-09-24T16:03:54.172Z',
    executionTime: '2024-09-29T16:03:54.172Z',
    status: {
      name: 'Executed'
    }
  },
  {
    name: 'Имя3',
    description: 'Описание 3',
    creationTime: '2024-08-25T16:03:54.172Z',
    executionTime: '2024-09-31T16:03:54.172Z',
    status: {
      name: 'New'
    }
  },
  {
    name: 'Имя4',
    description: 'Описание 4',
    creationTime: '2024-09-22T18:03:54.172Z',
    executionTime: '2024-09-28T16:03:54.172Z',
    status: {
      name: 'Scheduled'
    }
  },{
    name: 'Имя5',
    description: 'Описание 5',
    creationTime: '2024-09-21T16:03:54.172Z',
    executionTime: '2024-09-22T19:03:54.172Z',
    status: {
      name: 'New'
    }
  },
  {
    name: 'Имя6',
    description: 'Описание 6',
    creationTime: '2024-09-25T16:03:54.172Z',
    executionTime: '2024-09-30T16:03:54.172Z',
    status: {
      name: 'Overdue'
    }
  }
]