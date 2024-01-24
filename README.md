# webappdevad320
Express web server for ad320

Run "npm start" from your terminal or use the included script.

----Implement Conditional Routing in an Express NodeJS Server 1----
The route for "/foo" where the response is either 'sometimes this' or 'and sometimes that' is based on a random number. If the random number is less than 0.5, the first response is sent; otherwise, the control is passed to the next route, and the second response is sent.

----Implement Regular Expressions in Express Route Paths 2----
The route for "/user" or "/username" will give a single response. The (name)? part makes the "name" optional, so both "/user" and "/username" will be handled by this route.

----Handling Route Parameters in Express 3----
This route uses :username to gather the value entered and store it in a variable that is then called by the JavaScript to use in the message. 
