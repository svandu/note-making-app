import { Link } from "react-router-dom"

function Missing() {
  return (
    <main className="missing-container">
        <h2>Page Not found</h2>
        <p>Well, that's disappinting.</p>
        <p>
          <Link to='/'>Visit Out HomePage</Link>
        </p>
    </main>
  )
}

export default Missing