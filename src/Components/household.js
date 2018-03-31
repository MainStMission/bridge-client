/*jshint esversion: 6 */

import React from "react"
import { withFormik, Form, Field } from "formik"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Yup from "yup"

const Household = ({
	values,
	errors,
	touched,
	isSubmitting
}) => (
	<Form>
		<div>
			<label>
				<Field type="string" name="household_name" placeholder="Household Name" />
          Household Name (Last, First)
			</label>
			<p>You must enter at least one Neighbor for the HouseHold</p>
			<button>New Neighbor</button>
			<Tabs>
				<TabList>
					<Tab>Address</Tab>
					<Tab>Income</Tab>
					<Tab>Visits</Tab>
					<li>Mission</li>
				</TabList>
				<TabPanel>
					<p>Addresses</p>
				</TabPanel>
				<TabPanel>
          Income
				</TabPanel>
				<TabPanel>
          Visits
				</TabPanel>
				<TabPanel>
          Mission
				</TabPanel>
			</Tabs>
		</div>
		<button>Submit</button>
	</Form>
)


const FormikApp = withFormik({
	mapPropsToValues({ household_name}) {
		return {
			household_name: household_name 
		}
	},
	validationSchema: Yup.object().shape({
		household_name: Yup.string().required("Household is required")
	}),

	handleSubmit(values, { resetForm, setErrors, setSubmitting }){
		setTimeout(() => {
			if(values.household_name === 'Brooke') {
			  setErrors({ email: 'That Name is already taken' })
			} else {
			  resetForm()
			}
			setSubmitting(false)
		  }, 2000)
	}
})(Household)

export default Household
