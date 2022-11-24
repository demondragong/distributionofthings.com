import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link to="/">Distribution of things</Link>
        <Link to="/about">about</Link>
      </header>
      <main>{children}</main>
      <footer>
        <div className="newsletter-container">
          <form method="post" action="/subscription">
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              defaultValue="MnzODHNSJLaH8YFW6xsAkr3nsKO6mTwoqrywoekqMuoUU31Ujg50PUTLdkUPd5OL"
            />
            <div className="row align-items-center">
              <label htmlFor="newsletter" className="col-sm-8 my-2">
                Receive an email when a new distribution is published. Sometimes.
              </label>
              <div className="newsletter-input-container">
                <input
                  id="newsletter"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </footer>
    </div>
  )
}

export default Layout
