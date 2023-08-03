import './Dashboard.css'
import SectionFirst from './SectionFirst'
import SectionSecond from './SectionSecond'
import SectionThird from './SectionThird'

function Dashboard() {
  return (
    <div className="Dashboard">
        <h1>New Campaign</h1>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
    </div>
  )
}

export default Dashboard