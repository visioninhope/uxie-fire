## Deployed at [https://uxie.vercel.app](https://uxie.vercel.app)

### Built using

- **Nextjs** App dir For the frontend and serverless api routes
- **Typescript** For type safety
- **Tailwind CSS** For styling
- **ShadcnUI** For components
- **Supabase** As the database
- **Prisma** As the ORM
- **Novel** for note taking

### Features:

- **Website**:
  - Note taking
  - Summarise PDFs
  - Chat and collab with other
  - Export highlights of your pdf

## TODOS

- make sure the datatypes used in the db works as expected
- replace novel editor with a simple markdown editor => something that stores data on state. => should be able to update values
- check if VerificationToken,session tables are even reqd after switching to jwt auth
- create onboarding flow => either the page nextauth provides for new registrations, or just bunch of modals on top of each page w. hasOnboarded stored on db/localstorage or smthn
