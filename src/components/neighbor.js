/*jshint esversion: 6 */

import React from "react"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"


const Neighbor = ({
	values,
	errors,
	touched,
	isSubmitting
}) => (
	<Form>
		<div>
			<label>
				<Field type="string" name="first_name" placeholder="First Name" />
            First Name 
			</label>
			<label>
				<Field type="string" name="middle_name" placeholder="Middle Name" />
            Middle Name 
			</label>
			<label>
				<Field type="string" name="last_name" placeholder="Last Name" />
            Last Name 
			</label>
			<label>
				<Field type="date" name="birth_date" placeholder="Birth Date" />
            Birth Date 
			</label>
			<label>
				<Field type="string" name="street" placeholder="Street" />
            Street 
			</label>
			<label>
				<Field type="string" name="city" placeholder="City" />
            City 
			</label>
			<label>
				<Field type="string" name="state" placeholder="State" />
            State 
			</label>
			<label>
				<Field type="string" name="zip" placeholder="Zip Code" />
            Zip 
			</label>
			<label>
				<Field type="string" name="phone" placeholder="Phone" />
            Phone 
			</label>
			<label>
				<Field type="string" name="email" placeholder="Email" />
            Email 
			</label>
			<label>
				<Field type="string" name="encrypted_ssn" placeholder="Social Security Number" />
            Social Security Number 
			</label>
			<label>
				<Field component="select" name="sex">
					<option value="male">Male</option>
					<option value="female">Female</option>
				</Field>
			</label>
			<label>
				<Field type="text" name="notes" placeholder="Notes" />
            Notes 
			</label>
		</div>
		<button>Submit</button>
	</Form>
)


const FormikApp = withFormik({
	mapPropsToValues({ first_name, middle_name, last_name, birth_date, encrypted_ssn, city,
		state, zip, sex, notes}) {
		return {
			first_name: first_name,
			middle_name: middle_name,
			last_name: last_name,
			birth_date: birth_date,
			encrypted_ssn: encrypted_ssn,
			city:  city,
			state: state,
			zip: zip,
			sex: sex,
			notes: notes 
		}
	},
	validationSchema: Yup.object().shape({
		first_name: Yup.string().required("First name is required")
	}),

	handleSubmit(values, { resetForm, setErrors, setSubmitting }){
		setTimeout(() => {
			if(values.last_name === "Brooke") {
			  setErrors({ email: "That Name is already taken" })
			} else {
			  resetForm()
			}
			setSubmitting(false)
		  }, 2000)
	}
})(Neighbor)

export default Neighbor
