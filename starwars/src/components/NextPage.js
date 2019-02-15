import React from 'react';

const NextPage = props => {
    return (
        <div>
        <button onClick={props.GoToNextPage}>Next Page</button>
        {console.log(props.next)}
        </div>
    );
};

export default NextPage;