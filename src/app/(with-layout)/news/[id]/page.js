import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    return (
        <div>
            <h1>This is dynamic page of id: {params.id}</h1>
            <h2>Search: {searchParams.name}</h2>
        </div>
    );
};

export default DynamicPage;