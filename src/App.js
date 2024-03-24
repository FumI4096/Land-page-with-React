import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from './components/animation/Loading';
import Contents from './components/Contents';

const App = () => {
    return(
        <>
            <Loading />
            <Header />
            <Contents />
            <Footer />
        </>
    );
}

export default App;


