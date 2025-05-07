$(document).ready(function() {
    
    $('a.nav-link[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = this.hash;
      if (target) {
        $('html, body').animate({
          scrollTop: $(target).offset().top - 70
        }, 800);
      }
    });
  
    
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      var nome = $('#name').val().trim();
      var email = $('#email').val().trim();
      var mensagem = $('#message').val().trim();
      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
      } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert('Por favor, insira um e-mail válido.');
        } else {
          alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '!');
          $('#contactForm')[0].reset();
        }
      }
    });
  });
  