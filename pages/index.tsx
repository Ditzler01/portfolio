import Link from "next/link";

declare global 
{
    var saveAs: (file: any, fileName: string) => void;
}

export default function Home() 
{

    const downloadResume = async () =>
    {
        var url = "./Resume - Santos, Ditzler.pdf";
        var fileName = "Resume - Santos, Ditzler.pdf";
        var res = await fetch(url);
        var blob = await res.blob();
        saveAs(blob, fileName);

        window.open('./Resume - Santos, Ditzler.pdf');
    }

    return (
        <>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"/>
            <div className="bg-[url('/public/images/geometric-background.png')] flex-1 w-full bg-no-repeat bg-cover z-0">
                <div className="w-full h-full flex lg:flex-row flex-col flex-row">
                    <div className="flex items-center justify-center lg:w-[50%] w-[100%] lg:h-full h-[40%]">
                        <img src="./images/me.png" className="lg:max-w-[50%] lg:max-h-[50%] max-w-[80%] max-h-[80%] rounded-full" alt="Ditzler Santos"/>
                    </div>
                    <div className="flex flex-col lg:justify-center lg:items-start items-center lg:w-[50%] w-[100%] lg:h-full h-[60%]">
                        <p className="2xl:text-[6rem] xl:text-[5.5rem] lg:text-[4rem] md:text-[5rem] sm:text-[4rem] text-[3rem] font-thin">Hello!</p>
                        <p className="2xl:text-[6rem] xl:text-[5.5rem] lg:text-[4rem] md:text-[5rem] sm:text-[4rem] text-[3rem] font-thin">I'm Ditzler Santos</p>
                        <p className="2xl:text-[1.8rem] xl:text-[1.5rem] lg:text-[1.3rem] md:text-[2rem] sm:text-[1.5rem] text-[1.3rem] font-[500] pl-2">
                            I am an
                            <span className="text-tertiary"> application developer</span>
                        </p>
                        <div className="grid grid-rows-2 grid-cols-2 gap-4 pl-2 mt-4">
                            <Link href={'/about'}>
                                <div className="flex justify-center items-center flex-row w-40 h-12 bg-secondary rounded-full cursor-pointer">
                                    <p className="text-primary text-lg font-semibold">About Me</p>
                                    <img src="./icons/user.png" className="max-w-[20px] max-h-[20px] ml-3" alt="About Me"/>
                                </div>
                            </Link>
                            <div className="flex justify-center items-center flex-row w-40 h-12 bg-secondary rounded-full cursor-pointer" onClick={downloadResume}>
                                <p className="text-primary text-lg font-semibold">Resume</p>
                                <img src="./icons/download.png" className="max-w-[20px] max-h-[20px] ml-3" alt="About Me"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
