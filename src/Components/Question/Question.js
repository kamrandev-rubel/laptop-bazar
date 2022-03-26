import React from 'react';

const Question = () => {
    return (
        <div style={{ padding: '40px' }}>
            <h2>What is react js? Tell us about the advantages and disadvantages of using react js.</h2><hr /><br />
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
                4. JSX as a barrier in react js.</p>
        </div>
    );
};

export default Question;