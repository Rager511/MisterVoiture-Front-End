import React from "react";

const Footer: React.FC = () => {
    return (
        <div className='flex justify-between mt-5'>
            <span>© 2023, made by Imad Maailil for a better world.</span>
            <div className='flex space-x-5'>
                <span>About Us</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    );
};

export default Footer;