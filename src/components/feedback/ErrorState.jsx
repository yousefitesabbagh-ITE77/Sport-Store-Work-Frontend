function ErrorState({ message }) {
  return (
    <div className="page-shell centered-state">
      <div className="state-card error-state">{message}</div>
    </div>
  )
}

export default ErrorState