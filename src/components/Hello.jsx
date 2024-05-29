import Button from "./Button";
const Hello = ({ ctaEmail }) => {
    return (
        <>
            <div className="mt-6 dark:text-white" id="home">
                <h3 className="text-yellow-500 text-2xl">Hello</h3>
                <span className="text-white text-[4em]">I'm</span> <span className="text-yellow-500 text-4xl lg:text-[4em]">Muhammad Fadli Kurniawan</span>
                <h3 className="text-2xl">Fullstack Developer</h3>
                <div className="flex mt-4 h-auto">
                    <Button ctaEmail={ctaEmail} />
                </div>
            </div>
        </>
    );
}

export default Hello;