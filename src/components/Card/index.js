import './index.css';
import LeftArrow from '../../assets/left-arrow.png';
import RightArrow from '../../assets/right-arrow.png';
import Lugar from '../../assets/lugar.png';
const Card = () => {
    return (
        <>
            <div className='flex mb-20'>
                <div className='w-1/12'></div>
                <div className='w-6/12 card-img'>
                    <div className='grid justify-items-end'>
                        <img className='right-arrow' src={RightArrow} alt="Right arrow" />
                        <img className='left-arrow' src={LeftArrow} alt="Left arrow" />
                    </div>
                </div>
                <div className='w-5/12'>
                    <div className='grid p-8 justify-items-start p-8'>
                        <img className='place' src={Lugar} alt="place" />
                        <div className='place-title mt-4 text-left'>HOTEL XCARET MEXICO</div>
                        <div className='place-content mt-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </div>
                        <div className='place-sub-content mt-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </div>
                        <button type='button' className='place-button mt-4 justify-self-center'>¡RESERVA AHORA!</button>
                    </div>
                </div>
            </div>

            <div className='flex mb-20'>
            <div className='w-5/12'>
                    <div className='grid justify-items-end p-8'>
                        <img className='place' src={Lugar} alt="place" />
                        <div className='place-title mt-4 text-right'>HOTEL XCARET MEXICO</div>
                        <div className='place-content mt-4 text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </div>
                        <div className='place-sub-content mt-4 text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. </div>
                        <button type='button' className='place-button mt-4 justify-self-center'>¡RESERVA AHORA!</button>
                    </div>
                </div>
                <div className='w-6/12 card-img'>
                    <div className='grid justify-items-end'>
                        <img className='right-arrow' src={RightArrow} alt="Right arrow" />
                        <img className='left-arrow' src={LeftArrow} alt="Left arrow" />
                    </div>
                </div>
                <div className='w-1/12'></div>
            </div>


        </>


    );
};

export default Card;