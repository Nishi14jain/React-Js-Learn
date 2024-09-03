import React, { useState, useEffect } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Load data from local storage when the component mounts
    // useEffect(() => {
    //     const storedFormData = localStorage.getItem('formData');
    //     if (storedFormData) {
    //         setFormData(JSON.parse(storedFormData));
    //     }
    // }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            console.log(prevData, name, value); 
            const updatedData = { ...prevData, [name]: value };
            // Save updated data to local storage
            return updatedData;
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Form Submitted Successfully!');
        // Clear form data from state and local storage
        setFormData({ name: '', email: '', message: '' });
        localStorage.removeItem('formData');
        localStorage.setItem('formData', JSON.stringify(formData));

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
