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
      <img src={logo} alt="The CBD G" style={{ width: '88px' }} />
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
            
              
            <div className="navbar-item is-hoverable is-mega" to="/products">
                

            <Link className="navbar-item has-dropdown is-hoverable is-mega" to="/products">
                Knowledge base
              </Link>

                <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
          <div class="container is-fluid">
            <div class="columns">
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Learn about CBD Oil</h1>
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">

                    
                    <p>What is CBD Oil?</p>
                    <p>Studies on CBD oil</p>
                   <p>How to recognize good CBD oil</p>
                    <p>CBD oil buying guide</p>


                  </div>
                </a>
                
              
               
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Learn about CBD Cosmetics</h1>
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">

                    
                    <p>What are CBD Cosmetics?</p>
                    <p>Studies on CBD cosmetics</p>
                    <p>How to recognize good CBD cosmetics</p>
                    <p>CBD cosmetics buying guide</p>

                  </div>
                </a>
            
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Learn about CBD Topicals</h1>
                 <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">

                    
                    <p>What are CBD Topicals?</p>
                    <p>Studies on CBD Topicals?</p>
                    <p>How to recognize good CBD Topicals?</p>
                    <p>CBD Topicals buying guide</p>

                  </div>
                </a>
              

              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Learn about CBD Food</h1>
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">

                    
                  <p>What is CBD food?</p>
                    <p>Studies on CBD food</p>
                    <p>How to recognize good quality CBD food</p>
                    <p>CBD food buying guide</p>

                    
                    
                                      </div>
                </a>
              </div>
            </div>
          </div>

          <hr class="navbar-divider"/>
          <div class="navbar-item">
            <div class="navbar-content">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <strong>Stay up to date!</strong>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                      <span class="icon is-small">
                        <i class="fa fa-rss"></i>
                      </span>
                      <span>Subscribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
              
            <div className="navbar-item is-hoverable is-mega" to="/products">
                

            <Link className="navbar-item has-dropdown is-hoverable is-mega" to="/products">
                Compare CBD Products
              </Link>

                <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
          <div class="container is-fluid">
            <div class="columns">
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Compare CBD oil</h1>
                 <p>Compare CBD soap</p>
                    <p>Compare CBD tooth paste</p>
                    <p>Compare CBD anti aging cream</p>
                    <p>Compare CBD lip balm</p>
              
               
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Compare CBD Cosmetics</h1>
                <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div class="navbar-content">

                    
                    <p>Compare CBD soap</p>
                    <p>Compare CBD tooth paste</p>
                    <p>Compare CBD anti aging cream</p>
                    <p>Compare CBD lip balm</p>

                  </div>
                </a>
            
              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Compare CBD topicals</h1>
               
                <p>Compare CBD muscle balm</p>
                <p>Compare CBD scrub</p>
                <p>Compare CBD anti wrinkle eye cream</p>
                <p>Compare CBD deoderant</p>





              </div>
              <div class="column">
                <h1 class="title is-6 is-mega-menu-title">Compare CBD food</h1>
                
                <p>Compare CBD chocolate</p>
                <p>Compare CBD coffee</p>
                <p>Compare CBD chewing gum</p>
                <p>Compare CBD probiotics</p>


              </div>
            </div>
          </div>

          <hr class="navbar-divider"/>
          <div class="navbar-item">
            <div class="navbar-content">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <strong>Stay up to date!</strong>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                      <span class="icon is-small">
                        <i class="fa fa-rss"></i>
                      </span>
                      <span>Subscribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
</div>
              <Link className="navbar-item" to="/products">
                Coupon codes
              </Link>
              
             
              <Link className="navbar-item" to="/about">
                About
              </Link>

              <Link className="navbar-item" to="/products">
                Blog
              </Link>

              <Link className="navbar-item" to="/products">
                Newspaper
              </Link>

              <Link className="navbar-item has-dropdown" to="/contact">
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
