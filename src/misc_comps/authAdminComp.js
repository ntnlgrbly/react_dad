import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiGet } from '../services/apiService'

function AuthAdminComp(props) {
    let nav = useNavigate();
    // if to admin no token he cant stay here
    useEffect(() => {
        if (localStorage["tok"]) {
            doApi();
        }
        else {
            toast.error("you must be admin to be here")
            nav("/admin")
        }
    }, [])

    const doApi = async () => {
        let url = API_URL + "/users/myInfo";
        try {
            let resp = await doApiGet(url)
            // console.log(resp.data);
            if (resp.data.role != "admin") {
                toast.error("you must be admin to be here")
                nav("/admin")
            }
        }
        catch (err) {
            console.log(err.response)
            toast.error("you must be admin to be here")
            nav("/admin")
        }
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

export default AuthAdminComp