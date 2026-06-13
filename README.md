# EduZenix

EduZenix is a multi-tenant SaaS ERP platform designed for universities, colleges, and schools to manage academics, administration, and operations from a single unified system.

## Features

- Student Information System (admissions, enrollment, profiles, records)
- Academic Management (courses, classes, timetables, attendance)
- Examination & Grading
- Fee Management & Online Payments
- Staff & HR Management
- Library Management
- Hostel & Transport Management
- Notifications & Communication (email/SMS)
- Role-based Access Control (Admin, Staff, Teacher, Student, Parent)
- Multi-tenant Architecture for managing multiple institutions

## Tech Stack

**Frontend**

- React
- TypeScript
- Material UI (MUI)
- React Router
- Redux
- RTK Query

```
eduzenix/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── features/
│   │   ├── store/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kkanandkarn/EduZenix-Frontend.git
cd EduZenix-Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the frontend root:

```
VITE_API_BASE_URL = "http://localhost:8000/api"
VITE_NODE_ENV = "development"
```

## Available Scripts

- `npm run dev` – Run the app in development mode
- `npm run build` – Build the app for production
- `npm run lint` – Run linter

## Roadmap

- [ ] Multi-tenant onboarding flow
- [ ] Role-based dashboards
- [ ] Attendance & grading modules
- [ ] Fee & payment gateway integration
- [ ] Mobile responsive UI
- [ ] Reports & analytics

## Contact

For queries or support, reach out via GitHub Issues.
