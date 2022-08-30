const CardTitle = ({ children }) => {
    return (
        <>
            <p className='font-bold tracking-wider text-center text-transparent text-2xl my-2 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>
                {children}
            </p>
        </>
    )
}

export default CardTitle