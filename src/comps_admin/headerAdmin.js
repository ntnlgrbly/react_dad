import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HeaderAdmin(props) {
    let nav = useNavigate()

    const onLogOutClick = () => {
        if (window.confirm("are you sure you want to logout?"))
            nav("/admin/logout")
    }
    return (

        <div className='header_admin container-fluid bg-dark d-flex align-items-center'>
            <h2 className='text-white col-auto me-4'>Admin panel</h2>
            <nav className='col-md-9'>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/categories">Categories</Link>
                <Link to="/admin/users">Users</Link>
                <Link to="/">home</Link>
                <Link to="/admin/answers_admin">תשובות</Link>
                {/* i do button Because i cant do nav command to link comp */}
                <button onClick={onLogOutClick} className='btn_loguot  w-15  float-md-end'>Logout</button>
            </nav>
        </div>
    )
}

export default HeaderAdmin