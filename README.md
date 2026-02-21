# Shiuro

Shiuro is a lightweight, high-performance personal portfolio website built with Next.js. It features a modern, interactive "Windows-like" tabbed interface within a single-page scrolling architecture. The project is optimized for speed, accessibility, and easy deployment via GitHub Pages.

<div align="center">
  <img src="./public/profile.jpg" alt="Profile" height=100 style="border-radius: 50%;">
</div>

<div align="center">
  <h3><a href="https://pphui8.com">Live Demo</a> | <a href="https://github.com/pphui8/Shiuro">GitHub</a></h3>
</div>

---

## ✨ Features

- **🚀 Lighthouse 100 Score:** Optimized for performance, SEO, and accessibility.
- **⚡ Super Fast:** Built with Next.js 14 for lightning-fast loading and smooth transitions.
- **🪟 Interactive UI:** A unique "Windows-like" tabbed interface that supports reordering, opening new tabs, and internal navigation.
- **🌐 Easy Deployment:** Pre-configured for seamless deployment with GitHub Pages using GitHub Actions.
- **📊 3D Data Visualization:** Interactive 3D force-directed graphs for showcasing research or complex data.
- **📱 Responsive Design:** Fully responsive layout that works across desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [CSS Modules](https://github.com/css-modules/css-modules), [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Ant Design](https://ant.design/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/), [react-force-graph-3d](https://github.com/vasturiano/react-force-graph-3d)
- **Icons:** [Mingcute Icon](https://www.mingcute.com/)

## 📂 Project Structure

```text
src/
├── app/             # Next.js App Router entry points and global styles
├── (home)/          # Landing/Hero section (HomePage component)
├── (intro)/         # Main interactive section with tabbed interface
│   ├── (pages)/     # Individual page components (About, Code, Research, etc.)
│   ├── Address.tsx  # Interactive address bar component
│   ├── pages.ts     # Central registry for site content and navigation
│   └── Tab.tsx      # Reorderable tab component
└── public/          # Static assets (images, icons, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pphui8/Shiuro.git
   cd Shiuro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Deployment

This project is configured for **GitHub Pages**. To deploy:

1. Push your changes to the `main` branch.
2. The GitHub Action in `.github/workflows/nextjs.yml` will automatically build and deploy the site.
3. Ensure your `next.config.js` has the correct `output: 'export'` setting (handled automatically in production).

## 🎨 Customization

### Changing Content
Most of the site's content and navigation can be managed in `src/(intro)/pages.ts`. Add or remove objects in the `allPages` array to update the navigation menu.

### Personal Information
Update `src/(home)/page.tsx` with your name, profession, and social media links. Profile images can be replaced in the `public/` directory.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Special Thanks

Inspired by [Shiro](https://github.com/Innei/Shiro).
