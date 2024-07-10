Gluco Guide is an Integrated Heath Monitoring System for Diabetes Patients.

## Getting Started using Docker

- First [Install Docker](https://docs.docker.com/get-docker/) on your machine.

Build the project container with the following command:

```bash
docker-compose up --build
```

Run the container with the following command:

```bash
docker-compose up
# or
docker compose up --watch
```

Development: To view live changes in the code either run `docker compose up --watch` or press `w` after running the command `docker-compose up` from the terminal.

## Getting Started Locally

To start the project locallay make sure to have the following requirements installed in your machine.

- [Python](https://www.python.org/downloads/)
- [NodeJS](https://nodejs.org/en/download/source-code)
- `optional` [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

Then open your terminal and install the project packages using the following command:

```bash
yarn
# or
npm install
```

Run the project locally in development mode using the following command:

```bash
yarn fire
# or
npm run fire
```

## Collaborate to this project

- For collaboration you need to fork and `clone` or `dowload` the repository.

### How to Fork the repository

- Go to this page [GlucoGuide](https://fastapi.tiangolo.com/tutorial), there is a button named `Fork` in the top right corner of the page.

### How to Clone the repository

- Create a directory, for example `gluco-guide-diabetes-patients`.
- Enter in the newly created directory:

```bash
cd gluco-guide-diabetes-patients
```

- Clone the the repository manually into `gluco-guide-diabetes-patients` directory:

```bash
git clone https://github.com/firedev99/gluco-guide-diabetes-patients.git
```

### How to push codes into the repository

```bash
git add .
git commit -m "commit message"
git push -u origin master
```

### How to Merge or Sync update codes from the main repository (original repository):

To add upstream remote to the forked repository, run the following command

```bash
git remote add upstream https://github.com/firedev99/gluco-guide-diabetes-patients.git
```

To synchronized with the original repository, run the following command

```bash
git fetch upstream
git merge upstream/master
```

## Learn More

To learn more about HTML, CSS, JavaScript, and TailwindCSS take a look at the following resources:

- [HTML](https://www.w3schools.com/html)
- [CSS](https://www.w3schools.com/css)
- [JavaScript](https://www.w3schools.com/js)
- [TailwindCSS](https://tailwindcss.com/docs)

To learn more about ReactJS, take a look at the following resources:

- [ReactJS Reference](https://react.dev/reference/react) - learn about ReactJS features.
- [Learn ReactJS](https://react.dev/learn) - an interactive ReactJS tutorial.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about FastAPI, take a look at the following resources:

- [Learn FastAPI](https://fastapi.tiangolo.com/tutorial) - learn about FastAPI features.
