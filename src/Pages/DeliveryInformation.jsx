import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { clearDelivery } from '../Features/CardDataSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DeliveryInformation = () => {
    const dispatch = useDispatch();
    const deliveryItems = useSelector((state) => state.cardData.delivery);
    const calculateTotal = () => {
        return deliveryItems.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            address: '',
            phone: '',
            paymentMethod: 'Cash on Delivery',
            province: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Full name is required')
                .min(3, 'Must be at least 3 characters'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            address: Yup.string()
                .required('Address is required')
                .min(10, 'Must be at least 10 characters'),
            phone: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]{10,14}$/, 'Must be a valid phone number'),
            paymentMethod: Yup.string()
                .required('Select a payment method'),
            province: Yup.string()
                .required('Please select your province'),
        }),
        onSubmit: (values) => {
            console.log("Form Values:", values);
            dispatch(clearDelivery());
            alert('Order placed successfully!');
        },
    });

    return (
        <div className='w-full mx-auto bg-gray-50 min-h-screen'>
            <Header />
            {deliveryItems.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-2xl font-bold'>No items in delivery</p>
                    <p className='text-gray-500 mt-2'>Your cart items will appear here after proceeding to checkout</p>
                </div>
            ) : (
                <div className='w-[95%] md:w-[90%] mx-auto mt-8 bg-white rounded-lg shadow-md p-6'>
                    <h1 className='text-2xl font-bold text-center mb-8'>Delivery Information</h1>

                    <div className='flex flex-col lg:flex-row gap-10'>
                        {/* Delivery Form Section (Left) */}
                        <div className='lg:w-1/2 font-title'>
                            <h2 className='text-xl font-semibold mb-4'>Delivery Details</h2>
                            <form onSubmit={formik.handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : ''}`}
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.fullName && formik.errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Address</label>
                                    <textarea
                                        name="address"
                                        rows="3"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder='Write your complete and valid address which contains city name and street no'
                                    ></textarea>
                                    {formik.touched.address && formik.errors.address && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''}`}
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                                    )}
                                </div>

                                {/* Province */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Province</label>
                                    <select
                                        name="province"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.province && formik.errors.province ? 'border-red-500' : ''}`}
                                        value={formik.values.province}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">Select a Province</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Sindh">Sindh</option>
                                        <option value="KPK">KPK</option>
                                        <option value="Balochistan">Balochistan</option>
                                    </select>
                                    {formik.touched.province && formik.errors.province && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.province}</p>
                                    )}
                                </div>

                                {/* Payment Method */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">Payment Method</label>
                                    <select
                                        name="paymentMethod"
                                        className={`w-full p-2 border rounded focus:outline-blue-500 ${formik.touched.paymentMethod && formik.errors.paymentMethod ? 'border-red-500' : ''}`}
                                        value={formik.values.paymentMethod}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="Cash on Delivery">Cash on Delivery</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="PayPal">PayPal</option>
                                    </select>
                                    {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.paymentMethod}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Confirm Order
                                </button>
                            </form>
                        </div>

                        {/* Delivery Items Section (Right) */}
                        <div className='lg:w-1/2 font-title'>
                            <h2 className='text-xl font-semibold mb-4'>Your Items</h2>
                            <div className="space-y-4">
                                {deliveryItems.map(item => (
                                    <div key={`${item.id}-${item.quantity}`} className="border p-4 rounded-md flex justify-between items-center bg-gray-50">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-16 h-16 object-contain"
                                            />
                                            <div>
                                                <h3 className="font-medium">{item.title}</h3>
                                                <p className="text-sm text-red-500">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold text-red-500">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 border-t pt-4 text-right">
                                <p className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='pt-20'>
            <Footer/>
            </div>
        </div>
    );
};

export default DeliveryInformation;
