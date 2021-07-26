import React, {useState} from "react"
import "../styles/editor.scss"
import {ChromePicker} from "react-color"
import DrawingPanel from "./DrawingPanel"
import ToolBox from "./ToolBox"

export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16)
    const [panelHeight, setPanelHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
    const [buttonText, setButtonText] = useState("Create Canvas!")
    const [selectedColor, setColor] = useState("#f44336")

    function initializeDrawingPanel() {
        setHideOptions(!hideOptions)
        setHideDrawingPanel(!hideDrawingPanel)

        buttonText === "Create Canvas!" ? setButtonText("Reset Canvas!") : setButtonText("Create Canvas!")
    }

    function changeColor(color) {
        setColor(color.hex)
    }

    return (
        
        <div id="editor">

                <div id="toolBar">
                    <ChromePicker 
                        color={selectedColor}
                        onChangeComplete={changeColor} 
                        className="picker"
                    />

                    <ToolBox />
                </div>
                
                <div>
                    <DrawingPanel
                        width={panelWidth}
                        height={panelHeight}
                        selectedColor={selectedColor}
                        className="panel"
                    /> 
                </div>
   
        </div>
    )
}