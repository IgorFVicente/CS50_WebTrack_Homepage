var op = 0;

function openalbum(a) {
    album = document.getElementById(a);
    estilo = window.getComputedStyle(album, null);
    if (estilo.display == 'none') {
        album.style.display = 'block';
    }
    else {
        album.style.display = 'none';
    }
}

function openall() {
    if (op == 0) {
        for (i = 1; i < 28; i++) {
            anumber = 'a' + i;
            album = document.getElementById(anumber);
            album.style.display = 'block';
        }
        op = 1;
    }
    else {
        for (i = 1; i < 28; i++) {
            anumber = 'a' + i;
            album = document.getElementById(anumber);
            album.style.display = 'none';
        }
        op = 0;
    }
}