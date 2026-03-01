import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import JobListings from './pages/JobListings'
import JobDetail from './pages/JobDetail'
import Apply from './pages/Apply'
import ApplicationConfirmation from './pages/ApplicationConfirmation'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {!isHome && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers/jobs" element={<JobListings />} />
        <Route path="/careers/jobs/:id" element={<JobDetail />} />
        <Route path="/careers/apply/:id" element={<Apply />} />
        <Route path="/careers/apply/confirmation" element={<ApplicationConfirmation />} />
      </Routes>
      {!isHome && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
