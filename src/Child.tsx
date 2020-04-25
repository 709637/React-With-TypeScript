import React from 'react';
import logo from './logo.svg';
import './App.css';


export interface Iprops {
name : string,
age : number,
strength : Array<string>,
weekness? : Array<string>,
notOptional: string
}

class Child extends React.Component<Iprops> {
    public static defaultProps : Partial<Iprops>= {
     name :'Hello',
     age : 20,
     weekness : ['None']
    }

    constructor(props: Iprops){
        super(props);
    }

    render() {
        const {name, age, weekness, strength} = this.props;
        return (
            <>
            Name: {name}<br/>
            Age: {age}<br/>
            Weekness: {weekness ? weekness[0] : ''}<br/>
            Strength : {strength ? strength[0]: ''}
            <h4>Note: When you use default props (Child.defaultProps or static defaultProps) you make every prop Optional.
                <br/>Just like the below prop is not optional but in output it has some value and its not throwing error.
                ex: notOptional prop
            </h4>
            {this.props.notOptional}
            <h4>Child.defaultProps or static defaultProps can be used together for only selected props in the class
                <br/> But when on the same prop both Child.defaultProps and static defaultProps provides a default value. 
                The default value would be taken from Child.defaultProps. Ex: age prop
            </h4>
            </>
        );
    }
}

Child.defaultProps = {
    age: 50,
    strength : ['Fight']
}

export default Child;
