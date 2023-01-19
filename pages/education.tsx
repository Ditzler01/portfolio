export default function Edication()
{
    return (
        <>
            <div className="flex w-full flex-1 lg:flex-row flex-col">
                <div className="lg:w-[50%] lg:h-full w-full flex items-center justify-center lg:mt-0 mt-20">
                    <img src="./images/education.svg" className="w-[80%]"/>
                </div>
                <div className="lg:w-[50%] w-full flex flex-col justify-center items-center lg:items-start lg:px-0 md:px-20 px-7 lg:mt-0 mt-28">
                    <p className="2xl:text-7xl lg:text-6xl lg:text-6xl text-5xl text-secondary font-light">Education</p>
                    <div className="mt-24 w-full lg:px-7">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="py-2 px-2 shadow-[rgba(0,0,0,0.1)_0px_6px_24px_0px,_rgba(0,0,0,0.4)_0px_0px_0px_1px] rounded-full w-44">
                                <p className="tex-xl font-[600] text-center">Mapúa University</p>
                            </div>
                            <div className="flex lg:flex-col flex-row lg:mt-0 mt-5">
                                <p className="font-[600] ml-5 text-secondary">Tertiary</p>
                                <p className="font-[400] ml-5 text-[rgb(110,110,110)]">2019 - present</p>
                            </div>
                        </div>
                        <div className="lg:text-start text-center">
                            <p className="font-[600] ml-1 mt-6 text-secondary text-lg">Bachelor of Science in Information Technology</p>
                            <p className="font-[400] ml-1 text-secondary text-lg">Major in Applcation Development</p>
                        </div>
                    </div>
                    <div className="mt-10 w-full lg:px-7">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="py-2 px-2 shadow-[rgba(0,0,0,0.1)_0px_6px_24px_0px,_rgba(0,0,0,0.4)_0px_0px_0px_1px] rounded-full w-72">
                                <p className="tex-xl font-[600] text-center">Saint Peter of Veronica Academy</p>
                            </div>
                            <div className="flex lg:flex-col flex-row lg:mt-0 mt-5">
                                <p className="font-[600] ml-5 text-secondary">Senior High</p>
                                <p className="font-[400] ml-5 text-[rgb(110,110,110)]">2017 - 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 w-full lg:px-7 mb-7">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="py-2 px-2 shadow-[rgba(0,0,0,0.1)_0px_6px_24px_0px,_rgba(0,0,0,0.4)_0px_0px_0px_1px] rounded-full md:w-96 w-80">
                                <p className="tex-xl font-[600] text-center">Jesus Saves Intergrated School Foundation</p>
                            </div>
                            <div className="flex lg:flex-col flex-row lg:mt-0 mt-5">
                                <p className="font-[600] ml-5 text-secondary">Junior High</p>
                                <p className="font-[400] ml-5 text-[rgb(110,110,110)]">2013 - 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}