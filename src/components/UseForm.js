import {useEffect, useState} from 'react';

const UseForm = (validate, login) => {
   const [values, setValues] = useState({
      username: '',
      email: '',
      password: ''
   });

   const [errors, setErrors] = useState({});
   const [submit, setSubmit] = useState(false);

   const handleChange = e => {
      const {name, value} = e.target;

      setValues({
         ...values,
         [name]: value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      setErrors(validate(values, login));
      setSubmit(true);
   }

   useEffect(() => {
      if(Object.keys(errors).length == 0 && submit){
         setTimeout(() => {
            alert("Form submitted successfully!");
            
            setValues({
               username: '', 
               email: '', 
               password: ''
            });

         }, 1000);
      
      }
   }, [errors]);

   return {handleChange, values, handleSubmit, errors};
   
}

export default UseForm;