import React from 'react';
import { type } from 'os';

type Iprops = {
    raminGB : 4 | 8,
    rominGB : number,
    PC? : 'HP'| 'Dell',    
    propWithDefaultType? : string 
}

function ChildFuncCompUsingType(props: Iprops) {       
const {raminGB, rominGB, PC, propWithDefaultType} = props;
  return (
    <>
    { PC ? <h1>PC: {PC}</h1>  : ''}
    RAM in GB: {raminGB}<br/>
    Rom in GB: {rominGB}<br/>    
    Prop With Default Value : {propWithDefaultType}
    </>
  );
}

ChildFuncCompUsingType.defaultProps = {
    raminGB : 4,
    rominGB : 100,
    PC : 'HP',    
    propWithDefaultType : 'Default'
}

export default ChildFuncCompUsingType;
