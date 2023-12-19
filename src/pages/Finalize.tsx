import { useNavigate } from 'react-router-dom'

export const Finalize = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="header" data-testid="finalize-page">
        Finalize
      </div>
      <div className="filler">Spring promotion</div>
      <div className="footer" onClick={() => navigate('/')} data-testid="back">
        {'\u276e'} Back
      </div>
    </div>
  )
}
