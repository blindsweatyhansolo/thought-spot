# ThoughtSpot

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contributions](#contributions)
* [Additional Information](#additional-information)

## [Description:](#table-of-contents)
ThoughtSpot is a faux social media back-end Node based application for performing CRUD functions on users, thoughts and reactions to thoughts, like those found on many current social media platforms. A user can post a new thought, have other users on their friends list, and react to posted thoughts. ThoughtSpot was created for learning purposes, with a focus on the NoSQL database **MongoDB**, and it's most popular ODM **Mongoose**.

_User Story:_
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## [Installation:](#table-of-contents)
This is a back-end application with no front-end implementation that requires Node.js and MongoDB to be pre-installed on your machine. *For information on how to install MongoDB please click [here](https://www.mongodb.com/docs/manual/installation/)*

1. Clone this repository onto your machine with `git clone`
2. From the root directory, install dependencies with `npm install`
3. Initialize server connection with `npm start`

## [Usage:](#table-of-contents)
Walkthrough Videos:
1. [Overview & Installation]()
2. [GET Routes]()
3. [POST Routes]()
4. [PUT / DELETE Routes]()

***

Start the database connection and server from the command line with `npm start`, then you can use a REST Client (Insomnia used in examples) to test endpoints:

**Finding all Users and Thoughts:**

![Demo gif of GET all routes](./assets/images/GET%20all%20-%20thoughtspot.gif)

**Finding individual Users and Thoughts:**

![Demo gif of GET single routes](./assets/images/GET%20single%20-%20thoughtspot.gif)

**Create new instances of Users, Friends, Thoughts and Reactions:**

![Demo gif of POST new user and friend routes](./assets/images/POST%20user%20friend%20-%20thoughtspot.gif)

![Demo gif of POST new thought and reaction routes](./assets/images/POST%20thought%20reaction%20-%20thoughtspot.gif)

**Update Users and Thoughts:**

![Demo gif of PUT routes](./assets/images/PUT%20routes%20-%20thoughtspot.gif)

**Delete Users, Friends, and Thoughts:**

![Demo gif of DELETE routes](./assets/images/DELETE%20routes%20-%20thoughtspot.gif)

## [Testing:](#testing)
As seen above, test API endpoints with a REST Client such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/)

## [Contributions:](#table-of-contents)
Contributions always welcome!

## [Additional Information:](#table-of-contents)
Technologies Used:
* Node.js
* Express.js
* NoSQL / [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

Other Packages Used:
* [nodemon](https://www.npmjs.com/package/nodemon)

_If you have any questions about the application, or would like to become a contributor, please contact me using the information below:_

[GitHub](https://github.com/blindsweatyhansolo)