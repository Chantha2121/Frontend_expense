const pbtn = document.getElementById('pbtn');
const showB = document.getElementById('showp');
const formLogin = document.getElementById('loginFrom')
const getDateBtn = document.getElementById('btn_get_data')
const baseUrl = 'http://localhost:3009'
var token = '';

pbtn.addEventListener('click', async () =>{
    try{
        const result = await fetch(`${baseUrl}/public`)
        if(result.ok){
            const data = await result.json()
            token = data.token;
            
        }  
    }
    catch(e){
        console.log(`Something went wrong `,e);
    }

})




formLogin.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('emailvalue').value;
    const password = document.getElementById('password').value;
    try{
        const result = await fetch(`${baseUrl}/auth/signin`,{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        const data = await result.json();
        token = data.token;
        if(result.ok){
            window.location.href = 'homepage.html';
        }
    }
    catch(e){
        console.log(e)
    }
})

getDateBtn.addEventListener('click', async ()=>{
    try{
        const result = await fetch(`${baseUrl}/user/getUser`,{
            method: 'GET',
            headers:{
                'authorization' : `Bearer ${token}`
            }
        })
        const data = await result.json();
        console.log(data) 
        
    }
    catch(e){
        console.log(e);
    }
})