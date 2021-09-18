const userList = document.querySelector('.user-list')
const search = document.getElementById('search')
const noMatch = document.querySelector('.no_match')
const searchArr = []



search.addEventListener('keyup', (e)=>filter(e.target.value))





getData()
async function getData(){
    const req = await fetch('https://randomuser.me/api?results=50')
    const json_data = await req.json()
    const data = json_data.results

    userList.innerHTML = ''

    data.forEach(user =>{
        const listItem = document.createElement('li')
        listItem.innerHTML = `<img src="${user.picture.large}" alt="">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <small>${user.location.country}, ${user.location.city}</small>
        </div>`
        
        userList.appendChild(listItem)
        searchArr.push(listItem)
    })
}
        
        
        


function filter(search){

    searchArr.forEach(user =>{
        if(user.innerHTML.toLowerCase().includes(search.toLowerCase())){
            user.style.display = `flex`
        }else{
            user.style.display = `none`
        }

    }) 
    if(window.getComputedStyle(userList).height==='0px'){
        noMatch.style.display = 'flex'
    }else{
        noMatch.style.display = 'none'
    }

  

}

