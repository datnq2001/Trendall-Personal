import React from 'react';
import Card from './Card.js';
import vases from '../../Data/Vase.js';

function PinterestLayout() {
    return (
        <div style={styles.pin_container}>
            {vases.map((vase, index) => (
                    <Card key={index} size={getSize(index)} image={vase.image} link={`/vase-detail/${vase["Reference No."]}`}/>
            ))}
        </div>
           
    )
}

// Function to determine the size of the card based on the index
function getSize(index) {
    if (index % 3 === 0) return "small";
    else if (index % 3 === 1) return "medium";
    else return "large";
}

const styles = {
    pin_container: {
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        margin: '40px auto',
        
        justifyContent: 'center',
        backgroundColor: 'black'
    }
}

export default PinterestLayout;
