/*jshint esversion: 6 */
import '../index.css';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Form, Dropdown, Button} from 'semantic-ui-react'
import { render } from 'react-dom'
import { Field, withFormik } from 'formik'
import Yup from 'yup'


const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  const options = [
    { key: 1, text: 'Yes', value: true },
    { key: 2, text: 'No', value: false }
  ]

  return (
    

	<Form>
	  	<div>
			<label>
		 		<Field
					type="string"
					name="householdName"
					placeholder="Household Name"
				/>
				Household Name (Last, First)
			</label>
			<p>You must enter at least one Neighbor for the HouseHold</p>
			<button>New Neighbor</button>
			{ <Tabs>
				<TabList>
          <h1 class="list">
					<Tab>Address</Tab>
					<Tab>Income</Tab>
					<Tab>Visits</Tab>
					<Tab>Mission</Tab>
          </h1>
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
							<Field component="select" name="proofOf_esidency">
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
			</Tabs>}
	  </div>
	  <button>Submit</button>
	</Form>


  );
};


const withSemanticUIFormik = props=> WrappedComponent=>{

  return withFormik(props)(class extends React.Component{
    handleBlur = (e, data) => {
      if(data && data.name){
        this.props.setFieldValue(data.name,data.value);
        this.props.setFieldTouched(data.name);
      }
    }
    handleChange = (e,data) =>{
      if (data && data.name) {
        this.props.setFieldValue(data.name,data.value);
      }
    }

    render(){
      return <WrappedComponent {...this.props}
        handleBlur={this.handleBlur}
        handleChange={this.handleChange}
        />
    }
  })
}


const newHousehold = withSemanticUIFormik({
  mapPropsToValues: () => ({ email: '',agree:false, household_name: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm', // helps with React DevTools
})(MyInnerForm);

export default newHousehold;
