import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ClientsPage from './pages/clients'
import { AppShell } from './components/layout/app-shell'
import './App.css'

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/clients" replace />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/reports" element={<div className="p-8">Reports coming soon...</div>} />
        </Routes>
      </AppShell>
    </Router>
  )
}

export default App
