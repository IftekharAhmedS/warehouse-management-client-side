import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);


    return (
        <header className='bg-[#9381FF] text-[#F8F7FF] py-4'>
            <nav className='container mx-auto flex justify-between'>
                <div className="logo-area text-2xl">
                    <Link to='/'>Mobile Dealer</Link>
                </div>
                <div className="nav-links-area text-lg">
                    <ul className='flex'>
                        <li><Link to='/' className='mx-2'>Home</Link></li>
                        <li><Link to='/' className='mx-2'>Blogs</Link></li>
                        <li><Link to='/login' className='mx-2'>Login</Link></li>
                        <li><Link to='/register' className='mx-2'>Register</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;