import { useState, useEffect, useCallback } from "react"

const useScreenSize = () => {
    const getWindowDimensions = useCallback(() => {
        const width = window.innerWidth
        const height = window.innerHeight
        return {
            width,
            height,
        }
    }, [])
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )
    const { width } = windowDimensions
    const [isMobile, setIsMobile] = useState(width < 768)

    useEffect(() => {

        const handleResize = () => {
            const { width, height } = getWindowDimensions()
            setWindowDimensions({ width, height })

            setIsMobile(width < 768)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)


    }, [windowDimensions, getWindowDimensions])

    return { isMobile, ...windowDimensions }
}

export default useScreenSize
