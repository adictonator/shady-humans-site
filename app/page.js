import React from 'react'

const LaunchingSoon = () => {
	return (
		<div className="flex flex-col justify-center items-center p-4 min-h-screen overflow-hidden">
			<div className="absolute inset-0 z-0 bg-[url(./images/dark-bg.webp)] bg-no-repeat bg-cover bg-center grayscale mix-blend-color-dodge opacity-75"></div>

			<div className="z-10 text-center space-y-8 sm:space-y-12 max-w-4xl w-full px-4 sm:px-6 lg:px-8">
				<h1
					className="text-8xl xl:text-9xl font-bold font-display relative hero glitch layers"
					data-text="Scary Humans"
				>
					Shady Humans
				</h1>
				<p
					className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200"
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
			</div>
		</div>
	)
}

export default LaunchingSoon
