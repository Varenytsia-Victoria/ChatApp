import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='nav-list'>
				<li>
					<NavLink to='/' exact activeClassName='active-link'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/register' activeClassName='active-link'>
						Register
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
