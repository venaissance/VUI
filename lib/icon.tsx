import React from 'react';
import './importIcons.js';
import './icon.scss';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <span>
      <svg className="vui-icon">
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      <span>{props.name}</span>
    </span>
  );
};

export default Icon;
