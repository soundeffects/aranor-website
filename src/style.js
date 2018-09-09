const baseStyles = {
  backgroundImage: {
    width: '102vw',
    height: '102vh',
    transform: 'translate(-1%, -1%)',
    objectFit: 'cover',
    transition: '2s filter'
  },
  crest: {
    marginTop: '10vh',
    marginLeft: '2%',
    transition: 'transform 2s'
  },
  welcomeTitle: {
    textShadow: '0 0 10px rgba(250, 250, 240, 0.8)',
    textAlign: 'center',
    transition: 'transform 2s'
  }
};



const style = {
  main: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backgroundImage: baseStyles.backgroundImage,
  backgroundImageAnim: {
    ...baseStyles.backgroundImage,
    filter: 'blur(10px)'
  },
  crest: baseStyles.crest,
  crestAnim: {
    ...baseStyles.crest,
    transformOrigin: 'top',
    transform: 'scale(0.3)'
  },
  welcomeTitle: baseStyles.welcomeTitle,
  welcomeTitleAnim: {
    ...baseStyles.welcomeTitle,
    transform: 'translate(0, -21rem)'
  },
  welcomeAuth: {
    transition: 'transform 2s'
  },
  welcomeAuthAnim: {
    transition: 'transform 2s',
    transform: 'translate(0, -20rem)'
  },
  glass: {
    background: 'rgba(15, 10, 0, 0.6)',
    margin: '0.2em',
    padding: '1em',
    width: '24em',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '4px'
  },
  button: (color, mode) => {
    var backgroundColor;
    var shrink;
    if (!mode) {
      backgroundColor = 'transparent';
    } else {
      backgroundColor = 'rgba(255, 255, 255, 0.2)';
    }

    if (mode === 'pressed') {
      shrink = { transform: 'scale(0.95)' }
    }

    return {
      background: backgroundColor,
      border: `2px solid ${color}`,
      borderRadius: '4px',
      padding: '0.6em',
      margin: '0.6em',
      color: color,
      fontSize: '1.2em',
      width: '70%',
      outline: '0',
      transition: 'all 0.1s',
      ...shrink
    }
  }
};

export default style;
