export default function Contact()
{
    return(
        <>
            <div className="flex w-full flex-1 lg:flex-row flex-col">
                <div className="lg:w-[50%] lg:h-full w-full flex items-center justify-center lg:mt-0 mt-20">
                    <img src="./images/contact.svg" className="w-[80%]"/>
                </div>
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-center lg:items-start md:px-20 px-7 lg:mt-0 mt-28">
                    <p className="2xl:text-7xl lg:text-6xl lg:text-6xl text-5xl text-secondary font-light">Contact</p>
                    <div className="mt-24 w-full lg:px-7">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="py-2 px-2 shadow-[rgba(0,0,0,0.1)_0px_6px_24px_0px,_rgba(0,0,0,0.4)_0px_0px_0px_1px] rounded-full w-44">
                                <p className="tex-xl font-[600] text-center">09569280681</p>
                            </div>
                            <div className="flex lg:flex-col flex-row lg:mt-0 mt-5">
                                <p className="font-[600] lg:ml-5 lg:text-start text-center text-secondary">Contact Number</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 w-full lg:px-7">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="py-2 px-2 shadow-[rgba(0,0,0,0.1)_0px_6px_24px_0px,_rgba(0,0,0,0.4)_0px_0px_0px_1px] rounded-full w-72">
                                <p className="tex-xl font-[600] text-center">santos.ditzler01@gmail.com</p>
                            </div>
                            <div className="flex lg:flex-col flex-row lg:mt-0 mt-5">
                                <p className="font-[600] lg:ml-5 lg:text-start text-center text-secondary">Email Address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}