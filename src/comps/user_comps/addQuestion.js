
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import AuthAdminComp from '../../misc_comps/authAdminComp'
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService'

function AddQuestion(props) {
    let [cat_ar, setCatAr] = useState([]);
    let [btnSent, setBtnSent] = useState(false);
    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();

    let nameRef = register("name", { required: true, minLengt: 2, maxLength: 99 })
    let questionRef = register("question", { required: true, minLengt: 2, maxLength: 99 })
    let emailRef = register("email", { required: true, minLengt: 2, maxLength: 99 })

    useEffect(() => {
        doApi()
    }, [])
    const doApi = async () => {
        let url = API_URL + "/questions";
        let resp = await doApiGet(url);
        console.log(resp.data);
        setCatAr(resp.data);
    }
    const onSubForm = (formData) => {
        console.log(formData);
        setBtnSent(true);
        doFormApi(formData);
    }
    const doFormApi = async (formData) => {
        let url = API_URL + "/questions";
        try {
            let resp = await doApiMethod(url, "POST", formData);
            console.log(resp.data);
            if (resp.data._id) {
                toast.success("product added")

                nav("/admin/questions")
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try again leter")
            nav("/admin/products")
        }
    }

    return (
        <div className='container'>

            <h1>Add new product</h1>
            <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                <label>Name:</label>
                <input {...nameRef} type="text" className='form-control' />
                {errors.name ? <small className='text-danger d-block'>* Enter valid name 2 to 99</small> : ""}
                <label>question:</label>
                <textarea {...questionRef} className='form-control' rows="2"></textarea>
                {errors.question ? <small className='text-danger d-block'>* Enter valid info 2 to 299</small> : ""}
                <label>email:</label>
                <input {...emailRef} type="text" className='form-control' />
                {errors.email ? <small className='text-danger d-block'>* Enter valid email 2 to 299</small> : ""}


                <button disabled={btnSent} className='btn btn-info mt-2'>Add new product</button>
            </form>
        </div>
    )
}

export default AddQuestion