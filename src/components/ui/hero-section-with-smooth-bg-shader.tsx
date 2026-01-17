import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"
import { TextLoop } from "@/components/ui/text-loop"

interface HeroSectionProps {
    title?: string
    highlightText?: string | string[]
    description?: string
    buttonText?: string
    onButtonClick?: () => void
    colors?: string[]
    distortion?: number
    swirl?: number
    speed?: number
    offsetX?: number
    className?: string
    titleClassName?: string
    descriptionClassName?: string
    buttonClassName?: string
    maxWidth?: string
    veilOpacity?: string
    fontFamily?: string
    fontWeight?: number
}

export function HeroSection({
    title = "Intelligent AI Agents for",
    highlightText = "Smart Brands",
    description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
    buttonText = "Join Waitlist",
    onButtonClick,
    colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
    distortion = 0.8,
    swirl = 0.6,
    speed = 0.42,
    offsetX = 0.08,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    buttonClassName = "",
    maxWidth = "max-w-6xl",
    veilOpacity = "bg-white/20 dark:bg-black/25",
    fontFamily = "Satoshi, sans-serif",
    fontWeight = 500,
}: HeroSectionProps) {
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
    const [mounted, setMounted] = useState(false)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)

        let timeoutId: NodeJS.Timeout

        const update = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                const width = window.innerWidth
                setDimensions({
                    width: width,
                    height: window.innerHeight,
                })
                setIsMobile(width < 768)
            }, 100)
        }

        // Initial set
        const initialWidth = window.innerWidth
        setDimensions({
            width: initialWidth,
            height: window.innerHeight,
        })
        setIsMobile(initialWidth < 768)

        window.addEventListener("resize", update)
        return () => {
            window.removeEventListener("resize", update)
            clearTimeout(timeoutId)
        }
    }, [])

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick()
        }
    }

    const normalizedHighlightText = Array.isArray(highlightText) ? highlightText : [highlightText];

    // Static CSS Gradient for Mobile
    const staticBgStyle = {
        background: `
            radial-gradient(at 0% 0%, ${colors[0] || '#000'} 0px, transparent 50%),
            radial-gradient(at 100% 0%, ${colors[1] || '#000'} 0px, transparent 50%),
            radial-gradient(at 100% 100%, ${colors[2] || '#000'} 0px, transparent 50%),
            radial-gradient(at 0% 100%, ${colors[3] || '#000'} 0px, transparent 50%),
            radial-gradient(at 50% 50%, ${colors[4] || '#000'} 0px, transparent 50%),
            ${colors[5] ? `radial-gradient(at 80% 50%, ${colors[5]} 0px, transparent 50%)` : ''}
        `,
        backgroundColor: colors[0] || '#000',
        filter: 'blur(80px)',
        opacity: 0.8
    }

    return (
        <section className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}>
            <div className="fixed inset-0 w-screen h-screen">
                {mounted && (
                    <>
                        {isMobile ? (
                            <div
                                className="absolute inset-[-50%] w-[200%] h-[200%]"
                                style={staticBgStyle}
                            />
                        ) : (
                            <MeshGradient
                                width={dimensions.width}
                                height={dimensions.height}
                                colors={colors}
                                distortion={distortion}
                                swirl={swirl}
                                grainMixer={0}
                                grainOverlay={0}
                                speed={speed}
                                offsetX={offsetX}
                            />
                        )}
                        <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
                    </>
                )}
            </div>

            <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
                <div className="text-center">
                    <h1
                        className={`font-semibold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl ${titleClassName}`}
                        style={{ fontFamily, fontWeight }}
                    >
                        {title}{" "}
                        <span className="text-primary block md:inline-block">
                            <TextLoop interval={3}>
                                {normalizedHighlightText.map((text) => (
                                    <span key={text} className="block whitespace-nowrap">
                                        {text}
                                    </span>
                                ))}
                            </TextLoop>
                        </span>
                    </h1>
                    <p className={`text-lg sm:text-xl text-white/90 text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}>
                        {description}
                    </p>
                    <div className="inline-block relative z-20">
                        <button
                            onClick={handleButtonClick}
                            className={`px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 ${buttonClassName}`}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
