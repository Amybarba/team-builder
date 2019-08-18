import React from "react";

function TeamInfo(props) {

    return (
    <div>
        {props.memberList.map(member => {
            return (
                <div key-={member.id}>
                <h2>{member.name}</h2>
                <h2>{member.role}</h2>
                <h2>{member.email}</h2>
                </div>
            );
        })}
    </div>
    );
}

export default TeamInfo;