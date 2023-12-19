import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Finalize, Results, Dashboard } from '../pages'

type RouterProps = {
  children?: React.ReactNode
}

export const Router = ({ children }: RouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/finalize/:id" element={<Finalize />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}
