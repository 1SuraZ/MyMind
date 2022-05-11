$('#loginBtn').click(() => {
    $.ajax({
        url: '/login',
        type: 'POST',
        data: {
            email: $("#email").val(),
            password: $("#password").val(),
        }, success: function (data) {
            if (data == "NoEmailExist") {
                document.getElementById("loginErrorMessage").innerHTML = "User with that email does not exist"
            } else if (data == "wrongPassword") {
                document.getElementById("loginErrorMessage").innerHTML = "Incorrect Password"
            } else if (data.isAdmin) {
                document.getElementById('loginSuccessModal').style.display = 'flex';
                setTimeout(() => {
                    window.location = '/admin-dashboard'
                }, 2500);
            } else {
                document.getElementById('loginSuccessModal').style.display = 'flex';
                setTimeout(() => {
                    window.location = '/'
                }, 2500);
            }
            
        }
    })
});

// Trigger click function for enter key for all input fields
const input = document.querySelectorAll(".form-control");
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("loginBtn").click();
        }
    });
}