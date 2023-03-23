import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (        
            <nav className='bg-indigo-500 text-white'>                
                <section className='max-w-[1200px] mx-auto flex items-center justify-between p-4'>
                    <h1 className='text-3xl font-bold'>Shahriar</h1>
                    {!toggle ? <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/> : <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/>}
                    
                    <ul className='hidden md:flex gap-5'>
                        <li>Home</li>
                        <li>Sevices</li>
                        <li>Contact</li>
                        <li>Tutorial</li>
                        <li>About</li>
                    </ul>
                    {/* responsive  */}
                    <ul className={`block duration-300 md:hidden gap-5 fixed top-[68px] ${!toggle ? 'left-[-100%]' : 'left-0'} bg-black w-full h-screen`}>
                        <li className='p-3'>Home</li>
                        <li className='p-3'>Sevices</li>
                        <li className='p-3'>Contact</li>
                        <li className='p-3'>Tutorial</li>
                        <li className='p-3'>About</li>
                    </ul>
                </section>                
            </nav>        
    );
};

export default Header;