import React from 'react';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.css';
import Sidebar from './Sidebar';

const ListProduct = ({ touched, errors, values, setFieldValue }) => (
	<div>
		<Sidebar />
		<Form className="login-form">
			<div>
				<h2 style={{ textAlign: 'center' }}>Search Product By name</h2>
				<label>
					Product Name
					<Field
						type="text"
						name="productName"
						placeholder="Product Name"
						className="first"
						autoComplete="off"
					/>
				</label>
				{touched.productName && errors.productName && <p>{errors.productName}</p>}
			</div>

			<div style={{ textAlign: 'center ' }}>
				<button type="submit" style={{ textAlign: 'center' }}>
					Search
				</button>
			</div>
		</Form>
	</div>
);

const FormikListProduct = withFormik({
	mapPropsToValues({ productName }) {
		return {
			productName: productName || ''
		};
	},
	validationSchema: Yup.object().shape({
		productName: Yup.string().required()
	}),
	handleSubmit(values) {
		console.log(values);
	}
})(ListProduct);
export default FormikListProduct;
