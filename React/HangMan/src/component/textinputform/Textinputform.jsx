function Textinputform({onSubmit}){
    return(
        <form className="flex" onSubmit={onSubmit}>
            <div className="mr-2 flex-1">
                <Textinput
                    label = "Enter a word or Pharase"
                    type="password" 
                    
                />
            </div>

            <div className="flex">
                    <Button 
                        btnName = "OK"
                        type = "submit"
                    />
            </div>
        </form>
    );




}
export default Textinputform;