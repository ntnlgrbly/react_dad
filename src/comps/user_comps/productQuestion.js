import React from 'react'
import { Link } from 'react-router-dom';
// import { BsStar, BsStarFill } from "react-icons/bs"
// import { AppContext } from '../contecs/storeContect';

function ProductQuestion(props) {
    let item = props.item;
    return (
        <div className='product-item col-md-3 p-2'>
            <div className='shadow'>
                <div style={{ backgroundImage: `url(${item.img_url || "/images/logo512.png"})` }} className='product-img'></div>
                <div className='p-2'>
                    <h2 className='h2 text-end'>{item.name}</h2>
                    <div className='text-end h2i'> question: {item.questions}</div>
                    <div className='text-cnter my-2'>
                        <Link className='btn btn-dark w-50 ms-4 mt-1' to={"/answere/" + item._id}>More</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductQuestion