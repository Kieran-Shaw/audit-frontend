# Audit Frontend

A modern web application for managing and conducting audits, built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- ESLint

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kieran-Shaw/audit-frontend.git
cd audit-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server (using vercel):
```bash
vercel dev
```

The application will be available at `http://localhost:5173`

### Building for Production

When we make a PR, the build is automatically deployed to vercel first in the `preview` environment.

When we merge to `main`, the build is automatically deployed to vercel in the `production` environment.

## Development

- `npm run dev` - Start development server locally without vercel
- `vercel dev` - Start development server locally using vercel

## Project Structure

```
audit-frontend/
├── src/           # Source files
├── public/        # Static assets
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request
