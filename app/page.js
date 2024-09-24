'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const LaunchingSoon = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef(null)

	useEffect(() => {
		audioRef.current = new Audio('/spooky-wind.mp3')
		audioRef.current.loop = true

		return () => {
			if (audioRef.current) {
				audioRef.current.pause()
				audioRef.current.src = ''
			}
		}
	}, [])

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play().catch((error) => console.error('Audio playback failed:', error))
			} else {
				audioRef.current.pause()
			}
		}
	}, [isPlaying])

	const toggleSound = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div className="flex flex-col justify-center items-center p-4 min-h-svh">
			<div className="absolute inset-0 z-0 bg-[url(./images/dark-bg.webp)] bg-no-repeat bg-cover bg-center grayscale md:mix-blend-color-dodge opacity-75"></div>
			<div className="z-10 relative text-center space-y-8 sm:space-y-12 max-w-4xl h-full px-4 sm:px-6 lg:px-8">
				<h1
					className="text-7xl xl:text-9xl font-bold font-display relative hero glitch layers overflow-hidden"
					data-text="Scary Humans"
				>
					Shady Humans
				</h1>
				<p
					className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-slate-200"
					data-glitch
					title="Where Shadows Whisper and Humanity Unravels..."
				>
					Where Shadows Whisper and Humanity Unravels...
				</p>
				<p
					className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
					title="In a world teetering on the brink of darkness, you must navigate the twisted psyche of your fellow humans. Trust no one, question everything, and uncover the chilling truth that lies beneath the surface."
				>
					In a world teetering on the brink of darkness, you must navigate the twisted psyche of your fellow
					humans. Trust no one, question everything, and uncover the chilling truth that lies beneath the
					surface.
				</p>

				<div className="flex justify-center items-center p-4 sm:p-5 w-min mx-auto bg-gray-400 rounded shadow-md opacity-50">
					<span className="reveal-glitch text-neutral-900 text-lg sm:text-xl" data-text="tuned">
						stay.
					</span>
				</div>
				<button
					onClick={toggleSound}
					className="block max-md:absolute bottom-2 left-2 my-4 md:inset-x-0 w-fit md:mx-auto bg-gray-400/50 p-2 z-50 rounded"
					aria-label={isPlaying ? 'Mute background sound' : 'Unmute background sound'}
				>
					{isPlaying ? (
						<Image src="/images/high-volume.png" alt="" width={24} height={24} />
					) : (
						<Image src="/images/mute.png" alt="" width={24} height={24} />
					)}
				</button>
			</div>
		</div>
	)
}

export default LaunchingSoon
