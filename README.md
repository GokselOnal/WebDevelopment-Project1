# Coinzzz
### List of project members

**1**) GÖKSEL CAN ÖNAL\
**2)** NURETTİN BURAK ALTINTAŞ\
**3)** BERK AKİDİL\
**4)** DENİZ AFŞAR

### Short Description of project
This project was designed as a simple cryptocurrency trading site.In the construction of the project, examples were taken from sites such as Binance coinmarkcap,they were used as a reference. Our aim to make this project is that we knew that there are many successful sites and exchanges about crypto money in the world, we felt that Turkey was lacking in this regard, we decided to make our site.

### Instructions for how to run the application
The register page is designed for people to become a member of the site. After filling in all the information,people can become a member by clicking the register button.Members can easily log in from the login page when they want to log in to the site. When people log in, they will be transferred to the MainPage.In the left corner on the MainPage, people can easily see their financial status and the number of their coins, on the right, they can buy and sell the coins they want, and finally, when they click on the coin, they have redirected to the page a piece of detailed information about the coin.

### Use Case Scenarios

In order for someone who logs into the website for the first time to log in to the system, they must register in the first place. It must then complete the name, last name, email, password, phone, date of birth and gender, otherwise it will receive an error message and all entered information will be deleted. In addition, if another user with the same email is registered, an error message is sent to the user, if the user does not enter an 11-digit phone number, an error message is sent, the user who wants to register must reach the age of 18; therefore, the date map can be selected backwards from January 1, 2003, and finally, if the user does not choose gender, it will encounter an error message. In all these cases, the data on the page is reset. If the user who wants to register provides all the qualifications mentioned above, he / she will register and return to the entrance screen with a welcome message. If the user writes the email and password incorrectly on this screen, they will encounter an error message and the data will be deleted, and if they log in with the correct information, they will be redirected to the homepage. The account balance is 0 because the user account has just opened. He must press the "₺100 Deposit" button as many times as he wants to increase money to the account. Four cryptocurrencies are available based on the user's balance. He can buy or sell these cryptocurrencies for the amount written on them. If the user's balance is not enough for the cryptocurrency he wants to buy, he will encounter an error message. If the user does not have the amount of cryptocurrency he wants to sell, he will encounter an error message. If the user wants to withdraw the balance from the "Coinzzz" web site, they must press the "100₺ Withdraw " button up to 100 times the amount they want to withdraw. If the user's balance is less than 100 Turkish lira, withdraw does not occur. The user can click on cryptocurrency names in the middle of the screen to learn more about coins. Finally, if the user wants to log out of the system, he can return to the entrance screen by pressing the sign out button.



### Responsibilities of each project member
-------------------------------
Berk Akidil

I made the CSS and HTML parts of the berk coin page, I made the CSS and HTML parts of the first version at the MainPage, then other friends made modifications on MainPage.I made
function of validateForm in register js

-------------------------------
#### Göksel Can ÖNAL

1) Creating registration and göksel coin pages.
2) Designing header and footer.
3) Updating design of main page.
4) Redirecting login page after any valid registration.
5) Control of sign up inputs and redirect to main page after any valid login.
6) Error messages of sign up page.
7) Sidebar information.
8) Enabling users to buy coin from Coinzzz.
9) Enabling users to sell their coin from their accounts.
10) Updating sidebar information (balance and coins amount of users) after any transaction.
11) All control mechanism of transactions and error messages of main page.
12) Clearing input fields after any transaction or error messages in main page.
13) Enabling users to sign out from their account and redirect to sign up page.


-------------------------------
Deniz

1) Solving some problems on the registration page and clearing inputs.
2) Creating Denizcoin page and placing icons(html, css)
3) Enable users to deposit or withdraw money to their account thanks to the buttons located on the homepage.

-------------------------------
Nurettin

1) Making the entrance.html and nurettincoin.html.
2) Making the entrance.css and nurettin_coin.css
3) First implementation of register.js (implementing the register function in order to implement the localStorage.)

-------------------------------

-We did not use the additional library.
