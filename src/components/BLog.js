import React from 'react';

const BLog = () => {
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='my-4'>
                <h2 className='text-3xl font-semibold mb-2'>1. What is Cors?</h2>
                <p className='ml-6'>Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='my-4'>
                <h2 className='text-3xl font-semibold mb-2'>2. Why do we use Firebase? what are the other alternatives of firebase?</h2>
                <p className='ml-6'>Ans: The main purpose of me using firbase is it's built in authentication system that let's me use its own authentication system. it is one of the most secure authentication third party amongst the others.We can use some other alternatives of this authentication system. But the main purpose of it is to make developing easier and user's data secure.
                    1. MongoDB.
                    2. Oracle Database.
                    3. Amazon Redshift.
                    4. DataStax Enterprise.
                    5. Redis Enterprise Cloud.
                    6. Cloudera Enterprise Data Hub.
                    7. Db2.
                </p>
            </div>
            <div className='my-4'>
                <h2 className='text-3xl font-semibold mb-2'>3. How does private route work?</h2>
                <p className='ml-6'>Ans: The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='my-4'>
                <h2 className='text-3xl font-semibold mb-2'>4. what is Node? how does Node work?</h2>
                <p className='ml-6'>Ans: Node Js is running Javascipt on the server side. it is an open source server environemnt. it runs in asynchronous way. which means it eliminates the waiting .so working with node js is faster than most of the any  other options out there available.</p>
            </div>
        </div>
    );
};

export default BLog;