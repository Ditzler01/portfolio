import Link from "next/link";

export default function Navbar()
{
    return (
        <>
            <div className="w-full bg-primary shadow-lg h-16 z-10">
                <nav className="lg:flex flex-row h-16">
                    <div className="sm:w-full lg:w-96 h-16 flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                    </div>
                    <div className="block lg:hidden absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20"/>
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

            <div className="w-full h-full absolute bg-primary top-0 righ-0 hidden">
                <div className="w-full bg-primary h-full">
                    <nav className="w-full h-16 shadow-lg flex items-center justify-center">
                        <p className="text-2xl font-semibold text-secondary">Portfolio</p>
                        <div className="absolute top-0 right-0 h-16 flex justify-center items-center mr-5">
                            <img className="cursor-pointer" src="./icons/hamburger.png" width="20" height="20"/>
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
