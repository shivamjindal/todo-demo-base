import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Plus } from "lucide-react"

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: string
}

const STORAGE_KEY = "todos"

function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0]
}

function loadTodosFromStorage(): Todo[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const todos = JSON.parse(stored) as Todo[]
    const today = getTodayDateString()
    return todos.filter((todo) => todo.createdAt.startsWith(today))
  } catch {
    return []
  }
}

function saveTodosToStorage(todos: Todo[]): void {
  try {
    const existingTodos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    ) as Todo[]
    const today = getTodayDateString()
    const otherDaysTodos = existingTodos.filter(
      (todo) => !todo.createdAt.startsWith(today)
    )
    const allTodos = [...otherDaysTodos, ...todos]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allTodos))
  } catch {
    // Silently fail if storage is unavailable
  }
}

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromStorage)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    saveTodosToStorage(todos)
  }, [todos])

  const addTodo = () => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmedValue,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTodos([...todos, newTodo])
    setInputValue("")
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo()
    }
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Today's Tasks
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{today}</p>
          {totalCount > 0 && (
            <p className="text-sm text-muted-foreground">
              {completedCount} of {totalCount} completed
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={addTodo} size="icon" className="shrink-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {todos.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">No tasks for today</p>
              <p className="text-sm mt-1">Add a task to get started!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    todo.completed
                      ? "bg-muted/50 border-muted"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "line-through text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

