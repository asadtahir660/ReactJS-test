import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseNotice } from '../components/auth/FirebaseNotice';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/auth';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function SignupPage() {
    const { signup, user } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
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
        if (!name.trim()) {
            nextErrors.name = 'Name is required.';
        }
        if (!email.trim()) {
            nextErrors.email = 'Email is required.';
        }
        else if (!emailPattern.test(email)) {
            nextErrors.email = 'Enter a valid email address.';
        }
        if (!password) {
            nextErrors.password = 'Password is required.';
        }
        else if (password.length < 6) {
            nextErrors.password = 'Password must be at least 6 characters.';
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
            await signup(name, email, password);
            navigate('/dashboard', { replace: true });
        }
        catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Unable to create account.');
        }
        finally {
            setSubmitting(false);
        }
    }
    return (<AuthLayout subtitle="Create an account with Firebase Authentication and start managing your own local task list." title="Start your ProspectRoute workspace.">
      <FirebaseNotice />
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input autoComplete="name" error={errors.name} label="Full name" name="name" onChange={(event) => setName(event.target.value)} placeholder="Your name" value={name}/>
        <Input autoComplete="email" error={errors.email} label="Email" name="email" onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" type="email" value={email}/>
        <Input autoComplete="new-password" error={errors.password} label="Password" name="password" onChange={(event) => setPassword(event.target.value)} placeholder="At least 6 characters" type="password" value={password}/>
        {submitError ? <p className="rounded-md bg-coral/10 px-3 py-2 text-sm font-semibold text-coral">{submitError}</p> : null}
        <Button disabled={submitting} type="submit">
          {submitting ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-muted">
        Already have an account?{' '}
        <Link className="font-bold text-route-700" to="/login">
          Login
        </Link>
      </p>
    </AuthLayout>);
}
