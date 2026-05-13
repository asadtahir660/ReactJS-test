export function getUserName(user) {
    if (user.name) {
        return user.name;
    }
    return [user.firstName, user.lastName].filter(Boolean).join(' ').trim();
}
export function formatDateTime(value) {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }).format(new Date(value));
}
