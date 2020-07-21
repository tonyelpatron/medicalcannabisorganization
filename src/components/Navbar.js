import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'


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
     <section>
       <div className="container">
      <div className="logo has-text-centered">
      <h1 className="title has-text-succes">Medical Cannabis Organization</h1>
      </div>
      </div>
</section>
      <nav
        className="navbar "
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
              
              
             
              <Link className="navbar-item" to="/about">
                About
              </Link>

              <Link className="navbar-item" to="/blog">
                Blog
              </Link>

              <Link className="navbar-item" to="/news">
                News
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
