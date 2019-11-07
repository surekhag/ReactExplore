import React from 'react';
import './App.css';

class ListPropsDemo extends React.Component {
    state={
        person : [
            {name:"Surekha", dept:"IT", id:"1" },
            {name:"vedika", dept:"Marketing", id:"2" },
            {name:"Pranjal", dept:"Analysis", id:"3" }
        ]
    };

    render() {           

        const personTemplate = this.state.person.map(obj=>{
                return (<div className="propsListing" key={obj.id}>
                <p>Name : {obj.name}</p>
                <p>Dept :{obj.dept}</p>
            </div>);
        })

        return (                 
            <div>
                <h1> 3. Outputting List - Props demo </h1>
                {personTemplate}
            </div>
          );
    }
}

export default ListPropsDemo;