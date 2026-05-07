# ProspectRoute / 5-hour ENERGY Landing

This is a responsive React + Tailwind CSS test project. The public landing page follows the provided 5-hour ENERGY Figma/JPG design, while the private app includes Firebase Authentication, a protected task dashboard, and a users module powered by the DummyJSON API.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Firebase Authentication
- React Router
- LocalStorage for task persistence
- DummyJSON users API

## Features

- Responsive 5-hour ENERGY landing page with hero, product cards, animated featured product section, promo blocks, testimonials, FAQs, and footer
- Reusable Button, Input, Card, Modal, Toast, Navbar, and Footer components
- Firebase signup, login, logout, validation, and session persistence
- Protected routes for dashboard and users pages
- Users module with loading state, error state, search, sorting, pagination, and detail page
- Tasks module with create, read, update, delete, search, sorting, edit modal, delete confirmation, and toast notifications
- Tasks are scoped to the currently logged-in Firebase user

## Folder Structure

```txt
src/
  components/
    auth/        Auth layout, Firebase notice, protected route
    layout/      Navbar and Footer
    ui/          Reusable UI components
  context/       Auth context and hook
  features/
    landing/     Landing page components, data, and animation CSS
  lib/           Firebase setup and formatting helpers
  pages/         Landing, auth, dashboard, users, user details
  types.ts       Shared TypeScript types
```

## Setup

Install dependencies:

```bash
npm install
```

Create a local `.env` file from `.env.example`:

```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Enable Email/Password Authentication in Firebase Console.

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Notes

- Arabic support is not implemented yet because it was optional.
- The Figma MCP link was not directly accessible, so the landing page was built from the attached PDF/JPG design assets.
- The app builds successfully without Firebase values, but signup and login require a configured Firebase project.
