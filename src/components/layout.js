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
        <div className="signup-container">
          <div>Subscribe to receive the next distribution. Unsubscribe anytime.</div>
          <div id="mc_embed_signup">
            <form
              action="https://distributionofthings.us20.list-manage.com/subscribe/post?u=e2c3523040011f23db3a10671&id=4da03abbc6&f_id=00df55e6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate=""
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label className="signup-email-label" htmlFor="mce-EMAIL">Email Address</label>
                  <input
                    type="email"
                    defaultValue=""
                    name="EMAIL"
                    className="required email signup-email-input"
                    id="mce-EMAIL"
                    required
                    placeholder="Email Address"
                  />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_e2c3523040011f23db3a10671_4da03abbc6"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button signup-email-button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
