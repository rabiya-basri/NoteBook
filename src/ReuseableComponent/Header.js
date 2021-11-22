import React from "react";

const Header = (props) => {
    const { text,type } = props
    if (type === 'h1') {
        return <h1>{ text}</h1>
    } else if (type === 'h2') {
        return <h2>{ text}</h2>
    } else if (type === 'h3') {
        return <h3>{ text}</h3>
    } else if (type === 'h4') {
        return <h4>{ text}</h4>
    } else if(type==='h5') {
        return <h5>{ text}</h5>
    } else if (type === 'h6') {
        return <h6>{ text}</h6>
    }
    return (
        <div>
        </div>
    )
}
export default Header