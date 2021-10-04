import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";


const SimpleRegister = () => {
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            userName:"",
        },
        onSubmit:values=>{
            console.log(values)
        },
        // validate:values=>{
        //     //validate hata mesajları için bir fonksiyondur
        //     let errors={}
        //     if (!values.name) {
        //         errors.name="Required.Please fill field"  
        //     }
        //     if (!values.email) {
        //         errors.email="Required.Please fill field"  
        //     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';}
            
        //     if (!values.userName) {
        //         errors.userName="Required.Please fill field"  
        //     }



        //     return errors
        // }

        validationSchema :Yup.object({
            name:Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("required, please enter your name"),
            email:Yup.string()
            .email("invalid email address")
            .required("required,please enter your email"),
            userName:Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("required, please enter your userName")

        })
    }

    )



  return (
    <div className="container">
    <h1>Simple Form</h1>
    <form className="formStyle" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"
        onChange={formik.handleChange} value={formik.values.name}
        onBlur={formik.handleBlur}/> 
        
        {formik.touched.name && formik.errors.name ?<div className="errorStyle">{formik.errors.name}</div> :null}
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"
        onChange={formik.handleChange} value={formik.values.email}
        onBlur={formik.handleBlur}/>
        { formik.touched.email && formik.errors.email ? <div className="errorStyle">{formik.errors.email}</div>:null}
        <label htmlFor="userName">userName</label>
        <input type="text" id="userName" name="userName"
        onChange={formik.handleChange} value={formik.values.userName} onBlur={formik.handleBlur}/>
          {formik.touched.userName && formik.errors.userName ? <div className="errorStyle">{formik.errors.userName}</div>:null}
        <button>Submit</button>





    </form>
      
    </div>
  )
}

export default SimpleRegister
