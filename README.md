# Quantified Self

### Project by [Yohanan Assefa](https://github.com/yoasyo25) and [Aram Anderson](https://github.com/Aram-Anderson)

This is a frontend app built in Javascript/JQuery that interacts with [a backend](https://github.com/Aram-Anderson/quantified-self-BE) built in Node/Express/PostgreSQL/Knex.

Quantified Self is a calorie tracking app which allows a user to create foods, and add those foods to specific meals. Meals have a calorie goal, and there is a total daily calorie goal. Calorie totals are tallied for meals and daily goals asynchronously based on the goal and total consumed.

## To Set Up Locally

`git clone https://github.com/Aram-Anderson/quantified-self-starter-kit.git`. `cd quantified-self-starter-kit`. `npm install`, `npm start`.

By default, the app will call the our [live version](https://y-a-quantified-self-be.herokuapp.com/) on Heroku. You can find the repo for the backend [here](https://github.com/Aram-Anderson/quantified-self-BE). If you want to run both the frontend and backend locally, go to the backend repo and follow the instructions for setting up locally there. Change all instances of https://y-a-quantified-self-be.herokuapp.com in this repo to htpps://localhost:3000 to use a local backend.

## Contributing

Please fork this repo, and send one of us a message with what you'd like to add to the project. Once you've implemented your changes, make a PR and we will review it. 
