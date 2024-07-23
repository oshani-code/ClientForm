import React, { useState } from 'react';
import ClientForm from './components/ClientForm';
import LandingPage from './components/LandingPage';
import './index.css';

const App = () => {
    const [clientData, setClientData] = useState(null);

    const handleFormSubmit = (data) => {
        setClientData(data);
    };

    return (
        <div className="min-h-screen bg-gray-200 p-8">
            {!clientData ? (
                <ClientForm onSubmit={handleFormSubmit} />
            ) : (
                <LandingPage data={clientData} />
            )}
        </div>
    );
};

export default App;
