const Progress = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:text-center mt-5">
                <div>
                    <p className="mb-1 text-yellow-500 text-2xl">Laravel</p>
                    <div className="bg-gray-500 h-4 rounded-full">
                        <div className="bg-blue-500 h-4 w-[70%] rounded-full"></div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="mb-1 text-yellow-500 text-2xl">React</p>
                        <div className="bg-gray-500 h-4 rounded-full">
                            <div className="bg-blue-500 h-4 w-[30%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="mb-1 text-yellow-500 text-2xl">Python</p>
                        <div className="bg-gray-500 h-4 rounded-full">
                            <div className="bg-blue-500 h-4 w-[60%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="mb-1 text-yellow-500 text-2xl">Javascript</p>
                        <div className="bg-gray-500 h-4 rounded-full">
                            <div className="bg-blue-500 h-4 w-[40%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="mb-1 text-yellow-500 text-2xl">Tailwind CSS</p>
                        <div className="bg-gray-500 h-4 rounded-full">
                            <div className="bg-blue-500 h-4 w-[40%] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="mb-1 text-yellow-500 text-2xl">Microsoft Office (Word,Excel)</p>
                        <div className="bg-gray-500 h-4 rounded-full">
                            <div className="bg-blue-500 h-4 w-[80%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progress;