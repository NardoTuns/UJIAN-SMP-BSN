document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const password = '212'; // Password default, bisa diganti
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const kelas = document.getElementById('kelas').value;
            const rombel = document.getElementById('rombel').value;
            const mapel = document.getElementById('mapel').value;
            const inputPassword = document.getElementById('password').value;
            
            if (inputPassword !== password) {
                alert('Password salah! Silakan coba lagi.');
                return;
            }
            
            // Simpan data siswa di sessionStorage
            sessionStorage.setItem('nama', nama);
            sessionStorage.setItem('kelas', kelas + rombel.toUpperCase());
            sessionStorage.setItem('mapel', mapel);
            
            // Redirect ke halaman kuis
            window.location.href = 'quiz.html';
        });
    }
    
    // Link kelas dan rombel
    const kelasSelect = document.getElementById('kelas');
    const rombelSelect = document.getElementById('rombel');
    
    if (kelasSelect && rombelSelect) {
        kelasSelect.addEventListener('change', function() {
            const selectedKelas = this.value;
            rombelSelect.innerHTML = '<option value="">Pilih Rombel</option>';
            
            if (selectedKelas === '7') {
                rombelSelect.innerHTML += '<option value="7a">7A</option><option value="7b">7B</option>';
            } else if (selectedKelas === '8') {
                rombelSelect.innerHTML += '<option value="8a">8A</option><option value="8b">8B</option>';
            } else if (selectedKelas === '9') {
                rombelSelect.innerHTML += '<option value="9a">9A</option><option value="9b">9B</option>';
            }
        });
    }
});
