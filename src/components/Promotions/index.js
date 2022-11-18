import './index.css';
import LeftArrow from '../../assets/left-arrow.png';
import RightArrow from '../../assets/right-arrow.png';
const Promotions = ({ components }) => {
    return (


        components?.promotions?.map((c, index) => (


            ((index + 1) % 2 !== 0) ? (

                <div key={index + 1} className='flex mb-20'>
                    <div className='w-1/12'></div>
                    <div className='w-6/12 promotions-img' style={{
                        backgroundImage: `url(${c.imagePromo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='grid justify-items-end'>
                            <img className='right-arrow' src={RightArrow} alt="Right arrow" />
                            <img className='left-arrow' src={LeftArrow} alt="Left arrow" />
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <div className='grid p-8 justify-items-start p-8'>
                            <img className='place' src={c.logoPromo} alt="logo-promo" />
                            <div className='place-title mt-4 text-left'>{c.title}</div>
                            <div className='place-content mt-4 text-left'>{c.Subtitle}</div>
                            <div className='place-sub-content mt-4 text-left'>
                                {c.paragraphs?.map((p, indexp) =>
                                (
                                    <p key={indexp + 1}>{p}</p>
                                )

                                )}</div>
                            <button type='button' className='place-button mt-4 justify-self-center'>{c.button.text}</button>
                        </div>
                    </div>
                </div>

            ) : (
                <div key={index + 1} className='flex mb-20'>
                    <div className='w-5/12'>
                        <div className='grid justify-items-end p-8'>
                            <img className='place' src={c.logoPromo} alt="logo-promo" />
                            <div className='place-title mt-4 text-right'>{c.title}</div>
                            <div className='place-content mt-4 text-right'>{c.Subtitle}</div>
                            <div className='place-sub-content mt-4 text-right'>
                                {c.paragraphs?.map((p, indexp) =>
                                (
                                    <p key={indexp + 1}>{p}</p>
                                )

                                )}</div>
                            <button type='button' className='place-button mt-4 justify-self-center'>{c.button.text}</button>
                        </div>
                    </div>
                    <div className='w-6/12 promotions-img' style={{
                        backgroundImage: `url(${c.imagePromo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='grid justify-items-end'>
                            <img className='right-arrow' src={RightArrow} alt="Right arrow" />
                            <img className='left-arrow' src={LeftArrow} alt="Left arrow" />

                        </div>
                    </div>
                    <div className='w-1/12'></div>
                </div>
            )






        )
        )





    );
};

export default Promotions;