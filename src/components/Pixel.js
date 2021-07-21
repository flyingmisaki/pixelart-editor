import React, {useState} from "react"
import "../styles/pixel.scss"

export default function Pixel(props) {
    const {selectedColor} = props

    const [pixelColor, setPixelColor] = useState("#ffffff")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    function applyColor() {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
    }

    function changeColorOnHover() {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
    }

    function resetColor() {
        if (canChangeColor) {
            setPixelColor(oldColor)
        }

        setCanChangeColor(true)
    }

    return (
        <div 
            className="pixel" 
            onMouseDown={applyColor} 
            onMouseEnter={changeColorOnHover} 
            onMouseLeave={resetColor} 
            style={{backgroundColor: pixelColor}}>
        </div>
    )
}