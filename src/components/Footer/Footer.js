import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className=' bg-[#102542] text-[#F8F7FF] py-4 '>
            <div className="flex">
                <div className='container mx-auto flex justify-between'>
                    <div className="footer-left text-2xl">
                        <h1>Mobile Dealer</h1>
                    </div>
                    <div className="footer-right w-3/12">
                        <p>Mobile Dealer is the best inventory management website, chosen by the popular companies</p>        
                    </div>
                </div>
            </div>
            <hr className='w-11/12 mx-auto my-3 bg-orange-300' />
            <p className='text-center'>Iftekhar Ahmed &copy; {year}, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;