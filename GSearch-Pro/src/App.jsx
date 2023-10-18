import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/RoutesFile'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={darkMode ? "dark": ''}>
      {/*dark:bg-gray-900 dark:text-gray-200*/}
        <div className="bg-gray-100 black min-h-screen dark:bg-gray-900 dark:text-gray-200">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
