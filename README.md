# 🌤️ Weather App

A sleek, responsive Weather App built with **Next.js**, **Tailwind CSS**, and **i18n routing**. It displays real-time weather information including temperature, current time, and day. The app also supports dark/light mode and multi-language routing using [next-intl](https://intl.dev/docs/getting-started/app-router/with-i18n-routing).

> 🖼️ [Live Demo](https://weather-app-sable-ten-91.vercel.app/en)

## ✨ Features

- 🌡️ Real-time temperature display
- 🕒 Live time and day based on location
- 🌓 Dark and Light mode toggle
- 🌐 Internationalization (i18n) with support for English and Arabic
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 App Router](https://nextjs.org/)
- **Styling:** Tailwind CSS
- **i18n:** [next-intl](https://intl.dev/)
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ayman-ezzeldin/weather-app.git

# Navigate to the project directory
cd weather-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🌐 Available Routes

- `/en` – English version  
- `/ar` – Arabic version

## 📁 Folder Structure

weather-app/
│
├── app/                # Next.js app router structure
│   ├── [locale]/       # Localized routes (en, ar)
│   ├── layout.tsx      # App layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Tailwind and global styles
├── next.config.js      # Next.js config with i18n
└── tailwind.config.js  # Tailwind setup



## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built by [Ayman Ezzeldin](https://github.com/ayman-ezzeldin) with ❤️
