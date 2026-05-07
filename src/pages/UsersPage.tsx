import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Spinner } from '../components/ui/Spinner';
import { getUserName } from '../lib/format';
import type { DirectoryUser } from '../types';

type SortMode = 'az' | 'za';

type DummyUsersResponse = {
  users: DirectoryUser[];
};

const pageSize = 8;

export function UsersPage() {
  const [users, setUsers] = useState<DirectoryUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('az');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let ignore = false;

    async function fetchUsers() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch('https://dummyjson.com/users?limit=100&select=firstName,lastName,email,phone,company,address');

        if (!response.ok) {
          throw new Error('Users request failed.');
        }

        const data = (await response.json()) as DummyUsersResponse;

        if (!ignore) {
          setUsers(data.users);
        }
      } catch {
        if (!ignore) {
          setError('Unable to load users. Please check your connection and try again.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    void fetchUsers();
    return () => {
      ignore = true;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    const nextUsers = users.filter((user) => {
      const name = getUserName(user).toLowerCase();
      return !query || name.includes(query) || user.email.toLowerCase().includes(query);
    });

    return nextUsers.sort((a, b) => {
      const result = getUserName(a).localeCompare(getUserName(b));
      return sortMode === 'az' ? result : -result;
    });
  }, [search, sortMode, users]);

  useEffect(() => {
    setPage(1);
  }, [search, sortMode]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const visibleUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="app-shell py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-route-600">API integration</p>
            <h1 className="mt-2 text-3xl font-black text-ink">Users Module</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Data is fetched from dummyjson.com and displayed with loading, error, search, sorting, and pagination states.
            </p>
          </div>
          <Link className="text-sm font-bold text-route-700" to="/dashboard">
            Back to My Tasks
          </Link>
        </div>

        <Card className="mt-6 p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_190px]">
            <Input
              label="Search by name or email"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users"
              value={search}
            />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Sort</span>
              <select
                className="min-h-11 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-route-600 focus:ring-2 focus:ring-route-100"
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                value={sortMode}
              >
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </label>
          </div>
        </Card>

        {loading ? (
          <Card className="mt-6 flex min-h-52 items-center justify-center p-8">
            <Spinner label="Loading users" />
          </Card>
        ) : null}

        {error ? (
          <Card className="mt-6 p-8 text-center">
            <h2 className="text-2xl font-black text-ink">Users could not load</h2>
            <p className="mt-2 text-sm text-coral">{error}</p>
          </Card>
        ) : null}

        {!loading && !error ? (
          <>
            <div className="mt-6 hidden overflow-hidden rounded-lg border border-line bg-white md:block">
              <table className="w-full border-collapse text-left">
                <thead className="bg-ink text-white">
                  <tr>
                    <th className="px-4 py-3 text-sm font-bold">Name</th>
                    <th className="px-4 py-3 text-sm font-bold">Email</th>
                    <th className="px-4 py-3 text-sm font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleUsers.map((user) => (
                    <tr className="border-t border-line" key={user.id}>
                      <td className="px-4 py-4 text-sm font-semibold text-ink">{getUserName(user)}</td>
                      <td className="px-4 py-4 text-sm text-muted">{user.email}</td>
                      <td className="px-4 py-4 text-sm">
                        <Link className="font-bold text-route-700" to={`/users/${user.id}`}>
                          View details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 md:hidden">
              {visibleUsers.map((user) => (
                <Card className="p-5" key={user.id}>
                  <h2 className="text-lg font-black text-ink">{getUserName(user)}</h2>
                  <p className="mt-2 text-sm text-muted">{user.email}</p>
                  <Link className="mt-4 inline-block text-sm font-bold text-route-700" to={`/users/${user.id}`}>
                    View details
                  </Link>
                </Card>
              ))}
            </div>

            {visibleUsers.length === 0 ? (
              <Card className="mt-6 p-8 text-center">
                <h2 className="text-2xl font-black text-ink">No users found</h2>
                <p className="mt-2 text-sm text-muted">Try a different name or email search.</p>
              </Card>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-muted">
                Showing {visibleUsers.length} of {filteredUsers.length} users
              </p>
              <div className="flex gap-2">
                <Button disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} variant="secondary">
                  Previous
                </Button>
                <Button
                  disabled={page === totalPages}
                  onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
