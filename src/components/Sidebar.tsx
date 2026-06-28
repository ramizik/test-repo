import type { Column } from '../lib/types'

interface SidebarProps {
  columns: Column[]
  activeId: string
  onSelect: (id: string) => void
}

export function Sidebar({ columns, activeId, onSelect }: SidebarProps) {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {columns.map((column) => (
          <li key={column.id}>
            <button
              type="button"
              className={
                column.id === activeId
                  ? 'sidebar-item sidebar-item-active'
                  : 'sidebar-item'
              }
              aria-current={column.id === activeId ? 'page' : undefined}
              onClick={() => onSelect(column.id)}
            >
              <span className="sidebar-item-title">{column.title}</span>
              <span className="sidebar-item-count">{column.tasks.length}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
