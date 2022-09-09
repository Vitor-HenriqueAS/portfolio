function getApiGitHub() {
  fetch('https://api.github.com/users/Vitor-HenriqueAS/repos')
	.then(async res => {

		if(!res.ok) {
			throw new Error(res.status)
		}

		var data = await res.json()

		data.map(item => {

			console.log(item.name)
			console.log(item.html_url)
			console.log(item.topics)
			console.log(item.homepage)
		})

    }).catch(e => console.log(e))
}

getApiGitHub()
