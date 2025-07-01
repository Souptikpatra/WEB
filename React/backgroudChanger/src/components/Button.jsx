function Button({color,text,textColor}){
    return (
        <button className="px-4 py-2 rounded-md"
                style={{backgroundColor:color,
                        width: "70px",
                        height:"50px",
                        color:textColor
                }}
        >{text}</button>
    )
}
export default Button;