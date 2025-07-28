# Stelix Website

Stelix Website is the customer-facing web application for the Stelix platform. It provides users with an intuitive interface to access, interact with, and manage the core features and services offered by Stelix.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- 🚀 Built with [Next.js](https://nextjs.org/) for fast server-side rendering and routing.
- 💅 Styled using [Tailwind CSS](https://tailwindcss.com/) for rapid UI development.
- 🔐 Authentication with [NextAuth.js](https://next-auth.js.org/).
- 🗄️ Backend integration via [Supabase](https://supabase.com/).
- 📅 Advanced date handling and calendar UI using [date-fns](https://date-fns.org/) and [react-day-picker](https://react-day-picker.js.org/).
- 🎨 Modern UI components and icons via [@headlessui/react](https://headlessui.com/), [@heroicons/react](https://heroicons.com/) and [lucide-react](https://lucide.dev/).

## Tech Stack

**Core:**
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Supabase](https://supabase.com/)

**UI & Date:**
- [@headlessui/react](https://headlessui.com/)
- [@heroicons/react](https://heroicons.com/)
- [lucide-react](https://lucide.dev/)
- [date-fns](https://date-fns.org/)
- [react-day-picker](https://react-day-picker.js.org/)

**Development:**
- [ESLint](https://eslint.org/)
- [PostCSS](https://postcss.org/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MatinT-SA/stelix-website.git
   cd stelix-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your values.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` – Run the app in development mode.
- `npm run build` – Build the app for production.
- `npm start` – Start the production server.
- `npm run lint` – Lint your code.

## Project Structure

```plaintext
stelix-website/
├── pages/        # Next.js pages
├── components/   # React components
├── public/       # Static assets
├── styles/       # CSS and Tailwind styles
├── utils/        # Utility functions
├── package.json
└── ...
```

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a Pull Request.

Enjoy using Stelix and happy coding! 🚀
