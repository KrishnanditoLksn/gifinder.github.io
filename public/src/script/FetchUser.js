const url = "https://api.github.com/users/"
const h1 = document.querySelector('.github_fetch')
const images = document.querySelector('#image')
const repoId = document.getElementById('repos')
const usernameTextfield = document.getElementById('username')
const submit = document.getElementById('submit')

async function getGithubUsername(username) {
    try {
        const response = await fetch(url + username)
        if (response.ok) {
            let data = await response.json()
            h1.textContent = data.login
            repoId.textContent = data.public_repos
            images.src = data.avatar_url
        }
    } catch (error) {
        console.log(error.message)
    }
}

submit.addEventListener('click', (ev) => {
    ev.preventDefault()
    getGithubUsername(usernameTextfield.value).catch(err => {
        console.log(err)
    })
})