import logo from './logo.svg';
import './App.css';

import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import ContactLinks from './Components/ContactLinks/ContactLinks';
import Main from './Components/Main/Main';
import AboutUs from './Components/AboutUs/AboutUs';
import Customers from './Components/Customers/Customers';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import Specialties from './Components/Specialties/Specialties';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ContactLinks/>
      <Main
        header = { <Header/> }
        aboutUs = { <AboutUs/> }
        specialties = { <Specialties/> }
        customers = { <Customers/> }
        contactInfo = { <ContactInfo/> }
      />
      <Footer/>
    </div>
  );
}

export default App;
