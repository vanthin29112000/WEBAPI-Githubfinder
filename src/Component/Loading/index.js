import React from 'react'
import "./Loading.css"
 const Loading = ({isLoading}) => {
    if(isLoading){
        return (
            <div className = "loading">
                <img src = "\GIF\fa87774590186b287a5338d7c87afc0c.gif"></img>
            </div>
        )
    }
    return null;
}
export default Loading ;