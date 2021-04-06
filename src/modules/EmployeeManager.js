const remoteURL = "http://localhost:5002"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(result => result.json())
};

export const getEmployeeById = (id) => {
    //be sure your animals have good data and related to a location and customer
        return fetch(`${remoteURL}/employee/${id}?_expand=location`)
        .then(res => res.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
};

