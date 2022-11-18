import './index.css';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Prefooter = ({ components }) => {
    return (
        <>
            <div className="section-2 flex">
                <div className='w-1/12'>

                </div>
                <div className='section-2-text w-8/12'>
                    <p style={{ fontFamily: "12px" }}>{components?.prefooter?.contactCenter?.title}</p>
                    <p>{components?.prefooter?.contactCenter?.email}</p>
                    <div className='flex mt-6'>
                        {components?.prefooter?.numbers.map((c, index) =>
                            <div key={index} className='w-1/12'>
                                <p>{c.name}</p>
                                <p>{c.number}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' w-3/12'>
                    <div className='flex mt-6'>
                        <div className='w-6/12'>

                        </div>
                        <div className='section-2-text-1 flex flex-nowrap w-4/12'>
                            <FiFacebook href={components?.prefooter?.social?.facebookUrl} />
                            <FiInstagram href={components?.prefooter?.social?.instagramUrl} />
                            <FiTwitter href={components?.prefooter?.social?.twitterUrl} />
                        </div>
                        <div className='w-2/12'>

                        </div>
                    </div>



                </div>
            </div>
            <div className="section-3 flex">
                <div className='w-1/12'></div>
                <div className='section-3-text w-4/12'>
                    {components?.footer?.copy}
                </div>
                <div className='section-3-text w-3/12'>
                    <a href={components?.footer?.links[1]?.href}>{components?.footer?.links[1]?.tittle}</a>
                </div>
                <div className='section-3-text w-3/12'>
                    <a href={components?.footer?.links[0]?.href}>{components?.footer?.links[0]?.tittle}</a>
                </div>
                <div className='w-1/12'></div>
            </div>
        </>
    );
};

export default Prefooter;