import React, { useState } from 'react';

const WeightUnit = () => {
    const [unitCode, setUnitCode] = useState('');
    const [unitName, setUnitName] = useState('');
    const [unitDescription, setUnitDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a JSON object from the input values
        const weightUnitData = {
            unitCode,
            unitName,
            unitDescription,
        };

        // Send the JSON object to the local server
        try {
            const response = await fetch('http://localhost:5010/weight-unit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(weightUnitData),
            });
            console.log(response);
            if (response.ok) {
                console.log('Weight unit data successfully sent to the server.');
                // Clear the input fields if needed

                setUnitCode('');
                setUnitName('');
                setUnitDescription('');
            } else {
                console.error('Failed to send weight unit data to the server.');
            }
        } catch (error) {
            console.error('An error occurred while sending data to the server.', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Weight Unit Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="unitCode" className="block text-sm font-medium text-gray-700">
                        Unit Code:
                    </label>
                    <input
                        type="text"
                        id="unitCode"
                        value={unitCode}
                        onChange={(e) => setUnitCode(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="unitName" className="block text-sm font-medium text-gray-700">
                        Unit Name:
                    </label>
                    <input
                        type="text"
                        id="unitName"
                        value={unitName}
                        onChange={(e) => setUnitName(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="unitDescription" className="block text-sm font-medium text-gray-700">
                        Unit Description:
                    </label>
                    <textarea
                        id="unitDescription"
                        value={unitDescription}
                        onChange={(e) => setUnitDescription(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WeightUnit;
