import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BackButton } from '../../components';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/artists'>Artists</NavLink>
            <BackButton />
        </nav>
    )
};