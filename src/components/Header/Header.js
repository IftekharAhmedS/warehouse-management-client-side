import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    
    const logOut = () => {
        signOut(auth)
    }


    return (
        <header className='bg-[#102542] text-[#F8F7FF] py-4'>
            <nav className='container mx-auto flex justify-between'>
                <div className="logo-area text-2xl">
                    <Link to='/'>Mobile Dealer</Link>
                </div>
                <div className="nav-links-area text-base">
                    <ul className='flex uppercase leading-8'>
                        {user ? <>
                        <li><Link to='/' className='mx-2'>Home</Link></li>
                        <li><Link to='/' className='mx-2'>Blogs</Link></li>
                        <li><Link to='/' className='mx-2'>Manage items</Link></li>
                        <li><Link to='/add-items' className='mx-2'>Add items</Link></li>
                        <li><Link to='/' className='mx-2'>My items</Link></li>
                        </> : <>
                        <li><Link to='/' className='mx-2'>Home</Link></li>
                        <li><Link to='/' className='mx-2'>Blogs</Link></li>
                        </>}
                    </ul>
                </div>
                <div className="auth-area text-base leading-8">
                    <ul className="flex uppercase">
                        {user ? <button onClick={logOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
                        </button> : <>
                            <li><Link to='/login' className='mx-2'>Login</Link></li>
                        <li><Link to='/register' className='mx-2'>Register</Link></li>
                        </>}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;