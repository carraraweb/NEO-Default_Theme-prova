$('.type.example form')
  .form({
    on: 'blur',
    fields: {      
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Entre com um e-mail válido'
          }
        ]
      },
      phone: {
        identifier  : 'phone',
        rules: [
          {
            type   : 'minLength[10]',
            prompt : 'Entre com um telefone válido'
          }
        ]
      }
    }
  })
;

$(document).ready(function(){

  $('#nome').keyup(function(){
      var type_content = $(this).val();
      $('#display_nome').text(type_content);
      sessionStorage.setItem("nome", type_content);
  });

  $('#email').keyup(function(){
    var type_content = $(this).val();
    $('#display_email').text(type_content);
    sessionStorage.setItem("email", type_content);
  });

  $('#phone').keyup(function(){
    var type_content = $(this).val();
    $('#display_phone').text(type_content);
    sessionStorage.setItem("phone", type_content);
  });

  $('#assunto').keyup(function(){
    var type_content = $(this).val();
    $('#display_assunto').text(type_content);
    sessionStorage.setItem("assunto", type_content); 
  });

  $('#msg').keyup(function(){
    var type_content = $(this).val();
    $('#display_msg').text(type_content);
    sessionStorage.setItem("msg", type_content);  
  });
  
});

$(document).ready(function(){
//displaying the value from local storage to another page by their respective Ids
document.getElementById("nome").value=sessionStorage.getItem("nome");
$('#display_nome').text(sessionStorage.getItem("nome"));
document.getElementById("email").value=sessionStorage.getItem("email");
$('#display_email').text(sessionStorage.getItem("email"));
document.getElementById("phone").value=sessionStorage.getItem("phone");
$('#display_phone').text(sessionStorage.getItem("phone"));
document.getElementById("assunto").value=sessionStorage.getItem("assunto");
$('#display_assunto').text(sessionStorage.getItem("assunto"));
document.getElementById("msg").value=sessionStorage.getItem("msg");
$('#display_msg').text(sessionStorage.getItem("msg"));
});