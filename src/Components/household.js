/*jshint esversion: 6 */

import React from "react"
import { withFormik, Form, Field, FormikContext } from "formik"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Yup from "yup"


const Household = ({ values, errors, touched, isSubmitting }) => (
	<Form>
	  	<div>
			<label>
		 		<Field
					type="string"
					name="household_name"
					placeholder="Household Name"
				/>
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
					<Form>
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
							<Field component="select" name="proof_of_residency">
				  				<option value="Drivers License">Drivers License</option>
				  				<option value="Received Mail">Received Mail</option>
				  				<option value="Utility Bill">Utility Bill</option>
				  				<option value="Food Stamp Card">Food Stamp Card</option>
				  				<option value="Other">Other</option>
							</Field>
			  		</label>
			  		<label>
							<Field
				  				type="date"
				  				name="date_of_proof"
				  				placeholder="Date of Proof"
							/>
								Date of Proof
			  		</label>
			  		<label>
							<Field
				  				type="string"
				  				name="special_needs"
				  				placeholder="Special Needs"
							/>
								Special Needs (allergies etc - Will print on the food order)
			  		</label>
			  		<label>
							<Field
				  				type="string"
				  				name="prayer_requests"
				  				placeholder="Prayer Requests"
							/>
								Special Needs (allergies etc - Will print on the food order)
			  		</label>
			  		<label>
				  			<Field
								type="checkbox"
								name="post_needs"
								placeholder="Post Special Needs"
				  			/>
				  				Special Needs (allergies etc - Will print on the food order)
						</label>
						<label>
							<Field
				  				type="checkbox"
				  				name="post_prayer"
				  				placeholder="Post Prayer Requests"
							/>
								Special Needs (allergies etc - Will print on the food order)
			  			</label>
			  			<label>
							<Field
				  				type="text"
				  				name="notes"
				  				placeholder="Notes and Comments"
							/>
								Notes and Comments
			  			</label>
					</Form>
		  		</TabPanel>
		  		<TabPanel>
					<table>
			  			<tr>
							<th>Income</th>
							<th>$$</th>
							<th>Expenses</th>
							<th>$$</th>
			  			</tr>
			  			<tr>
							<td>
				  				<Field component="select" name="income1">
									<option value="Food Stamps">Food Stamps</option>
									<option value="Disability">Disability</option>
									<option value="Employment">Employment</option>
									<option value="Child Support">Child Support</option>
									<option value="SSI">SSI</option>
									<option value="Family">Family</option>
									<option value="Social Security">Social Security</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="inc_amt1" />
							</td>
							<td>
				  				<Field component="select" name="expense1">
									<option value="Rent">Rent</option>
									<option value="Utilities">Utilities</option>
									<option value="Child Support">Child Support</option>
									<option value="Car Payment">Car Payment</option>
									<option value="Credit Card">Credit Card</option>
									<option value="Probation">Probation</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="exp_amt1" />
							</td>
			  			</tr>
			  			<tr>
							<td>
				  				<Field component="select" name="income2">
									<option value="Food Stamps">Food Stamps</option>
									<option value="Disability">Disability</option>
									<option value="Employment">Employment</option>
									<option value="Child Support">Child Support</option>
									<option value="SSI">SSI</option>
									<option value="Family">Family</option>
									<option value="Social Security">Social Security</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="inc_amt2" />
							</td>
							<td>
				  				<Field component="select" name="expense2">
									<option value="Rent">Rent</option>
									<option value="Utilities">Utilities</option>
									<option value="Child Support">Child Support</option>
									<option value="Car Payment">Car Payment</option>
									<option value="Credit Card">Credit Card</option>
									<option value="Probation">Probation</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="exp_amt2" />
							</td>
			  				</tr>
			  			<tr>
							<td>
				  				<Field component="select" name="income3">
									<option value="Food Stamps">Food Stamps</option>
									<option value="Disability">Disability</option>
									<option value="Employment">Employment</option>
									<option value="Child Support">Child Support</option>
									<option value="SSI">SSI</option>
									<option value="Family">Family</option>
									<option value="Social Security">Social Security</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="inc_amt3" />
							</td>
							<td>
				  				<Field component="select" name="expense3">
									<option value="Rent">Rent</option>
									<option value="Utilities">Utilities</option>
									<option value="Child Support">Child Support</option>
									<option value="Car Payment">Car Payment</option>
									<option value="Credit Card">Credit Card</option>
									<option value="Probation">Probation</option>
									<option value="Other">Other</option>
				  				</Field>
							</td>
							<td>
				  				<Field type="decimal" name="exp_amt3" />
							</td>
			  			</tr>
			  			<tr>
							<td>
				  				<Field type="string" name="income4" />
							</td>
							<td>
				  				<Field type="decimal" name="inc_amt4" />
							</td>
							<td>
				  				<Field type="string" name="expense4" />
							</td>
							<td>
				  				<Field type="decimal" name="exp_amt4" />
							</td>
			  			</tr>
					</table>
					<label>
			  			<Field
							type="text"
							name="money_notes"
							placeholder="Financial Notes"
			 		 />
			 		 Notes about Finances
					</label>
		  		</TabPanel>
		  		<TabPanel>Visits</TabPanel>
		  		<TabPanel>Mission</TabPanel>
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
			if(values.household_name === "Brooke") {
			  setErrors({ email: "That Name is already taken" })
			} else {
			  resetForm()
			}
			setSubmitting(false)
		  }, 2000)
	}
})(Household)

export default Household
