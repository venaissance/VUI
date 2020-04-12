import React from 'react';
import './importIcons.js';
import './icon.scss';
import './helpers/combineClassNames';
import combineClassNames from './helpers/combineClassNames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const {className, ...restProps} = props;
  return (
    <span>
      <svg className={combineClassNames('vui-icon', className)} {...restProps} >
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      <span>{props.name}</span>
    </span>
  );
};

export default Icon;
