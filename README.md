# The Mental-Buddy App

## The Idea Behind This Project:

Everyone knows it and everyone hates it! The day is far too short, and there are still so many things to do. The dishes are waiting, the doctor's appointment is just around the corner and ...oh yes... didn't I have another appointment at the city hall?

The idea is to give the user a good feeling at first. Once he or she is sufficiently motivated, it is a matter of entering his or her tasks and diary- entries.

## Screenshots

![App-Screenshot](./src/App-Screenshot.png)

## Short Movie

<p align="center">
<img src="./src/movie.gif" width="160"/>
</p>

## Start-Page

The introduction: a few motivational quotes. No more and no less. The goal is to get the user in the mood for his upcoming tasks.
Enough sayings looked at, smiled here and there, it goes on.

## Tasks

The user now has here (of course in the best of moods), the possibility to create his tasks. The newest task always appears at the top. He has the possibility to edit, delete or mark the tasks as done at any time. A small counter indicates the tasks that are still open. Deleted and marked tasks are no longer counted.

## Diary

A simple diary? No no, of course not! Or maybe it is? In any case, this is about giving the user the opportunity to write down his positive experiences in the form of a diary entry. He can choose the date at any time and select his mood via a dropdown menu.

Everything is stored (as well as the tasks) in the localStorage. Worth mentioning is the sorting of the entries. The entry with the most current date is always on top.

## Dashboard

In short: this page shows the user a small overview. How many diary entries are available? How many tasks are there in total and how many could I complete?

The more tasks have been completed, the more stars the user receives. :)

## Tech Stack

- React.JS
- React Hooks
- Easy-Drag n Drop
- DatePicker by Ant Design
- React Router
- localStorage
- React Testing Library
- Vercel
- Jest
- Styled Components
- Storybook
- moment

## Demo

[Watch on Vercel](https://capstone-project-roan.vercel.app/)

## Project setup

- clone this repository
- install all npm dependencies
- `npm install`
- `npm start` and the App run`s in DevMode
  open on: http://localhost:3000 to view in Browser
- Start Storybook with `npm run storybook`
- To run unit and component tests npm `npm test`
- Create a build ready for deploying: `npm run build`
