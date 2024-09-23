const LaunchingSoon = () => {
	return (
		<div className="flex flex-col justify-center items-center p-4 size-full">
			<div className="absolute inset-0 z-0 bg-[url(./images/dark-bg.webp)] bg-no-repeat bg-cover grayscale size-full mix-blend-color-dodge opacity-75"></div>

			<div className="z-10 text-center space-y-12 max-w-4xl w-full">
				<h1
					className={`text-6xl sm:text-8xl md:text-9xl font-bold font-display relative
            		hero glitch layers`}
					data-text="Scary Humans"
				>
					Shady Humans
				</h1>
				<p
					className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200"
					data-glitch
					title="Where Shadows Whisper and Humanity Unravels..."
				>
					Where Shadows Whisper and Humanity Unravels...
				</p>
				<p
					className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
					title="In a world teetering on the brink of darkness, you must navigate the twisted psyche of your fellow humans. Trust no one, question everything, and uncover the chilling truth that lies beneath the surface."
				>
					In a world teetering on the brink of darkness, you must navigate the twisted psyche of your fellow
					humans. Trust no one, question everything, and uncover the chilling truth that lies beneath the
					surface.
				</p>

				<div className="flex justify-center items-center p-5 w-min mx-auto bg-gray-400 rounded shadow-md opacity-50">
					<span className="reveal-glitch text-neutral-900" data-text="tuned">
						stay.
					</span>
				</div>
			</div>
		</div>
	)
}

export default LaunchingSoon
