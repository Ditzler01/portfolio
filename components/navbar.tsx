import Link from "next/link";
import styles from '../styles/navbar.module.css';

export default function Navbar()
{
    const showHiddenNav = () =>
    {
        const hidddenNav = document.getElementById('hidden-nav');
        const hiddenNavContent = document.getElementById('hidden-nav-content');
        const body = document.getElementById('__next');
        
        hidddenNav?.classList.remove('invisible');
        hidddenNav?.classList.remove('w-0');
        hidddenNav?.classList.add('w-full');
        hiddenNavContent?.classList.remove('hidden');
        body?.classList.add('overflow-y-hidden');
    }

    const hideHiddenNav = () =>
    {
        const hidddenNav = document.getElementById('hidden-nav');
        const hiddenNavContent = document.getElementById('hidden-nav-content');
        const body = document.getElementById('__next');
        
        hidddenNav?.classList.remove('w-full');
        hidddenNav?.classList.add('w-0');
        hidddenNav?.classList.add('invisible');
        hiddenNavContent?.classList.add('hidden');
        body?.classList.remove('overflow-y-hidden');
    }
    
    const changeNavColor = () =>
    {
        changeNavColor();
    }

    return (
        <>
            <div className="w-full bg-primary shadow-lg h-16 z-10">
                <nav className="lg:flex flex-row h-16">
                    <div className="sm:w-full lg:w-96 h-16 flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                    </div>
                    <div className="block lg:hidden absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20" onClick={ showHiddenNav } />
                    </div>
                    <div className="w-full hidden lg:flex flex-row justify-end pr-32">
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Home</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/about'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>About</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/skills'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Skills</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/projects'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Projects</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/education'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Education</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/work'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Work</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/contact'} id="nav" className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ changeNavColor }>Contact</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="hidden-nav" className="w-0 h-full absolute bg-primary right-0 top-0 right-0 ease-in-out duration-300 z-[11]">
                <div id="hidden-nav-content" className="w-full bg-primary h-full hidden">
                    <nav className="w-full h-16 shadow-lg flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                        <div className="absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20" onClick={ hideHiddenNav } />
                        </div>
                    </nav>
                    <div className="flex flex-col h-auto pt-8">
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Home</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>About</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Skills</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Projects</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Education</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Work</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer" onClick={ hideHiddenNav }>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}