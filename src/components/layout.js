import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
      <nav>
      <Link to="/">Distribution of things</Link>
      <Link to="/about">about</Link>
      </nav>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
