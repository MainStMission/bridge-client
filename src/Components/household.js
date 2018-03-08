import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from 'formik';
import Yup from 'yup';


const Household = () => (
    <div>
        <h1>Households</h1>
        <Formik
            initialValues={{
                household_name:'',
                name:'',
                created_at:'',
                updated_at:'',
                box_type:''
                
            }}
            />
    </div>
);

ReactDOM.render(<Household />, document.getElementById('root'));

export default Household;
