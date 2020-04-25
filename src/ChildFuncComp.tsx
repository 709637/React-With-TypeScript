import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

export interface Iprops {
    height : number,
    width : number,
    shape? : String,
    length: number
}

function ChildFuncComp(props: Iprops) {
const {height, width, shape, length} = props;
  return (
    <>
    { shape ? <h1>Shape: {shape}</h1>  : ''}
    Height: {height}<br/>
    width: {width}<br/>
    Lenght: {length}
    </>
  );
}

ChildFuncComp.defaultProps = {
  shape : 'Square',
  length : 100
}

export default ChildFuncComp;
