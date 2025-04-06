"use client"

import { ArrowRight, SkipForward } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../pages/ui/button"

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(0)

    const onboardingSteps = [
        {
            image: "/1.png",
            alt: "Enter your Deep Work session goal",
        },
        {
            image: "/2.png",
            alt: "Press enter to block distraction categories",
        },
        {
            image: "/3.png",
            alt: "A check means a distraction category is blocked",
        },
        {
            image: "/4.png",
            alt: "Tab lock prevents opening additional applications",
        },
        {
            image: "/5.png",
            alt: "Set work/rest time and start your session",
        },
    ]

    const handleNext = () => {
        if (currentStep < onboardingSteps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                    <Image
                        src={onboardingSteps[currentStep].image || "/placeholder.svg"}
                        alt={onboardingSteps[currentStep].alt}
                        width={1400}
                        height={800}
                        className="w-full h-auto"
                    />

                    <div className="absolute bottom-6 right-6 flex gap-3">
                        <Link href="/dashbord">
                            <Button variant="outline" className="flex items-center gap-2">
                                <SkipForward className="w-4 h-4" />
                                Skip
                            </Button>
                        </Link>

                        {currentStep < onboardingSteps.length - 1 ? (
                            <Button onClick={handleNext} className="flex items-center gap-2">
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        ) : (
                            <Link href="/dashbord">
                                <Button className="flex items-center gap-2">
                                    Go to dashbord
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                <div className="flex justify-center p-4">
                    <div className="flex gap-2">
                        {onboardingSteps.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentStep ? "bg-blue-500" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

