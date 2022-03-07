# Object-Oriented Programming Challenge: Team Profile Generator

## Description
---
This weeks challenge was to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

As testing is a key factor, each individual team member has a unit test to show functioning code.

### User Story
______
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria
___

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Installation
______

To use this Team Profile Generator, you can clone the SSH Key from the GitHub Repository, and using the Terminal of your choice, create a directory. You can also download the ZIP File.

## Usage
____________

To initialize the application, type the following command:

```
Node index.js
````
The application will initialize and ask the user a series of questions, and generate a README File based on said user response.

## Packages
______________

Packages requried to be installed:

```
npm inquirer
npm jest
```

## Video Walkthrough
______

https://drive.google.com/file/d/1rpFtXVToJuTucqiUFdMuMVN0S_l-5TNA/view


## GitHub
________________

GitHub URL https://github.com/BDJS0033/Team-Profile-Generator