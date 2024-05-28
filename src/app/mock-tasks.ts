import { Task } from './Types'

export const tasks: Task[] = [
    {
        id: 1,
        text: 'Walk my dog',
        day: 'May 21st at 07:00 PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting with Client',
        day: 'May 22nd at 03:00 PM',
        reminder: false
    },
    {
        id: 3,
        text: 'Buy Groceries',
        day: 'May 19th at 09:00 AM',
        reminder: true
    },
]


// Database => Tasks table