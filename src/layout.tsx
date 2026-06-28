import type { ReactNode } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import type { Column, Member } from './lib/types'

interface LayoutProps {
  title: string
  members: Member[]
  columns: Column[]
  activeId: string
  onSelect: (id: string) => void
  children: ReactNode
}

export function Layout({
  title,
  members,
  columns,
  activeId,
  onSelect,
  children,
}: LayoutProps) {
  return (
    <div className="layout">
      <Header title={title} members={members} />
      <div className="layout-body">
        <Sidebar columns={columns} activeId={activeId} onSelect={onSelect} />
        <main className="layout-main">{children}</main>
      </div>
    </div>
  )
}
