import '../styles/global.css'

export default function App({Component, pageProps}) {
	return (
		<div className="bg-gray-200">
			<Component {...pageProps} />
		</div>
	)
}