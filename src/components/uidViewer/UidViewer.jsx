import { useState } from 'react';

import './UidViewer.css';
import { eyeOpenSvg, eyeClosedSvg } from '../../assets';

export default function UidViewer(props) {
  const [showId, setShowId] = useState(false);

  return (
    <div className={'uid-display navbar-button navbar-button--text' + `${showId ? '' : ' hide'}`}>
      ID:
      <small>{props.uid}</small>
      <img
        className="icon icon-blue"
        src={showId ? eyeOpenSvg : eyeClosedSvg}
        onClick={() => setShowId(!showId)}
        alt="Toggle view"
      />
    </div>
  );
}
