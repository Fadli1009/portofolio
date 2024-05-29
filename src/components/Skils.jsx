import Header from "./Header";
import Progress from "./Progressbar";
const Skils = ({ judulSkils }) => {
    return (
        <>
            <div className="pt-44">
                <Header judulSkils={judulSkils} />
                <p className="text-center text-gray-400">Ini adalah beberapa skils yang saya miliki, dan saya masih terus mengasah skil saya di bidang ini:</p>
                <div className="flex">
                    <Progress />
                </div>
            </div>
        </>
    );
}

export default Skils;