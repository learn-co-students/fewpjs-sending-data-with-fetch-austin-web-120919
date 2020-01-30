// Add your code here

function submitData(name,email){


    let configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch('http://localhost:3000/users',configurationObject)
    .then( resp => resp.json())
    .then( object => {
        const userIdP = document.createElement('p');
        userIdP.innerHTML = object['id'];
        console.log(object);
        document.querySelector('body').appendChild(userIdP);
    })
    .catch( error => {
        const errorP = document.createElement('p');
        errorP.innerHTML = error.message;
        document.querySelector('body').appendChild(errorP);
        alert('Error!');
        console.log(error.message);
    });

}

