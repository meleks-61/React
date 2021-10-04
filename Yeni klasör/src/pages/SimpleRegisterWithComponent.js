import {Formik} from 'formik';
import {Form,Field,ErrorMessage} from 'formik';

import * as Yup from "yup";


const  initialValues={
  name:"",
  email:"",
  userName:"",
}
 const onSubmit =values=>{
  console.log(values)
}



const validationSchema =Yup.object({
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




const SimpleRegisterWithComponent = () => {
    
      
        
  

    



  return (
    <>
    <h1>Simple Form</h1>
    <Formik className="container"
    initialValues={initialValues}
    
    validationSchema={validationSchema}>
    
    <Form className="formStyle" >
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name"
        /> 
        <ErrorMessage name="name"/>
        
        
        
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email"
        />
        <ErrorMessage name="email"/>
        <label htmlFor="userName">userName</label>
        <Field type="text" id="userName" name="userName"
        />
          <ErrorMessage name="userName"/>
        <button>Submit</button>





    </Form>
      
    </Formik>
    </>
  )
}

export default SimpleRegisterWithComponent
