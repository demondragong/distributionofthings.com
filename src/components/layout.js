import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
            {/* X (Twitter) section */}
            <StaticImage
              className="social-icon"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/X_logo_2023.svg"
              width={24}
              height={24}
              quality={95}
              alt="Twitter Icon"
            />
            <a href="https://x.com/gaeldemondragon" target="_blank" rel="noopener noreferrer">
              Gaël
            </a>
            and
            <a href="https://x.com/nataschaminnitt" target="_blank" rel="noopener noreferrer">
              Natascha
            </a>
          </div>

          {/* GitHub section */}
          <div className="social-links">
            <StaticImage
              className="social-icon"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/github-mark.png"
              width={24}
              height={24}
              quality={95}
              alt="GitHub Icon"
            />
            <a href="https://github.com/demondragong" target="_blank" rel="noopener noreferrer"> Gaël
            </a>
            and
            <a href="https://github.com/nataschaminnitt" target="_blank" rel="noopener noreferrer">
              Natascha
            </a>
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

