# Web Server

## Introduction

This project was built to complete the coding challenge from https://codingchallenges.fyi

## Goal

Refer to https://codingchallenges.fyi/challenges/challenge-webserver for more details regarding the goal of the challenge and what needs to be implemented.

I went further and added my personal touch by adding the ability to parse request body, query and id params. I also implemented the ability to validate path before executing the request. My server also has a router that is used to dispatch requests based on the endpoint at which the request is made.

## Usage

After downloading or forking the code, you are ready to start using the server. The only thing you need is Nodejs to be installed on your computer. 

The command 'npm start' will start the server in port 3000

The server can only handle GET requests with and without id parameter. Feel free to implement the ability to handle other HTTP methods.

Refer to routeValidator function to know which routes are valid routes or to add new routes.