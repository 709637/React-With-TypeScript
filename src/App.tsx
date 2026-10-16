import React from 'react';
import './App';
import Child from './Child';
import ChildFuncComp from './ChildFuncComp';
import ChildFuncCompUsingType from './ChildFuncCompUsingType';

function App() {
  return (
    <>
    <Child name ='Aye' ></Child>
    <ChildFuncComp height={12.22} width ={5.22} shape={'ReactAngle'}></ChildFuncComp>
    <ChildFuncCompUsingType PC='Dell' raminGB= {8} propWithDefaultType={'Default Value'}></ChildFuncCompUsingType>
    </>
  );
}

export default App;
