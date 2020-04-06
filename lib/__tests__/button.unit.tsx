import * as renderer from 'react-test-renderer';
/* 需要以下操作，否则需要写 import * as React form ‘react’
 * 1.在tsconfig.json里配置"esModuleInterop": true
 * 2.以及注释"allowSyntheticDefaultImports": true
 */
import React from 'react';
import Button from '../button';

describe('button', () => {
  it('是个div', function () {
    const json = renderer.create(<Button/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});