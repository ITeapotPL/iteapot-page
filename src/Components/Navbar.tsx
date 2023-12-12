import { useState} from "react"
const Navbar:React.FC=()=>{
    const [areProjectsShow,setAreProjectsShow]=useState<boolean>(false)
    const [areDocumentsShow,setAreDocumentsShow]=useState<boolean>(false)
    const [isTeamShow,setIsTeamShow]=useState<boolean>(false)
    const [isMobileMenuShow,setIsMobileMenuShow]=useState<boolean>(false)

    return(
        <nav className="w-full z-10 pt-[1%] pb-[2%] pl-[4%] pr-[4%] mb-10 flex items-center sticky top-0 ">
            <svg className="h-auto w-40"  viewBox="0 0 284 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.56 75.9299C116.14 75.9299 109.04 83.0399 109.04 92.6499C109.04 100.72 115.13 105.85 124.43 105.85C128.81 105.85 133.14 104.78 136.77 102.11L132.55 95.7499C130.63 97.2999 128.12 98.0999 125.55 98.0999C121.54 98.0999 119.35 96.5999 118.98 93.3999H140.24C140.56 91.9599 140.83 90.3499 140.83 88.6499C140.83 81.0599 135.38 75.9299 126.56 75.9299ZM119.56 88.0599C120.52 85.1699 122.66 83.1399 126.08 83.1399C129.34 83.1399 131.53 84.9599 131.48 88.0599H119.56Z" fill="white"/>
                <path d="M169.3 79.8799C167.48 77.0999 164.33 75.9299 160.43 75.9299C151.78 75.9299 144.72 83.0399 144.72 92.6499C144.72 101.09 150.7 105.85 156.95 105.85C160.32 105.85 163.09 104.73 165.34 102.64L164.75 105.36H174.37L180.14 76.3999H170L169.3 79.8799ZM160.49 97.6699C157.02 97.6699 154.99 95.5299 154.99 92.1699C154.99 87.3099 157.87 84.0499 161.88 84.0499C165.35 84.0499 167.38 86.2399 167.38 89.6099C167.38 94.4099 164.55 97.6699 160.49 97.6699Z" fill="white"/>
                <path d="M205.69 75.9299C202.32 75.9299 199.55 77.0499 197.3 79.1399L197.89 76.4199H188.27L180.42 115.74H190.57L193.35 101.9C195.17 104.68 198.32 105.85 202.22 105.85C210.87 105.85 217.93 98.7399 217.93 89.0699C217.92 80.6799 211.94 75.9299 205.69 75.9299ZM200.77 97.6699C197.3 97.6699 195.27 95.5299 195.27 92.1699C195.27 87.3099 198.15 84.0499 202.16 84.0499C205.63 84.0499 207.66 86.2399 207.66 89.6099C207.66 94.4099 204.78 97.6699 200.77 97.6699Z" fill="white"/>
                <path d="M239.93 75.9299C229.57 75.9299 222.14 83.0899 222.14 92.6499C222.14 100.61 228.07 105.85 237.31 105.85C247.67 105.85 255.1 98.6899 255.1 89.0699C255.1 81.1099 249.17 75.9299 239.93 75.9299ZM237.9 97.6699C234.43 97.6699 232.45 95.5299 232.45 92.1699C232.45 87.3099 235.28 84.0499 239.34 84.0499C242.81 84.0499 244.79 86.2399 244.79 89.6099C244.79 94.4099 241.96 97.6699 237.9 97.6699Z" fill="white"/>
                <path d="M273.75 85.0599H280.32L281.82 77.4699H275.25L276.75 69.9399H266.6L265.1 77.4699H260.88L259.33 85.0599H263.6L261.68 94.6199C261.47 95.5799 261.41 96.4899 261.41 97.3399C261.41 102.74 265.26 105.83 271.19 105.83C273.86 105.83 276.59 105.35 278.72 104.12L277.44 97.1199C276.42 97.6499 275.46 97.9699 274.39 97.9699C272.63 97.9699 271.72 97.1199 271.72 95.5099C271.72 95.2399 271.77 94.9199 271.83 94.5499L273.75 85.0599Z" fill="white"/>
                <path d="M122.32 42.54C117.75 43.09 114.54 45.94 112.47 50.17C111.53 52.09 110.92 54.19 110.12 56.33C109.67 55.86 109.18 55.32 108.66 54.82C106.78 53.06 104.75 51.99 102.1 52.21C99.86 52.39 97.66 51.67 96.36 49.33C95.37 47.54 95.78 46.82 97.67 46.78C98.84 46.76 99.8501 46.38 100.12 45.04C100.39 43.69 99.83 42.52 98.6 42.17C97.04 41.72 95.4 41.6 93.79 41.39C93.39 41.34 92.97 41.49 92.48 41.56C92.97 38.76 91.64 36.8 89.85 35.17C84.91 30.68 79.15 29.05 72.84 29.56C72.65 29.58 72.47 29.59 72.1 29.62C73.12 27.68 73.57 25.74 73.07 23.59C72.39 20.59 69.6301 18.5 66.8 18.93C63.8 19.38 61.8701 22.09 62.2401 25.31C62.5701 28.11 63.3001 29.69 65.2201 31.61C57.1001 35.29 50.8 40.54 50.6 51.04C48.84 51.39 47.05 51.54 45.41 52.15C44.6301 52.44 43.86 53.48 43.6 54.36C42.89 56.74 44.19 58.16 46.51 57.8C46.88 57.74 47.3 57.54 47.6101 57.67C48.1501 57.9 48.81 58.22 49.03 58.71C49.21 59.1 48.9501 59.93 48.62 60.28C48.15 60.77 47.4801 61.15 46.8301 61.32C41.0101 62.77 38.67 66.46 39.53 72.81C39.71 74.14 39.7601 75.51 39.68 76.84C39.5601 78.86 39.0401 80.72 36.93 81.37C34.9901 81.97 32.1 81.11 31.12 79.22C29.95 76.95 29.12 74.47 28.29 72.03C27.15 68.68 26.5 65.1 25.03 61.92C21.41 54.05 12.58 51.08 5.84005 55.33C4.37005 56.25 3.17005 57.74 2.06005 59.16C1.19005 60.27 1.73005 61.25 3.09005 61.14C4.86005 61.01 5.78005 61.97 6.44005 63.56C6.87005 64.58 7.43005 65.54 7.91005 66.49C8.29005 66.35 8.41005 66.35 8.45005 66.29C9.64005 64.36 11.23 63.21 13.52 63.73C16.05 64.3 17.52 66.18 18.27 68.67C19.14 71.58 19.32 74.57 18.92 77.58C18.42 81.37 17.88 85.15 18.85 89.02C20.81 96.89 26.07 101.69 34.12 102.66C36.21 102.91 38.32 102.86 40.6301 102.95C40.7601 104.02 40.87 105.3 41.09 106.56C42.76 115.98 48.85 120.44 56.73 122.06C62.44 123.23 68.18 123.07 73.83 122.09C80.76 120.89 87.69 119.57 94.54 117.97C100.89 116.48 106.78 113.75 111.77 109.26C112.11 108.95 112.44 108.64 112.76 108.32C107.21 105.35 103.96 100.03 103.96 93.16C103.96 84.14 108.77 76.86 116.28 73.34C117.16 72.93 117.58 71.91 117.28 70.99C116.88 69.73 116.48 68.47 116.08 67.22C115.9 66.65 115.85 66.06 115.85 65.5C115.83 62.09 115.86 58.76 117.15 55.62C119.34 50.32 124.35 48.66 129.15 51.64C132.91 53.97 134.79 58.11 133.36 61.88C132.7 63.61 131.34 65.18 129.97 66.41C128.8 67.46 127.61 68.48 126.45 69.54C125.87 70.07 126.25 71.04 127.04 71.04H127.06C129.21 71.04 131.24 71.29 133.1 71.75C134.47 70.73 135.82 69.68 137.14 68.58C142.38 64.18 142.22 57.94 139.46 52.4C136.22 45.85 129.11 41.73 122.32 42.54ZM61.2901 105.9H49.98L57.98 61.91H69.29L61.2901 105.9ZM111.55 71.81H98.11L91.27 105.89H78.84L85.68 71.81H72.18L74.19 61.95H113.55L111.55 71.81Z" fill="white"/>
            </svg>
            <span 
                onClick={()=>setIsMobileMenuShow(true)}
                className="flex text-white text-5xl absolute right-10 top-7 sm:hidden  material-symbols-outlined">
                    menu
            </span>
            {isMobileMenuShow?
                <ul 
                    className="absolute font-sourcecode text-white text-xl bg-[#001D3D] w-[50%] h-screen right-0 flex flex-col top-0 items-center gap-10 ">
                    <span 
                        onClick={()=>setIsMobileMenuShow(false)} 
                        className="w-[100%] text-right pr-2 text-4xl mb-10 material-symbols-outlined">
                            close
                    </span>
                    <li 
                        onClick={()=>areProjectsShow?setAreProjectsShow(false):setAreProjectsShow(true)} 
                        className="w-[80%] flex justify-center flex-col">
                        <span 
                            className="cursor-pointer p-2 rounded-xl mt-[3%] bg-[#003566]">
                                projekty
                        </span>
                        {areProjectsShow?
                        <ul>
                            <li 
                                className="text-yellow-100 text-md bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer flex flex-col items-center">
                                    getProject
                                <span 
                                    className="text-white text-xl">
                                        (uniGate)
                                </span>
                            </li>
                        </ul>
                    :''}
                    </li>
                    <li 
                        onClick={()=>areDocumentsShow?setAreDocumentsShow(false):setAreDocumentsShow(true)} 
                        className="w-[80%] flex justify-center flex-col">
                        <span 
                            className="cursor-pointer p-2 rounded-xl bg-[#003566]">
                                dokumenty
                        </span>
                        {areDocumentsShow?
                            <ul>
                                <li 
                                    className="text-yellow-100 text-md bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer flex flex-col items-center">
                                        getDocs
                                    <span className="text-white text-xl">
                                        (status)
                                    </span>
                                </li>
                                <li 
                                    className="text-yellow-100 text-md bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer flex flex-col items-center">
                                        getDocs
                                    <span 
                                        className="text-white text-xl">
                                            (prawne)
                                        </span>
                                </li>
                            </ul>:''}
                    </li>
                    <li onClick={()=>isTeamShow?setIsTeamShow(false):setIsTeamShow(true)} className="w-[80%] flex justify-center flex-col">
                        <span className="cursor-pointer p-2 rounded-xl bg-[#003566]">zespół</span>
                        {isTeamShow?
                            <ul className="">
                                <li className="text-yellow-100 text-md bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer flex flex-col items-center">getTeam<span className="text-white text-xl">(zarząd)</span></li>
                                <li className="text-yellow-100 text-md bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer flex flex-col items-center">getTeam<span className="text-white text-xl mt-[3%]">(zespoły)</span></li>
                            </ul>:''}
                    </li>
                </ul>
            :''}
            <ul 
                className="hidden sm:flex gap-[5%] md:text-2xl justify-center lg:gap-[15%] w-[50%]  font-sourcecode text-white p-[55px] pt-[75px] h-[90%] ml-[6%] md:gap-2">
                <li 
                    onMouseEnter={()=>setAreProjectsShow(true)}
                    onMouseLeave={()=>setAreProjectsShow(false)} 
                    className="relative h-[100%]">
                    <span 
                        className="cursor-pointer hover:bg-[#003566] p-2 rounded-xl mt-[3%]">
                            projekty
                    </span>
                    {areProjectsShow?
                        <ul 
                            className="absolute">
                            <li 
                                className="hover:text-yellow-100 md:text-xl bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer">
                                    getProject
                                <span 
                                    className="text-white md:text-2xl">
                                        (uniGate)
                                </span>
                            </li>
                        </ul>
                    :''}

                </li>
                <li onMouseEnter={()=>setAreDocumentsShow(true)}
                    onMouseLeave={()=>setAreDocumentsShow(false)} 
                    className="relative h-[100%]">
                    <span 
                        className="cursor-pointer hover:bg-[#003566] p-2 rounded-xl">
                            dokumenty
                    </span>
                    {areDocumentsShow?
                        <ul 
                            className="absolute">
                            <li 
                                className="hover:text-yellow-100 md:text-xl bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer">
                                    getDocs
                                <span 
                                    className="text-white md:text-2xl">
                                        (status)
                                </span>
                            </li>
                            <li 
                                className="hover:text-yellow-100 md:text-xl bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer">
                                    getDocs
                                <span 
                                    className="text-white md:text-2xl">
                                        (prawne)
                                </span>
                            </li>
                        </ul>:''}
                </li>
                <li onMouseEnter={()=>setIsTeamShow(true)}
                    onMouseLeave={()=>setIsTeamShow(false)} 
                    className="relative h-[100%]">
                    <span 
                        className="cursor-pointer hover:bg-[#003566] p-2 rounded-xl">
                            zespół
                    </span>
                    {isTeamShow?
                        <ul 
                            className="absolute">
                            <li 
                                className="hover:text-yellow-100 md:text-xl bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer">
                                    getTeam
                                <span 
                                    className="text-white md:text-2xl">
                                        (zarząd)
                                </span>
                            </li>
                            <li 
                                className="hover:text-yellow-100 md:text-xl bg-[#003566] p-2 rounded-xl mt-[3%] shadow-[#000814] shadow-md cursor-pointer">
                                    getTeam
                                <span 
                                    className="text-white md:text-2xl mt-[3%]">
                                        (zespoły)
                                </span>
                            </li>
                        </ul>:''}
                </li>
            </ul>
            {/* <button className="font-sourcecode text-white absolute top-[5%] right-[3%] text-2xl">
                logowanie
            </button> */}
        </nav>
    )
}
export default Navbar