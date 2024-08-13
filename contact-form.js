
// Create a transporter object using SMTP transport
emailjs.init("n1owq8WaSTH69XhCY");



document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic form validation
    if (name === "" || email === "" || message === "") {
      document.getElementById("responseMessage").textContent =
        "Please fill out all fields.";
      return;
    }

     // Send email using EmailJS with Elastic Email configuration
     emailjs.send("service_072543l", "template_451x44v", {
        from_name: name,
        from_email: email,
        to_name: "Recipient Name",
        message: message
      })
      .then(function (response) {
        document.getElementById("responseMessage").textContent =
          "Thank you for your message!";
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        document.getElementById("responseMessage").textContent =
          "Oops! Something went wrong.";
        console.error("EmailJS error:", error);
      });


    // // // // Send email using EmailJS
    // Email.send({
    //   Host: "smtp.gmail.com", // Use your SMTP server
    //   Username: "rumanu.dev@gmail.com",
    //   Password: "zbnd nlrf dbmj swra",
    //   To: "rumanu.dev@gmail.com",
    //   From: email,
    //   Subject: `${email} wanted talk to you`,
    //   Body: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // })
    //   .then(function (response) {
    //     alert(response);
    //     console.log(response);
    //     document.getElementById("responseMessage").textContent =
    //       "Thank you for your message!";
    //     document.getElementById("contact-form").reset();
    //   })
    //   .catch(function (error) {
    //     document.getElementById("responseMessage").textContent =
    //       "Oops! Something went wrong.";
    //     console.error("SMTP.js error:", error);
    //   });
  });
