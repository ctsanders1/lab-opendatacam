import React from 'react';
import Video from '../shared/Video'; 
import Canvas from '../shared/Canvas'; 
import SettingsControl from '../shared/SettingsControl';

import Title from '../shared/Title';
import LinkItem from '../shared/LinkItem';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="landing-page">
        <LinkItem link="/game" label="Go to game" />
        <Title label="Traffic Cam Landing" />
        <SettingsControl />
        <Video />
        <Canvas />
      </div>
    )
  }
}

export default Landing