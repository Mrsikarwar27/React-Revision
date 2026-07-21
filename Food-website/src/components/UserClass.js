//it is a class based component 
 import React from "react";

 class UserClass extends React.Component{
    constructor(props){
        super(props);
      console.log(props);
    }
    render(){
        //Destructuring
        const {name,location,contact,education}=this.props;
        return <div> 
        <h1>Name:{name}</h1>
    <h2>Location:{location}</h2>
    <h2>Contact:{contact}</h2>
       <h2>Education:{education}</h2>
       
        </div>
    }
 }
 export default UserClass;