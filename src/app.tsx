import { useEffect, useState } from 'react'
import { Layout } from './layout'
import { Board } from './components/Board'
import { fetchBoard, fetchMembers } from './lib/api'
import type { Column, Member } from './lib/types'

export function App() {
  const [columns, setColumns] = useState<Column[]>([])
  const [members, setMembers] = useState<Member[]>([])
  const [activeId, setActiveId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function load() {
      const [board, team] = await Promise.all([fetchBoard(), fetchMembers()])
      if (!active) return
      setColumns(board)
      setMembers(team)
      setActiveId((current) => current || board[0]?.id || '')
      setLoading(false)
    }
    load()
    return () => {
      active = false
    }
  }, [])

  return (
    <Layout
      title="PodBoard"
      members={members}
      columns={columns}
      activeId={activeId}
      onSelect={setActiveId}
    >
      {loading ? (
        <p className="board-loading">Loading board…</p>
      ) : (
        <Board columns={columns} members={members} />
      )}
    </Layout>
  )
}
