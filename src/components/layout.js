import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import githubLogo from "../images/github-mark.svg"
import blueskyLogo from "../images/bluesky-logo.svg"


const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="header-left">
          <StaticImage
            className="header-logo"
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            src="../images/logo.jpeg"
            quality={100}
            alt="Logo of distribution of things"
          />
        </div>
        <div className="header-center">
          <Link to="/">Distribution of Things</Link>
        </div>
        <div className="header-right">
          <Link to="/about">About</Link>
        </div>
      </header>

      <main>
        {children}
      </main>
      
      <footer>
        <div className="footer-social">
          <h3>Follow us</h3>
          <div className="social-links">
            <img src={blueskyLogo} alt="bluesky Logo" />
            <span>
              <a href="https://bsky.app/profile/gaeldemondragon.com" target="_blank" rel="noopener noreferrer">Gaël</a> and <a href="https://loopedconsultants.com/nataschaminnitt/" target="_blank" rel="noopener noreferrer">
              Natascha</a>
            </span>
          </div>

          {/* GitHub section */}
          <div className="social-links">
          <img src={githubLogo} alt="Github Logo" />
            <span>
              <a href="https://github.com/demondragong" target="_blank" rel="noopener noreferrer"> Gaël</a> and <a href="https://github.com/nataschaminnitt" target="_blank" rel="noopener noreferrer">
              Natascha</a>
            </span>
          </div>
        </div>

        <div className="copyright-container">
          © 2024 Distribution of Things
        </div>
      </footer>
    </div>
  )
}

export default Layout

