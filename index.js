(function () {
    emailjs.init('JOnUIgvKxSKzm0vzz')
})()

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const checkbox = document.getElementById('newsLetterCheck');
        this.news_letter.value = checkbox.checked ? 'Quiero suscribirme a nueva informacion en este email' : 'No quiero recibir noticias'

        emailjs.sendForm('service_n48939a', 'template_8yik7cp', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}