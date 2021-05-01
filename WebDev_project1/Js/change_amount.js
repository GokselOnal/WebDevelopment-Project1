function buy_coins(number_id){
  var deneme = "canoski";
  user_storage = localStorage.getItem(deneme);
  user_storage_parsed = JSON.parse(user_storage);
  user_price = user_storage_parsed.price;

  if(number_id === "buy_number_gokselcoin"){
    const amount_buy = document.getElementById("buy_number_gokselcoin").value;
    if(user_price > (Number(amount_buy) * 25200)){
      user_storage_parsed.goksel_coin += Number(amount_buy);
      user_storage_parsed.price -= (Number(amount_buy) * 25200)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
        console.log("para yok la");
    }
  }
  else if(number_id === "buy_number_berkcoin"){
    const amount_buy = document.getElementById("buy_number_berkcoin").value;
    if(user_price > (Number(amount_buy) * 10200)){
      user_storage_parsed.berk_coin += Number(amount_buy);
      user_storage_parsed.price -= (Number(amount_buy) * 10200)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
        console.log("para yok la");
    }
  }
  else if(number_id === "buy_number_nurettincoin"){
    const amount_buy = document.getElementById("buy_number_nurettincoin").value;
    if(user_price > (Number(amount_buy) * 17200)){
      user_storage_parsed.nurettin_coin += Number(amount_buy);
      user_storage_parsed.price -= (Number(amount_buy) * 17200)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
        console.log("para yok la");
    }
  }
  else if(number_id === "buy_number_denizcoin"){
    const amount_buy = document.getElementById("buy_number_denizcoin").value;
    if(user_price > (Number(amount_buy) * 23200)){
      user_storage_parsed.deniz_coin += Number(amount_buy);
      user_storage_parsed.price -= (Number(amount_buy) * 23200)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
        console.log("para yok la");
    }
  }
}


function sell_coins(number_id){
  var deneme = "canoski";
  user_storage = localStorage.getItem(deneme);
  user_storage_parsed = JSON.parse(user_storage);
  user_goksel_coin = user_storage_parsed.goksel_coin;
  user_berk_coin = user_storage_parsed.berk_coin;
  user_nurettin_coin = user_storage_parsed.nurettin_coin;
  user_deniz_coin = user_storage_parsed.deniz_coin;

  if(number_id === "sell_number_gokselcoin"){
    const amount_sell = document.getElementById("sell_number_gokselcoin").value;
    if(user_goksel_coin >= amount_sell){
      user_storage_parsed.goksel_coin -= Number(amount_sell);
      user_storage_parsed.price += (Number(amount_sell) * 10)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
      console.log("coin yok l");
    }
  }
  else if(number_id === "sell_number_berkcoin"){
    const amount_sell = document.getElementById("sell_number_berkcoin").value;
    if(user_berk_coin >= amount_sell){
      user_storage_parsed.berk_coin -= Number(amount_sell);
      user_storage_parsed.price += (Number(amount_sell) * 20)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
      console.log("coin yok l");
    }
  }
  else if(number_id === "sell_number_nurettincoin"){
    const amount_sell = document.getElementById("sell_number_nurettincoin").value;
    if(user_nurettin_coin >= amount_sell){
      user_storage_parsed.nurettin_coin -= Number(amount_sell);
      user_storage_parsed.price += (Number(amount_sell) * 5)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
        console.log("coin yok l");
    }
  }
  else if(number_id === "sell_number_denizcoin"){
    const amount_sell = document.getElementById("sell_number_denizcoin").value;
    if(user_deniz_coin >= amount_sell){
      user_storage_parsed.deniz_coin -= Number(amount_sell);
      user_storage_parsed.price += (Number(amount_sell) * 7)
      localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
    }else{
      console.log("coin yok l");
    }
  }
}
