import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FirebaseNotice } from '../components/auth/FirebaseNotice';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/auth';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function LoginPage() {
    const { login, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;
    const redirectTo = locationState?.from?.pathname ?? '/dashboard';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    useEffect(() => {
        if (user) {
            navigate('/dashboard', { replace: true });
        }
    }, [navigate, user]);
    function validate() {
        const nextErrors = {};
        if (!email.trim()) {
            nextErrors.email = 'Email is required.';
        }
        else if (!emailPattern.test(email)) {
            nextErrors.email = 'Enter a valid email address.';
        }
        if (!password) {
            nextErrors.password = 'Password is required.';
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitError('');
        if (!validate()) {
            return;
        }
        setSubmitting(true);
        try {
            await login(email, password);
            navigate(redirectTo, { replace: true });
        }
        catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Unable to login.');
        }
        finally {
            setSubmitting(false);
        }
    }
    return (<AuthLayout subtitle="Login to reach the protected dashboard, manage local tasks, and browse the users module." title="Welcome back to ProspectRoute.">
      <FirebaseNotice />
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input autoComplete="email" error={errors.email} label="Email" name="email" onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" type="email" value={email}/>
        <Input autoComplete="current-password" error={errors.password} label="Password" name="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" type="password" value={password}/>
        {submitError ? <p className="rounded-md bg-coral/10 px-3 py-2 text-sm font-semibold text-coral">{submitError}</p> : null}
        <Button disabled={submitting} type="submit">
          {submitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-muted">
        New here?{' '}
        <Link className="font-bold text-route-700" to="/signup">
          Create an account
        </Link>
      </p>
    </AuthLayout>);
}
