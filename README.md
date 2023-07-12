This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Mjumbe is a clone of Meta's Messenger, a robust chat application used by Facebook users to communicate with one another.

Mjumbe was developed using NextJS 13, MongoDB, Pusher and Prisma. For the site's styling, the power of [Tailwind CSS](https://tailwindcss.com/docs/installation) to make it aesthetically pleasing for the users.

Authentication has been handled using Next Auth as well as the good old email and password appproach with the password being hashed using bcrypt.

Realtime messages and notifications are handled by Pusher.

With NextJS's lightning fast speeds and a PWA(Portable Web App) feature out of the box, Messagely allows its users to always stay connected wherever they are.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [Mjumbe](https://mjumbe.vercel.app) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
