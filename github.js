const container = document.querySelector('.container');


fetch('https://api.github.com/users/canourrea23')
.then(response => {
    return response.json();
})
.then(githubData => {
    const canoObj = {
        bio: githubData.bio,
        username:githubData.login,
        name: githubData.name
    }
        console.log(githubData);

        const newElement = document.createElement('p');
        newElement.textContent = canoObj.name;
        // append newElement to container
        container.appendChild(newElement);
})

.catch(error => {
    console.log(error);
});