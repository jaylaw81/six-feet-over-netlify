import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import styled from 'styled-components'

const NavBar = styled.nav`
	font-size: 30px;
	font-family: ${props => props.theme.fontBase};
	padding: 50px 0;

	.container {
		display: flex;
		justify-content: space-around;
	}
`

const NavMenuContainer = styled.div`
`

const NavMenu = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;

	li {
		list-style: none;
		padding: 0;
		margin: 0;

		a {
			font-size: 20px;
			margin-right: 100px;
			text-decoration: none;
			color: ${props => props.theme.basicBlue};
			font-weight: 300;
		}
	}
`

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
      <NavBar
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '252px' }} />
            </Link>
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
          </div>
          <NavMenuContainer
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <NavMenu className="navbar-start has-text-centered">
              <li>
								<Link className="navbar-item" to="/about">
                	About
              	</Link>
							</li>
              <li>
								<Link className="navbar-item" to="/get-involved">
									Get Involved
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/help">
									Help Center
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/blog">
									Latest News
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/donate">
									Donate
								</Link>
							</li>
            </NavMenu>
          </NavMenuContainer>
        </div>
      </NavBar>
    )
  }
}

export default Navbar
