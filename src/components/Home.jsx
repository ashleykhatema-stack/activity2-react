function Home({ personalInfo }) {
    return (
        <>
            <section className="bg-violet-50 w-full h-fit flex justify-center items-center py-10">
                <div>
                    <div className="bg-violet-500 rounded-xl mb-4">
                        <p className="text-md font-bold italic  text-white text-center py-8">List of Students</p>
                    </div>
                    <div className="bg-violet-600 rounded-xl px-10 pb-5">
                        <div className="grid grid-cols-4 justify-between  w-250 text-white  rounded-t-xl py-5">

                            <p className="text-center font-bold italic">Profile</p>
                            <p className="text-center font-bold italic">Name</p>
                            <p className="text-center font-bold italic">Age</p>
                            <p className="text-center font-bold italic">Address</p> 

                        </div>

                        <div className="">
                            {personalInfo.map((detail, index) => (
                                <div key={index} className="bg-violet-200 rounded-xl mb-5 hover:scale-105 duration-400">
                                    <div className="grid grid-cols-4 py-5 items-center">
                                        <div className="flex justify-center">
                                            <img src={detail.img} alt="" className="rounded-full w-20 h-20 object-fit hover:scale-200 duration-300" />

                                        </div>
                                        <p className="text-center font-bold italic">{detail.name}</p>
                                        <p className="text-center font-bold italic">{detail.age}</p>
                                        <p className="text-center font-bold italic">{detail.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home



