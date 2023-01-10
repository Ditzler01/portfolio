import Link from "next/link";
import styles from '../styles/navbar.module.css';

export default function Navbar()
{
    const showHiddenNav = () =>
    {
        const hidddenNav = document.getElementById('hidden-nav');
        const hiddenNavContent = document.getElementById('hidden-nav-content');
        
        hidddenNav?.classList.remove('invisible');
        hidddenNav?.classList.remove('w-0');
        hidddenNav?.classList.add('w-full');
        hiddenNavContent?.classList.remove('hidden');
    }

    const hideHiddenNav = () =>
    {
        const hidddenNav = document.getElementById('hidden-nav');
        const hiddenNavContent = document.getElementById('hidden-nav-content');
        
        hidddenNav?.classList.remove('w-full');
        hidddenNav?.classList.add('w-0');
        hidddenNav?.classList.add('invisible');
        hiddenNavContent?.classList.add('hidden');
    }

    return (
        <>
            <div className="w-full bg-primary shadow-lg h-16">
                <nav className="lg:flex flex-row h-16">
                    <div className="sm:w-full lg:w-96 h-16 flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                    </div>
                    <div className="block lg:hidden absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20" onClick={ showHiddenNav } />
                    </div>
                    <div className="w-full hidden lg:flex flex-row justify-end pr-32">
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Home</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/about'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">About</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/skills'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Skills</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/projects'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Projects</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/education'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Education</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/work'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Work</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                        <div className="flex flex-col justify-center h-16 px-6">
                            <Link href={'/contact'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Contact</Link>
                            <span className="w-auto h-1 bg-tertiary rounded-3xl invisible"/>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="hidden-nav" className="w-0 h-full absolute bg-primary right-0 top-0 right-0 ease-in-out duration-300">
                <div id="hidden-nav-content" className="w-full bg-primary h-full hidden">
                    <nav className="w-full h-16 shadow-lg flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                        <div className="absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20" onClick={ hideHiddenNav } />
                        </div>
                    </nav>
                    <div className="flex flex-col h-auto pt-8">
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Home</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">About</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Skills</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Projects</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Education</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Work</Link>
                        </div>
                        <div className="w-full py-5 text-center">
                            <Link href={'/'} className="text-secondary text-lg font-semibold hover:text-tertiary cursor-pointer">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}