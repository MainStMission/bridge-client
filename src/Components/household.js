import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from 'formik';
import Yup from 'yup';

function LoginToMyApp(p){return p * p};
function transformMyApiErrors(p) {return p*p};

const Household = () => (
    <div>
        <h1>Households</h1>
        <Formik
            initialValues={{
                household_name:'',
                name:'',
                created_at:'',
                updated_at:'',
                box_type:'',
                income1:'',
                inc_amt1:null,
                income2: '',
                inc_amt2: null,
                income3: '',
                inc_amt3: null
            }}
    validate={values => {
        let errors = {};
        if (!values.household_name) {
            errors.household_name= 'Required';
        }
        return errors;
    }}
    onSubmit={(
        values,
        { setSubmitting, setErrors}
    ) => {
        LoginToMyApp(values).then(
            user=> {
                setSubmitting(false);
            },
            errors => {
        setSubmitting(false);

    },
              errors => {
                  setSubmitting(false);
                  setErrors(transformMyApiErrors(errors));
              }
);
    }}
render={({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => (
    <form onSubmit={handleSubmit}>
    <input
      type="string"
      name="household_name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.household_name}
    />
    {touched.household_name && errors.household_name && <div>{errors.household_name}</div>}
    <input
        type="string"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.household_name}
    />
        {touched.name && errors.name && <div>{errors.name}</div>}
    </form>
)}
 />
</div>
);
export default Household;
