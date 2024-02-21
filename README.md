This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

## Approch

In this project, we adopt a layered approach by encapsulating MUI form elements into separate elements like slider.element.tsx, auto-complete.element.tsx, and radio-group.element.tsx. This architecture enables easy replacement of third-party components across the codebase. For instance, if we need to switch from MUI AutoComplete to another library, modifications in the element files suffice, streamlining maintenance. This can also be done using workspaces which is a concept of monorepos.

## Naming Convention
For all naming convention I follow this approch:

**[name].[alias].[extension]**

e.g header.component.tsx, radio.element.tsx, test.action.ts, test.reducer.ts
