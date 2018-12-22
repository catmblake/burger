# Burger
### Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page. Each burger in the waiting area is also attached a Devour it! button. When the user clicks "Devour It", the burger will move to the right side of the page. Every burger is stored in a database, whether devoured or not.

### Under the Burger Bun
Eat-Da-Burger is designed using the the **M**odel **V**iew **C**ontroller mothodology. 
* **Model**
The model consists of a homemade orm which includes the burger's three key methods:
  1. selectAll - 
  2. insertOne -
  3. updateOne -
* **View**
The view portion of the application utilizes the handlebars framework along with css to provide a user interface that is dynamically rendered based on requests from the client and responses from the server to those requests.
* **Controller**
The controller determines all of the routes between server and client handles requests and responses using the methods created in our model.

### Technologies Used
#### Front-End
The following node package managers to process requests:
* Express
  - This is the Node.JS web application framework we use for routing
* Express-Handlebars
  - This package handles our html templates that are rendered to the client
* MySQL
  - The MySQL node.js driver allows us to easily interact with our app's database.
  
### Burger in Action

#### Accreditations
Burger Icon: <a href='https://www.freepik.com/free-vector/big-hamburger-icon-graphic-illustration_2631301.htm'>Designed by Rawpixel.com</a>
