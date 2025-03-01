# Micro Frontend Dashboard

## Overview

The Micro Frontend Dashboard is a scalable, high-performance application built using the micro frontend architecture. This approach allows the application to be composed of multiple smaller, independently deployable modules, each responsible for a specific feature or functionality.

## Features

- **Modular Architecture**: The application is divided into multiple micro frontends, each responsible for a specific feature.
- **React Integration**: Uses React for building user interfaces.
- **LitElement**: Incorporates LitElement for creating lightweight and efficient web components.
- **Tailwind CSS**: Utilizes Tailwind CSS for styling.
- **Webpack Module Federation**: Enables dynamic loading and sharing of modules between micro frontends.
- **Routing**: Implements routing using `react-router-dom`.

## Project Structure

```plaintext
MicroFrontend/
├── micro-frontend-dashboard/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── MicroFrontendContainer.tsx
│   │   │   ├── MyButton.ts
│   │   │   └── NavigationBar.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── reportWebVitals.ts
│   │   ├── types/
│   │   │   ├── custom-elements.d.ts
│   │   │   └── micro_frontend.d.ts
│   ├── public/
│   │   ├── index.html
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── package.json
└── feature-module/
    ├── src/
    │   ├── components/
    │   │   ├── ...
    ├── public/
    │   ├── ...
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── webpack.config.js
    └── package.json
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RCCLNeelendra/MicroFrontend.git
   ```

2. **Navigate to each micro frontend folder and install dependencies:**

   ```sh
   cd MicroFrontend/micro-frontend-dashboard
   npm install

   cd ../feature-module
   npm install
   ```

### Running the Application

1. **Start the development server for the `micro-frontend-dashboard`:**

   ```sh
   cd MicroFrontend/micro-frontend-dashboard
   npm start
   ```

2. **In a separate terminal, start the development server for the `feature-module`:**

   ```sh
   cd MicroFrontend/feature-module
   npm start
   ```

3. **Access the application:**

   - Open your browser and navigate to `http://localhost:3000` to access the dashboard.

## Deployment

To deploy the application, you can follow the deployment steps for your chosen platform or hosting service. Ensure that each micro frontend is built and deployed independently.

### Building for Production

1. **Build the `micro-frontend-dashboard`:**

   ```sh
   cd MicroFrontend/micro-frontend-dashboard
   npm run build
   ```

2. **Build the `feature-module`:**

   ```sh
   cd MicroFrontend/feature-module
   npm run build
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.
