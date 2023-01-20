# Uncle Tony's with Next.js

A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) including TypeScript and Tailwind CSS using [doc2.site](https://doc2.site) as the content source.

Uncle Tony's is a fictitious restaurant in San Francisco. 

## Live demo

https://uncle-tonys-nextjs.vercel.app/

## Content source

List of all published content and corresponding source for Uncle Tony’s.

Project: https://drive.google.com/drive/folders/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v
 
* Header fragment: [source](https://docs.google.com/document/d/1eI8oYDbwJJti_iDKieDLPVQQqR6UZsauwsslM8VRhOk/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/fragments/header)
* Footer fragment: [source](https://docs.google.com/document/d/1vMFAmGdksMvwagImT6uJFruOUi82wpSf24T7-xlhRac/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/fragments/footer)
* Contact fragment: [source](https://docs.google.com/document/d/1xszDWLDgmz73rL0UBFqUrtFaFpJGSlme9hak-Bo7HC8/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/fragments/contact)
* Home page: [source](https://docs.google.com/document/d/1e0qp65umpw48YH23wGJuUseWRm_49R5NmmhvnboDSag/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/)
* Location & hours page: [source](https://docs.google.com/document/d/1o0lWfMw81fMFtBlW5UhoM7tQDvJr4whdaKaYcZb04-Y/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/location-hours)
* Menu page: [source](https://docs.google.com/document/d/1B6Hm2GTmLcgSXRSG4fZ-pw11EH5Ji9jaNsfv2dNRIVE/edit) | [live](https://api.doc2.site/v1/docs/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v?path=/menu)
* Menu pizzas sheet: [source](https://docs.google.com/spreadsheets/d/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/edit#gid=0) | [live](https://api.doc2.site/v1/spreadsheets/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/0)
* Menu custom pizzas sheet: [source](https://docs.google.com/spreadsheets/d/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/edit#gid=728803939) | [live](https://api.doc2.site/v1/spreadsheets/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/728803939)
* Menu appetizers sheet: [source](https://docs.google.com/spreadsheets/d/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/edit#gid=741875796) | [live](https://api.doc2.site/v1/spreadsheets/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/741875796)
* Menu beverages sheet: [source](https://docs.google.com/spreadsheets/d/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/edit#gid=1592046842) | [live](https://api.doc2.site/v1/spreadsheets/live/1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v/14J339wZvnOj4QSqiZGxrZun1R6Mta4bkEJmVMdJkkGw/1592046842)   

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credentials

If required, setup your credentials by creating an `.env` file similar to `.env.example` and copy paste your doc2.site user email and secret.

If credentials are defined, the doc2.site workspace used is `dev` see [getWorkspace()](./utils/index.ts) for implementation details. 

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Resources

To learn more, take a look at the following resources:

- [doc2.site docs](https://doc2.site/documentation) - learn about doc2.site features for authors and developers.
- [Next.js docs](https://nextjs.org/docs) - learn about Next.js features and API.
