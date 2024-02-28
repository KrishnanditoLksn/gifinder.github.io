const endpoint = "https://api.github.com/users/KrishnanditoLksn"
const url = "https://api.github.com/users"
const h1 = document.querySelector('.github_fetch')
const images = document.querySelector('#image')
const repoId = document.getElementById('repos')
// const usernameTextfield = document.getElementById('username')
// const submit = document.getElementById('submit')

async function getGithubUsername() {
    const response = await fetch(endpoint)
    if (response.ok) {
        let data = await response.json()
        h1.textContent = data.login
    }
}

getGithubUsername().catch(err => {
    console.log(err)
})

//get images from api
async function getAvatarImages() {
    const imageUrl = "https://avatars.githubusercontent.com/u/96246664?v=4"
    const response = await fetch(imageUrl)
    const imageBlob = response.blob()
    images.src = URL.createObjectURL(await imageBlob)
    images.width = 250
}

getAvatarImages().catch(err => {
    console.log(err)
})

async function getRepos() {
    const res = await fetch(endpoint)
    const datasRepos = await res.json()
    repoId.textContent = datasRepos.public_repos
}

getRepos().catch(err => {
    console.log(err)
})
