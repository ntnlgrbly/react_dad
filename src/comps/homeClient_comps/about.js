import React from 'react'
import "../../comps/css/about.css"
import { FcAbout, IoCall } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs"
import { FiPhoneOutgoing } from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function About(props) {
    return (
        <div className='container-fluid about'>
            <h2 className='text-center hc mt-2'> <FcAbout></FcAbout>אודותינו</h2>


            <section className='container-fluid cn text-center ' data-aos="fade-right">
                {/* <h2 className='text-center'>  <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>חוות דעת  </h2> */}
                {/* <section className='container-fluid d-flex card_container' data-aos="flip-down"> */}
                <div className='card-2 mt-4' data-aos="flip-down">
                    <h3 className='mt-2 text-end me-3'>ב.כ</h3>
                    <h4 className='mt-3 text-end me-2'>יעוץ רגשי </h4>
                    <p className='p_about'> הייתי חסר אונים וחברים הציעו לי לנסות בקליניקה של ציון אלגרבלי וממש אחרי טיפולם בודדים הרגשתי אדם אחר</p>
                </div>

                <div className='card-2 mt-4' data-aos="flip-down">
                    <h3 className='mt-2 text-end me-3'>א.ס</h3>
                    <h4 className='mt-3 text-end me-2'>טיפול זוגי </h4>
                    <p className='p_about'>נסתי הרבה מטפלים בתחום ובשום מקום לא קיבלתי  כזה יחס מסור ואוהב ושמירה על קשר רציף גם אחרי השעות של הטיפולים </p>
                </div>

                <div className='card-2 mt-4' data-aos="flip-down">
                    <h3 className='mt-2 text-end me-3'>ד.ג</h3>
                    <h4 className='mt-3 text-end me-2'>טיפול זוגי </h4>
                    <p className='p_about'>חשבנו כבר להתגרש וברע האחרון חבר הפנה אותנו אליהם ואמרנו ננסה הזדמנות אחרונה  וההזדמנות הזאת הצילה לנו את הזוגיות</p>
                </div>
                {/*  */}
                <div className='card'>
                    <img className='mt-2' src='images/zion.jpg' height={'130px'} alt='...' />
                    <h3 className='mt-1 text-end '>ציון אלגרבלי</h3>

                    <h3>מומחה לטיפול זוגי/ רגשי </h3>
                    <p className='p_about'>מטפל מוסמך מטפל רגשמטפלים בכול הסוגים הבעיות ושןמור על דסרקיטיותיטיות מטפל מוסמ וזוגי למד 3 שהסוגים הבעיות ושןמור על דסרקיטיותיטיות מטפל מוסמ וזוגי למד 3 שנים עם תואר ב ocd</p>
                </div>
                <div className='card'>
                    <h2 className='text-center mt-3'> Contact_Us</h2>
                    <h2>  <BsFillTelephoneFill></BsFillTelephoneFill> יצירת קשר </h2>
                    <h3><FiPhoneOutgoing></FiPhoneOutgoing> :טלפון:0527481332 </h3>
                    <h3><FaWhatsapp></FaWhatsapp> וואצאפ:0527481332</h3>
                    <h3><MdEmail></MdEmail> zional148@gmail.com: איימל</h3>
                </div>
                <div className='card'>
                    <img className='mt-2' src='images/zion.jpg' height={'130px'} alt='...' />
                    <h3 className='mt-1 text-end'>ציון אלגרבלי</h3>

                    <h3>מומחה לטיפול זוגי/ רגשי </h3>
                    <p className='p_about'>מטפל מוסמך מטפל רגשמטפלים בכול הסוגים הבעיות ושןמור על דסרקיטיותיטיות מטפל מוסמ וזוגי למד 3 שהסוגים הבעיות ושןמור על דסרקיטיותיטיות מטפל מוסמ וזוגי למד 3 שנים עם תואר ב ocd</p>
                </div>

                {/*  */}



            </section>
        </div>


    )
}

export default About