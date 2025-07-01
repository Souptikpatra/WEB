import './App.css'
import Button from './components/Button';

function App() {
  return(
    <>
      <Button btn_name="hii" btnHandler={() => {console.log("hello")}}/>;
    </>
  );


}

export default App;
