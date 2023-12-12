import React from "react";
export default class TodoItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        let {e,i,updateItem,deleteItem}=this.props
        return (
              <div key={i}>
                <li>
                <input
                  type="text"
                  value={e}
                  onChange={(e) => {
                   updateItem(e.target.value, i);
                  }}
                />
                <button
                  style={{
                    backgroundColor: "red",
                  }}
                  onClick={()=>{deleteItem(i)}}
                >
                  {" "}
                  D E L E T E
                </button>
                </li>
              </div>
            );
        
    }
}