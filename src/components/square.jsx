import React from "react"

function Square({clickHandler, value, index}) {
    const onButtonClick = () => {
        clickHandler(index)
    }
    return(
        <button className="square" onClick=
        {onButtonClick}>
            {value}
        </button>
    )
}
export default Square;