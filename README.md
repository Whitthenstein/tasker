# Tasker - Trello Clone

## Table of Contents

- [Tasker - Trello Clone](#tasker---trello-clone)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Built With](#built-with)
  - [Features](#features)
  - [Contact](#contact)

## Overview

[![Project Overview](/public/images/tasker-overview.jpg)](https://tasker-whitthenstein.vercel.app/)

_Live demo can be found [here](https://tasker-whitthenstein.vercel.app/)._

This is a project that aims to be a simple clone of the core functionality of the Trello website.

On tasker users can create boards, in style of a Kanban board.

<img src="/public/images/tasker-create-board.gif" width="75%" />

Once inside the board, they can create lists, add some cards and manipulate the cards. Manipulation can be moving them from a list to another, copy a card or delete a card.

<img src="/public/images/tasker-manipulate-cards.gif" width="75%" />

Once a user copies a card, we can see that both cards have different activity logs in the bottom, and have independent title and description from one another.

<img src="/public/images/tasker-card-copy.gif" width="75%" />

A board also has some menu options:

- Boards
- Activity
- Settings
- Billing

<img src="/public/images/tasker-board-menu.gif" width="75%" />

Users can also create additional Organizations, which will have their own Boards.

<img src="/public/images/tasker-create-another-org.gif" width="75%" />

Once an Organization on a Free Plan reaches the 5 Board limit cap, the user will be prompted to upgrade the Organization to a Pro plan.

<img src="/public/images/tasker-free-board-limit.gif" width="75%" />

The Pro Plan has no limit to the number of boards.

To test the Stripe implementation for the billing you can visit [this page](https://stripe.com/docs/testing) to learn how to use a dummy credit card.

<br>
<br>
This project was a great way to practice an implementation of Stripe payments, as well as practice other skills I've already acquired in Typescript, React, Next, and TailwindCSS.

<!-- TODO:
    1. Describe my overall experience in a couple of sentences.
    2. List a few specific technical things that I learned or improved on.
    3. Share any other tips or guidance for others attempting this or something similar.
 -->

### Built With

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## Features

- Auth
- Organizations / Workspaces
- Board creation
- Unsplash API for random cover images
- Activity log for entire organization
- List creation, rename, delete, drag & drop reorder and copy
- Card creation, description, rename, delete, drag & drop reorder and copy
- Card activity log
- Board limit for every organization
- Stripe subscription for each organization to unlock unlimited boards
- PostgreSQL DB (Supabase)
- Prisma ORM
- shadcnUI & TailwindCSS

## Contact

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joao-m-branco/)

[My Portfolio Website](https://whitthenstein.vercel.app/)

<!-- TODO: Include icons and links to your RELEVANT, PROFESSIONAL 'DEV-ORIENTED' social media. LinkedIn and dev.to are minimum. -->
