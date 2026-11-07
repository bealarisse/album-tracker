# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Album Tracker

Album Tracker is a React web application that allows users
to discover music albums, preview tracks, and manage a
personal music collection.

## Live Website

[Visit Album Tracker](https://album-tracker-umber.vercel.app/)

## Features

- Search albums and artists.
- View album covers and details.
- Play 30-second music previews.
- Mini music player with playback controls.
- Save albums to a personal collection.
- Track listening status.
- Rate albums from 1 to 5 stars.
- Add personal notes.
- Filter and sort saved albums.
- Full-album playback option through Deezer.
- AI-powered album recommendations.

## Technologies Used

- React
- Vite
- JavaScript
- Context API
- localStorage
- iTunes Search API
- Deezer
- Google Gemini
- Vercel

## How to Run Locally

1. Clone the repository.
2. Install dependencies using npm install.
3. Create a .env.local file.
4. Add your Gemini API key.
5. Run npm run dev.

## Limitations

- iTunes provides 30-second previews.
- Collection data is saved only in the user's browser.
- Full Deezer playback requires appropriate account
  access and availability.

## Privacy

The AI feature sends saved album titles, artists, ratings,
and statuses to Google's Gemini API. Personal notes are
not sent.

## Disclaimer

This educational project is not affiliated with Apple,
Spotify, Deezer, or Google.