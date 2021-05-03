function register()
{
    const text_firstName  =document.getElementById("text_firstname").value;
    const text_fastName  =document.getElementById("text_lastname").value;
    const text_email  =document.getElementById("text_email").value;
    const text_password  =document.getElementById("text_password").value;
    const text_phone  =document.getElementById("text_phone").value;
    const text_birthdate  =document.getElementById("text_birthdate").value;
    const text_gender  =document.getElementsByName("gender");
    const price = 0;
    const goksel_coin = 0;
    const berk_coin = 0;
    const nurettin_coin = 0;
    const deniz_coin = 0;

    let gender = ""

    text_gender.forEach(element => {
        if (element.checked) {
            gender = String(element.id)
        }
    });

    var demo = {
        "firstName": text_firstName,
        "lastName": text_fastName,
        "email": text_email,
        "password": text_password,
        "phone": text_phone,
        "birthdate": text_birthdate,
        "gender": gender,
        "price": price,
        "goksel_coin": goksel_coin,
        "berk_coin": berk_coin,
        "nurettin_coin": nurettin_coin,
        "deniz_coin": deniz_coin
    }

    try {
        localStorage.setItem(text_email, JSON.stringify(demo))
    } catch(err) {
        console.log(err)
    } finally {

    }



}

