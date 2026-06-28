# PodBoard

A lightweight team kanban board for tracking engineering work across a small team. Built as a single-page app with Vite, React, and TypeScript. Board and member data are served from an in-memory mock API (`src/lib/api.ts`) — no backend required to run the demo.

## Tech stack

React 18 · TypeScript · Vite

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Project structure

```
test-repo/
├── index.html
├── src/
│   ├── main.tsx              # entry point — mounts <App/> into #root
│   ├── app.tsx               # loads board + members, owns the active column
│   ├── layout.tsx            # Header + Sidebar + main content shell
│   ├── styles.css            # app styling
│   ├── components/
│   │   ├── Header.tsx        # title bar + team avatars
│   │   ├── Sidebar.tsx       # column navigation
│   │   ├── Board.tsx         # columns of task cards
│   │   └── TaskCard.tsx      # a single task with its assignee
│   └── lib/
│       ├── types.ts          # Task, Column, Member, TaskStatus
│       └── api.ts            # in-memory mock: fetchBoard(), fetchMembers()
└── package.json
```

## Team

| Engineer | Focus |
| --- | --- |
| Karti | Frontend / app shell |
| Yahya | Realtime / LiveKit |
| Ram | Graph / memory |
| Shakthi | Continual learning |

## Notes

Data is mock-only and resets on reload — swap `src/lib/api.ts` for a real endpoint to persist boards.
