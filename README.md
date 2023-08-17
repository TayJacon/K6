# K6
This repository was created for basic/intermediate learning of using K6.

## 💻 Pre-requisites

1. [Node.js](https://nodejs.org/) JS v16 or higher for API usage
2. [K6 Installation](https://k6.io/docs/get-started/installation/)
3. [MongoDB](https://cloud.mongodb.com/) for API usage - 

> **_MongoDB NOTE:_** 
1. Create a project
2. Create an user and password
3. Update the MONGO_URL in api/src/.env file => mongodb+srv://USER:PASSWORD@cluster0.3yi5vct.mongodb.net/UserDB?retryWrites=true&w=majority


## User API

## 🔖 Functional requirements

### Registration

- [X] Should return the IDs when registering a new user
- [X] Should return 201 when registering a new user
- [X] Should return 400 when trying to register without email and password
- [X] Should return 400 if the email is duplicated

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | unique user identifier                | email    | yes         |
| password | user's password                       | text     | yes         |

## 🔖 Non-functional Requirements

### Registration

- [ ] Successful registration should occur within 2 seconds
- [ ] Unsuccessful registrations should occur within 2 seconds
- [ ] Up to 100 simultaneous user registrations should be supported
- [ ] The error margin in registration should be at least 1%

## 🚀 Tecnologias

- [Node.js] - development platform
- [Express] - framework where the API was built
- [MongoDB] - Database (Non-relational)

## 👨🏻‍💻 How to run the project (API)

Execute the following commands to install the project's dependencies:

```sh
cd api
yarn install
yarn dev
```
## 👨🏻‍💻 How to run the K6 test

Run k6 with the following command:
```sh
k6 run script.js
```

Now run a load test with more than one virtual user and a longer duration:
```sh
k6 run --vus 10 --duration 30s script.js
```
Running a 30-second, 10-VU load test

---

# 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# Reference
Official repository: https://github.com/weareqacademy/curso-k6-basico