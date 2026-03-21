import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import Reps from './pages/Reps'
import Installers from './pages/Installers'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="reps" element={<Reps />} />
        <Route path="installers" element={<Installers />} />
      </Route>
    </Routes>
  )
}
