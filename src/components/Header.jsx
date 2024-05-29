const Header = ({ judulAbout, judulSkils, judul, judulContact }) => {
    return (
        <>
            {judulAbout && <h1 className="text-center text-3xl text-white justify-center flex w-full mb-3" >{judulAbout}</h1>}
            {judulSkils && <h1 className="text-center text-3xl text-white justify-center flex w-full mb-3" >{judulSkils}</h1>}
            {judul && <h1 className="text-center text-3xl text-white justify-center flex w-full mb-3" >{judul}</h1>}
            {judulContact && <h1 className="text-center text-3xl text-white justify-center flex w-full mb-3" >{judulContact}</h1>}
        </>
    );
}

export default Header;