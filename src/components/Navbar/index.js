import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Navbar = ({ components }) => {
    const navigate = useNavigate();
    const options = [
        {
            label: "ES",
            value: 1,
        },
        {
            label: "EN",
            value: 2,
        }
    ];

    const [selected] = useState()

    const handleChange = (event) => {
        console.log(event.target.value);

        switch (event.target.value) {
            case "1":
                navigate("/es");
                break;
            case "2":
                navigate("/en");
                break;

            default:
                break;
        }

    }
    const menu = useRef(null);

    const activateMenu = () => {
        menu?.current.classList.toggle("hidden");

    }

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap nav-bar p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={components?.navbar?.logo} alt="logo" />
                </div>
                <div className="block lg:hidden">
                    <button onClick={activateMenu} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div ref={menu} className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right hidden">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                            {components?.navbar?.menu?.contact}
                        </a>
                    </div>
                    <div>
                        <div className="mb-3 xl:w-40">
                            <select value={selected} onChange={handleChange} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                {options.map((option) => (
                                    <option value={option.value} key={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="mb-3 xl:w-40">
                            <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                {components?.navbar?.menu?.currency.map((c, index) =>
                                    <option value={index} key={index}>{c}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className='sm:flex nav-bar'>
                <div className='w-9/12 logo'>

                    <img src={components?.navbar?.logo} alt="logo" />

                </div>
                <div className='w-1/12 menu-text'>
                    {components?.navbar?.menu?.contact}
                </div>
                <div className="w-1/12 menu-text flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <select value={selected} onChange={handleChange} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            {options.map((option) => (
                                <option value={option.value} key={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="w-1/12 menu-text flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            {components?.navbar?.menu?.currency.map((c, index) =>
                                <option value={index} key={index}>{c}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div> */}
        </div>


    );
};

export default Navbar;