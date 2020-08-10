# My-To-Do-List

## 301 Entrance Exam

### Instructions:
### Make sure before starting to:
- turn off any means of communication (phone, slack, email).
- start your screen recording.
- you are not allowed to use previous projects, notes , or GitHub.
- you can use google search engine.
- use the console to debug.

## Exam:
Create a new repository on your Github and name it 'My-To-Do-List'.

### Build a one-page website using HTML, CSS, and Javascript. The wireframe of the targeted page is attached to Slack.
You will be building a simple webpage "My To Do list" which contains all of the tasks that you have to finish.

Requirements: 
As a user, I would like to add my tasks to the list so I can track my tasks.
- Create a form in order to add a small task description, task due date, and task urgency. the urgency should be one of a predefined list that contains the following: 
Low, Medium, High
- Make sure to add form validation from the HTML part.

As a user, I would like to view all of my tasks that I already added so that I can quickly view my tasks list.
- Whenever you add a task using the form, you should use the local storage in order to get all the tasks from it and render them as a table using DOM.

**Stretch Goal One:** As a user, I would like to delete any task so I can handle my tasks list all the time.
- When you press on the 'X', the task should be deleted from the DOM and the local storage.

**Stretch Goal Two:** As a user, I would like to have the option to clear all of the tasks as a bulk, the cleared tasks should reflect on the table.
- Create a button that will clear all the items from the localstorage and the DOM.


#### Do this work on the 'master' branch.

1. Create an HTML file and convert the wireframe into HTML structure.
2. Create a CSS file to apply the style.
    - The used font is "Noto Sans" -> google font.
    - The used colors are "#1F1F1F", "#f5f5f5", rgb(0, 79, 143,.8), #3D3D3D.
3. Create a js file to handle the functionality.
    - Handle adding the tasks to the list and local storage.
    - Handle getting the tasks from the local storage and display them.
    - Handle removing the tasks from the list **(Stretch Goal)**.
    - Handle clearing all of the tasks from the list **(Stretch Goal)**.

#### P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.


## Submission Instructions:
- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- After completing the exam, do **NOT** commit or push anything to your repo.