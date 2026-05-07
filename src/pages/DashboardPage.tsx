import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, TextArea } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { Toast } from '../components/ui/Toast';
import { useAuth } from '../context/auth';
import { formatDateTime } from '../lib/format';
import type { Task, TaskStatus } from '../types';

type SortMode = 'newest' | 'az';

const emptyTask = {
  title: '',
  description: ''
};

function getStorageKey(userId: string) {
  return `prospectroute:tasks:${userId}`;
}

function readSavedTasks(storageKey: string) {
  const savedTasks = window.localStorage.getItem(storageKey);

  if (!savedTasks) {
    return [];
  }

  try {
    return JSON.parse(savedTasks) as Task[];
  } catch {
    return [];
  }
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function DashboardPage() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [form, setForm] = useState(emptyTask);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [search, setSearch] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('newest');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Task | null>(null);
  const [toast, setToast] = useState('');
  const [loadedStorageKey, setLoadedStorageKey] = useState('');

  const userId = user?.uid ?? 'anonymous';
  const storageKey = getStorageKey(userId);

  useEffect(() => {
    setTasks(readSavedTasks(storageKey));
    setLoadedStorageKey(storageKey);
  }, [storageKey]);

  useEffect(() => {
    if (loadedStorageKey !== storageKey) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [loadedStorageKey, storageKey, tasks]);

  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase();
    const nextTasks = query ? tasks.filter((task) => task.title.toLowerCase().includes(query)) : tasks;

    return [...nextTasks].sort((a, b) => {
      if (sortMode === 'az') {
        return a.title.localeCompare(b.title);
      }

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [search, sortMode, tasks]);

  const completedCount = tasks.filter((task) => task.status === 'Completed').length;
  const pendingCount = tasks.length - completedCount;

  function validateTask(values: typeof emptyTask) {
    const nextErrors: Record<string, string> = {};

    if (!values.title.trim()) {
      nextErrors.title = 'Task title is required.';
    }

    if (!values.description.trim()) {
      nextErrors.description = 'Task description is required.';
    }

    return nextErrors;
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validateTask(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const now = new Date().toISOString();
    const nextTask: Task = {
      id: createId(),
      title: form.title.trim(),
      description: form.description.trim(),
      status: 'Pending',
      createdAt: now,
      userId
    };

    setTasks((current) => [nextTask, ...current]);
    setForm(emptyTask);
    setToast('Task created successfully.');
  }

  function handleStatusChange(taskId: string, status: TaskStatus) {
    setTasks((current) =>
      current.map((task) => (task.id === taskId ? { ...task, status, updatedAt: new Date().toISOString() } : task))
    );
    setToast('Task status updated.');
  }

  function handleEditSubmit(event: FormEvent) {
    event.preventDefault();

    if (!editingTask) {
      return;
    }

    const nextErrors = validateTask(editingTask);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setTasks((current) =>
      current.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              title: editingTask.title.trim(),
              description: editingTask.description.trim(),
              status: editingTask.status,
              updatedAt: new Date().toISOString()
            }
          : task
      )
    );
    setEditingTask(null);
    setErrors({});
    setToast('Task updated successfully.');
  }

  function handleDeleteTask() {
    if (!deleteTarget) {
      return;
    }

    setTasks((current) => current.filter((task) => task.id !== deleteTarget.id));
    setDeleteTarget(null);
    setToast('Task deleted.');
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="app-shell py-8">
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="grid content-start gap-4">
            <Card className="p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-route-600">Dashboard</p>
              <h1 className="mt-2 text-3xl font-black text-ink">My Tasks</h1>
              <p className="mt-2 text-sm leading-6 text-muted">
                Tasks are stored in localStorage and scoped to the logged-in user.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-md border border-line bg-surface px-3 py-3">
                  <p className="text-2xl font-black text-ink">{tasks.length}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Total</p>
                </div>
                <div className="rounded-md border border-line bg-surface px-3 py-3">
                  <p className="text-2xl font-black text-ink">{pendingCount}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Pending</p>
                </div>
                <div className="rounded-md border border-line bg-surface px-3 py-3">
                  <p className="text-2xl font-black text-ink">{completedCount}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">Done</p>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h2 className="text-xl font-black text-ink">Create Task</h2>
              <form className="mt-4 grid gap-4" onSubmit={handleCreateTask}>
                <Input
                  error={errors.title}
                  label="Title"
                  name="title"
                  onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                  placeholder="Follow up with new prospect"
                  value={form.title}
                />
                <TextArea
                  error={errors.description}
                  label="Description"
                  name="description"
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  placeholder="Add the next action or important context"
                  value={form.description}
                />
                <Button type="submit">Create Task</Button>
              </form>
            </Card>
          </aside>

          <section className="grid content-start gap-4">
            <Card className="p-4">
              <div className="grid gap-3 md:grid-cols-[1fr_190px]">
                <Input
                  label="Search by title"
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search tasks"
                  value={search}
                />
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink">Sort</span>
                  <select
                    className="min-h-11 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-route-600 focus:ring-2 focus:ring-route-100"
                    onChange={(event) => setSortMode(event.target.value as SortMode)}
                    value={sortMode}
                  >
                    <option value="newest">Newest first</option>
                    <option value="az">A-Z</option>
                  </select>
                </label>
              </div>
            </Card>

            {filteredTasks.length === 0 ? (
              <Card className="p-8 text-center">
                <h2 className="text-2xl font-black text-ink">No tasks found</h2>
                <p className="mt-2 text-sm text-muted">Create a task or adjust your search.</p>
              </Card>
            ) : (
              <div className="grid gap-4">
                {filteredTasks.map((task) => (
                  <Card className="p-5" key={task.id}>
                    <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-xl font-black text-ink">{task.title}</h2>
                          <span className="rounded-md border border-line px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                            {task.status}
                          </span>
                        </div>
                        <p className="mt-3 leading-7 text-muted">{task.description}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                          Created {formatDateTime(task.createdAt)}
                        </p>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-3 md:min-w-72 md:grid-cols-1">
                        <Button
                          onClick={() =>
                            handleStatusChange(task.id, task.status === 'Pending' ? 'Completed' : 'Pending')
                          }
                          variant="secondary"
                        >
                          Mark {task.status === 'Pending' ? 'Completed' : 'Pending'}
                        </Button>
                        <Button onClick={() => setEditingTask(task)} variant="secondary">
                          Edit
                        </Button>
                        <Button onClick={() => setDeleteTarget(task)} variant="danger">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Modal open={Boolean(editingTask)} onClose={() => setEditingTask(null)} title="Edit Task">
        {editingTask ? (
          <form className="grid gap-4" onSubmit={handleEditSubmit}>
            <Input
              error={errors.title}
              label="Title"
              onChange={(event) => setEditingTask((current) => (current ? { ...current, title: event.target.value } : current))}
              value={editingTask.title}
            />
            <TextArea
              error={errors.description}
              label="Description"
              onChange={(event) =>
                setEditingTask((current) => (current ? { ...current, description: event.target.value } : current))
              }
              value={editingTask.description}
            />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Status</span>
              <select
                className="min-h-11 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-route-600 focus:ring-2 focus:ring-route-100"
                onChange={(event) =>
                  setEditingTask((current) => (current ? { ...current, status: event.target.value as TaskStatus } : current))
                }
                value={editingTask.status}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1" type="submit">
                Save Changes
              </Button>
              <Button className="flex-1" onClick={() => setEditingTask(null)} variant="secondary">
                Cancel
              </Button>
            </div>
          </form>
        ) : null}
      </Modal>

      <Modal open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)} title="Delete Task">
        <p className="leading-7 text-muted">Are you sure you want to delete this task? This action cannot be undone.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button className="flex-1" onClick={handleDeleteTask} variant="danger">
            Delete Task
          </Button>
          <Button className="flex-1" onClick={() => setDeleteTarget(null)} variant="secondary">
            Cancel
          </Button>
        </div>
      </Modal>

      {toast ? <Toast message={toast} onDismiss={() => setToast('')} /> : null}
    </div>
  );
}
