import React, { memo } from 'react'

function Drum(props) {

  let data = props.obj

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === data.keyName) handleAudio(event);
    })

    return (
      window.removeEventListener('keydown', (event) => {
        if (event.key === data.keyName) handleAudio(event);
      })
    );})
  

  const handleAudio = (event) => {
    if (event.type === 'click'){
      let aud = event.target.firstElementChild;
      if(aud) aud.play();
    } else {
      let aud = document.getElementById(event.key.toUpperCase());
      aud.play();
    }
    /*let src = data.context.createBufferSource();
    src.buffer = data.audioBuffer;
    src.connect(data.context.destination);
    src.start();*/
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