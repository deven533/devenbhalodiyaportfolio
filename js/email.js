function sendEmail(event) {
  event.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (!params.from_name || !params.from_email || !params.message) {
    alert("Please fill all fields");
    return;
  }

  emailjs
    .send("service_x21q6bc", "template_54phz6x", params)
    .then(function () {
      alert("Message sent successfully ✅");
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      alert("Failed to send message ❌");
      console.error(error);
    });
}
