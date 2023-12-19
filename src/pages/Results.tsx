import { useNavigate } from 'react-router-dom'

export const Results = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="header" data-testid="results-page">
        Results
      </div>
      <div className="filler">Order basket redesign</div>
      <div className="footer" onClick={() => navigate('/')} data-testid="back">
        {'\u276e'} Back
      </div>
    </div>
  )
}
