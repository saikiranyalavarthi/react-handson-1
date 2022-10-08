import React from "react";

class ClassComponent extends React.Component{
    render(){
        return(
          
            <div className="cc">
            <h2>This is created using CC</h2>
            <p className="para1">This is done using external CSS</p>
            <p style={{ color: "blue" }}>
              This is done using inline CSS
            </p>
          </div>
            
        )
    }
}


export default ClassComponent;