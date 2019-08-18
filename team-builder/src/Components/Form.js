import React, { useState } from "react";

function Form(props) {
    const[member, setMember] = useState ({
        name: "",
        email: "",
        role: "Web Developer",
        id: ""
    });
    
    function changeHandler(event) {
        setMember({...member, [event.target.name]: event .target.value});
    }

    function submitForm(event) {
        event.preventDefault();
        const newMember = {
            ...member, 
            id: Date.now()
        };
        props.addNewMember(newMember);
    }
    
    return (
        <form onSubmit={submitForm}>
            <input
            type="text"
            name="name"
            placeholder="Team Member Name"
            value={member.name}
            onChange={changeHandler}
            />
            <label htmlFor="email">Team Member Email</label>
<input
type="email"
name="email"
placeholder="Team Member Email"
value={member.email}
onChange={changeHandler}
/>
<select name="role" onChange={changeHandler}>
    <option value="frontend">FrontEnd</option>
    <option value="design">Web Design</option>
    <option value="backend">BackEnd</option>
<option value="projectmanager">ProjectManager</option>
</select>
<button type="submit">Add New Team Member</button>
        </form>
    );
}

export default Form;