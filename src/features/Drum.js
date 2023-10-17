import React, { memo } from 'react'

function Drum(props) {

  let data = props.obj

  React.useEffect(() => { // Create keypress listener
    window.addEventListener('keydown', (event) => {
      if (event.key === data.keyName || event.key === data.keyName.toLowerCase()) handleAudio(event);
    })

    return ( // Cleanup
      window.removeEventListener('keydown', (event) => {
        if (event.key === data.keyName || event.key === data.keyName.toLowerCase()) handleAudio(event);
      })
    );})
  

  const handleAudio = (event) => {
    if (event.type === 'click'){
      let aud = event.target.firstElementChild;
      aud.play();
    } else {
      let aud = document.getElementById(event.key.toUpperCase());
      aud.play();
    }
    props.callback(data.name);
  }

  return (
    <button id={data.name.split(' ').join('-')} onClick={(e) => {handleAudio(e)}} className='drum-pad'>
      <audio className='clip' id={data.keyName.toUpperCase()} src={data.audio} type="audio/wav"></audio>
        {data.keyName.toUpperCase()}
    </button>
  );
}

export default memo(Drum)