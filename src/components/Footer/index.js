import './index.css';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className="section-1 flex">
                <div className='w-1/12'>
                </div>
                <div className='section-1-text w-6/12'>
                    <p> 0 % de descuento en tarifas vigentes de Hotel Xcaret Arte.</p>
                    <p>Los descuentos de compra anticipada pueden variar dependiendo de la fecha de reserva y la fecha de estadía.</p>
                    <p>Periodo para reservar: Del 02 al 16 de mayo de 2022. Periodo para viajar: del 12 de julio al 16 de agosto del 2022.</p>
                    <p>Sujeto a disponibilidad.</p>
                    <br />
                    <p>Políticas de cancelación:</p>
                    <p>Cambios y cancelaciones de acuerdo a políticas establecidas antes de las 15:00 hrs hora local del día de llegada.</p>
                    <p>Penalidad: 100% de la estancia</p>
                    <br />
                    <p>Restricciones:</p>
                    <p>No aplica con otras promociones.</p>
                    <p>Tarifa sujeta a cambios sin previo aviso.</p>
                </div>
                <div className='w-5/12'>
                </div>
            </div>
            <div className="section-2 flex">
                <div className='w-2/12'>

                </div>
                <div className='section-2-text w-4/12'>
                    <p style={{ fontFamily: "12px" }}>ATENCIÓN A CLIENTES</p>
                    <p>reservaciones@hotelxcaret.com</p>
                    <div className='flex mt-6'>
                        <div className='w-4/12'>
                            <p>MÉXICO</p>
                            <p>018000000000</p>
                        </div>
                        <div className='w-4/12'>
                            <p>EEUU</p>
                            <p>018000000000</p>
                        </div>
                        <div className='w-4/12'>
                            <p>RESTO DEL MUNDO</p>
                        </div>
                    </div>
                </div>
                <div className=' w-6/12'>
                    <div className='flex mt-6'>
                        <div className='w-6/12'>

                        </div>
                        <div className='section-2-text-1 flex flex-nowrap w-4/12'>
                            <FiFacebook />
                            <FiInstagram />
                            <FiTwitter />
                        </div>
                        <div className='w-2/12'>

                        </div>
                    </div>



                </div>
            </div>
            <div className="section-3 flex">
                <div className='w-2/12'></div>
                <div className='section-3-text w-5/12'>
                    ©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V.
                </div>
                <div className='section-3-text w-5/12'>
                    Términos de Uso Aviso de Privacidad
                </div>
            </div>
        </>
    );
};

export default Footer;