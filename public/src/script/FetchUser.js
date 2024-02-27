const endpoint = "https://api.github.com/users/KrishnanditoLksn"
const h1 = document.querySelector('.github_fetch')
const images = document.querySelector('#image')

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
    images.width = 100
}

getAvatarImages().catch(err => {
    console.log(err)
})

