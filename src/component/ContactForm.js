import React, { useState } from 'react';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!values.subject) {
            errors.subject = 'Subject is required';
        }

        if (!values.message) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const StoreResponse = () => {
        fetch('https://sheetdb.io/api/v1/jys61ogopc8zx', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [formValues]
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);

        if (Object.keys(formErrors).length === 0) {
            alert('Form submitted successfully!');
            // StoreResponse(); // It will send the response in google sheet
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            console.log(formValues);
            setIsSubmitting(false);
        } else {
            setIsSubmitting(false);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>

                <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 py-1 px-5 md:text-lg block w-full shadow-sm sm:text-sm border-gray-300 focus:outline-none rounded-md bg-black/30"
                    onChange={handleChange}
                    value={formValues.name}
                    placeholder='Name'
                />
                {formErrors.name && (
                    <div className="text-red-500 text-sm">{formErrors.name}</div>
                )}
            </div>
            <div>

                <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 py-1 px-5 md:text-lg block w-full shadow-sm sm:text-sm border-gray-300 focus:outline-none rounded-md bg-black/30"
                    onChange={handleChange}
                    value={formValues.email}
                    placeholder='emailaddress@gmail.com'
                />
                {formErrors.email && (
                    <div className="text-red-500 text-sm">{formErrors.email}</div>
                )}
            </div>
            <div>

                <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1 py-1 px-5 md:text-lg block w-full shadow-sm sm:text-sm border-gray-300 focus:outline-none rounded-md bg-black/30"
                    onChange={handleChange}
                    value={formValues.subject}
                    placeholder='Subject'
                />
                {formErrors.subject && (
                    <div className="text-red-500 text-sm">{formErrors.subject}</div>
                )}
            </div>
            <div>

                <textarea
                    id="message"
                    name="message"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm bg-black/30 focus:outline-none border-gray-300 rounded-md"
                    rows="4"
                    onChange={handleChange}
                    value={formValues.message}
                    placeholder='Write Message Here ...'
                />
                {formErrors.message && (
                    <div className="text-red-500 text-sm">{formErrors.message}</div>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm md:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={isSubmitting}
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
