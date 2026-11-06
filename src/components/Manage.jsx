function Manage({ personalInfo, confirm, onEdit, onAdd }) {
    return (
        <>
            <section className="bg-teal-50 w-full h-fit flex justify-center items-center py-10">
                <div>
                    <div className="bg-purple-500 rounded-xl mb-4">
                        <p className="text-md font-sans text-center py-8 font-bold italic text-white">Manage Students</p>
                    </div>
                    <div className="bg-purple-600 rounded-xl px-10 pb-5">
                        <div className="grid grid-cols-5 justify-between  w-250 text-white  rounded-t-xl py-5">

                            <svg className="w-6 h-6 flex justify-center items-center w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 255, 253)" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                            <p className="text-center font-bold italic">Name</p>
                            <p className="text-center font-bold italic">Age</p>
                            <p className="text-center font-bold italic">Address</p>
                            <svg onClick={onAdd} className="w-6 h-6 flex justify-center items-center w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 255, 253)" d="M285.7 368C384.2 368 464 447.8 464 546.3C464 562.7 450.7 576 434.3 576L77.7 576C61.3 576 48 562.7 48 546.3C48 447.8 127.8 368 226.3 368L285.7 368zM528 144C541.3 144 552 154.7 552 168L552 216L600 216C613.3 216 624 226.7 624 240C624 253.3 613.3 264 600 264L552 264L552 312C552 325.3 541.3 336 528 336C514.7 336 504 325.3 504 312L504 264L456 264C442.7 264 432 253.3 432 240C432 226.7 442.7 216 456 216L504 216L504 168C504 154.7 514.7 144 528 144zM256 312C189.7 312 136 258.3 136 192C136 125.7 189.7 72 256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312z" /></svg>
                        </div>

                        <div className="">
                            {personalInfo.map((detail, index) => (
                                <div key={index} className="bg-purple-200 rounded-xl mb-5 hover:scale-105 duration-400">
                                    <div className="grid grid-cols-5 py-5 items-center">
                                        <div className="flex justify-center">
                                            <img src={detail.img} alt="" className="rounded-full w-20 h-20 object-fit hover:scale-200 duration-300" />

                                        </div>
                                        <p className="text-center font-bold italic">{detail.name}</p>
                                        <p className="text-center font-bold italic">{detail.age}</p>
                                        <p className="text-center font-bold italic">{detail.address}</p>
                                        <div className="text-xs flex justify-center gap-5">
                                            <svg onClick={() => onEdit(index)} className="w-5 h-5 hover:scale-130 duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(18, 16, 16)" d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" /></svg>
                                            <svg onClick={() => confirm(index)} className="w-5 h-5 hover:scale-130 duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(18, 16, 16)" d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" /></svg>
                                        </div>
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
export default Manage



