
import Posts from "./Components/Posts/Posts"
import Navbar from "./Components/Header/Navbar"
import { Originals,Comedy } from "./urls"
import '../src/App.css'

const App = () => {
  return (
    
    <div className="theme container-flex" >
 <Navbar/>

<Posts title="Netflix Originals" isSmall={false} url={Originals}/>
<Posts title="Comedy" url={Comedy} isSmall ={true}/>
<Posts title="Comedy" url={Comedy} isSmall ={true}/>


 

    </div>
  
   
  )
}

export default App