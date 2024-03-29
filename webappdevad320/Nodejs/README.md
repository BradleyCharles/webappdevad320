# webappdevad320
Express web server for ad320

Run "npm start" from your terminal or use the included script.

----Implement Conditional Routing in an Express NodeJS Server 1----
The route for "/foo" where the response is either 'sometimes this' or 'and sometimes that' is based on a random number. If the random number is less than 0.5, the first response is sent; otherwise, the control is passed to the next route, and the second response is sent.

----Implement Regular Expressions in Express Route Paths 2----
The route for "/user" or "/username" will give a single response. The (name)? part makes the "name" optional, so both "/user" and "/username" will be handled by this route.

----Handling Route Parameters in Express 3----
This route uses :username to gather the value entered and store it in a variable that is then called by the JavaScript to use in the message. 

----Handling Query Strings in Express 4----
http://localhost:3000/get?param1=Hello&param2=World.  /get will direct you to the correct route where the parameters can be entered and recieved. The address is broken down as such: ? param1 = Hello $ param2 = World.
The values Hello and World are assigned to variables param1 and param2.

----Configuring ESLint in a Node.js Project----
I followed the steps you provided to get ESLint installed. I used stack overflow and eslint.org to get the rules configured.
I had an issue with the rule that I used being outdated and I had to search through stack overflow posts to find a solution.
I can see how ESLint can be very useful in maintaining the format of my files and catching small mistakes that might not stop the code from running but might cause issues down the road, especially if there are multiple people working on the project.
