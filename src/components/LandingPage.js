import React from 'react';

const Template1 = ({ data }) => (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to {data.businessName}</h1>
        <p className="mb-2">{data.description}</p>
        <p className="mb-2">Contact: {data.contact}</p>
        <p>Email: {data.email}</p>
    </div>
);

const Template2 = ({ data }) => (
    <div className="max-w-3xl mx-auto p-8 bg-blue-100 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">{data.businessName}</h1>
        <p className="mb-2">{data.description}</p>
        <p className="mb-2">Contact: {data.contact}</p>
        <p>Email: {data.email}</p>
    </div>
);

const Template3 = ({ data }) => (
    <div className="max-w-3xl mx-auto p-8 border-4 border-gray-800 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">{data.businessName}</h1>
        <p className="mb-2">{data.description}</p>
        <p className="mb-2">Contact: {data.contact}</p>
        <p>Email: {data.email}</p>
    </div>
);

const LandingPage = ({ data }) => {
    switch (data.template) {
        case 'Template1':
            return <Template1 data={data} />;
        case 'Template2':
            return <Template2 data={data} />;
        case 'Template3':
            return <Template3 data={data} />;
        default:
            return <Template1 data={data} />;
    }
};

export default LandingPage;
