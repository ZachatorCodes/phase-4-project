# BunkTrails

BunkTrails is a web application that can be used to store information about specific outdoor use trails, as well as associated reviews of those trails. Trails and reviews can only be created by registered users, and each user can only review each trail once.

This repository contains both the frontend and backend code required to get the application running.

## Technologies Used

* Ruby - Version 3.2.2

* Ruby on Rails - Version 7.0.8

* React - Version 8.2.0

* BCrypt - Version 3.1.0

* React Router - Version 6.16.0

## Installation

1. To install the application, `fork` and `clone` this repository to your local device. Make sure to `fork` the repository before you `clone` it.

2. `cd` into the folder of the cloned repository, and run `bundle install`. This will install the backend dependencies.

3. Run `npm install --prefix client`. This will install the frontend dependencies.

4. Run `rails db:migrate` and `rails db:seed` to migrate and seed the database. If any errors occur during this step, run `rails db:reset` to recreate the database from the migrations and reseed the data, and then proceed directly to step 5.

5. Run `rails s` to start the backend server.

6. In another terminal window, `cd` into the folder of the cloned repository and run `npm start --prefix client` to start the frontend server.

NOTE: The frontend server and the backend server need to be run in seperate terminal windows.

If all goes well, you should be able to see the app locally in your browser at `http://localhost:4000/`