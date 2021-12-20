const postUser = async (data) => {
    return await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(console.error);
};

const formElement = document.querySelector("form");
const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        name: nameInput.value,
        email: emailInput.value,
    };

    console.log("Sending: ", data);
    const request = await postUser(data);
    console.log("Response: ", request);

    nameInput.value = "";
    emailInput.value = "";
});