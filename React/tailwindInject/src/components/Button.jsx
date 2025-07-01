function Button({btn_name = "click me",btnHandler}){
    return(
        <>
            <button className="px-4 py-2 bg-blue-500 rounded-md transition-all hover:bg-blue-700" onClick={btnHandler}>{btn_name}</button>
        </>
        );
}
export default Button;