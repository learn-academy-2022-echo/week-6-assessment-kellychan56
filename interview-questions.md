# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Since the foreign key is a column that would be in the students table, this is a change to the database that requires a migration. To add a column in the students table, a new migration needs to be generated in rails. Name the migration after what is being changed, so in this case it can be called add_foreign_key_column_to_students. When this new migration is generated, go to the migrations folder in rails and open up the migration file. Inside the migration class and change method, use the keyword add_column to add a new column for the foreign key. This foreign key column would be called cohort_id since it will be referring to the ids from the cohort table. Each student in the students table will be connected to a cohort.

Researched answer: Migrations are used to make a change in the database. We first generate a migration in the terminal, naming it after what we are doing. In this case, we are adding a foreign key column to the database. After generating the migration a new file should have been created in the migrate folder. In this file, the class is named after the migration title, and there is a change method within the class. Inside the change method, use the keyword add_column to add a new column to a data table. Since Cohort is the model that has many students, the Student model is the one that belongs to Cohort and will have the foreign key. So we add a column to the student table, and the foreign key column will be named cohort_id since the foreign key of the students refers to a specific cohort id, and the datatype of the column is an integer. Once this migration is done, we complete the migration in the terminal with $ rails db:migrate.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that are always passed params are show, create, update, destroy. For show and destroy, they need to be passed parameters (typically the id) to know which data entry needs to be retrieved and shown or destroyed. With the create method, there are columns in the database that need information to be filled, so there are parameters that will take arguments to fill those columns. The same goes for the update route. In order to change and update the database, there needs to be parameters that will take in information that will be changed in the database.

Researched answer: The RESTful routes that must always be passed params are show, edit, update, and destroy. For show, edit, update and destroy, they need to be passed params to know which item in the database to retrieve. The params passed is typically the id of the data entry. If there is no id params passed to these methods, the methods cannot be performed because there is nothing to perform it on.

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands are rails g model, rails g controller, and rails g resource. Rails g model creates a model or a data table in the database. This model name must be in PascalCase and a singular word (not plural). Rails g controller creates a controller for the model. The controller connects the model and view of the MVC and allows us to create methods to retrieve responses, manage data, and send responses. The rails g resource command does everything the model and controller commands do, and more. It generates a model and controller, makes a migration file, and also creates all the RESTful routes.

Researched answer: Three rails generator commands are rails g model, rails g controller, and rails g resource. Rails g model generates a model that implements logic by handling the data in the database. When this command is run, a migration file and model file are generated. Model names are written in PascalCase and are singular. Rails g controller generates a controller. The controller manages the methods and routes, creating a bridge between the user and the app. The controller generation creates a controller file to create methods and a view folder to create webpages. Rails g resource generates a model, a data table, a controller, an empty views folder, and all the RESTful routes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    This would correspond with the index method, and it would retrieve all the students in the data table.

action: "POST" location: /students
    This would correspond with the create method. It takes the given parameters from a new form and creates a new entry in the students table.

action: "GET" location: /students/new
    This corresponds with the new method. It is a form that allows users to input information to then create a new data entry.

action: "GET" location: /students/2
    This is the show method. It is retrieving one instance of a student, and that student has an id of 2.

action: "GET" location: /students/2/edit
    This is the edit method. It does not make any changes to the database. It creates a form where users can change the information of a particular data entry. In this case, it is to change the information of the entry with id 2 in the student table.

action: "PATCH" location: /students/2
    This is the update method. It works with the edit method to change the information of an existing data entry. While the edit method makes the form to change the information, the update method makes the actual change to the student with id 2 in the database.

action: "DELETE" location: /students/2
    This is the destroy method. It removes the particular entry with id 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    USER STORIES:
    - As a user, I can see everything from my to-do list on the landing page.
    - As a user, I can fill out a form that will create a new item.
    - As a user, I can click a button to submit the new item.
    - As a user, I can click a button in the create page to go back to the landing page.
    - As a user, I can click a button on the landing page redirects me to a page where I can create a new to do item.
    - As a user, I can click on a item on the landing page and be redirected to a page that shows the item.
    - As a user, I can see a form to edit an existing item.
    - As a user, I can click a button on the edit page to update that item.
    - As a user, I can click a button on the show page that will lead me to the edit/update page.
    - As a user, I can click a button in the show page to delete that item.
