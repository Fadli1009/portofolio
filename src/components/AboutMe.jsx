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
                        <p className="text-gray-400">Ini adalah biodata tentang saya :</p>
                        <table className='mb-3'>
                            <tr>
                                <td className='text-gray-400 p-3'>Nama :</td>
                                <td className='text-gray-400 p-3'>Muhammad Fadli Kurniawan</td>
                            </tr>
                            <tr>
                                <td className='text-gray-400 p-3'>Tempat Tanggal Lahir :</td>
                                <td className='text-gray-400 p-3'>Jakarta 10 September 2005</td>
                            </tr>
                            <tr>
                                <td className='text-gray-400 p-3'>Lokasi :</td>
                                <td className='text-gray-400 p-3'>Kavling Hankam Joglo, Jakarta Barat</td>
                            </tr>
                            <tr>
                                <td className='text-gray-400 p-3'>Email :</td>
                                <td className='text-gray-400 p-3'>@m.fadlikurniawan1009@gmail.com</td>
                            </tr>
                            <tr>
                                <td className='text-gray-400 p-3'>Phone :</td>
                                <td className='text-gray-400 p-3'>+62 812 - 8701 - 9853</td>
                            </tr>
                        </table>
                        {/* <ul className="text-white mt-5 mb-5" id="about">
                            <li><span className="text-gray-400">Nama :</span>  Muhammad Fadli Kurniawan</li>
                            <li><span className="text-gray-400">Tempat Tanggal Lahir :</span>Jakarta 10 September 2005</li>
                            <li><span className="text-gray-400">Lokasi :</span> Kavling Hankam Joglo, Jakarta Barat</li>
                            <li><span className="text-gray-400">Email :</span> @m.fadlikurniawan1009@gmail.com</li>
                            <li><span className="text-gray-400">Phone : </span>+62 812 - 8701 - 9853</li>
                        </ul> */}
                        <Button downloadCV={downloadCV} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;