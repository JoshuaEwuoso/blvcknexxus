import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
         <section>
      <div>
        <h3>Contact Me</h3>
        <p>Got anything to ask?</p>
        <div className="footer-info">
            <span>Email us: contact@blvcknexxus.com</span>{' '}
            <span>Greater New York Area, USA</span>{' '}
            <span>Call us: +1 (858) 058-9558</span>
        </div>
        <hr/>
      </div>
    Copyright &copy; 2023 | <a href="https://blvcknexxus.com/About"> GhostPen</a> All Rights Reserved.
    </section>
    {/* <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Got anything to ask?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <p>blvckNexxus.com@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <p>Greater New York Area</p>
          </li>
          <li className='flex items-center gap-2'>
            <p>+1-858-058-9558</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2023
          <a href="https://blvcknexxus.com/About"> Emini</a>. All Rights Reserved.
        </p>

      </div>
      
    </section> */}
        </footer>
    );
  };
  
  export default Footer;