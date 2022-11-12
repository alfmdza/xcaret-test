import './index.css';
const Header = () => {
    return (
        <div className='flex nav-bar'>
            <div className='w-9/12 logo'>
                Hoteles Xcaret

            </div>
            <div className='w-1/12 menu-text'>
                Contacto
            </div>
            <div className='w-1/12 menu-text'>
                EN
            </div>
            <div className='w-1/12 menu-text'>
                MXN
            </div>
        </div>

    );
};

export default Header;