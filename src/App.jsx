import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
