import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.css';
import Sidebar from './Sidebar';

const Profile = ({ touched, errors, values, setFieldValue }) => (
	<div>
		<Sidebar />
		<Form className="login-form">
			<div>
				<label>
					First Name
					<Field type="text" name="firstName" placeholder="First Name" className="first" autoComplete="off" />
				</label>
				{touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
			</div>
			<div>
				<label>
					Last Name
					<Field type="text" name="lastName" placeholder="Last Name" autoComplete="off" className="first" />
				</label>
				{touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
			</div>
			<div style={{ textAlign: 'center ' }}>
				<button type="submit" style={{ textAlign: 'center' }}>
					Add
				</button>
			</div>
		</Form>
	</div>
);

const FormikProfile = withFormik({
	mapPropsToValues({ firstName, lastName }) {
		return {
			firstName: firstName || '',
			lastName: lastName || ''
		};
	},
	validationSchema: Yup.object().shape({
		firstName: Yup.string().required(),
		lastName: Yup.string().required()
	}),
	handleSubmit(values) {
		console.log(values);
	}
})(Profile);
export default FormikProfile;
