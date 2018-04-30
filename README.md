CS 290.02 Relay
===
## Authors
Lucas Tiger Liu [ltl9] & Jeremy Chen [jc587]

## Overview
 **Collaborative Group Game Creation:** Have you ever struggled to find your motivation? Do you miss having your helicopter parents constantly hovering over your shoulder? Well we have the solution for you!
 
 Our application aims to create a peer-to-peer system that gamifies tasks of any nature (self-improvement, productivity, or debauchery, whatever you like!)
 
 The structure of our application resonates with some aspects of Scrum. Participants can vote on challenges and point values/rewards associated with these challenges. The more interesting aspects of our application will be found in the means of confirming the completion of challenges, analyzing/visualizing player/challenge data, and the structure of our data.
 
 
## Site Usage

-a fake admin button is provided on login so that you may test the site (without us having to disclose Google Account Login information)
Normally one would proceed to Login with Google (Through OAuth 2.0). This will log them in to their existing account or will make a new account for them.
One can also proceed as a guest (no login), but in this case they cannot play the game, only observe.

Google Accounts for testing - cs290a@gmail.com, password: iloveweb      cs290b@gmail.com, password: iloveweb

View different sections by clicking on the dashboard at the bottom of the page.

 

 
## Features

## Web Service / JSON Data Served
    JSON data from the game can be received by accessing the address https://todo-list-7368e.firebaseio.com/GameStats.
    This will return a JSON data format of a limited section of our database, the portion the project intends to share. Attempting to access other sections of the database will result in a "denied permission."
### Login/User Creation
#### Google OAuth (2.0)
We will use Google OAuth to let users create accounts and login with their Google accounts. This way Google will handle secure authentication of users.


### Game

#### Win Conditions

With a set deadline
* Number of Points: Whoever reaches a set goal for points by the deadline will win. 

* If no player reaches the goal in time: Whoever has the most points or tasks wins


#### Voting System
* Democratic - Measures pass with a simple majority of the players' votes.
#### Player Roles
* Game Master
    * The Game Master chooses the initial game settings, including the game type
    *
* Player
    * Can join the game by logging in with Google
    * Can complete tasks to obtain rewards
    * Can vote to approve or disapprove proposed tasks
    * Can help validate the completion of a task
    * Can propose a new game task, to be approved by the group. 
* Spectator Guest (No Login)
    * The spectator can view the standings of participants within those games. The spectator cannot participate.


### Task/Challenges
#### Creation
* In the democratic voting system, anyone can propose a task.
* A description of the task is provided.
* Deadline - Set a date for the deadline, chosen by a date picker.
#### Voting Period

Players vote to approve or reject task. A simple majority passes the task

### Task Confirmation
A player can submit a claim for task completion. There will be multiple means of confirming the completion of tasks. 

#### Evidence
The player must provide means of proving that the task was completed. Providing compelling evidence can help the user accumulate the necessary votes. Examples of evidence include:
* Image
* Location Data
* Text field for comments

#### Vote
* Democratic - Based on the evidence provided, other players will vote to confirm or deny completion of the task. A simple majority decides.

If the task is "confirmed," points are awarded to the player. The status of the task is updated accordingly.

If the task is "denied," no points are awarded and the task returns to the task board, where it can be claimed again



* The player stats dashboard will display scores ad stats


## Stack
* Vuetify
* Vue - Application will be component based. The main app component will allow for user registration and browsing of games. Within each game, there will be a game component, which consists of several task components and a leaderboard component. Relevant data will be loaded and updated for each game.
* Firebase - Will be integrated with Vue using VueFire, and used to store game data and user information. Will also be used in conjunction with several Google APIs. 
* Node
## Frameworks/External APIs
* Javascript D3 - Will be integrated with Vue, and used to create better data visualizations (i.e. displaying the leaderboard within a game, showing player statistics)
* Google Maps JavaScript API (https://developers.google.com/maps/documentation/javascript/tutorial) 
    * Collaborative Realtime Mapping with Firebase - Used within a game to define task locations. When creating a task players select a location on the map, and the marker is saved in Firebase, and can be viewed elsewhere.
    * Geolocation - Used to Display User/Device Position on Maps. When validating a task, providing the current location can be used as compelling evidence. 
    *Street View provides precise location based elements to the game as well as a great visual
* Google OAuth 2.0 - Useful for authenticating user login. Also will use user location data and calendar events.
* Google Sign-in - Another option for handling registration (https://developers.google.com/identity/choose-auth)
