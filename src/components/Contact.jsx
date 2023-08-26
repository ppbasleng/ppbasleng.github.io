import { IconContext } from "react-icons";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (<div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-md font-bold mb-5">Do not hesitate to contact me via</h3>
        <IconContext.Provider value={{ color: 'black', className: 'link-icon' }}>
            <div className="flex flex-col md:flex-row mt-5 gap-5">
                <a href="https://www.facebook.com/2pbasleng" target="_blank" rel="noreferrer">
                    <div className="flex flex-col items-center justify-center">
                        <div><FaFacebook /></div>
                        <div>Facebook</div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ppbasleng" target="_blank" rel="noreferrer">
                    <div className="flex flex-col items-center justify-center">
                        <div><FaLinkedin /></div>
                        <div>LinkedIn</div>
                    </div>
                </a>
                <a href="mailto:ponlapat.sang@gmail.com" target="_blank" rel="noreferrer">
                    <div className="flex flex-col items-center justify-center">
                        <div><FaEnvelope /></div>
                        <div>Email</div>
                    </div>
                </a>
            </div>
        </IconContext.Provider>
    </div>);
}

export default Contact;