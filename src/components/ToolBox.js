import React from "react"
import "../styles/ToolBox.scss"

export default function ToolBox(props) {
    return (
        <div id="toolBox">
            <button id="toolButton">Pixel</button>
            <button id="toolButton">Erase</button>
            <button id="toolButton">Brush</button>
            <button id="toolButton">Fill</button>
        </div>
    )
}