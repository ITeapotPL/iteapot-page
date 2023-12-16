import Navbar from "./Components/Navbar"
function App() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-[#001D3D] via-[#00254b] to-blue-300 ">
                <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center relative">
                    <Navbar/>
                    {/* Header */}
                    
                    <h1 className="text-center text-5xl font-sourcecode text-white mt-[10%]">
                        W <span className="text-yellow-100">ITeapot</span> parzymy najlepsze kody.
                    </h1>


                    {/* Content */}
                    {/* Footer */}
                </div>
            </div>
        </>
    )
}

export default App
