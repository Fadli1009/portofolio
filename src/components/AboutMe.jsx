import '../App.css'
import Button from './Button';
import Header from './Header';
const About = ({ downloadCV, judulAbout }) => {
    return (
        <>
            <div>
                <div className="lg:ms-10">
                    <div className="mt-5">
                        <Header judulAbout={judulAbout} />
                        <p className="text-gray-400">Ini adalah data tentang saya</p>
                        <ul className="text-white mt-5 mb-5" id="about">
                            <li><span className="text-gray-400">Nama :</span>  Muhammad Fadli Kurniawan</li>
                            <li><span className="text-gray-400">Tempat Tanggal Lahir :</span>Jakarta 10 September 2005</li>
                            <li><span className="text-gray-400">Lokasi :</span> Kavling Hankam Joglo, Jakarta Barat</li>
                            <li><span className="text-gray-400">Email :</span> @m.fadlikurniawan1009@gmail.com</li>
                            <li><span className="text-gray-400">Phone : </span>+62 812 - 8701 - 9853</li>
                        </ul>
                        <Button downloadCV={downloadCV} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;