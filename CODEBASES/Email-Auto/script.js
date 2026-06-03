async function submitForm() {

    const btn = document.getElementById("btn");
    const status = document.getElementById("status");

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // simple validation
    if (!data.name || !data.email || !data.message) {
        status.innerText = "Please fill required fields ❌";
        status.style.color = "red";
        return;
    }

    btn.innerText = "Sending...";
    btn.disabled = true;

    try {

        const response = await fetch(
            "/contact-us",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (result.success) {
            status.innerText = "Message sent successfully ✅";
            status.style.color = "green";
        } else {
            status.innerText = "Failed to send ❌";
            status.style.color = "red";
        }

    } catch (err) {
        status.innerText = "Server error ❌";
        status.style.color = "red";
    }

    btn.innerText = "Send Message";
    btn.disabled = false;
}