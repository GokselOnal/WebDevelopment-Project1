function information(){
  name = sessionStorage.getItem("user_name");
  last_name = sessionStorage.getItem("user_lastname");
  price = sessionStorage.getItem("user_price");
  goksel_coin = sessionStorage.getItem("user_goksel_coin");
  berk_coin = sessionStorage.getItem("user_berk_coin");
  nurettin_coin = sessionStorage.getItem("user_nurettin_coin");
  deniz_coin = sessionStorage.getItem("user_deniz_coin");
  document.getElementById("user_name").innerText = name;
  document.getElementById("last_name").innerText = last_name;
  document.getElementById("price").innerText = "₺"+price;
  document.getElementById("coins").innerText = "Goksel Coin: "+ goksel_coin + " - Berk Coin: " + berk_coin + "\n Nurettin Coin: " + nurettin_coin + " - Deniz Coin: " + deniz_coin;
}
