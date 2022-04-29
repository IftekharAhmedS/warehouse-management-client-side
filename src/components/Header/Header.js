import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-[#334155] text-[#F1F5F9] py-4'>
            <nav className='container mx-auto flex justify-between'>
                <div className="logo-area text-2xl">
                    <Link to='/'>Mobile Dealer</Link>
                </div>
                <div className="nav-links-area text-lg">
                    <ul className='flex'>
                        <li><Link to='/' className='mx-2'>Home</Link></li>
                        <li><Link to='/' className='mx-2'>Blogs</Link></li>
                        <li><Link to='/' className='mx-2'>Login</Link></li>
                        <li><Link to='/' className='mx-2'>Register</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;