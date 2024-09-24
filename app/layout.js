import { GoogleAnalytics } from '@next/third-parties/google'
import { Press_Start_2P, Creepster } from 'next/font/google'
import './globals.css'

const pixelFont = Press_Start_2P({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-pixel',
})

const creepyFont = Creepster({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-creepy',
})

export const metadata = {
	title: 'Shady Humans - Dystopian Survival Game | Navigate a World of Deception',
	description:
		"Survive in 'Shady Humans', a gripping dystopian survival game set in a world where no one can be trusted. Navigate through deception, form fragile alliances, and uncover hidden agendas in a bleak, unforgiving landscape. Who will you trust?",
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
			{ url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [
			{
				url: '/icons/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		android: [
			{
				url: '/icons/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: '/icons/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
			<body
				className={`${creepyFont.variable} ${pixelFont.variable} antialiased font-body h-full bg-neutral-900 relative`}
			>
				{children}
			</body>
			<GoogleAnalytics gaId="G-WR031DMPZQ" />
		</html>
	)
}
