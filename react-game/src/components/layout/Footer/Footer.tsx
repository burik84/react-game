import React from 'react';
import logoSchool from './rs_school_js.svg';
import logoGit from './GitHub-Mark-32px.png';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/burik84" target="_blank" rel="noreferrer">
        <img src={logoGit} alt="logo GitHub" />
        <span>burik84</span>
      </a>
      <p>&copy; 2021</p>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img src={logoSchool} alt="logo rsschool" />
      </a>
    </footer>
  );
};

export default Footer;
