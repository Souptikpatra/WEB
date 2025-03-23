function Textinput({label, type = 'text', value, onChange}){
    return(
        <label>
            {label && <span className="text-gray-700">{label}</span>} 
            {/*it is short circuiting,  Conditionally render <span> if 'label' is not null, undefined, or empty*/}
            <input 
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                placeholder={label}
                type={type}
                value={value}
                onChange={onChange}
                
                          
            />

        </label>
    );
}
export default Textinput;