import './index.css';

const Footer = ({ components }) => {
    return (
        <>
            <div className="section-1 flex">
                <div className='w-1/12'>
                </div>
                <div className='section-1-text w-6/12'>
                    <p>{components?.legals}</p>
                </div>
                <div className='w-5/12'>
                </div>
            </div>
        </>
    );
};

export default Footer;