import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log("searchParams : ", searchParams);
    return (
        <div>
            <h2>This is Publication Dynamic Page:{params.pubId}</h2>
        </div>
    );
};

export default DynamicPage;