import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {

	// State and ref to handle outside click
	const [expanded, setExpanded] = useState(false);
	const outsideClickRef = useRef();

	// Function to handle outside click (if you click any where outside the navbar it closes)
	const handleOutsideClick = (e) => {
		if (outsideClickRef && outsideClickRef.current && !outsideClickRef.current.contains(e.target)) {
			setExpanded(false);
		}
	};

	// useEffect listens for outside click ("mousedown"), even if component for some reason would unmount
	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.addEventListener('mousedown', handleOutsideClick);
		}
	});

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} ref={outsideClickRef}>
			<Container>
				<Link to="/" className="navbar-brand fs-2 fw-bold text-info new-font" onClick={() => setExpanded(false)}>TMDB</Link>
				{/* onClick toggles expanded state (opens and closes the navbar) */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							{/* onClick closes the navbar */}
							<NavLink to="/in-theaters" className="nav-link fs-5 ms-lg-3" onClick={() => setExpanded(false)}>In theaters</NavLink>
							<NavLink to="/most-popular" className="nav-link fs-5 ms-lg-3" onClick={() => setExpanded(false)}>Most popular</NavLink>
							<NavLink to="/top-rated" className="nav-link fs-5 ms-lg-3" onClick={() => setExpanded(false)}>Top rated</NavLink>
							<NavLink to="/movie-genres" className="nav-link fs-5 ms-lg-3" onClick={() => setExpanded(false)}>Movie genres</NavLink>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
    );
}
 
export default Navigation;