import Header from "./Header";
const Contact = ({ judulContact }) => {
    const click = () => {
        alert('fungsi belum dimasukan')
    }

    return (
        <>
            <Header judulContact={judulContact} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 text-center text-white">
                <div>
                    <form action="" className="border p-4 rounded-lg">
                        <div className="flex flex-col text-left">
                            <label htmlFor="">Nama</label>
                            <input type="text" className="bg-transparent border outline-none p-2" />
                        </div>
                        <div className="flex flex-col text-left my-5">
                            <label htmlFor="">Email</label>
                            <input type="email" className="bg-transparent border outline-none p-2" />
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="">Pesan</label>
                            <textarea name="" id="" className="bg-transparent border outline-none p-2"></textarea>
                        </div>
                        <div>
                            <button className="bg-yellow-400 w-full p-2 mt-3 text-black rounded-lg" onClick={() => click()}>Kirim</button>
                        </div>
                    </form>
                </div>
                <div className="text-left">
                    <div>
                        <h1 className="text-3xl lg:text-5xl ">Get <span className="text-yellow-400">In Touch</span></h1>
                    </div>
                    <div>
                        <p>Hubungi saya jika ada yang bisa saya bantu</p>
                    </div>
                    <div>
                        <ul className="p-3">
                            <li className="flex items-center my-3">
                                <i class="fa-solid fa-location-dot text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Alamat saya</h1>
                                    <p>Jalan Kavling Hankam joglo nomor 12</p>
                                </div>
                            </li>
                            <li className="flex items-center my-3">
                                <i class="fa-brands fa-instagram text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Instagram saya</h1>
                                    <p><a href="https://instagram.com/fadlikurniawan109" target="_blank">@fadlikurniawan109</a></p>
                                </div>
                            </li>
                            <li className="flex items-center my-3">
                                <i class="fa-solid fa-envelope text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Email saya</h1>
                                    <p>@m.fadlikurniawan1009@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;