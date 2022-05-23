// import React, { useEffect, useState } from 'react';
// import { useForm } from "react-hook-form"
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// // import AuthAdminComp from '../misc_comps/authAdminComp'
// import { API_URL, doApiGet, doApiMethod } from '../services/apiService'



// function AddAnswere(props) {
//     let [product, setProduct] = useState({});
//     let [cat_ar, setCatAr] = useState([]);
//     let [btnSent, setBtnSent] = useState(false);
//     let nav = useNavigate()
//     let { register, handleSubmit, formState: { errors } } = useForm();

//     let nameRef = register("name", { required: true, minLengt: 2, maxLength: 99 })
//     let answerRef = register("answer", { required: true, minLengt: 2, maxLength: 99 })


//     useEffect(() => {
//         doApi()
//     }, [])
//     const doApi = async () => {
//         let url = API_URL + "/questions";
//         let resp = await doApiGet(url);
//         console.log(resp.data);
//         setCatAr(resp.data);


//         let urlProduct = API_URL + "/questions/single/" + params.id;
//         let resp2 = await doApiGet(urlProduct);
//         console.log(resp2.data)
//         setProduct(resp2.data);
//     }

//     const onSubForm = (formData) => {
//         console.log(formData);
//         setBtnSent(true);
//         doFormApi(formData);
//     }

//     const doFormApi = async (formData) => {
//         let url = API_URL + "/answeres";
//         try {
//             let resp = await doApiMethod(url, "POST", formData);
//             console.log(resp.data);
//             if (resp.data._id) {
//                 toast.success("product added")

//                 nav("/admin/questions")
//             }
//         }
//         catch (err) {
//             console.log(err.response);
//             alert("There problem try again leter")
//             nav("/admin/questions")
//         }
//     }

//     return (
//         <div className='container'>
//             {/* <AuthAdminComp /> */}
//             <h1>Add new product</h1>
//             <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 p-3 shadow'>
//                 <label>Name:</label>
//                 <input {...nameRef} type="text" className='form-control' />
//                 {errors.name ? <small className='text-danger d-block'>* Enter valid name 2 to 99</small> : ""}
//                 <label>info:</label>
//                 <textarea {...answerRef} className='form-control' rows="2"></textarea>
//                 {errors.answer ? <small className='text-danger d-block'>* Enter valid answer 2 to 1900</small> : ""}

//                 <button disabled={btnSent} className='btn btn-info mt-2'>Add new product</button>
//             </form>
//         </div>
//     )
// }

// export default AddAnswere