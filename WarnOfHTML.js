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
        // menuBar = document.getElementById("menu")
        // try {
        //     const response = await fetch("/NavigationBar");
        //     menuBar.innerHTML = await response.text();
        //     menuBar.style.display = "flex";
        // }
        // catch (error) {
        //     menuBar.innerHTML = "There was an issue loading the navigation bar. Please check your internet connection, then refresh to try again.";
        //     menuBar.style.display = "flex";
        //     //alert("Whoops, something is having trouble. Please reload the page!");
        // }

        document.querySelectorAll('img').forEach(img => {
            img.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                img.style.filter = "invert()";
            });

            img.addEventListener('dragstart', e => e.preventDefault());
            img.style.userSelect = 'none';
            img.style['-webkit-user-drag'] = 'none';
        });
    });
}

function CopyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert("The following text was copied:\n" + text);
} 

RunSteps();