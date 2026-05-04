# ✨ Gayatri Mishra — Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS v4**. Designed with a clean, startup-style aesthetic featuring a sapphire blue + silver theme with full dark mode support.

🔗 **Live:** [gayatrimishra.vercel.app](https://gayatrimishra.vercel.app) &nbsp;|&nbsp; **GitHub:** [github.com/gayatrimishraa](https://github.com/gayatrimishraa)

---

## 🖼️ Sections

| Section | Description |
|---------|-------------|
| **Home** | Animated hero section with intro and call-to-action |
| **About** | Background, education, and technical expertise |
| **Skills** | Tech stack and tools with visual categorization |
| **Projects** | Featured work — Sanjeevni, NEXEL, RTaaS |
| **Contact** | EmailJS-powered contact form with toast notifications |

---

## 🚀 Featured Projects

- **Sanjeevni** — Personal healthcare management app (React, Node.js, MongoDB)
- **NEXEL** — Intelligent cloud deployment platform with AI diagnostics (React, TypeScript, AWS ECS, PostgreSQL)
- **RTaaS** — Red Team as a Service — cloud-native cybersecurity testing platform (Python, Flask, AWS, Docker)

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Email:** EmailJS
- **UI Utilities:** clsx, tailwind-merge, class-variance-authority
- **Deployment:** Vercel

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/gayatrimishraa/portfolio-react-tailwind.git
cd portfolio-react-tailwind

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🔐 Environment Variables

Create a `.env` file in the root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> These must also be set in your **Vercel project settings** under Environment Variables.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── HomeSection.jsx
│   ├── ProjectSection.jsx
│   ├── SkillsSection.jsx
│   ├── StarBackground.jsx
│   ├── ThemeToggle.jsx
│   └── ui/
├── pages/
│   ├── Home.jsx
│   ├── Navbar.jsx
│   └── NotFound.jsx
├── lib/
├── App.jsx
├── index.css
└── main.jsx
```

---

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by [Gayatri Mishra](https://github.com/gayatrimishraa)
