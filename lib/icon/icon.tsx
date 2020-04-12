import React from 'react';
import './importIcons.js';
import './icon.scss';
import combineClassNames from '../helpers/combineClassNames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <span>
      <svg className={combineClassNames('vui-icon', className)} {...restProps} >
        <use xlinkHref={`#${name}`}/>
      </svg>
      <span>{name}</span>
    </span>
  );
};

export default Icon;
