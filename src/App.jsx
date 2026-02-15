
import './App.css'
import { GlobalProvider } from './context/GlobalState'
import { HomePage } from './Pages/HomePage'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <HomePage />
      </div>
    </GlobalProvider>
  )
}

export default App
