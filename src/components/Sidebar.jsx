function Sidebar({ onSelectedTab }) {
    return (
        <>
            <section className="fixed h-screen bg-violet-950 left-0 top-0 w-15 hover:w-30 duration-300 group delay-300">
                <div className=" h-screen blur blur-duration-300 hover:blur-none hover:w-30 duration-300 group delay-300 px-5 py-8 space-y-8">
                    <p onClick={() => onSelectedTab('Home')} className="text-white font-bold cursor-pointer hover:text-purple-300">HOME</p>
                    <p onClick={() => onSelectedTab('Manage')} className="text-white font-bold cursor-pointer hover:text-purple-300">MANAGE</p>
                </div>
            </section>
        </>
    )
}
export default Sidebar
