# Burger
### Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page. Each burger in the waiting area is also attached a Devour it! button. When the user clicks "Devour It", the burger will move to the right side of the page. Every burger is stored in a database, whether devoured or not.

### Live Link
Eat-Da-Burger is deployed with Heroku at: https://burger-lounge-app.herokuapp.com/

### Under the Burger Bun
Eat-Da-Burger is designed using the the **M**odel **V**iew **C**ontroller mothodology. 
* **Model**
The model consists of a homemade orm which includes the burger's three key methods:
  1. selectAll - This method queries the database and retrieves all of the burgers, then displays them on the page.
  2. insertOne - This method is called when a user submits a form. It queries the database and inserts the new record and also updates the UI by adding the new burger.
  3. updateOne - This method is called upon when a user clicks to devour a burger. It queries the database with the id of the selected burger and changes it's devoured status to true. The UI is updated to reflect this change.
* **View**
The view portion of the application utilizes jQuery, AJAX, the handlebars framework and css to provide a user interface that is dynamically rendered based on requests from the client and responses from the server to those requests.
* **Controller**
The controller determines all of the routes between server and client and handles requests and responses using the methods created in our model.

### Technologies Used
#### Front-End
* CSS styling incorporating the Bootstrap Framework
* JavaScript and jQuery for UI functionality
* AJAX to post form data and communicate with the back-end

#### Back-End
* Server Environment: Node.js and Express
* Database: MySQL
* Node Package Managers: 
  - Express. This is the Node.js web application framework we use for routing
  - Express-Handlebars. This package handles our html templates that are rendered to the client
  - MySQL. The MySQL node.js driver allows us to easily interact with our app's database.

#### Accreditations
Burger Icon: <a href='https://www.freepik.com/free-vector/big-hamburger-icon-graphic-illustration_2631301.htm'>Designed by Rawpixel.com</a>
