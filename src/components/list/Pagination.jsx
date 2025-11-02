function Pagination({ page = 0, onPrev, onNext, disablePrev = false, disableNext = false }) {
  return (
    <nav className="d-flex justify-content-between align-items-center mt-4">
      <span className="small text-secondary">Página {page + 1}</span>
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${disablePrev ? 'disabled' : ''}`}>
          <button className="page-link" onClick={onPrev}>Previous</button>
        </li>
        <li className="page-item active"><span className="page-link">{page + 1}</span></li>
        <li className={`page-item ${disableNext ? 'disabled' : ''}`}>
          <button className="page-link" onClick={onNext}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination