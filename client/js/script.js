const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName = card.querySelector("h3").innerText;
        const productPrice = card.querySelector("p").innerText;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(
            item => item.name === productName
        );

        if(existingProduct){

            existingProduct.quantity += 1;

        }else{

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert(productName + " added to cart!");
    });

});

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector("h3")
            .innerText
            .toLowerCase();

            if(title.includes(filter)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}