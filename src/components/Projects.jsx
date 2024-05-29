import Header from "./Header";
import gambar from '../assets/img/dewandarufoto.png'
import gambarLyrafood from '../assets/img/lyrafoodWebsite.png'
const Projects = ({ judul }) => {
    return (
        <>
            <div>
                <Header judul={judul} />
                <p className="text-center text-gray-400 mb-5">Ini adalah beberapa projects yang telah saya kerjakan</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-center" id="project">
                    <div>
                        <img src={gambar} alt="" />
                        <p className="text-gray-400 mt-4">Ini adalah Project landing pages dari perusahaan <a href="https://dewandarupendopo.com" className="underline">Dewandaru Pendopo</a></p>
                    </div>
                    <div>
                        <img src={gambarLyrafood} alt="" />
                        <p className="text-gray-400 mt-4">Ini adalah Project membuat Web Aplication tentang penjualan dan pembelian makanan </p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Projects;