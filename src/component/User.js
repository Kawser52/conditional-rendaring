import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    if(familiar){
        greetings = <div>Welcome, my friend.</div>
    }else{
        greetings = <div>khapi kha</div>
    }
    return (
        <div>
            <h2>Greetings</h2>
            {greetings}
           
        </div>
    );
};

export default User;