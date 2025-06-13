import "./styles/theme.css";
import "./styles/global.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className='spacer'></div>
      <Footer />
    </>
  );
}

export default App;
