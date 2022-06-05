document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const clubName = document.querySelector('input').value
    try{
    const response = await fetch(`https://simple-epl-club-info-api.herokuapp.com/api/${clubName}`)
    const data = await response.json()
    console.log(data)
    
    }catch(error){
        console.log(error)
    }
} 