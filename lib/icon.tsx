import React from 'react';
import './importIcons.js';
import './icon.scss';

interface IconProps {
  name: string;
  onClick?: () => void;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <span>
      <svg className="vui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      <span>{props.name}</span>
    </span>
  );
};

export default Icon;
