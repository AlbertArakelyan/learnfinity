# 📖 Learnfinity Plus

> A modern and user-friendly app for creating and sharing **Learning Paths** written in React/Typescript and Express/Nodejs.

![GitHub release (latest by date)](https://img.shields.io/github/v/release/AlbertArakelyan/learnfinity)
![Language](https://img.shields.io/badge/language-typescript%2C%20nodejs-blue)
![Platforms](https://img.shields.io/badge/platforms-Browser-green)
![License](https://img.shields.io/github/license/AlbertArakelyan/learnfinity)

![Screenshot](./screenshot.png)

**What is a Learning Path?**  
A learning path is a structured guide that helps individuals achieve specific educational goals by organizing topics and resources in a logical sequence. It offers several benefits:

- Provides a clear roadmap for mastering a subject.
- Breaks down complex topics into manageable steps.
- Encourages consistent progress and self-paced learning.
- Facilitates skill development with tailored resources.

---

## 📝 About the project
A modern and user-friendly app for creating and sharing learning content only based on outer resources, find some great things on the internet then create an amazing Learning Path from them which will guarantee the desired skill.

## 🔑 Key Features
- Works on **Browser**
- Databse in **the Cloud** for **Users**
- Public **Learning Path** creation
- Private **Learning Path** creation
- **Settings** and **Profile** pages
- **Dark Theme** 😊

## 🙏 Donations
LearnfinityPlus is a free, open source software developed in my (little) spare time. If you liked the project and would like to support further development, please consider making a small donation, it really helps :)

<a href="https://www.buymeacoffee.com/albertarakelyan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 108px !important;" ></a>

## 👨‍💻Contibutors
People who helped the project along the way, thank you to all of you!

[![Image](https://contrib.rocks/image?repo=AlbertArakelyan/learnfinity)](https://github.com/AlbertArakelyan/learnfinity/graphs/contributors)

## 🏰 Architecture
### Backend
Standard adjusted [Node.js](https://nodejs.org/en) + [Express.js](https://expressjs.com/) architecture based on different best practices with very good expressed **Data Access Layer**. For the database I have used [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM.

### Frontend
Standard [React](https://reactjs.org/) + [Redux](https://redux.js.org/) with [Typescript](https://www.typescriptlang.org/) usage. Has been used a modified **View-Container** architecture with special hooks providing all the business logic to the **Container** giving an advantage of not writing prop types and interfaces for each component but extend from the ReturnType of the hook.

### Tech Stack
<table>
  <thead>
    <tr>
      <th>Frontend</th>
      <th>Backend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" width="40" height="40" title="Typescript" alt="Typescript">
          <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="40" height="40" title="React" alt="React">
          <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" width="40" height="40" title="Redux" alt="Redux">
          <img src="https://testing-library.com/img/octopus-128x128.png" width="40" height="40" title="Testing Library" alt="Testing Library">
          <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" width="40" height="40" title="Sass" alt="Sass">
        </div>
      </td>
      <td>
        <div>
          <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width="40" height="40" title="Nodejs" alt="Nodejs">
          <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" width="40" height="40" title="Express" alt="Express">
          <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" width="40" height="40" title="MongoDB" alt="MongoDB">
          <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" title="Mongoose" alt="Mongoose" width="40" height="40"/>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 📦 Installation
_Note: make sure you have `.env` created from `.env.example` with appropriate variables._

_Note: Make sure you are using correct `node` and `yarn` versions._

### Versions
- node: `20.10.0`
- npm: `10.2.3`
- yarn: `1.22.21`

### Repo
- Clone the repo
```bash
git clone https://github.com/AlbertArakelyan/learnfinity.git
```

### Server
*in `server` directory*
- Install dependencies
```bash
yarn
```

- Start the server
```bash
yarn dev
```

The development server will start running at: `http://localhost:8000`

### Client
*in `client` directory*
- Install dependencies
```bash
yarn
```

- Start the client
```bash
yarn start
```

The development client will start running at: `http://localhost:3000`

[//]: # (## 🚀 How to use)
