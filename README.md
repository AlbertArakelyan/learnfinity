# 📖 Learnfinity Plus

## 📝 About the project
A modern and user-friendly app for creating and sharing learning content only based on outer resources, found some great things on the internet then create an amazing Learning Path from them which will guarantee the desired skill.

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

### Versions
- node: `20.10.0`
- npm: `10.2.3`
- yarn: `1.22.21`

## 📦 Installation
_Note: make sure you have `.env` created from `.env.example` with appropriate variables._

_Note: Make sure you are using correct `node` and `yarn` versions._

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