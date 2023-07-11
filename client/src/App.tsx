import {Route, Routes} from 'react-router-dom'
import { Home, Inspect, Report } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inspection' element={<Inspect />} />
        <Route path='/complaint' element={<Report />} />
     </Routes>
    </>
  )
}

export default App
