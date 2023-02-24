import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
    <Navbar />
     <div className="container my-3">  
     <Textform heading="Enter Text" />
     </div>
 
    </>
  )
}

export default App;
