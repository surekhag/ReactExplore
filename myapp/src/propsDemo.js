import React from 'react';
import './App.css';

class propsDemo extends React.Component {
    
    // render() {
    //     console.log(this.props);
    //     return (                 
    //         <div className="props">
    //             <p>Name : {this.props.name}</p>
    //             <p>Age :{this.props.age}</p>
    //         </div>
    //       );
    // }

        render() {
        const {name, age} = this.props;
        return (                 
            <div className="props">
                <h1>2. Props in React</h1>
                <p>Name : {name}</p>
                <p>Age :{age}</p>
            </div>
          );
    }
}

export default propsDemo;





