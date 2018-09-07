const style = {
  main: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  backgroundImage: {
    width: '102vw',
    height: '102vh',
    transform: 'translate(-1%, -1%)',
    objectFit: 'cover',
    transition: 'all 2s'
  },
  backgroundImageBlur: {
    width: '102vw',
    height: '102vh',
    transform: 'translate(-1%, -1%)',
    objectFit: 'cover',
    filter: 'blur(6px)'
  },
  welcomeWrapper: {
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center'
  },
  welcomeCrest: {
    transform: 'translate(2%, 0)',
    transition: 'all 0.5s'
  },
  welcomeh1: {
    textShadow: '0 0 10px rgba(250, 250, 240, 0.8)',
    textAlign: 'center'
  }
}

export default style;
