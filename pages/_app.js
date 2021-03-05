import '../styles/global.css'
import { AppWrapper } from '../components/context/state'

export default function App({Component, pageProps}) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	)
}