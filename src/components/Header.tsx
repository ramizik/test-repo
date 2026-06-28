import type { Member } from '../lib/types'

interface HeaderProps {
  title: string
  members: Member[]
}

export function Header({ title, members }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <ul className="header-members">
        {members.map((member) => (
          <li
            key={member.id}
            className="member-pill"
            style={{ backgroundColor: member.color }}
            title={member.name}
          >
            {member.initials}
          </li>
        ))}
      </ul>
    </header>
  )
}
