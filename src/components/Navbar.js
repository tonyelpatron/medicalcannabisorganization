import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
     
     <>

<section className="container">
      <div className="logo has-text-centered">
      <Link to="/" title="Logo">
      <img src={logo} alt="The Gene Guy" style={{ width: '88px' }} />
      </Link>
      </div>
      </section>

      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >

      
        <div className="container">
           
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-links has-text-centered is-mega ">
            <Link className="navbar-item" to="/products">
                Knowledge base
              </Link>
              
            <Link className="navbar-item" to="/products">
                Compare CBD Products
              </Link>
              <Link className="navbar-item" to="/products">
                Coupon codes
              </Link>
              <Link className="navbar-item" to="/products">
                Product reviews
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
             
            </div>
            </div>
        </div>
      </nav>
      
</>

    )
  }
}

export default Navbar
