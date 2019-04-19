1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

a) map, filter, reduce

b) We use the splat operator inside a new object literal with the properties of whatever properties we want to change in the original object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are definitions that have to have a type and usually a payload also that defined the kind of data. reducers route the data that actions work on using a switch statement and pass data to whichever properties through action.payload. The store is handled under the hood by redux and is hidden and not handled directly.



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Assuming Application state is referring to Redux, Redux state provides a centralized place to handle state and it communicates to components directly instead of passing down data through props. 

Component state has to be in a class instead of a function and state is held as an object inside the class. It can then pass data from state down as props, some of its sub-components can themselves be components that are classes that hold state.

1.  What is middleware?

Middleware is a pipe function that takes in some kind of data, it modifies that data and then returns that data as a return value. So a long series of middleware can be piped as a string of operations to modify the data in a web app.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middleware that recieves input from a network request, it works asynchronously so the web app does not have to wait on its operation. It returns a promise instead of a web response object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
