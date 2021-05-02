function buy_coins(number_id){
  var deneme = "canoski";
  user_storage = localStorage.getItem(deneme);
  user_storage_parsed = JSON.parse(user_storage);
  user_price = user_storage_parsed.price;

  if(number_id === "buy_number_gokselcoin"){
    const amount_buy = document.getElementById("buy_number_gokselcoin").value;
    if(amount_buy == "" || amount_buy == 0){
      window.confirm("Select an amount to buy coins please!");
    }
    else{
      const val_goksel = document.getElementById("buy_value_gokselcoin").innerText;
      buy_value_goksel = val_goksel.slice(1,val_goksel.length);
      if(user_price > (Number(amount_buy) * Number(buy_value_goksel))){
        user_storage_parsed.goksel_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_goksel))
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("buy_number_gokselcoin").value = "";
      }else{
        window.confirm("There is no enough money in your account!");
      }
    }
  }
  else if(number_id === "buy_number_berkcoin"){
    const amount_buy = document.getElementById("buy_number_berkcoin").value;
    if(amount_buy == "" || amount_buy == 0){
      window.confirm("Select an amount to buy coins please!");
    }else{
      const val_berk = document.getElementById("buy_value_berkcoin").innerText;
      buy_value_berk = val_berk.slice(1,val_berk.length);
      if(user_price > (Number(amount_buy) * Number(buy_value_berk))){
        user_storage_parsed.berk_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_berk))
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("buy_number_berkcoin").value = "";
      }else{
        window.confirm("There is no enough money in your account!");
      }
    }
  }
  else if(number_id === "buy_number_nurettincoin"){
    const amount_buy = document.getElementById("buy_number_nurettincoin").value;
    if(amount_buy == "" || amount_buy == 0){
      window.confirm("Select an amount to buy coins please!");
    }else{
      const val_nurettin = document.getElementById("buy_value_nurettincoin").innerText;
      buy_value_nurettin = val_nurettin.slice(1,val_nurettin.length);
      if(user_price > (Number(amount_buy) * Number(buy_value_nurettin))){
        user_storage_parsed.nurettin_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_nurettin))
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("buy_number_nurettincoin").value = "";
      }else{
        window.confirm("There is no enough money in your account!");
      }
    }
  }
  else if(number_id === "buy_number_denizcoin"){
    const amount_buy = document.getElementById("buy_number_denizcoin").value;
    if(amount_buy == "" || amount_buy == 0){
      window.confirm("Select an amount to buy coins please!");
    }else{
      const val_deniz = document.getElementById("buy_value_denizcoin").innerText;
      buy_value_deniz = val_deniz.slice(1,val_deniz.length);
      if(user_price > (Number(amount_buy) * Number(buy_value_deniz))){
        user_storage_parsed.deniz_coin += Number(amount_buy);
        user_storage_parsed.price -= (Number(amount_buy) * Number(buy_value_deniz))
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("buy_number_denizcoin").value = "";
      }else{
          window.confirm("There is no enough money in your account!");
      }
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
    if(amount_sell == "" || amount_sell == 0){
      window.confirm("Select an amount to sell your coins please!");
    }else{
      if(user_goksel_coin >= amount_sell){
        user_storage_parsed.goksel_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 10)
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("sell_number_gokselcoin").value = "";
      }else{
        window.confirm("There is no enough 'goksel coin' in your account!");
      }
    }
  }
  else if(number_id === "sell_number_berkcoin"){
    const amount_sell = document.getElementById("sell_number_berkcoin").value;
    if(amount_sell == "" || amount_sell == 0){
      window.confirm("Select an amount to sell your coins please!");

    }else{
      if(user_berk_coin >= amount_sell){
        user_storage_parsed.berk_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 20)
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("sell_number_berkcoin").value = "";
      }else{
        window.confirm("There is no enough 'berk coin' in your account!");
      }
    }
  }
  else if(number_id === "sell_number_nurettincoin"){
    const amount_sell = document.getElementById("sell_number_nurettincoin").value;
    if(amount_sell == "" || amount_sell == 0){
      window.confirm("Select an amount to sell your coins please!");
    }else{
      if(user_nurettin_coin >= amount_sell){
        user_storage_parsed.nurettin_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 5)
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("sell_number_nurettincoin").value = "";
      }else{
          window.confirm("There is no enough 'nurettin coin' in your account!");
      }
    }
  }
  else if(number_id === "sell_number_denizcoin"){
    const amount_sell = document.getElementById("sell_number_denizcoin").value;
    if(amount_sell == "" || amount_sell == 0){
      window.confirm("Select an amount to sell your coins please!");
    }else{
      if(user_deniz_coin >= amount_sell){
        user_storage_parsed.deniz_coin -= Number(amount_sell);
        user_storage_parsed.price += (Number(amount_sell) * 7)
        localStorage.setItem(deneme,JSON.stringify(user_storage_parsed));
        document.getElementById("sell_number_denizcoin").value = "";
      }else{
        window.confirm("There is no enough 'deniz coin' in your account!");
      }
    }
  }
}
