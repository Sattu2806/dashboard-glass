# Dashboard with Glassmorphism Effect

This repository contains a modern dashboard built with React (Next.js) that leverages a glassmorphism design aesthetic to deliver a sleek, transparent, and modern UI. The dashboard displays key analytics using interactive charts, dynamic property listings, and various UI components—all styled with a glass-like effect.

## Features

- **Glassmorphism Design**: Elegant, translucent UI panels with blurred backgrounds and subtle borders.
- **Interactive Analytics Cards**: Display key metrics such as sales, revenue, customer counts, and more.
- **Responsive Layout**: Optimized for various screen sizes with flexible grid layouts.

## Technologies Used

- **React / Next.js**: Frontend framework for building dynamic, server-rendered applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and implementing glassmorphism effects.
- **Recharts**: Charting library for creating responsive and interactive data visualizations.
- **React Icons**: Library for scalable vector icons.
- **Next/Image**: Optimized image component for faster image rendering.

# Dashboard with Glassmorphism Effect

## Installation

### Navigate to the project directory:
\`\`\`bash
cd dashboard-glassmorphism
\`\`\`

### Install dependencies:
\`\`\`bash
npm install
\`\`\`

### Run the development server:
\`\`\`bash
npm run dev
\`\`\`

The dashboard will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

\`\`\`
/components
  ├── AnalyticCard.tsx
  ├── ActiveListing.tsx
  ├── Revenue.tsx
  └── Properties.tsx
  └── InfoCard.tsx
  └── Mortage.tsx
\`\`\`

## Customizing Glassmorphism

The glassmorphism effect is achieved through custom CSS combined with Tailwind CSS utilities. For example, the \`.glass-4\` (or \`.o1-model\`) class applies:

- **Translucent Background:** A linear gradient transitioning from 20% to 30% opacity.
- **Blur Effects:** Uses \`backdrop-filter\` and \`-webkit-backdrop-filter\` for a frosted glass look.
- **Rounded Corners and Borders:** Subtle borders on selective sides and rounded corners enhance the modern design.

You can modify these styles in the CSS files to tailor the effect to your design preferences.

## Contributing

Contributions are welcome! If you have ideas or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Recharts:** For the charting library.
- **Tailwind CSS:** For enabling rapid and flexible UI development.
- **React Icons:** For providing scalable icons.
- The inspiration behind the glassmorphism design trend.