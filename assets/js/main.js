document.addEventListener('DOMContentLoaded', function () {
    if (document.readyState === "interactive") {
        var dark_mode_input=document.getElementById('darkmode');
        var body=document.querySelector('body');
        dark_mode_input.addEventListener( 'change', function() {
            if(this.checked) {
                // Checkbox is checked..
                body.classList.add('dark-m');
            } else {
                body.classList.remove('dark-m');
            }
        });
    }
},false);