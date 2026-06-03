const apiUrl =
"/generate";

async function generateQR() {

    const text =
        document.getElementById("textInput").value;

    const response =
        await fetch(apiUrl, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                text: text
            })
        });

    const data =
        await response.json();

    document.getElementById("result").innerHTML = `
        <h3>Generated QR Code</h3>

        <img src="${data.imageUrl}">

        <br><br>

        <a href="${data.imageUrl}" download>
            Download QR Code
        </a>
    `;
}