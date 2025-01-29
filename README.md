# Food Recipe App

This is a food recipe web application built using **React**, **TailwindCSS**, and **Vite**. It's a personal project aimed at practicing and refining skills in **frontend development**, focusing on the following technologies:

- **React** for building interactive user interfaces
- **TailwindCSS** for utility-first styling
- **Vite** for fast, modern web development setup
- **HTML/CSS** for overall layout and design
- **React Router** for navigation

## Features

- **Recipe Cards**: Displays a random recipe, with key information and links to detailed pages.

- **Responsive Design**: Fully responsive UI built with TailwindCSS, adapting to various screen sizes.

- **Survey Form**: An interactive form to gather user feedback about the app, leveraging React state and controlled components.

- **Dynamic Routing**: Use of React Router to manage different pages (home, about, survey).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for creating custom designs quickly.
- **Vite**: A fast build tool and development server for modern web apps.
- **React Router**: For handling navigation and dynamic routing.
- **GitHub Pages**: For hosting the app on the web.

## Setup

To get started with this project, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/fredh2o/food-recipe.git
cd food-recipe
```

````

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server

Start the Vite development server to view the app locally:

```bash
npm run dev
```

This will start the app on [http://localhost:3000](http://localhost:3000).

## Build for Production

To create a production-ready build of the app, run:

```bash
npm run build
```

This will generate optimized and minified files in the `dist` folder.

## Deploy to GitHub Pages

To deploy the app to GitHub Pages, use the following command:

```bash
npm run deploy
```

This will deploy your app to the `gh-pages` branch and make it live at the following URL:

[https://fredh2o.github.io/food-recipe/](https://fredh2o.github.io/food-recipe/)

## Project Structure

The project follows a simple file structure:

- **src/**: Contains all the source files for the app.
  - **components/**: Reusable React components like `RecipeCard`, `SurveyForm`, etc.
  - **pages/**: Contains page components like `AboutUs`, etc.
  - **App.jsx**: The root component that sets up routing and the main layout.
  - **index.css**: Global styles including TailwindCSS configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
````
