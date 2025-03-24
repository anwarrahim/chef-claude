function Header(props){
    return(
        <>
            <div className="w-screen  shadow shadow-gray-400">
                <div className="container-wrapper flex justify-center items-center my-2">
                    <img className="w-15 h-15 mr-2" src={props.webLogo} alt="" />
                    <span className="text-2 ">{props.webName}</span>
                </div>
            </div>
        </>
    )
}


export default Header