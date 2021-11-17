import '../styles/style.scss'
import 'components/Elements/FontawesomeSetup'
import DefaultHead from 'components/Layout/DefaultHead'
import CombinedContextsProvider from 'context/CombinedContexts'

function App({ Component, pageProps }) {
  return (
    <CombinedContextsProvider>
      <DefaultHead />
      <Component {...pageProps} />
    </CombinedContextsProvider>
  )
}

export default App
