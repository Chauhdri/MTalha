'use client'

import MobileNavbar from '@slaves/mobileNav';
import React, { useState } from 'react';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MobileNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
    )
}

export default NavBar