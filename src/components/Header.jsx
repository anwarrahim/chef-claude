function Header(props){
    return(
        <>
            <div className="w-screen  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] bg-white shadow-gray-400">
                <div className="container-wrapper py-2 flex justify-center items-center">
                    <img className="w-15 h-15 pr-2 " src={props.webLogo} alt="" />
                    <span className="text-xl font-semibold ">{props.webName}</span>
                </div>
            </div>
        </>
    )
}


export default Header