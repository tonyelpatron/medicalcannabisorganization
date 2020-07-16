import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column">
                <section className="menu">
                  <ul className="menu-list">
                    <h1 className="title">The CBD guru</h1>
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Contact
                      </Link>
                    </li>
                  
                   
                  </ul>
                  
                </section>

              </div>


              <div className="column">
              <section>

              <ul className="menu-list">
              <h1 className="title">Best articles</h1>

                    <li>
                      <Link to="/" className="navbar-item">
                        How to recognize good quality CBD oil
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        CBD oil buying guide
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                  
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                      </li>
                      </ul>
                      </section>

                 </div> 

              <div className="column">
                <section>
                  <ul className="menu-list">
                  <h1 className="title">Science</h1>

                  <li>
                      <Link className="navbar-item" to="/blog">
                        Our knowledgebase
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Studies proving the effectiveness of CBD
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Studies proving the effectiveness of non topical CBD products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        News in the cannabis industry 
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column social">

                <ul>
              <h1 className="title">Social media</h1>
              </ul>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
