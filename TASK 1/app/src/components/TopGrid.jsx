import React from 'react';
import img from '../assets/photos/topimg.png'




const TopGrid = () => {
    // Style for the grid container
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr', // Three columns of equal width
      gridTemplateRows: '1fr 1fr', // Two rows of equal height
      gap: '0.5vw', // Minimized gap between grid items
      width: '100vw', // Full viewport width
      height: '100vh', // Full viewport height
      padding: '0', // No padding around the grid
      // Include padding in the element's total width and height
      position: 'relative', // Ensure the grid is the reference for absolute positioning
    };
  
    // Basic styling for grid items
    const itemStyle = {
      backgroundColor: '#ddd', // Background color for visual differentiation
       // Border style for better visibility
      boxSizing: 'border-box', // Include border in the element's total width and height
    };
  
    // Function to generate styles for grid items with specific heights and widths
    const gridItemStyle = (height, width) => ({
      ...itemStyle,
      height,
      width,
    });
  
    // Style for the image container
    const imageStyle = {
      position: 'absolute', // Absolute positioning
      marginTop: '9vw',
      right: '0', // Align to the right
       // Move the image down by 10% of the viewport height
      width: '40vw', // Make it responsive by using viewport width
      height: 'auto', // Maintain aspect ratio
      zIndex: 10, // Ensure it is above the grid
    };


    const textStyle = {
        position: 'absolute', // Absolute positioning
        left: '0', // Align to the left
        top: '30vh', // Move the text box down by 10% of the viewport height
        width: '50vw', // Make it responsive by using viewport width
        height: 'auto', // Maintain aspect ratio
        padding: '2vw', // Padding inside the text box
        boxSizing: 'border-box', // Include padding in the element's total width and height
        zIndex: 10, // Ensure it is above the grid
        fontSize: '2vw', // Responsive font size
        color: '#333', // Text color
        fontSize: '3vw',
        color: 'white',
        fontWeight: 'bold',
      };
  
    return (
      <div style={containerStyle}>
        {/* First grid item takes the full height */}
        <div 
          style={{ 
            ...itemStyle, 
            ...gridItemStyle('calc(100% - 0.5vw)', 'calc(100% - 0.5vw)'), 
            backgroundColor: '#324412', 
            gridRow: 'span 2', 
            gridColumn: '1 / span 1' 
          }} 
        />
    
        {/* Additional grid item before the last one */}
        <div 
          style={{ 
            ...gridItemStyle('30vh', 'calc(100% - 0.5vw)'), 
            backgroundColor: '#fCCB06' 
          }} 
        /> {/* New grid item */}
        
        {/* Grid items with specific heights */}
        <div 
          style={{ 
            ...gridItemStyle('60vh', 'calc(100% - 0.5vw)'), 
            backgroundColor: '#000' 
          }} 
        /> {/* Beside the first grid item */}
        <div 
          style={{ 
            ...gridItemStyle('10vh', 'calc(100% - 0.5vw)'), 
            backgroundColor: '#FFFFFF' 
          }} 
        /> {/* Beside the first grid item */}
        
        {/* Third grid item with height of 60vh */}
        <div 
          style={{ 
            ...itemStyle, 
            height: '60vh', 
            width: 'calc(100% - 0.5vw)', 
            backgroundColor: '#fCCB06', 
            gridRow: '1 / span 2', 
            gridColumn: '3 / span 1' 
          }} 
        />
  
        {/* Picture on the right side */}
        <img 
          src={img} 
          alt="Responsive Image" 
          style={imageStyle} 
        />


         {/* Text box on the left side */}
      <div style={textStyle}>
       We believe every girl deserves to feel confident and stylish. Our mission is to bring you the latest trends and timeless pieces that celebrate your unique style
      </div>

      </div>
    );
  }
  
  export default TopGrid;