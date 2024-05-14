import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedShape } from '../../Redux/actions';

// Import shape data
import { shapes } from '../../Data/Shapes';

// Component for displaying shape terms
function ShapeTerms() {
    // Redux hooks for dispatch and selector
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Correct path to selectedShape in Redux store
    const selectedShape = useSelector(state => state.search.selectedShape);

    // Effect hook to log selected shape changes
    useEffect(() => {
        console.log(selectedShape);
    }, [selectedShape]); // Include selectedShape in the dependency array to track changes

    // Function to handle shape click
    function handleShapeClick(shape) {
        // Dispatch action to set selected shape
        dispatch(setSelectedShape(shape));
        // Navigate to traditional search page
        navigate('/traditional-search');
    }

    // Render the component
    return (
        <div>
            <h1>Shape Terms</h1>
            {/* Map through shapes array to display buttons */}
            {shapes.map((shape, index) => (
                <button key={index} onClick={() => handleShapeClick(shape)}>
                    {shape}
                </button>
            ))}
        </div>
    );
}

export default ShapeTerms;
