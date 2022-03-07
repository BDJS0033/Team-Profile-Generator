//HTML Template
//teamMembers array for generate HTML
let generatehtmlPage = teamMembers => {
    console.log('team members', teamMembers)

//Set card to empty so new information can be generated with each new user input
let htmlCard = ""

//For loop statements using object constructor to keep everything together
//https://www.w3schools.com/JS/js_object_properties.asp

    for(let i = 0; i < teamMembers.length; i++){
        //prompts for team member roles
        let finalPrompt = teamMembers[i].office || teamMembers[i].gitHub || teamMembers[i].school;
        let keys = Object.keys(teamMembers[i]);
        //keys[4] prompts unless github/school undefined
        let lastKey = keys[4];
        let finalOption = lastKey + ":" + finalPrompt
        //leave final option open to user input
        if (lastKey === undefined){
            finalOption = "";

        } else if (lastKey === 'gitHub'){
            finalOption = (`GitHub : <a href = 'https://www.github.com/${teamMembers[i].gitHub}'> ${teamMembers[i].gitHub}</a>`)
            console.log(finalOption)
        }
        else{
            console.log(finalOption)
        }


       //htmll card should contain following items depending on user input
        let {name, role, email, id} = teamMembers[i]
        htmlCard+= `
         <div class="card col" style="width: 18rem;">
         <div class="card-body card-header">
             <h5 class="card-title">${name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
         </div>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
             <li class="list-group-item">Employee ID: ${id}</li>
             <li class="list-group-item"> ${finalOption}</li>
             
             
         </ul>
         </div>`
         
     }

     return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
        
    
    </head>
    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
    
             ${htmlCard}
    
                
            </div>
    
        </main>
    
    
    
    </body>
    
    </html>` 

      
    
}


module.exports = generatehtmlPage;
