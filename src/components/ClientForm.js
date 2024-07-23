import React, { useState } from 'react';

const ClientForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        description: '',
        contact: '',
        email: '',
        template: 'Template1',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
            <label className="block mb-4">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-md"/>
            </label>
            <label className="block mb-4">
                Business Name:
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-md"/>
            </label>
            <label className="block mb-4">
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-md"/>
            </label>
            <label className="block mb-4">
                Contact:
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-md"/>
            </label>
            <label className="block mb-4">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-2 border rounded-md"/>
            </label>
            <label className="block mb-4">
                Select Template:
                <select name="template" value={formData.template} onChange={handleChange} className="w-full p-2 mt-2 border rounded-md">
                    <option value="Template1">Template 1</option>
                    <option value="Template2">Template 2</option>
                    <option value="Template3">Template 3</option>
                </select>
            </label>
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">Submit</button>
        </form>
    );
};

export default ClientForm;
