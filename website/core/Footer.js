/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Documentation</h5>
            <a href={this.docUrl("getting-started.html")}>How to get started</a>
            <a href={this.docUrl("api.html")}>APIs</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://eosio.stackexchange.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://t.me/">Telegram Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/LatamLink">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/LatamLink/documentacion"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">
          <div className="icon-container">
            <p id="poweredby">Powered by</p>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  className="footer-logo"
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                />
              )}
            </a>
            <a
              href="https://www.eosargentina.io/"
              target="_blank"
              className="nav-home"
            >
              <img
                className="footer-logo"
                src={this.props.config.baseUrl + this.props.config.eosarIcon}
                alt={this.props.config.title}
              />
            </a>
            <a
              href="https://eoscostarica.io/es/"
              target="_blank"
              className="nav-home"
            >
              <img
                className="footer-logo"
                src={this.props.config.baseUrl + this.props.config.eoscrIcon}
                alt={this.props.config.title}
              />
            </a>
            <a
              href="https://eosvenezuela.io/"
              target="_blank"
              className="nav-home"
            >
              <img
                className="footer-logo"
                src={this.props.config.baseUrl + this.props.config.eosvenIcon}
                alt={this.props.config.title}
              />
            </a>
          </div>
          <p style={{margin: 0, height: 'fit-content'}}>
            {this.props.config.copyright}
          </p>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
