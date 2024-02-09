function forgetShow()
{
    $(".forget").css("display", "block");
    $(".signUp, .update, .deleted").css("display", "none");
}

function signupShow()
{
    $(".signUp").css("display", "block");
    $(".forget, .update, .deleted").css("display", "none");
}

function updateShow()
{
    $(".update").css("display", "block");
    $(".signUp, .forget, .deleted").css("display", "none");
}
function deletedShow()
{
    $(".deleted").css("display", "block");
    $(".signUp, .update, .forget").css("display", "none");
}