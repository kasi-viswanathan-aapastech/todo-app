1.	Created an app using npx create-react-app todo-app --template typescript

2.	Components to be created :
  i.	TextBox
  ii.	IconButton
  iii.	ToDOTaskCard that has 
    a.	Task text
    b.	Delete button
    c.	Done button
    d.	Edit button
  iv.	CompletedTaskCard that has
    a.	Striked task text
  v.	TODOList
  vi.	CompletedList

3.	Pages to be created :
  i.	Landing Page that has
    a.	TextBox 
    b.	Tick Button
    c.	TODOList
    d.	CompletedList

4.	Local storage items :
  i.  todoList : array of to do task object with id and task.
  ii. completedList : array of completed task object with id and task.

5.	Button functionalities :
  i.	Tick button :
    a.  Maintain state variable to check if task in the textbox is a new task or edited task.
    b.  If textbox has new task, add an object with the new id and value from textbox to todoList.
    c.  If textbox has edited task, update the object.
	
  ii.	Deleted button :
    a.	Remove the task from todoList.
  iii. 	Done button :
    a.	Push the task to completedList.
    b.	Remove the task from todoList.
  iv. 	Edit button :
    a.	Use state variable to update the value of TextBox.

