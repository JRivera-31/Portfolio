const main = $("#main")
const submitForm = $(".submit")

$.ajax({
    url: "https://api.github.com/users/JRivera-31/repos",
    method: "GET"
}).then(results => {
    console.log(results)
    
    for (let i = 0; i < results.length; i++) {
        if (results[i].stargazers_count != 0) {
            let article = "<article><header><h2>" + results[i].name + "</h2></header><p>" + results[i].description + "</p>" +
                "<ul class=actions special><li><a href=" + results[i].html_url + " target=_blank class=button>Github Repo</a></li><li><a href=" + results[i].homepage + " target=_blank class=button>Deployed App</a></li></ul></article>"
            
            main.append(article)
        }
    }
})