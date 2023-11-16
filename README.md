# The-Pursuit-To-Fitness
Built With React

# Instructions
1. Clone the repo
2. npm install

Back-end repo : https://github.com/yulondawyatt/the-pursuit-to-fitness-backend
Trello link : https://trello.com/b/x6drXd98/the-pursuit-to-fitness
Excalidraw is in  public folder.
Deployed frontend :
Deployed backend :

(1) NavBar
* The NavBar allows me to navigate to the index, new entry or homepage.

(2) Index Page
* I can see an organized list of workouts with various data obtained from a database.

(3) New Page
* I can click on new fitness entry in the navbar to take me to a form that lets me create a new workout entry.
* Once a new workout entry is created, I am shown the full details of what I created.

(4) Show Page / delete button
* I can see full details of a single workout along with having the option to delete, edit or go back.
* Pressing delete will show me confirmation If i really want to delete the workout.

(5) Edit Page
* When I click on edit I can see a form that is pre-filled with the same information of that particular workout along with being able to update it.

(6) Intensity calculation
* Emojis change based on the number of days between 1-7.

(7) UX/UI
* Used bootstrap to style every page, form, and button, along with adding background

(8) Stretch Goals
* Used bootstrap for css and delete modal for better user experience.

* Implemented detailed error handling in the front-end application to provide helpful feedback for users during resource creation or update attempts. When a user tries to create or update a resource, the application checks the response from the server. If the server responds with an error status, the application displays a meaningful error message to the user, indicating what went wrong. This helps users understand issues such as validation errors, server unavailability, or any other unexpected problems, improving the overall user experience.

* Back-end application responds with a detailed RESTful response when a resource cannot be created, enhancing the communication between the front-end and back-end for better error diagnosis and resolution.

* Added a toggle to the front end to indicate whether or not a workout was completed. The application successfully updates the backend table based on this toggle.

* Implemented human-readable capitalization on new, edited, or existing entries. Additionally, used blur to ensure the number of workout days doesn't exceed 7. For instance, if a user inputs 9 and clicks outside the input field, it automatically switches to 7, providing a more user-friendly input experience. Both of these functionalities utilize helper functions from the utility.js file.

(9) Show approximate numbers of calories burned (Bonus Feature for the future)
* Use an external source to find correct information on workouts and burning calories.

Contact
Jesse Chong : https://github.com/jesse-chong
Yulonda Joy Wyatt : https://github.com/yulondawyatt

Acknowledgments
Background css template : https://blog.avada.io/css/background-patterns
Favicon credit : https://icons8.com/icons/set/favicon-gym