<<<<<<< HEAD
CS 290.02 Final Project Plan
===

## Authors
Lucas Tiger Liu [ltl9] & Jeremy Chen [jc587]

## Overview
 **Collaborative Group Game Creation:** Have you ever struggled to find your motivation? Do you miss having your helicopter parents constantly hovering over your shoulder? Well we have the solution for you!
 
 Our application aims to create a peer-to-peer system that gamifies tasks of any nature (self-improvement, productivity, or debauchery, whatever you like!)
 
 The structure of our application resonates with some aspects of Scrum. There will be boards of some form, where participants can vote on challenges and point values/rewards associated with these challenges. The more interesting aspects of our application will be found in the means of confirming the completion of challenges, analyzing/visualizing player/challenge data, and the structure of our data.
 
 
 
## Features

### Login/User Creation
#### Google OAuth (2.0)
We will use Google OAuth to let users create accounts and login with their Google accounts. This way Google will handle secure authentication of users.


### Game
#### Creation
* Game Name: 
* Invite Members: 
* Choose Game Type: 
* Define Win Conditions: 

#### Win Conditions

With a set deadline
* Number of Points: Whoever reaches a set goal for points by the deadline will win
* Number of Tasks Completed: Whoever reaches a set goal for number of tasks will win
* If no player reaches the goal in time: Whoever has the most points or tasks wins

With a static number of tasks
* Plurality with points
* Plurality of tasks
#### Voting System
* Democratic - Measures pass with a simple majority of the players' votes.
* Authoritarian - The Game Master decides and has final say in all matters.
#### Player Roles
* Game Master
    * The Game Master chooses the initial game settings, including the game type
    * Depending on game type, the Game Master may have additional powers (proposing tasks, confirming task completion)
    * This user can invite and remove players from the game
    * The Game Master is not a player
* Player
    * Can join a game through an invite from a Game Master
    * Can complete tasks to obtain rewards
    * Can vote to approve or disapprove proposed tasks
    * Can help validate the completion of a task
    * Can propose a new game task, to be approved by the group. 
* Spectator
    * The spectator can view private games by name, and view the standings of participants within those games. The spectator cannot participate.
* Guest (No Login)
    * No login required. Anyone can visit the site and look up public games by name, and view the standings of participants within those games
#### Adding Players
The Game Master can add new players to the game by email. Invited players will be sent an email.
### Task/Challenges
#### Creation
* In the democratic voting system, anyone can propose a task. In complete authoritarian mode, only the game master can create tasks.
* A description of the task must be provided.
* Deadline - Set a date for the deadline. By default, the game's deadline date is chosen as the task deadline date. 
* Tasks can be assigned to a specific player or can be for anyone
* Tasks can be repeatable, single-use, or with limited number of repeats
#### Voting Period
* Logistics
    * A deadline can be set for when tasks can no longer be proposed
    * An expiration date can be set for proposed tasks (will disappear from voting inbox if not approved/passes its expiration date)

* Democratic
    * Stage 1: Players vote to approve or reject task. A simple majority passes the task to Stage 2.
    * Stage 2: Players propose point values for the task, which are put into a poll. The top polling option becomes the task reward.
* Authoritatian
    * Model 1: Game master has absolute authority to create tasks, no other players can propose tasks
    * Model 2: Only game master has authority to create tasks, players will vote (in same fashion as Democratic) on approval
    * Model 3: Any player can propose tasks, but tasks are approved by just the Game Master

### Task Confirmation
A player can submit a claim for task completion. There will be multiple means of confirming the completion of tasks. 

#### Evidence
The player must provide means of proving that the task was completed. Providing compelling evidence can help the user accumulate the necessary votes. Examples of evidence include:
* Images
* Location Data
* Text field for comments

#### Vote
* Democratic - Based on the evidence provided, other players will vote to confirm or deny completion of the task. A simple majority decides.
* Authoritarian - The Game Master confirms or denies completion of the task

If the task is "confirmed," points are awarded to the player. The status of the task is updated accordingly.

If the task is "denied," no points are awarded and the task continues.

## End Game
* When an end game condition has been met, tasks can no longer be created or proposed, and a noticeable visual indicator will show that the game has been completed (for instance, a "you won" modal with an illustration, covering up the game board)
* The player stats dashboard will also be displayed (or made more prominent) to show player progression and other statistics from the game


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
* Integration with Google Calendar/Reminders for time-sensitive challenges (https://developers.google.com/calendar/overview)
    * Create Events - Game tasks that are assigned to a player will create a Google Calendar Event with the relevant information
* Google OAuth 2.0 - Useful for authenticating user login. Also will use user location data and calendar events.
* Google Sign-in - Another option for handling registration (https://developers.google.com/identity/choose-auth)
