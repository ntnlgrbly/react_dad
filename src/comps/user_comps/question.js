import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from "../../services/apiService"
import { Link } from 'react-router-dom';
// import InfoProductsList from './infoProductsList';

function Question(props) {
    const [ar, SetAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])


    const doApi = async () => {
        let url = API_URL + "/category_of_question";
        let resp = await doApiGet(url)
        // console.log(resp.data);
        SetAr(resp.data);
    }
    return (
        <div className='container-fluid shadow box'>
            {/* <div style={{ backgroundImage: "url(/images/img.jpg)" }} className='strip container-fluid d-flex align-item-center'> */}
            <div className='container py-4 categories_list'>
                <h2 className='text-center'>שאלות ששאלו המשתמשים לפי קטגוריות </h2>
                <div className='row'>
                    {ar.map(item => {
                        return (
                            <Link to={"/questions/" + item.url_name} key={item._id} className='myCard col-md-4 p-3  '>
                                <div className='shadow bg-dark text-white'>
                                    {/* check if there bg image */}

                                    {/* <div style={{ backgroundImage: `url(${item.img_url || "/images/imgBox.jpg"})` }} className='img_card'></div> */}


                                    <h3 className='p-2 text-center'>{item.name}</h3>

                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
        // </div >

    )
}

export default Question