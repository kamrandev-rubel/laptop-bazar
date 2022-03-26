import React from 'react';

const Question = () => {
    return (
        <div style={{ padding: '40px', color: 'rgba(0, 0, 0, 0.774)' }}>
            <h2>What is react js? Tell us about the advantages and disadvantages of using react js.</h2><hr />
            <p><b>Answer: </b> React is an open-source front-end javascript library. The library is used for web app
                development and is designed to help developers create fast single-page applications and user interfaces.
                It is used for handling the view layer for web and mobile apps.
                Advantages of react js:
                1. Easy to understand and easy to use.
                2. Easy creation of the dynamic web application
                3. React is component-based architecture. We can break our application into many components like
                Header, Footer, Sidebar, Main content.
                4. Component-based architecture is highly reusable.
                5. It has testing and debugging friendliness.
                <br /><br />
                <b>Disadvantages of react js:</b>
                1. Lack of Documentation, so developers do not understand easily.
                2. It covers only the UI hence we need to use other languages to make a full application.
                3. The high pace of development makes developer life difficult.
                4. JSX as a barrier in react js.</p><br /><br />
            <h2>Differences between props and state?</h2><hr />
            <p><b>Answer: </b> Props get passed to the component similar to function parameters whereas the state is
                managed within the component similar to variables declared within a function. Props are used by a
                component to get data from an external environment i.e another component. States are used to manage
                the internal environment of a component means the data changes inside the component. Props are
                mostly used to communicate between components. We can pass from parent to child directly. For passing
                from child to parent you need to use the concept of lifting up states. States are used for rendering
                dynamic changes within components.</p><br /><br />
            <h2>What is the purpose of useState? When and why will you use it?</h2><hr />
            <p><b>Answer: </b> UseState is a react hook. Hooks make it possible to use state and mutability inside the function
                components. The useState function is a built-in hook that can be imported from the react package. It allows
                us to add states to our functional components. Using the useState hook inside a function component, we can
                create a piece of state without switching to class components.
                <br /><br />
                useState also provides an option of passing a function as an argument if the initial state has to be
                computed. The value returned by the function is set as the initial state</p><br /><br />
        </div>
    );
};

export default Question;