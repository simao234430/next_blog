import '../styles/globals.css'
import { ColorSchemeProvider } from '../components/ColorSchemeContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  )
}
export default MyApp
