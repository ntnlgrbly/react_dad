import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { API_URL, doApiGet } from '../../services/apiService'
import { addProdVisitedToLocal } from '../../services/localServices';
// import InfoProductsList from './infoProductsList';


function Answere_user(props) {
    const [product, setProduct] = useState({})
    let params = useParams();
    let nav = useNavigate();
    let location = useLocation()


    useEffect(() => {

        doApi();
    }, [location])

    const doApi = async () => {
        let url = API_URL + "/answers/single/" + params.id;
        let resp = await doApiGet(url);
        console.log(resp.data);
        setProduct(resp.data)
        //  save in visited in local
        addProdVisitedToLocal(resp.data.short_id)
    }
    return (
        <div className='container' style={{ minHeight: "85vh" }}>
            <div className='row '>

                <div className='col-md-8 '>
                    <h2 className='display-4 h2_info '> {product.name}</h2>
                    <h3 className='h3_info text-center'> {product.answer}</h3>

                </div>
                <button onClick={() => {
                    nav(-1);
                }} className={'btn btn-dark mt-2'}>back</button>

            </div>

        </div>
    )
}


export default Answere_user