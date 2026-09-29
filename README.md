# Habit Tracker

A small React app built to practice using the major React hooks in a real project. The app lets users add habits, mark them complete, delete them, and track how many habits are finished. { useState(), useEffect(), useMemo(), useRef(), useCallback }

## Project goal

This project was created as a learning exercise to demonstrate how core React hooks are used together in a simple but functional application.

## Features

- Add a new habit
- Mark habits as completed or incomplete
- Remove habits
- Track the number of completed habits
- Save habits in localStorage so they persist across refreshes

## React hooks used

- useState: manages habits, input text, and app state
- useEffect: syncs habits to localStorage whenever state changes
- useRef: keeps focus on the input after adding a habit
- useMemo: calculates the completed habits count efficiently
- useCallback: memoizes event handlers for cleaner and more reusable logic

## Tech stack

- React
- Vite
- JavaScript

## Getting started

1. Install dependencies:
   npm install
2. Start the app:
   npm run dev
3. Open the local Vite URL in your browser

## Build

To create a production build:

npm run build

## Notes

This project is intentionally simple and focused on learning React state management and hook usage rather than complex app architecture.
