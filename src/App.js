import React from "react"
import './App.css';
import VectorMap from '@south-paw/react-vector-maps';
import world from '@south-paw/react-vector-maps/maps/json/world.json';



function App() {
  const style = { margin: '1rem auto', width: '800px' };
  const [hovered, setHovered] = React.useState('None');
  const [clicked, setClicked] = React.useState('None');
  const setC = (t) =>{
    setClicked(t)
    alert(t)
  }
  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onClick: ({ target }) =>  setC(target.attributes.name.value),
  };

  return (
    <div style={style}>
      <VectorMap {...world} layerProps={layerProps} />
      <hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </div>
  );
}

export default App;


 