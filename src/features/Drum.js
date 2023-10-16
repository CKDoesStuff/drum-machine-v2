import React, { memo } from 'react'

function Drum(props) {

  let data = props.obj

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === data.keyName) handleAudio();
    })

    return (
      window.removeEventListener('keydown', (event) => {
        if (event.key === data.keyName) handleAudio();
      })
    )
  }
  )

  const handleAudio = () => {
    let src = data.context.createBufferSource();
    src.buffer = data.audio;
    src.connect(data.context.destination);
    src.start();
    props.callback(data.name);
  }

  return (
    <div id={data.name} className='drum-pad'>
      <button id={props.obj.key} onClick={() => {handleAudio()}}>
        {props.obj.keyName.toUpperCase()}
      </button>
    </div>
  );
}

export default memo(Drum)