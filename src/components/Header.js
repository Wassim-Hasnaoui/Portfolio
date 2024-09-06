import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/images/profile.jpg" alt="Your Name" className="profile-image" />
      <h1>Wassim Hasnaoui</h1>
      <p>A dedicated Full-Stack JavaScript developer with growing knowledge in both frontend and
backend technologies. Skilled in building web applications, creating user-friendly interfaces,
and optimizing backend functions. Eager to apply newly acquired coding skills to real-world
projects.</p>
    </header>
  );
}

export default Header;
