import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../actions';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.css';

const Login = ({ touched, errors, values }) => (
	<Form className="login-form">
		<h2 style={{ textAlign: 'center' }}>Login</h2>
		<div>
			<label>
				Email
				<Field type="email" name="email" placeholder="Email" className="first" autoComplete="off" />
			</label>
			{touched.email && errors.email && <p>{errors.email}</p>}
		</div>
		<div>
			<label>
				Password
				<Field type="password" name="password" placeholder="Password" autoComplete="off" className="first" />
			</label>
			{touched.password && errors.password && <p>{errors.password}</p>}
		</div>
		<div style={{ textAlign: 'center ' }}>
			<button type="submit" style={{ textAlign: 'center' }}>
				Submit
			</button>
		</div>
	</Form>
);

const FormikLogin = withFormik({
	mapPropsToValues({ email, password }) {
		return {
			email: email || '',
			password: password || ''
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email().required(),
		password: Yup.string().min(6).required()
	}),
	handleSubmit(values, props) {
		props.props.login(values);
	}
})(Login);
export default connect(null, { login })(FormikLogin);
