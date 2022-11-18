import './index.css';

const Header = ({ components }) => {
    return (
        <>
            <div className='header'>
                {/* {renderedLanguages} */}
                <div className='flex'>
                    <div className='w-full text-header'>{components?.header?.h1}</div>
                </div>

                <div className='flex'>
                    <div className='w-5/12 second-text-header'>{components?.header?.discount}</div>
                    <div className='w-7/12 description-header'>{components?.header?.paragraphs.map((c, index) =>
                        <p key={index}>{c}</p>
                    )}.</div>
                </div>
            </div>
        </>
    );
};

export default Header;