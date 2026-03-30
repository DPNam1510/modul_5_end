import React from 'react';

function Detail({football}) {
    return (
        <>
            <h3>Football Detail</h3>
            <p><b>ID:</b> {football.id}</p>
            <p><b>Code:</b> {football.code}</p>
            <p><b>Name:</b> {football.name}</p>
            <p><b>Birthday:</b> {football.dob}</p>
            <p><b>Transfer:</b> {football.value}</p>
            <p><b>Position:</b> {football.position}</p>
        </>
    );
}
export default Detail;