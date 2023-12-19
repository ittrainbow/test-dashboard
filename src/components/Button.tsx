type ButtonProps = {
  status: string
  onClick: () => void
}

export const Button = ({ status, onClick }: ButtonProps) => {
  const classes = status === 'DRAFT' ? 'grey' : 'green'
  const text = status === 'DRAFT' ? 'Finalize' : status === 'RESET' ? 'Reset' : 'Results'

  return (
    <button onClick={onClick} className={classes} data-testid={text.toLowerCase() + '-button'}>
      {text}
    </button>
  )
}
