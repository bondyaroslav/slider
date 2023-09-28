import React from "react";
import "./App.css"
import {Carousel} from "./carousel/Carousel"

const App = () => {
    return (
        <div className={"App"}>
            <Carousel>
                <div className="item item-1">item 1</div>
                <div className="item item-2">item 2</div>
                <div className="item item-3">item 3</div>
            </Carousel>
        </div>
    )
}

export default App