import Typed from 'react-typed';
import logo from '/logo.jpeg';

const Banner = () => {
    return (
        <section className='bg-black h-[90vh] flex justify-center items-center'>
            <div className='max-w-[1200px] mx-auto text-white font-bold grid md:grid-cols-2 gap-5'>
                <div className='w-full mt-[30%] px-5'>
                    <h3 className='text-base md:text-2xl'>Hello</h3>
                    <h1 className='text-2xl md:text-5xl md:mt-5'>Welcome</h1>
                    <h2 className='text-xl md:text-3xl md:mt-5'>Hi <Typed
                         strings={[
                             'I am Shahriar Rahman',
                             'I am full stak devloper',
                             'I am working at Javascript']}
                             typeSpeed={100}
                             backSpeed={20}
                             loop >
                         </Typed></h2> 
                </div>
                <div className='w-full px-5'>
                    <img src={logo} className='w-full h-full rounded-tl-[100px] rounded-br-[100px] border-4 border-sky-600 shadow-4xl' alt="anik" />
                </div>
            </div>
            
        </section>
    );
};

export default Banner;