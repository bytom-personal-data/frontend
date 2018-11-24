$(document).ready(function() {
    // Login Form
    var loginFormEl = $('#loginForm');
    if(loginFormEl.length > 0) {
        loginFormEl.on('submit', function(e) {
            e.preventDefault();
            var loginData = serialiseArrayToJson($(this).serializeArray());
            console.log($(this));
            console.log(loginData);

            $.ajax({
                url: '',
                type: 'post',
                dataType: 'json',
                data: loginData,
                success: function() {
                    // ...
                    location.href = 'account.html';
                }
            });
        });
    }


    // Register Form
    var registerFormEl = ('#registerForm');
    if(registerFormEl.length > 0) {
        // ...
    }
});


// Helper Functions
function serialiseArrayToJson(data)
{
    var resultData = {};
    $(data).each(function(index, obj){
        resultData[obj.name] = obj.value;
    });
    return resultData;
}