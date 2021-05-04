function validate(){
  const user_mail = document.getElementById("email").value;
  data_user = localStorage.getItem(user_mail);
  parsed_data = JSON.parse(data_user);
  user_password = parsed_data.password;
  user_name = parsed_data.firstName;
  user_lastname = parsed_data.lastName;
  user_price = parsed_data.price;
  const input_password = document.getElementById("password").value;
  console.log(user_mail);
  console.log(user_password);
  console.log(input_password);
  if(user_password === input_password){
    sessionStorage.setItem('user_name', user_name);
    sessionStorage.setItem('user_lastname', user_lastname);
    sessionStorage.setItem('user_price', user_price);
    window.location.href = "../Html/mainpage.html";
  }
  else{
    console.log("yanlıs sifre");
  }
}
