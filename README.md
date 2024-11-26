## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/StevenMolina22/icecream-shop.git
   cd icecream-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Documentation

This documentation provides a comprehensive guide to understanding, setting up, and contributing to the Icecream Shop project, an e-commerce website for selling ice creams.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Contributing](#contributing)
- [Learn More](#learn-more)

## Project Overview
The Icecream Shop project is an e-commerce website built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It allows users to view and order ice cream products, and includes features such as user authentication, product listing, and a responsive design.

## Getting Started
To get the development server running, follow these steps:

   
### Key Files
- **`src/app/page.tsx`**: Contains the main page layout and product listing logic.
- **`src/app/layout.tsx`**: Defines the root layout and metadata for the app.
- **`src/app/globals.css`**: Global CSS styles using Tailwind CSS.
- **`src/app/middleware.ts`**: Middleware for handling authentication logic.
- **`src/components/ui/card.tsx`**: UI components for displaying product cards.

## Key Features
- **User Authentication**: Middleware logic to check user authentication status.
- **Product Listing**: Fetches and displays products from an API endpoint.
- **Responsive Design**: Uses Tailwind CSS for styling and responsive design.
- **Interactive UI**: Includes buttons and links for ordering and booking tables.
- **Reusable Components**: Includes reusable components for cards and layouts.

## Contributing
We welcome contributions to improve the Icecream Shop project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request explaining your changes.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

For deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

This documentation provides a high-level overview of the Icecream Shop project. For detailed code and implementation, please refer to the source files in the repository.
