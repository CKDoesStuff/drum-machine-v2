import React from 'react'

function Drum(props) {
  // Create handler for key events
  const handleKey = (event) => {
    if (event.key === props.obj.keyName) {
      props.obj.audio.play();
      props.callback(props.obj.name);
    }
  }
  // Create listener to play sound with keyboard
  React.useEffect(() => {
    window.addEventListener('keydown', handleKey);

    // Clean-up listener
    return () => {
      window.removeEventListener('keydown', handleKey);
    };

  }, []);

  return (
    <div>
      <button onClick={() => {
        props.obj.audio.play();
        props.callback(props.obj.name);
      }}>
        {props.obj.keyName.toUpperCase()}
      </button>
    </div>
  );
}

export default Drum