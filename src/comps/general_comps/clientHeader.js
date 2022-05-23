import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsSearch, BsFillHeartFill, BsHouseDoorFill, BsFillBookFill } from "react-icons/bs"
import { checkTokenLocal } from '../../services/localServices';



function ClientHeader(props) {
    let [login, setLogin] = useState("")
    let location = useLocation()
    let inputRef = useRef()
    let nav = useNavigate()

    useEffect(() => {
        setLogin(checkTokenLocal())
    }, [location])

    // work on every click on the keboard 
    const onKeboradClick = (e) => {
        if (e.key == "Enter") {
            onSearchClick();
        }
        // Everything you write without even clicking it presents
        // console.log(e.key);
    }

    const onSearchClick = () => {
        let input_val = inputRef.current.value;
        nav("/productsSearch?s=" + input_val)
    }
    return (
        <header className='shadow header-client container-fluid'>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className='logo col-md-auto mt-1'>
                        <Link to="/">
                            <h2>welcome</h2>
                        </Link>
                    </div>
                    <nav className='col-md-auto'>
                        <div className='d-md-flex align-items-center'>
                            <div className='links_header me-md-3'>
                                <Link to="/add_question"> הוסף שאלה <BsHouseDoorFill></BsHouseDoorFill> </Link>
                                <Link to="/articelsUser">מאמרים <BsFillBookFill></BsFillBookFill></Link>
                                <Link to="/products_favs"> <BsFillHeartFill></BsFillHeartFill>  מועדפים</Link>
                                <Link to="/questions"> <BsFillHeartFill></BsFillHeartFill>  שאלות </Link>
                                <Link to="/contact"> <BsFillHeartFill></BsFillHeartFill>  צור קשר</Link>
                            </div>
                            <div className='search_header d-flex'>
                                <input onKeyDown={onKeboradClick} ref={inputRef} placeholder='search...' type="text" className='form-control' />
                                <button onClick={onSearchClick} className='btn'><BsSearch className='icon1' /></button>
                            </div>
                            <div className='log_in_out'>
                                {login ?
                                    <Link to="/logout" className='text-danger' >יציאה</Link>
                                    :
                                    <React.Fragment>
                                        <Link to="login">כניסה</Link> /
                                        <Link to="signup">הרשמה</Link>
                                    </React.Fragment>

                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default ClientHeader