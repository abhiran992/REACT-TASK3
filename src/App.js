import React, { useState } from 'react';
import './App.css';

const ColorPicker = ({ colors, onColorSelect }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
    onColorSelect(color); // Notify the parent component about the selected color
  };

  return (
    <div className="color-picker">
      <div
        className="color-menu"
        style={selectedColor ? { backgroundColor: selectedColor } : {}}
      >
        <button onClick={handleButtonClick}>Pick a color</button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
                className="color-box"
              ></div>
            ))}
          </div>
        )}
      </div>
      {selectedColor && (
        <p>Selected color: {selectedColor}</p>
      )}
    </div>
  );
};

function App() {
  const colors = [
    "#FF5733", "#33FF57", "#3366FF", "#FF33EE",
    "#33DDFF", "#FFBD33", "#4B0082", "#800000",
    "#007C80", "#FF00FF", "#F75D59", "#808000",
    "#872657", "#FF0000", "#B76734", "#992299"
  ];

  const [containerColor, setContainerColor] = useState('white'); // Add state to track container color

  const handleColorSelect = (color) => {
    setContainerColor(color);
  };

  return (
    <div className="App">
      <div className="app-container" style={{ backgroundColor: containerColor }}>
        <h1>Color Picker App</h1>
        <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
}

export default App;

