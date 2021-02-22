Practice React: Try to build the following exercises from scratch.

1. Utilizing Forms with React:
   a) Build an application that handles form input and submission from users.
   b) Build a class-based component and a few stateless functional child components that accept props.
   c) Create state object in class-based component with properties that will track the values of form inputs.
   d) Next, build a few methods within the class-based component ex... handleInput() and handleSubmit() and pass methods down to the child component via props object.
   e) In the Form component, build a form element with JSX and using onClick, onChange properties set value to methods being passed via props from the parent component.
   f) Test that you can type into input fields and the values are being updated in the state object.
   g) Test submit button to ensure alert with user input is displayed and input fields are cleared after closing alert.
   h) Rinse and Repeat!!

2. API Calls in the componentDidMount() Lifecycle Method with React:
   a) Make an app that displays data on initial render. Build functionality that allow a user to input a search term and the results of query are displayed in the application.
   b) Install Axios package via npm,
   c) Build a class-based stateful component and a few child stateless functional components.
   d) In the parent class stateful component, hook into componentDidMount() lifecycle method and within this method make call to API function(function you create that handles the API call).
   e) Create a static query term to pass into API function to have data display on initial render.
   f) In parent component, create methods to handleInputChange and form submission so that a user can type in a search term and display results. Pass these methods down from parent to child component via props object.
   g) Console.log the props object on child component to verify the properties are now accessible on child component.
   h) Run application and view in browser if your data is displayed.
   i) Rinse and Repeat!!

ALWAYS USE setState() method when updating state! After this method updates the state object, setState will trigger render method. The parent component and all children will re-render. Allows our UI to be synced with current state of application.

BONUS - Using the NPM package React-Modal, build a Modal stateless functional component. Utilizing state in the parent class component, create a property in the state object that will track on/off for Modal. In parent class-based component create a button that when clicked will open the modal. Next, create a button in the Modal component that when clicked will close the modal. Hint- you will need to build methods for handling the opening/closing of modal.
