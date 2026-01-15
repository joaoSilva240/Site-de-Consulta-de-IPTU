import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Search } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src="logo.png" alt="Prefeitura de Boituva" style={styles.logo} />
        </div>

        <div style={styles.right}>
          <Link
            to="/"
            style={{
              ...styles.link,
              ...(isActive('/') ? styles.activeLink : {})
            }}
          >
            <Search size={18} />
            Consulta IPTU
          </Link>

          <Link
            to="/script"
            style={{
              ...styles.link,
              ...(isActive('/script') ? styles.activeLink : {})
            }}
          >
            <FileText size={18} />
            Script
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#84cc16', // Lighter green based on image header
    padding: '0 24px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logo: {
    height: '50px',
    width: 'auto',
    background: 'white',
    padding: '4px',
    borderRadius: '4px'
  },
  right: {
    display: 'flex',
    gap: '24px'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'background 0.2s'
  },
  activeLink: {
    background: 'rgba(255, 255, 255, 0.2)'
  }
};
