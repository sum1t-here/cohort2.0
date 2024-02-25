# CREATING A TODO

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <input type="text" placeholder="title" id="title" />
    <br />
    <br />
    <input type="text" placeholder="Description" id="description" />
    <br />
    <br />
    <button onclick="addToDo()">Add todo</button>
    <div id="todos"></div>

    <script>
      let globalID = 1;
      function markAsDone(todoID) {
        const parent = document.getElementById(todoID);
        parent.children[2].innerHTML = 'Done';
      }

      function createChild(title, description, id) {
        const child = document.createElement('div');
        const firstGrandChild = document.createElement('div');
        firstGrandChild.innerHTML = title;
        const secondGrandChild = document.createElement('div');
        secondGrandChild.innerHTML = description;
        const thirdGrandChild = document.createElement('button');
        thirdGrandChild.innerHTML = 'Mark as done';
        thirdGrandChild.setAttribute('onclick', `markAsDone(${id})`);
        child.appendChild(firstGrandChild);
        child.appendChild(secondGrandChild);
        child.appendChild(thirdGrandChild);
        child.setAttribute('id', id);
        return child;
      }

      function addToDo() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const parent = document.getElementById('todos');

        parent.appendChild(createChild(title, description, globalID++));
      }
    </script>
  </body>
</html>

#### The problem with this approach is
> - Very hard to add & remove elements
> - No central state

#### What if ???
> - There is a server where these todos are put
> -  Update a todo from your mobile app

You will get the new array of todos on the frontend

#### How willl you update the dom then ??
you only have a addTodo function
donot have update or remove todo

#### What do you mean by state?

If we can write a function, that takes the state below as an input and creates the same output, this will be more powerful than our original approach


[
    {
        Id: 1,
        title: 'Go to gym',
        description: 'Go to gym 7 - 9 pm'
    },
    {
        Id: 1,
        title: 'Go to gym',
        description: 'Go to gym 7 - 9 pm'
    }
]

This is a state
```
