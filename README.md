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

## First Time with Cursor 2.0? Try These Features

This project is a great starting point for learning Cursor's capabilities. Here are some features you can implement to practice:

### 1. Historical Tasks View
**Goal:** Implement the ability to view historical tasks (go back in time and see your tasks and their completion from previous days).

**Getting Started with Cursor:**
- Use the Plan Mode prompt to break down the implementation
- In development mode, use `@mock-todos.csv` to mock historical tasks
- Build with Composer to generate a complete implementation

**Suggested Prompt:**
```
Implement the ability to view historical tasks (i.e. go back in time and see my tasks and their completion from previous days)

When in dev mode, use @mock-todos.csv to mock the historical tasks
```

### 2. Dashboard View
**Goal:** Add a dashboard where you can see historical data on tasks completed.

**Try Cursor's Parallel Agents Feature:**
This is a perfect opportunity to try out [Cursor's Parallel Agents feature](https://cursor.com/docs/configuration/worktrees) with git worktrees! Instead of building this feature on your main branch, you can:

- Set up multiple git worktrees to explore different implementation approaches simultaneously
- Use Parallel Agents to have Cursor using multiple models working on their own versions of your codebase. 
- Compare the different implementations before deciding which to merge

**Suggested Prompt:**
```
Add a dashboard view where I can see historical data on tasks completed etc.
```

### 3. Dark Mode Toggle
**Goal:** Implement a dark mode toggle so users can switch between dark/light mode.

**Suggested Prompt:**
```
Implement a dark mode toggle users can apply to switch between dark/light mode
```

### After Making Changes
Once you've implemented and applied a feature, commit your changes using the below in an Agent:
```bash
/commit
```

This will help you practice Git integration within Cursor while building something useful!

