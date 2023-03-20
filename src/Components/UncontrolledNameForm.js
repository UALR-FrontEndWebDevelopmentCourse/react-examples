import React from 'react'
export default function UncontrolledNameForm() {
    function onSubmit() {
        console.log("Name value: " + window.name.value);
        console.log("Email value: " + window.email.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" required />
            <input type="email" name="email" id="email" required />
            <input type="submit" value="Submit" />
        </form>
    );
}
