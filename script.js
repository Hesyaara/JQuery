$(document).ready(function () {
    // Toggle hamburger menu
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('active');
    });

    // Validasi Form
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const nama = $('#nama').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const pesan = $('#pesan').val().trim();
        let errorMessage = "";

        if (!nama || !email || !phone || !pesan) {
            errorMessage = "Semua field wajib diisi.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage = "Email tidak valid.";
        } else if (!/^\d{10,15}$/.test(phone)) {
            errorMessage = "Nomor handphone harus 10-15 digit angka.";
        } else if (nama.length > 50 || email.length > 50 || phone.length > 15 || pesan.length > 200) {
            errorMessage = "Panjang karakter melebihi batas maksimal.";
        }

        if (errorMessage) {
            $('#formMessage').text(errorMessage).css('color', 'red');
        } else {
            $('#formMessage').text("Pesan berhasil dikirim!").css('color', 'green');
            $('#contactForm')[0].reset();
        }
    });
});