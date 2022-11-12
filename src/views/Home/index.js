import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className='carrousel'>

                <div className='flex'>
                    <div className='w-full text-carrousel'>OUTLET XCARET</div>
                </div>

                <div className='flex'>
                    <div className='w-5/12 second-text-carrousel'>00 %</div>
                    <div className='w-7/12 description-carrousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</div>
                </div>
            </div>
            <div className='mt-40'>
                <Card />
            </div>

            <Footer />




        </>


    );
};

export default Home;