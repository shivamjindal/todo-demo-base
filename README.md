# Todo App

A modern, clean todo app built with React, TypeScript, and shadcn/ui components. Features local storage persistence and a beautiful, minimalist design.

## Features

- ✅ View today's task list
- ➕ Add new tasks
- 🗑️ Delete tasks
- ☑️ Mark tasks as completed
- 💾 Automatic local storage persistence
- 🎨 Modern, clean UI with shadcn/ui components

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## How It Works

- Tasks are automatically filtered to show only today's items
- All tasks are persisted in browser local storage
- Tasks from previous days are preserved but hidden from the current view
- The app displays a completion counter showing how many tasks are done

