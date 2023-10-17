import React, { memo } from 'react'

function Drum(props) {

  let data = props.obj

  /*React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === data.keyName) ;
    })

    return (
      window.removeEventListener('keydown', (event) => {
        if (event.key === data.keyName) ;
      })
    )
  }
  )*/

  const handleAudio = (event) => {
    let aud = event.target.firstElementChild;
    aud.play();
    /*let src = data.context.createBufferSource();
    src.buffer = data.audioBuffer;
    src.connect(data.context.destination);
    src.start();*/
    props.callback(data.name);
  }

  return (
    <div id={data.name.split(' ').join('-')} onClick={(e) => {handleAudio(e)}} className='drum-pad'>
      <button className='drum-pad'>
      <audio className='clip' id={data.keyName.toUpperCase()} src={data.audio} type="audio/wav"></audio>
        {data.keyName.toUpperCase()}
      </button>
    </div>
  );
}

export default memo(Drum)