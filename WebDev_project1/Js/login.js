function validate(){
  const user_mail = document.getElementById("email").value;
  const input_password = document.getElementById("password").value;

  data_user = localStorage.getItem(user_mail);
  parsed_data = JSON.parse(data_user);

  user_password = parsed_data.password;
  user_name = parsed_data.firstName;
  user_lastname = parsed_data.lastName;
  user_price = parsed_data.price;
  user_goksel_coin = parsed_data.goksel_coin;
  user_berk_coin = parsed_data.berk_coin;
  user_nurettin_coin = parsed_data.nurettin_coin;
  user_deniz_coin = parsed_data.deniz_coin;

  if(user_password === input_password){
    sessionStorage.setItem('user_name', user_name);
    sessionStorage.setItem('user_lastname', user_lastname);
    sessionStorage.setItem('user_price', user_price);

    sessionStorage.setItem('user_goksel_coin', user_goksel_coin);
    sessionStorage.setItem('user_berk_coin', user_berk_coin);
    sessionStorage.setItem('user_nurettin_coin', user_nurettin_coin);
    sessionStorage.setItem('user_deniz_coin', user_deniz_coin);

    window.location.href = "../Html/mainpage.html";
  }
  else{
    console.log("yanlıs sifre");
  }
}
