import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Student from './Student.jsx';
import Usergreeting from './Usergreeting.jsx';
function App() {
  return (
   <div>
  <Header />
  <Food />
  <Student name="shahid" />
  <Student />
    <Footer/>  
    <Usergreeting username="Mohammed" isLogged={true}/>
    <Usergreeting username="Mr. React " isLogged={false}/>


   </div>
  
  );
}

export default App
