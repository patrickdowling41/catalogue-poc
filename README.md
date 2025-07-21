# Catalogue - Proof of Concept

## Purpose

The purpose of this Proof of Concept is to solve the below issues with Officeworks Catalogue App:
- Oversized bundle
- 50 Minute CI/CD Pipeline
- Disorganised codebase

## The Tech Stack
- Remix (Micro frontends)
- Express Backend For Frontend (BFF)
- Jest (Unit Testing)
- Playwright (E2E Testing)
- NX (Monorepo tooling)
- Github Actions (CI/CD)

## Pre-requisites

Install Dependencies:
```sh
npm i
```

## Local setup

To run the dev server for your app, use:

```sh
npm run dev
```

## Add new Micro-frontend

```sh
npx nx g @nx/remix:app [your-app-name]
```

## Add a new library

```sh
npx nx g @nx/react:lib mylib
```