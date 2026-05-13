import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Card } from '../components/ui/Card';
import { Spinner } from '../components/ui/Spinner';
import { getUserName } from '../lib/format';
export function UserDetailsPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        let ignore = false;
        async function fetchUser() {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`https://dummyjson.com/users/${id}`);
                if (!response.ok) {
                    throw new Error('User request failed.');
                }
                const data = (await response.json());
                if (!ignore) {
                    setUser(data);
                }
            }
            catch {
                if (!ignore) {
                    setError('Unable to load this user.');
                }
            }
            finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }
        void fetchUser();
        return () => {
            ignore = true;
        };
    }, [id]);
    return (<div className="min-h-screen bg-surface">
      <Navbar />
      <main className="app-shell py-8">
        <Link className="text-sm font-bold text-route-700" to="/users">
          Back to users
        </Link>

        {loading ? (<Card className="mt-6 flex min-h-52 items-center justify-center p-8">
            <Spinner label="Loading user details"/>
          </Card>) : null}

        {error ? (<Card className="mt-6 p-8 text-center">
            <h1 className="text-2xl font-black text-ink">User unavailable</h1>
            <p className="mt-2 text-sm text-coral">{error}</p>
          </Card>) : null}

        {user && !loading ? (<Card className="mt-6 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-route-600">User details</p>
            <h1 className="mt-2 text-3xl font-black text-ink">{getUserName(user)}</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Detail label="Email" value={user.email}/>
              <Detail label="Phone" value={user.phone ?? 'Not available'}/>
              <Detail label="Company" value={user.company?.name ?? 'Not available'}/>
              <Detail label="Role" value={user.company?.title ?? 'Not available'}/>
              <Detail label="Location" value={[user.address?.city, user.address?.state, user.address?.country].filter(Boolean).join(', ') || 'Not available'}/>
            </div>
          </Card>) : null}
      </main>
    </div>);
}
function Detail({ label, value }) {
    return (<div className="rounded-md border border-line bg-surface px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
    </div>);
}
