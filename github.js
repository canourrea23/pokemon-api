fetch('https://api.github.com/users/canourrea23')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})

.catch(error => {
    console.log(error);
});