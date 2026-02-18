import { useEffect, useState } from "react"

export default function useCustomPointer(customPointer) {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handleMousePosition = event => {
            setPosition({ x: event.clientX, y: event.clientY })
        }
        document.addEventListener("mousemove", handleMousePosition)
        return () => document.removeEventListener("mousemove", handleMousePosition)
    }, [])

    return (
        <div style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)"
        }}>
            {customPointer}
        </div>
    )
}