import React from "react";
//import './PropsComponent.css';

function PropsState(props){
   
    return(
       <div>
        <h1  style={{"color":"red"}}>This is Props Component</h1>
        <h2>hello I am {props.name},I m {props.age} years old</h2>
        
       </div>
    );
}
export default PropsState;