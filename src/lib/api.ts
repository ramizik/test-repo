import type { Column, Member } from './types'

const NETWORK_DELAY_MS = 300

function delay<T>(value: T, ms = NETWORK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}

const MEMBERS: Member[] = [
  { id: 'm-karti', name: 'Karti', initials: 'KT', color: '#6366f1' },
  { id: 'm-yahya', name: 'Yahya', initials: 'YA', color: '#10b981' },
  { id: 'm-ram', name: 'Ram', initials: 'RM', color: '#f59e0b' },
  { id: 'm-shakthi', name: 'Shakthi', initials: 'SK', color: '#ef4444' },
]

const BOARD: Column[] = [
  {
    id: 'col-todo',
    title: 'To Do',
    status: 'todo',
    tasks: [
      {
        id: 'task-1',
        title: 'Force-directed memory graph',
        status: 'todo',
        assignee: 'm-shakthi',
      },
      {
        id: 'task-2',
        title: 'Persist trace spans to MongoDB Atlas',
        status: 'todo',
        assignee: 'm-ram',
      },
    ],
  },
  {
    id: 'col-doing',
    title: 'In Progress',
    status: 'doing',
    tasks: [
      {
        id: 'task-3',
        title: 'Wire LiveKit screen-share track',
        status: 'doing',
        assignee: 'm-karti',
      },
      {
        id: 'task-4',
        title: 'Harden collision verifier',
        status: 'doing',
        assignee: 'm-yahya',
      },
    ],
  },
  {
    id: 'col-review',
    title: 'In Review',
    status: 'review',
    tasks: [
      {
        id: 'task-5',
        title: 'Gemini handoff retry + backoff',
        status: 'review',
        assignee: 'm-ram',
      },
      {
        id: 'task-6',
        title: 'Edge-trigger conflict alerts in voice agent',
        status: 'review',
        assignee: 'm-karti',
      },
    ],
  },
  {
    id: 'col-done',
    title: 'Done',
    status: 'done',
    tasks: [
      {
        id: 'task-7',
        title: 'Add /health probe to API service',
        status: 'done',
        assignee: 'm-yahya',
      },
      {
        id: 'task-8',
        title: 'Deploy droplet behind Caddy + sslip.io',
        status: 'done',
        assignee: 'm-shakthi',
      },
    ],
  },
]

export async function fetchMembers(): Promise<Member[]> {
  return delay(MEMBERS.map((member) => ({ ...member })))
}

export async function fetchBoard(): Promise<Column[]> {
  return delay(
    BOARD.map((column) => ({
      ...column,
      tasks: column.tasks.map((task) => ({ ...task })),
    })),
  )
}
