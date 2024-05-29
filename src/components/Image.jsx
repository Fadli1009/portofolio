// import foto from '../assets/Fotogue.jpeg'
const Image = ({ src1, src2 }) => {
    return (
        <>
            {src1 && < img src={src1} alt="foto1" className='w-full lg:w-[300px] lg:ms-10 rounded-lg' />}
            {src2 && <img src={src2} alt="foto1" className='w-full lg:w-[300px] rounded-lg my-4 lg:my-0 h-[400px]' />}
        </>
    );
}

export default Image;