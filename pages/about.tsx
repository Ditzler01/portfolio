export default function About()
{
    return (
        <>
            <div className="w-full flex flex-1 lg:flex-row flex-col md:items-center lg:bg-[url('../public/images/bg-about.png')] bg-[url('../public/images/geometric-background-50.png')] bg-no-repeat bg-cover z-0 bg-opacity-5 lg:bg-opacity-100">
                <div className="lg:w-[50%] w-full h-full flex items-center justify-center">
                    <img src="./images/me.png" className="max-w-[50%] h-auto rounded-full lg:mt-0 mt-32"/>
                </div>
                <div className="2xl:w-[45%] lg:w-[50%] w-[100%] h-full flex justify-center flex-col lg:mt-0 mt-20 md:px-14 px-4 py-10">
                    <p className="2xl:text-7xl lg:text-6xl md:text-6xl text-5xl text-secondary font-light lg:text-left text-center">ABOUT</p>
                    <p className="mt-20 text-base text-xl lg:text-start text-justify">
                        I'm an application developer from the Philippines. I'm currently a student from <span className="font-semibold text-tertiary">Mapúa University</span> and a
                        partime worker at Kredo IT Abroad. I'm currently focusing at web development using multiple frameworks
                        such as <span className="font-semibold text-tertiary">Next JS</span> and <span className="font-semibold text-tertiary">Laravel</span>.
                    </p>
                    <p className="mt-10 text-xl lg:text-start text-justify">
                        I also explore many things within IT field such as <span className="font-semibold text-tertiary">Mobile Application Development</span>, <span className="font-semibold text-tertiary">Web Development</span>,
                        <span className="font-semibold text-tertiary">Game Development</span> and many more. 
                    </p>
                    <p className="mt-10 text-xl lg:text-start text-justify">
                        Digital arts is also one of my interests and continue to learn them as part of my hobby. <span className="font-semibold text-tertiary">Photoshop </span> 
                        and <span className="font-semibold text-tertiary">Blender</span> are the applications I use to create arts and 3D Models.
                    </p>
                    <p className="mt-10 text-xl lg:text-start text-justify">
                        I'm also a <span className="font-semibold text-tertiary">Baptist Christian</span> and have dedicated myself to many ministries in 
                        our church. <span className="font-semibold text-tertiary">Song leader</span>, 
                        <span className="font-semibold text-tertiary">YP leader</span>, 
                        <span className="font-semibold text-tertiary">Choir/Choir Conductor</span>, and <span className="font-semibold text-tertiary">AV Tech </span>
                        to name all of them. I also involve myself in music as it is one of my hobby and passion in our church.
                    </p>
                </div>
            </div>
        </>
    );
}