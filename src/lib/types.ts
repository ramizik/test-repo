export type TaskStatus = 'todo' | 'doing' | 'review' | 'done'

export interface Member {
  id: string
  name: string
  initials: string
  color: string
}

export interface Task {
  id: string
  title: string
  status: TaskStatus
  assignee: string
}

export interface Column {
  id: string
  title: string
  status: TaskStatus
  tasks: Task[]
}
