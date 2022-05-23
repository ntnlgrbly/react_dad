import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { API_URL, doApiGet, doApiMethod } from '../services/apiService'


function Questions_and_Answers(props) {
    let [cat_ar, setCatAr] = useState([]);
    let [btnSent, setBtnSent] = useState(false);
    let nav = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm();



    let nameRef = register("name", { required: true, minLengt: 2, maxLength: 99 })
    let emailRef = register("email", { required: true, minLengt: 2, maxLength: 99 })
    let questionsRef = register("questions", { required: true, minLengt: 2, maxLength: 99 })
    let TherapistRef = register(" Therapist", { required: true, minLengt: 2, maxLength: 99 })


    useEffect(() => {
        doApi()
    }, [])
    const doApi = async () => {
        let url = API_URL + "/questions_and_Answers";
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
        let url = API_URL + "/questions_and_Answers";
        try {
            let resp = await doApiMethod(url, "POST", formData);
            console.log(resp.data);
            if (resp.data._id) {
                toast.success("product added")

                nav("/admin/products")
            }
        }
        catch (err) {
            console.log(err.response);
            alert("There problem try again leter")
            nav("/admin/products")
        }
    }
    return (
        <div style={{ backgroundImage: "url(/images/q1.jpg)" }} className='stripMain d-flex align-item-center'>
            <div className='continer col-md-6 mx-auto my-5'>
                <h1 className='h1_signup'>Add new product</h1>
                <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
                    <label className='label_signup'>שם:</label>
                    <input {...nameRef} type="text" className='form-control' />
                    {errors.name ? <small className='text-danger d-block'>* Enter valid name 2 to 99</small> : ""}
                    <label className='label_signup'>איימל:</label>
                    <input {...emailRef} type="text" className='form-control' />
                    {errors.email ? <small className='text-danger d-block'>* Enter valid email 2 to 99</small> : ""}

                    <label className='label_signup'>שאלה :</label>
                    <textarea {...questionsRef} className='form-control' rows="2"></textarea>
                    {errors.questions ? <small className='text-danger d-block'>* Enter valid questions 2 to 1099</small> : ""}

                    <label className='label_signup'>מטפל :</label>
                    <textarea {...TherapistRef} className='form-control' rows=""></textarea>
                    {errors.Therapist ? <small className='text-danger d-block'>* Enter valid questions 2 to 1099</small> : ""}
                    {/* <label className='label_signup'>קטגוריה:</label> */}
                    {/* <select {...cat_short_idRef} className='form-select'>
                        <option value="" >בחר קטגוריה</option>
                        {cat_ar.map(item => {
                            return (
                                <option key={item._id} value={item.short_id}>{item.name}</option>
                            )
                        })}</select> */}


                    <button disabled={btnSent} className='btn btn-info mt-2'>Add new product</button>
                </form>
            </div>
        </div>

    )
}


export default Questions_and_Answers