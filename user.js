let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let company = document.getElementById("companyName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let addUserBtn = document.getElementById("addUser-btn")
async function addUser() {
    try {
        const { error } = await supabase
  .from("ussrs")
  .insert({ 
    firstName : firstName.value,
    lastName : lastName.value,
    email : email.value,
    company : company.value,
    address : address.value,

  })
if(error)throw error
firstName.value = ""
lastName.value = ""
email.value = ""
company.value = ""
address.value = ""

Swal.fire({
    title: 'User Added successful',
    text: 'User Sucesfully Added in the System',
    icon: 'success',
    confirmButtonText: 'Cool'
  })
    } catch (error) {
        
    }
    
}
addUserBtn.addEventListener("click",addUser)