# Pokémon App

## Description

Pokémon App is a web application built with Next.js that enhances user experience by enabling users to browse, search, and view detailed information about Pokémon. It uses lazy loading and infinite scroll to efficiently manage data loading, making the app more performant on devices of all types. The data is sourced from PokeAPI.

## Features

- **Lazy Loading**: Pokémon data is loaded as the user scrolls, reducing initial load time and data usage.
- **Infinite Scroll**: Users can scroll through an "endless" list of Pokémon, which loads more items automatically as they reach the bottom of the list.
- **Detailed Pokémon Information**: Click on any Pokémon to see detailed stats, abilities, and other information.
- **Search Functionality**: Users can search for Pokémon by name, dynamically filtering the list.

## Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Radix-UI**: Unstyled, accessible components for building high-quality design systems and web apps.

## Installation

Follow these steps to get the project up and running locally:

### Prerequisites

- Node.js (v12.x or later)
- npm or Yarn

### Clone the Repository

```
git clone https://github.com/yourusername/pokemon-app.git
cd pokemon-app
```

### Install Dependencies
```
npm install
# or
yarn install
```

### Run the Application
```
npm run dev
# or
yarn dev
```

Navigate to http://localhost:3000 in your web browser to see the application in action.

### Usage
Browsing Pokémon
Access the main page which displays a continuously loading list of Pokémon as you scroll down.

### Searching for Pokémon
Type a Pokémon name in the search bar to filter the list based on your query. The list updates dynamically as you type.

### Viewing Pokémon Details
Click on any Pokémon in the list to view its detailed profile, including abilities, stats, and more.

#### API Reference
This application utilizes the PokeAPI for all data. For detailed information on the data provided, visit [PokeAPI](https://pokeapi.co/)
