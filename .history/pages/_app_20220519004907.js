import { ProjectdataProvider } from '../providers/projects_provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ProjectdataProvider></ProjectdataProvider>
  <Component {...pageProps} />)
}

export default MyApp
