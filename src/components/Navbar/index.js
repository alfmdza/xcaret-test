import { useState } from 'react';
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

    const [selected, setSelected] = useState()

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

    return (
        <div className='flex nav-bar'>
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
                        {/* <option value="1">ES</option>
                        <option value="2">EN</option> */}
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
        </div>

    );
};

export default Navbar;