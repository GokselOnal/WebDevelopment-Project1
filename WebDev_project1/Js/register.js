function register()
{
    const textFirstName  =document.getElementById("text_firstname").value;
    const textLastName  =document.getElementById("text_lastname").value;
    const textEmail  =document.getElementById("text_email").value;
    const textPassword  =document.getElementById("text_password").value;
    const textPhone  =document.getElementById("text_phone").value;
    const textBirthdate  =document.getElementById("text_birthdate").value;
    const textGender  =document.getElementsByName("gender")
    const price = 0
    
    let gender = ""

    textGender.forEach(element => {
        if (element.checked) {
            gender = String(element.id)
        }
    });

    var demo = {
        "firstName": textFirstName,
        "lastName": textLastName,
        "email": textEmail,
        "passwrod": textPassword,
        "phone": textPhone,
        "birthdate": textBirthdate,
        "gender": gender,
        "amount": price
    }

    try {
        localStorage.setItem(textEmail, JSON.stringify(demo))
    } catch(err) {
        console.log(err)
    } finally {

    }
    
    

}