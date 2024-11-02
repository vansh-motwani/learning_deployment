const express = require('express')
require('dotenv').config()
const app = express()
const github={
    "login": "vansh-motwani",
    "id": 115033905,
    "node_id": "U_kgDOBttHMQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/115033905?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vansh-motwani",
    "html_url": "https://github.com/vansh-motwani",
    "followers_url": "https://api.github.com/users/vansh-motwani/followers",
    "following_url": "https://api.github.com/users/vansh-motwani/following{/other_user}",
    "gists_url": "https://api.github.com/users/vansh-motwani/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vansh-motwani/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vansh-motwani/subscriptions",
    "organizations_url": "https://api.github.com/users/vansh-motwani/orgs",
    "repos_url": "https://api.github.com/users/vansh-motwani/repos",
    "events_url": "https://api.github.com/users/vansh-motwani/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vansh-motwani/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "VANSH MOTWANI",
    "company": "IET LUCKNOW",
    "blog": "",
    "location": "LUCKNOW",
    "email": null,
    "hireable": null,
    "bio": "🌟 Software Engineer passionate about building scalable projects using Flutter, Firebase, and Node Js.\r\nOpen to collaborating on innovative projects! 🌟",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 4,
    "following": 0,
    "created_at": "2022-10-04T17:48:44Z",
    "updated_at": "2024-10-22T10:44:27Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
    res.json(github)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})