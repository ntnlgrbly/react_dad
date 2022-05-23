import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';


function Answeres(props) {
    let [ar, setAr] = useState([]);
    let nav = useNavigate()

    useEffect(() => {
        doApi()
    }, [])


    const doApi = async () => {
        let url = API_URL + "/questions";
        try {
            let resp = await doApiGet(url);
            // console.log(resp.data);
            setAr(resp.data);
        }
        catch (err) {
            alert("there problem come back later")
            if (err.response) {
                console.log(err.response.data)
            }
        }
    }
    return (
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>url_name</th>
                        <th>question</th>
                        {/* <th>short_id</th> */}
                    </tr>
                </thead>
                <tbody>
                    {ar.map((item, i) => {
                        return (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.url_name}</td>
                                <td>{item.questions}</td>
                                <td>

                                    <button onClick={() => {
                                        nav("/admin/addAnswere/" + item.cat_short_id)
                                    }} className='badge bg-info'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {ar.length === 0 ? <h2>Loading...</h2> : ""}
        </div>
    )
}

export default Answeres