import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <p style={{ background: '#f0ffc4', textAlign: 'center', padding: '16px 32px', color: 'var(--ifm-color-primary-dark)', fontWeight: 'bold' }}>You are viewing a project that is currently in draft state for the patterns working group in the Green Software Foundation. This project should not be considered finished or officially supported in any way by the Green Software Foundation or it's members.</p>
      <Navbar {...props} />
    </>
  );
}
