import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
    return ( <div>
        <h1>{props.name}</h1>
        <p>Age:{props.age}</p>
    </div> );
}

//before executing the below caommand 
//install prop-types
//npm install prop-types
//import in the component as: import PropTypes from 'prop-types';
Profile.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
};

export default Profile;