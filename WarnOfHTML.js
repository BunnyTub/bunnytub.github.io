function RunSteps() {    
    if (window.location.pathname.endsWith(".html")) {
        const newPath = window.location.pathname.replace(/\.html$/, "");
        const isLocal = window.location.protocol === "file:";
        if (!isLocal) {
            window.location.replace(newPath);
            return;
        }
    }

    document.addEventListener("DOMContentLoaded", async () => {
        menuBar = document.getElementById("menu")
        try {
            const response = await fetch("/NavigationBar");
            menuBar.innerHTML = await response.text();
            menuBar.style.display = "flex";
        }
        catch (error) {
            menuBar.innerHTML = "There was an issue loading the navigation bar. Please check your internet connection, then refresh to try again.";
            menuBar.style.display = "flex";
            //alert("Whoops, something is having trouble. Please reload the page!");
        }

        document.querySelectorAll('.covered').forEach(function (el) {
            el.insertAdjacentHTML('beforeend', '<cover></cover>');
            el.addEventListener('mousedown', function (e) {
                if (e.button === 2) {
                    e.preventDefault();
                    return false;
                }
                return true;
            });

            el.querySelectorAll('img').forEach(function (img) {
                img.style.display = 'block';
            });

            el.addEventListener('mouseenter', function () {
                var cover = el.querySelector('cover');
                if (!cover) {
                    el.innerHTML = '';
                }
            });
        });

    });
}

RunSteps();