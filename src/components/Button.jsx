const Button = ({ ctaEmail, downloadCV }) => {
    return (
        <>
            {ctaEmail && <a href={ctaEmail} className="bg-yellow-500 rounded-2xl p-2 px-4 text-black me-4 hover:bg-yellow-600">Hire Saya</a>}
            {downloadCV && <a href={downloadCV} className="bg-yellow-500 rounded-2xl p-2 px-4 text-black me-4 hover:bg-yellow-600" target="_blank">Download CV</a>}
        </>
    );
}

export default Button;