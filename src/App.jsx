import imageLogo from './assets/images/logo-img.png'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header 
        webLogo = {imageLogo}
        webName = "Chef Claude"
        work = {2}
      />

    </>
  )
}

export default App
