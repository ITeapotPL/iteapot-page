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
                    className="absolute font-sourcecode text-white text-xl bg-gradient-to-r from-[#013667]  to-[#114B7F] w-[100%] h-screen right-0 flex flex-col top-0 items-center gap-10 ">
                <svg className="h-auto absolute left-5 top-5 w-40"  viewBox="0 0 284 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.56 75.9299C116.14 75.9299 109.04 83.0399 109.04 92.6499C109.04 100.72 115.13 105.85 124.43 105.85C128.81 105.85 133.14 104.78 136.77 102.11L132.55 95.7499C130.63 97.2999 128.12 98.0999 125.55 98.0999C121.54 98.0999 119.35 96.5999 118.98 93.3999H140.24C140.56 91.9599 140.83 90.3499 140.83 88.6499C140.83 81.0599 135.38 75.9299 126.56 75.9299ZM119.56 88.0599C120.52 85.1699 122.66 83.1399 126.08 83.1399C129.34 83.1399 131.53 84.9599 131.48 88.0599H119.56Z" fill="white"/>
                <path d="M169.3 79.8799C167.48 77.0999 164.33 75.9299 160.43 75.9299C151.78 75.9299 144.72 83.0399 144.72 92.6499C144.72 101.09 150.7 105.85 156.95 105.85C160.32 105.85 163.09 104.73 165.34 102.64L164.75 105.36H174.37L180.14 76.3999H170L169.3 79.8799ZM160.49 97.6699C157.02 97.6699 154.99 95.5299 154.99 92.1699C154.99 87.3099 157.87 84.0499 161.88 84.0499C165.35 84.0499 167.38 86.2399 167.38 89.6099C167.38 94.4099 164.55 97.6699 160.49 97.6699Z" fill="white"/>
                <path d="M205.69 75.9299C202.32 75.9299 199.55 77.0499 197.3 79.1399L197.89 76.4199H188.27L180.42 115.74H190.57L193.35 101.9C195.17 104.68 198.32 105.85 202.22 105.85C210.87 105.85 217.93 98.7399 217.93 89.0699C217.92 80.6799 211.94 75.9299 205.69 75.9299ZM200.77 97.6699C197.3 97.6699 195.27 95.5299 195.27 92.1699C195.27 87.3099 198.15 84.0499 202.16 84.0499C205.63 84.0499 207.66 86.2399 207.66 89.6099C207.66 94.4099 204.78 97.6699 200.77 97.6699Z" fill="white"/>
                <path d="M239.93 75.9299C229.57 75.9299 222.14 83.0899 222.14 92.6499C222.14 100.61 228.07 105.85 237.31 105.85C247.67 105.85 255.1 98.6899 255.1 89.0699C255.1 81.1099 249.17 75.9299 239.93 75.9299ZM237.9 97.6699C234.43 97.6699 232.45 95.5299 232.45 92.1699C232.45 87.3099 235.28 84.0499 239.34 84.0499C242.81 84.0499 244.79 86.2399 244.79 89.6099C244.79 94.4099 241.96 97.6699 237.9 97.6699Z" fill="white"/>
                <path d="M273.75 85.0599H280.32L281.82 77.4699H275.25L276.75 69.9399H266.6L265.1 77.4699H260.88L259.33 85.0599H263.6L261.68 94.6199C261.47 95.5799 261.41 96.4899 261.41 97.3399C261.41 102.74 265.26 105.83 271.19 105.83C273.86 105.83 276.59 105.35 278.72 104.12L277.44 97.1199C276.42 97.6499 275.46 97.9699 274.39 97.9699C272.63 97.9699 271.72 97.1199 271.72 95.5099C271.72 95.2399 271.77 94.9199 271.83 94.5499L273.75 85.0599Z" fill="white"/>
                <path d="M122.32 42.54C117.75 43.09 114.54 45.94 112.47 50.17C111.53 52.09 110.92 54.19 110.12 56.33C109.67 55.86 109.18 55.32 108.66 54.82C106.78 53.06 104.75 51.99 102.1 52.21C99.86 52.39 97.66 51.67 96.36 49.33C95.37 47.54 95.78 46.82 97.67 46.78C98.84 46.76 99.8501 46.38 100.12 45.04C100.39 43.69 99.83 42.52 98.6 42.17C97.04 41.72 95.4 41.6 93.79 41.39C93.39 41.34 92.97 41.49 92.48 41.56C92.97 38.76 91.64 36.8 89.85 35.17C84.91 30.68 79.15 29.05 72.84 29.56C72.65 29.58 72.47 29.59 72.1 29.62C73.12 27.68 73.57 25.74 73.07 23.59C72.39 20.59 69.6301 18.5 66.8 18.93C63.8 19.38 61.8701 22.09 62.2401 25.31C62.5701 28.11 63.3001 29.69 65.2201 31.61C57.1001 35.29 50.8 40.54 50.6 51.04C48.84 51.39 47.05 51.54 45.41 52.15C44.6301 52.44 43.86 53.48 43.6 54.36C42.89 56.74 44.19 58.16 46.51 57.8C46.88 57.74 47.3 57.54 47.6101 57.67C48.1501 57.9 48.81 58.22 49.03 58.71C49.21 59.1 48.9501 59.93 48.62 60.28C48.15 60.77 47.4801 61.15 46.8301 61.32C41.0101 62.77 38.67 66.46 39.53 72.81C39.71 74.14 39.7601 75.51 39.68 76.84C39.5601 78.86 39.0401 80.72 36.93 81.37C34.9901 81.97 32.1 81.11 31.12 79.22C29.95 76.95 29.12 74.47 28.29 72.03C27.15 68.68 26.5 65.1 25.03 61.92C21.41 54.05 12.58 51.08 5.84005 55.33C4.37005 56.25 3.17005 57.74 2.06005 59.16C1.19005 60.27 1.73005 61.25 3.09005 61.14C4.86005 61.01 5.78005 61.97 6.44005 63.56C6.87005 64.58 7.43005 65.54 7.91005 66.49C8.29005 66.35 8.41005 66.35 8.45005 66.29C9.64005 64.36 11.23 63.21 13.52 63.73C16.05 64.3 17.52 66.18 18.27 68.67C19.14 71.58 19.32 74.57 18.92 77.58C18.42 81.37 17.88 85.15 18.85 89.02C20.81 96.89 26.07 101.69 34.12 102.66C36.21 102.91 38.32 102.86 40.6301 102.95C40.7601 104.02 40.87 105.3 41.09 106.56C42.76 115.98 48.85 120.44 56.73 122.06C62.44 123.23 68.18 123.07 73.83 122.09C80.76 120.89 87.69 119.57 94.54 117.97C100.89 116.48 106.78 113.75 111.77 109.26C112.11 108.95 112.44 108.64 112.76 108.32C107.21 105.35 103.96 100.03 103.96 93.16C103.96 84.14 108.77 76.86 116.28 73.34C117.16 72.93 117.58 71.91 117.28 70.99C116.88 69.73 116.48 68.47 116.08 67.22C115.9 66.65 115.85 66.06 115.85 65.5C115.83 62.09 115.86 58.76 117.15 55.62C119.34 50.32 124.35 48.66 129.15 51.64C132.91 53.97 134.79 58.11 133.36 61.88C132.7 63.61 131.34 65.18 129.97 66.41C128.8 67.46 127.61 68.48 126.45 69.54C125.87 70.07 126.25 71.04 127.04 71.04H127.06C129.21 71.04 131.24 71.29 133.1 71.75C134.47 70.73 135.82 69.68 137.14 68.58C142.38 64.18 142.22 57.94 139.46 52.4C136.22 45.85 129.11 41.73 122.32 42.54ZM61.2901 105.9H49.98L57.98 61.91H69.29L61.2901 105.9ZM111.55 71.81H98.11L91.27 105.89H78.84L85.68 71.81H72.18L74.19 61.95H113.55L111.55 71.81Z" fill="white"/>
                </svg>
                    <span 
                        onClick={()=>setIsMobileMenuShow(false)} 
                        className="w-[100%] mt-5 text-right pr-2 text-7xl mb-10 material-symbols-outlined">
                            close
                    </span>
                    <li 
                        onClick={()=>{
                            if(areProjectsShow) setAreProjectsShow(false)
                            else{
                                setAreProjectsShow(true)
                                setIsTeamShow(false)
                                setAreDocumentsShow(false)
                            }
                        }} 
                        className="w-[80%] flex justify-center flex-col items-center">
                        <span 
                            className="cursor-pointer p-2 rounded-xl mt-[3%] text-5xl opacity-80 hover:opacity-100  ">
                                projekty
                        </span>
                        {areProjectsShow?
                        <ul 
                            className="w-[90%]">
                            <li 
                                className="text-[#FFD60A] text-2xl  p-2 rounded-xl m-2  cursor-pointer flex justify-center items-center">
                                    getProject
                                <span 
                                    className="text-white ">
                                        (uniGate)
                                </span>
                            </li>
                        </ul>
                    :''}
                    </li>
                    <li 
                        onClick={()=>{
                            if(areDocumentsShow) setAreDocumentsShow(false)
                            else{
                                setAreDocumentsShow(true)
                                setIsTeamShow(false)
                                setAreProjectsShow(false)
                            }
                        }} 
                        className="w-[80%] flex justify-center flex-col items-center">
                        <span 
                            className="cursor-pointer p-2 rounded-xl text-5xl opacity-80 hover:opacity-100  ">
                                dokumenty
                        </span>
                        {areDocumentsShow?
                            <ul>
                                <li 
                                    className="text-[#FFD60A] text-2xl  p-2 rounded-xl m-2  cursor-pointer flex justify-center items-center">
                                        getDocs
                                    <span 
                                        className="text-white ">
                                            (status)
                                    </span>
                                </li>
                                <li 
                                    className="text-[#FFD60A] text-2xl  p-2 rounded-xl m-2  cursor-pointer flex justify-center items-center">
                                        getDocs
                                    <span 
                                        className="text-white ">
                                            (prawne)
                                        </span>
                                </li>
                            </ul>:''}
                    </li>
                    <li onClick={()=>{
                        if(isTeamShow) setIsTeamShow(false)
                        else{
                            setIsTeamShow(true)
                            setAreDocumentsShow(false)
                            setAreProjectsShow(false)
                    }
                        }} 
                        className="w-[80%]  flex justify-center flex-col items-center">
                        <span 
                            className="cursor-pointer p-2 rounded-xl text-5xl opacity-80 hover:opacity-100  ">
                                zespół
                        </span>
                        {isTeamShow?
                            <ul className="">
                                <li 
                                    className="text-[#FFD60A] text-2xl  p-2 rounded-xl m-2  cursor-pointer flex justify-center items-center">
                                            getTeam
                                            <span 
                                                className="text-white ">
                                                    (zarząd)
                                            </span>
                                </li>
                                <li 
                                    className="text-[#FFD60A] text-2xl  p-2 rounded-xl m-2  cursor-pointer flex justify-center items-center">
                                            getTeam
                                            <span 
                                                className="text-white  ">
                                                    (zespoły)
                                            </span>
                                </li>
                            </ul>:''}
                    </li>
                    <div 
                        className="absolute bottom-5 flex justify-around w-[100%] p-5">
                    <svg className="w-[15%]" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_178_38)">
                        <path d="M30 0.498322C13.4316 0.498322 0 13.9299 0 30.4983C0 44.5671 9.6864 56.3727 22.7532 59.6151V39.6663H16.5672V30.4983H22.7532V26.5479C22.7532 16.3371 27.3744 11.6043 37.3992 11.6043C39.3 11.6043 42.5796 11.9775 43.9212 12.3495V20.6595C43.2132 20.5851 41.9832 20.5479 40.4556 20.5479C35.5368 20.5479 33.636 22.4115 33.636 27.2559V30.4983H43.4352L41.7516 39.6663H33.636V60.2787C48.4908 58.4847 60.0012 45.8367 60.0012 30.4983C60 13.9299 46.5684 0.498322 30 0.498322Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_178_38">
                        <rect width="60" height="60" fill="white" transform="translate(0 0.498322)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg className="w-[15%]" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_178_35)">
                        <rect x="0.00732422" y="0.498322" width="60" height="60.0001" fill="white"/>
                        <path d="M43.004 18.2915C40.6216 17.2043 38.0516 16.417 35.369 15.9671C35.3128 15.9671 35.2752 15.9858 35.2377 16.0233C34.9001 16.6044 34.5436 17.3542 34.281 17.9353C31.3921 17.5042 28.5219 17.5042 25.7081 17.9353C25.4642 17.3355 25.089 16.6044 24.7513 16.0233C24.7326 15.9858 24.6763 15.9671 24.6388 15.9671C21.9562 16.417 19.3862 17.223 17.0038 18.2915C16.9851 18.2915 16.9663 18.3102 16.9475 18.329C12.0889 25.4709 10.757 32.4441 11.4136 39.3235C11.4136 39.361 11.4323 39.3985 11.4699 39.4173C14.6589 41.7416 17.7729 43.1475 20.8119 44.0848C20.8682 44.1035 20.9057 44.0848 20.9432 44.0473C21.6561 43.0726 22.3127 42.0603 22.8567 40.9731C22.8942 40.9169 22.8567 40.8419 22.8004 40.8044C21.7874 40.4295 20.8119 39.9609 19.874 39.436C19.7989 39.3985 19.7989 39.286 19.8552 39.2485C20.0428 39.0986 20.2492 38.9486 20.4367 38.7987C20.4743 38.7799 20.5118 38.7612 20.5493 38.7799C26.6835 41.5355 33.343 41.5355 39.4023 38.7799C39.4398 38.7612 39.496 38.7612 39.5336 38.7987C39.7212 38.9486 39.9088 39.0986 40.1151 39.2485C40.1901 39.3048 40.1714 39.3985 40.0963 39.436C39.1584 39.9796 38.1829 40.4295 37.1699 40.8044C37.0949 40.8231 37.0761 40.8981 37.1136 40.9731C37.6764 42.0416 38.3142 43.0726 39.0271 44.0286C39.0646 44.066 39.1021 44.0848 39.1584 44.066C42.2161 43.1288 45.3302 41.7229 48.538 39.4173C48.5567 39.3985 48.5755 39.361 48.5942 39.3235C49.3821 31.3569 47.2811 24.4586 43.0415 18.329C43.0415 18.329 43.0228 18.3102 43.004 18.2915ZM23.7759 35.1434C21.9187 35.1434 20.3992 33.475 20.3992 31.4318C20.3992 29.3886 21.9 27.7203 23.7759 27.7203C25.6705 27.7203 27.1713 29.4074 27.1525 31.4318C27.1525 33.475 25.6518 35.1434 23.7759 35.1434ZM36.2507 35.1434C34.3936 35.1434 32.8741 33.475 32.8741 31.4318C32.8741 29.3886 34.3748 27.7203 36.2507 27.7203C38.1454 27.7203 39.6461 29.4074 39.6274 31.4318C39.6274 33.475 38.1454 35.1434 36.2507 35.1434Z" fill="#003566"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_178_35">
                        <rect x="0.00732422" y="0.498322" width="60" height="60.0001" rx="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg className="w-[15%]" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_178_28)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.6072 0.498322C14.0043 0.498322 0.582397 14.0191 0.582397 30.7463C0.582397 44.1171 9.18225 55.4353 21.1125 59.4411C22.6041 59.7423 23.1505 58.7903 23.1505 57.9895C23.1505 57.2882 23.1013 54.8846 23.1013 52.3802C14.7491 54.1834 13.0099 48.7744 13.0099 48.7744C11.6676 45.2688 9.67884 44.3679 9.67884 44.3679C6.94517 42.5149 9.87796 42.5149 9.87796 42.5149C12.9103 42.7153 14.5015 45.6198 14.5015 45.6198C17.1854 50.2267 21.5102 48.925 23.2501 48.1236C23.4983 46.1704 24.2942 44.8184 25.1393 44.0673C18.4778 43.3661 11.4691 40.7621 11.4691 29.1434C11.4691 25.8382 12.6614 23.134 14.5506 21.0309C14.2526 20.2799 13.2084 17.1744 14.8493 13.018C14.8493 13.018 17.3845 12.2166 23.1007 16.1229C25.548 15.4608 28.0719 15.1239 30.6072 15.1211C33.1424 15.1211 35.7267 15.472 38.1131 16.1229C43.83 12.2166 46.3651 13.018 46.3651 13.018C48.0061 17.1744 46.9613 20.2799 46.6632 21.0309C48.6022 23.134 49.7453 25.8382 49.7453 29.1434C49.7453 40.7621 42.7366 43.3157 36.0254 44.0673C37.1193 45.0187 38.0633 46.8213 38.0633 49.676C38.0633 53.7323 38.0142 56.9877 38.0142 57.9889C38.0142 58.7903 38.5611 59.7423 40.0521 59.4417C51.9824 55.4347 60.5823 44.1171 60.5823 30.7463C60.6314 14.0191 47.1604 0.498322 30.6072 0.498322Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_178_28">
                        <rect width="60" height="60" fill="white" transform="translate(0.582397 0.498322)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg className="w-[15%]" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.5897 60C47.1583 60 60.5897 46.5686 60.5897 30C60.5897 13.4315 47.1583 0 30.5897 0C14.0212 0 0.589722 13.4315 0.589722 30C0.589722 46.5686 14.0212 60 30.5897 60ZM45.2878 14.6991H15.2878C13.2253 14.6991 11.5566 16.3866 11.5566 18.4491L11.5378 40.9491C11.5378 43.0116 13.2253 44.6991 15.2878 44.6991H45.2878C47.3502 44.6991 49.0377 43.0116 49.0377 40.9491V18.4491C49.0377 16.3866 47.3502 14.6991 45.2878 14.6991ZM45.2878 22.1991L30.2878 31.5741L15.2878 22.1991V18.4491L30.2878 27.8241L45.2878 18.4491V22.1991Z" fill="white"/>
                    </svg>
                    <svg className="w-[15%]" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.5969 60C47.1655 60 60.5969 46.5686 60.5969 30C60.5969 13.4315 47.1655 0 30.5969 0C14.0284 0 0.596924 13.4315 0.596924 30C0.596924 46.5686 14.0284 60 30.5969 60ZM30.2936 10.9491C23.0374 10.9491 17.1686 16.8179 17.1686 24.0741C17.1686 33.9179 30.2936 48.4491 30.2936 48.4491C30.2936 48.4491 43.4186 33.9179 43.4186 24.0741C43.4186 16.8179 37.5499 10.9491 30.2936 10.9491ZM30.2936 28.7616C27.7061 28.7616 25.6061 26.6616 25.6061 24.0741C25.6061 21.4866 27.7061 19.3866 30.2936 19.3866C32.8811 19.3866 34.9811 21.4866 34.9811 24.0741C34.9811 26.6616 32.8811 28.7616 30.2936 28.7616Z" fill="white"/>
                    </svg>

                    </div>


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
                                className="hover:text-[#FFD60A] md:text-xl bg-[#003566] shadow-[#000814] shadow-md p-2 rounded-xl mt-[3%]  cursor-pointer">
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
                                className="hover:text-[#FFD60A] md:text-xl shadow-[#000814] shadow-md bg-[#003566] p-2 rounded-xl mt-[3%]  cursor-pointer">
                                    getDocs
                                <span 
                                    className="text-white md:text-2xl">
                                        (status)
                                </span>
                            </li>
                            <li 
                                className="hover:text-[#FFD60A] md:text-xl shadow-[#000814] shadow-md bg-[#003566] p-2 rounded-xl mt-[3%]  cursor-pointer">
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
                                className="hover:text-[#FFD60A] md:text-xl shadow-[#000814] shadow-md bg-[#003566] p-2 rounded-xl mt-[3%]  cursor-pointer">
                                    getTeam
                                <span 
                                    className="text-white md:text-2xl">
                                        (zarząd)
                                </span>
                            </li>
                            <li 
                                className="hover:text-[#FFD60A] md:text-xl shadow-[#000814] shadow-md bg-[#003566] p-2 rounded-xl mt-[3%]  cursor-pointer">
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