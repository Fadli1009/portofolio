import '../App.css'

const Navbar = () => {
    const click = () => {
        const responsive = document.querySelector('#responsive');
        responsive.classList.toggle('active-navbar');
    }

    return (
        <>
            <nav className="py-3 fixed w-full text-white z-20" id='navbar'>
                <div className="container mx-auto flex justify-between items-center w-[90%]">
                    <div>
                        <h1 className='text-2xl font-bold'>Fad<span className='text-yellow-500'>li</span></h1>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className='hidden lg:block'><a href="">Home</a></li>
                            <li className='hidden lg:block'><a href="#about">About</a></li>

                            <li className='hidden lg:block'><a href="#skils">Skills</a></li>
                            <li className='hidden lg:block'><a href="#project">Projects</a></li>
                            <li className='hidden lg:block'><a href="#contact">Contact</a></li>
                            <li>
                                <i className="fa-solid fa-bars lg:hidden block hover:no-underline" onClick={click}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="responsive" className="fixed w-full bg-[#191d249d] text-white z-10 text-center top-16 lg:hidden">
                <ul className="block">
                    <li className='py-2'><a href="">Home</a></li>
                    <li className='py-2'><a href="#about">About</a></li>
                    <li className='py-2'><a href="#skils">Skills</a></li>
                    <li className='py-2'><a href="#project">Projects</a></li>
                    <li className='py-2'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
