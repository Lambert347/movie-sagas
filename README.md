# Project Name: Movie Saga

## Description

This app allows for a user to see the details of a selected movie, and also allows the user to post new movie information to the database.

The first initial steps were to fill out any gaps in the server routes and in the index file. I wanted to make sure that information could flow between the client and server without issue. This was an easy first few steps that also allowed me to think about how I wanted the various pages to look and function. For the router side, I filled out the request to get the movies from the database and a different get request to get the genres from the database. I also loosely filled out a router to get the specific details for a movie but heavy changes were made when I eventually got around to the details page itself. 

I also added reducers and sagas to the index file to handle the receiving and storing of information from the server. This process included the saga to handle the posting of new movies to the database. 

For the client side, I had two major projects to work on: the details page for each movie and the page to add a new movie. I decided to finish the add page first since it seemed like a good place to start. On this page, I added input fields for the title of the movie, the url for the movie poster which could be any image url, and a text area for a lengthy description. I also added a dropdown menu for the user to select a genre for the movie. For this dropdown menu to work, I created a selector to get the genre information from the store. With the basic logic working correctly, I added a cancel button and functionality for it to take the user back to the homepage and not add anything. 

The details page is where most issues arose from. The first major issue occurred in the movie list component regarding the id of the movie clicked on. The issue was that the movie id kept being sent to the index as undefined. The solution that I implemented was to move the movie information into an individual movie item and pass a movie prop into it. This seemed to work as the id for the movie was being correctly sent to the index. 

The second major issue was that information coming to the details page was an array of objects. For movies that only had more than one genre, this could mean several objects of nearly identical information except for the genre information. This is because of the way that I set up my queryText in my router to get movie details. I did figure out a workaround for this issue. When displaying the title, description, and poster, I displayed only those that were at the detail index of 0, which is the first object in that array. Since this information was identical, it only needed to be displayed once. For the genres, I mapped through the details array and rendered each one to the dom. Finally, I added a return button to let the user go back to the homepage. 

The final major problem occurred at this point which was that the page kept loading before the details array was ready. This created an issue where the information being rendered was not ready and the page failed to compile. To solve this, I included a ternary operator to not load the page if the first object (details[0]) was undefined and the to load the page once it was defined. This seemed to resolve the problem which I confirmed through further testing. I cleaned up the code some and then implemented comments explaining my logic.

## Usage 
This app is fairly straightforward to use. The user can click on an image and is taken to the specific page for that image. There are clearly marked buttons that allow the user to return to the homepage at that point. Additionally, I included a nav bar that is present at all times to allow for easier navigation. The add movie page clearly describes what is supposed to go in each field and allows the user to back out of the operation at any point with the cancel button.  

## Built With Javascript, React, MaterialUi, Node, Redux, and HTML 

## Thanks to Prime Digital Academy for the instruction and knowledge to create this application 

## Support 
Email lambe347@umn.edu for any suggestions or problems. 



