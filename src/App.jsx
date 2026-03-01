import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import JobListings from './pages/JobListings'
import JobDetail from './pages/JobDetail'
import Apply from './pages/Apply'
import ApplicationConfirmation from './pages/ApplicationConfirmation'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isHome])

  function handleClose() {
    navigate('/')
  }

  if (isHome) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '12px',
          width: '95vw',
          maxWidth: '1100px',
          height: '92vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'sticky',
            top: '12px',
            float: 'right',
            marginRight: '12px',
            zIndex: 10,
            background: '#1e293b',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <Header />
        <Routes>
          <Route path="/careers/jobs" element={<JobListings />} />
          <Route path="/careers/jobs/:id" element={<JobDetail />} />
          <Route path="/careers/apply/:id" element={<Apply />} />
          <Route path="/careers/apply/confirmation" element={<ApplicationConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </div>
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
