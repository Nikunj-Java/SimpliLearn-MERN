import React, { useState } from 'react';

function ActionButton() {
    const [listItem, setListItem] = useState([]); // Initializing state for listItem

    const handleClick = () => {
        alert('Button Clicked');
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        alert('Numbers assigned');
        
        // Mapping numbers to list items
        const newListItem = numbers.map((number) => (
            <li key={number.toString()}>{number}</li>
        ));
        alert('listItem assigned');
        
        // Updating the state to reflect the new listItem
        setListItem(newListItem);
        alert('listItem called');
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <ul>{listItem}</ul> {/* Rendering the listItem */}
        </div>
    );
}

export default ActionButton;
