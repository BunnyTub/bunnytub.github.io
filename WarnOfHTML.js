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
        try {
            const response = await fetch("/NavigationBar");
            menuBar = document.getElementById("menu")
            menuBar.innerHTML = await response.text();
            menuBar.style.display = "flex";
        }
        catch (error) {
            alert("Whoops, the page didn't load correctly. Please refresh this page!");
        }
    });
}

RunSteps();