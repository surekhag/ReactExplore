import React from 'react';
import './App.css';

class propsDemo extends React.Component {
    // state = {
    //     user: "Surekha",
    //     pass: "12345678"
    // };
  

    render() {
        console.log(this.props);
        return (                 
            <div className="props">
                <p>Name : {this.props.name}</p>
                <p>Age :{this.props.age}</p>
            </div>
          );
    }
}

export default propsDemo;





