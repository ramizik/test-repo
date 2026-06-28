import type { Member, Task } from '../lib/types'

export function TaskCard({ task, member }: { task: Task; member?: Member }) {
  return (
    <article className="task-card">
      <p className="task-card__title">{task.title}</p>
      {member ? (
        <span
          className="task-card__assignee"
          style={{ backgroundColor: member.color }}
          title={member.name}
        >
          {member.initials}
        </span>
      ) : (
        <span className="task-card__assignee task-card__assignee--unassigned" title="Unassigned">
          ?
        </span>
      )}
    </article>
  )
}
