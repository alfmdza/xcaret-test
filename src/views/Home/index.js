import Promotions from '../../components/Promotions';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './index.css';
import Prefooter from '../../components/Prefooter';
import { useFetchLanguageInitialQuery } from '../../redux/api/languages';


import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { pathname } = useLocation()

    console.log(pathname)
    const { data: language, isLoading, isFetching } = useFetchLanguageInitialQuery();
    console.log(language)

    const renderSwitch = (pathname) => {
        switch (pathname) {
            case '/es':
                console.log("español")

                return (<div>
                    <Navbar components={language.es} />
                    <Header components={language.es} />
                    <div className='mt-40'>
                        <Promotions components={language.es} />
                    </div>

                    <Footer components={language.es} />
                    <Prefooter components={language.es} /></div>)

            case '/en':
                console.log("ingles")
                return (<div>
                    <Navbar components={language.en} />
                    <Header components={language.en} />
                    <div className='mt-40'>
                        <Promotions components={language.en} />
                    </div>

                    <Footer components={language.en} />
                    <Prefooter components={language.en} /></div>)

            default:
                break;
        }
    }





    return (


        isLoading && isFetching ? (

            <div>Loading ...</div>

        ) : (

            renderSwitch(pathname)



        )









    );
};

export default Home;