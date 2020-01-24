import React from 'react';
import { withRouter } from 'react-router-dom';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import './Login.css';
import Sidebar from './Sidebar';

const AddProduct = ({ touched, errors, values, setFieldValue }) => (
	<div>
		<Sidebar />
		<Form className="login-form">
			<div>
				<h2 style={{ textAlign: 'center' }}>Add Product</h2>
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
			<div>
				<label>
					Product Code
					<Field
						type="text"
						name="productCode"
						placeholder="Product Code"
						autoComplete="off"
						className="first"
					/>
				</label>
				{touched.productCode && errors.productCode && <p>{errors.productCode}</p>}
			</div>
			<div>
				<label>
					Quantity
					<Field type="number" name="quantity" placeholder="Quantity" autoComplete="off" className="first" />
				</label>
				{touched.quantity && errors.quantity && <p>{errors.quantity}</p>}
			</div>
			<div style={{ textAlign: 'center ' }}>
				<button type="submit" style={{ textAlign: 'center' }}>
					Add Product
				</button>
			</div>
		</Form>
	</div>
);

const FormikAddProduct = withFormik({
	mapPropsToValues({ productName, productCode, quantity }) {
		return {
			productName: productName || '',
			productCode: productCode || '',
			quantity: quantity || 1
		};
	},
	validationSchema: Yup.object().shape({
		productName: Yup.string().required(),
		productCode: Yup.string().required(),
		quantity: Yup.number().required().positive()
	}),
	handleSubmit(values) {
		console.log(values);
	}
})(AddProduct);
export default FormikAddProduct;
