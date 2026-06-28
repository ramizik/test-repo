import type { Column, Member } from '../lib/types'
import { TaskCard } from './TaskCard'

export function Board({ columns, members }: { columns: Column[]; members: Member[] }) {
  const memberById = new Map(members.map((member) => [member.id, member]))

  return (
    <div className="board">
      {columns.map((column) => (
        <section key={column.id} className="board__column">
          <header className="board__column-header">
            <h2 className="board__column-title">{column.title}</h2>
            <span className="board__column-count">{column.tasks.length}</span>
          </header>
          <div className="board__column-tasks">
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} member={memberById.get(task.assignee)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
