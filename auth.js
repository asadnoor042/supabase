let signupEmail = document.getElementById("signup_email")
let signupPassword = document.getElementById("signup_password")
let signupButton = document.getElementById("signup_button")

async function signup() {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPassword,
          })
          
          if(error) throw error
          if (data) {
            alert("check your email for verification")
          }
          return data
          
    } catch (error) {
        console.log(error)
    }
    
}
signupButton.addEventListener("click", signup)

// async function login() {
//     try {
        
//     } catch (error) {
        
//     }
    
// }