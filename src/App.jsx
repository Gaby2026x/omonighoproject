import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Businesses from './pages/Businesses'
import Capabilities from './pages/Capabilities'
import Careers from './pages/Careers'
import JobListings from './pages/JobListings'
import JobDetail from './pages/JobDetail'
import Apply from './pages/Apply'
import ApplicationConfirmation from './pages/ApplicationConfirmation'
import News from './pages/News'
import Contact from './pages/Contact'
import Investors from './pages/Investors'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/jobs" element={<JobListings />} />
          <Route path="/careers/jobs/:id" element={<JobDetail />} />
          <Route path="/careers/apply/:id" element={<Apply />} />
          <Route path="/careers/apply/confirmation" element={<ApplicationConfirmation />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
