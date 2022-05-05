import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className="q-one mt-16 mx-8">
                <h1 className='text-3xl'>Difference between Javascript and Node JS</h1>
                <p>Ans: Javascript is a high level scripting language which is mostly use to run codes on the client side and used for frontend development. But Node JS is a Javascript runtime and its used for developing backend servers. We can also run node outside of the browser which we cant do with Javascript.</p>
            </div>
            <div className="q-two my-12 mx-8">
                <h1 className='text-3xl'>When should you use nodejs and when should you use mongodb</h1>
                <p>Ans: Node JS is a javascript runtime which is mostly used for developing servers and mongodb is for storing data, so when we need to develop things for backend then Node JS is the best choice and among the other Databases MongoDB is Object Oriented database which is perfect for storing data.</p>
            </div>
            <div className="q-three mb-16 mx-8">
                <h1 className='text-3xl'>What is the purpose of jwt and how does it work</h1>
                <p>Ans: JWT also known as Json Web Token. The purpose of jwt is to share data securely between 2 parties and the information is verified because its digitally signed. jwt has a structure of 3 parts separated  by dots. these are header, payload and signature. the header contains the type and algorith, the payload contains the data and the signature uses the header, payload and a secret then sign it. </p>
            </div>
        </div>
    );
};

export default Blogs;