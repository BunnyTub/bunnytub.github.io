if (window.location.pathname.endsWith(".html")) {
    const newPath = window.location.pathname.replace(/\.html$/, "");
    const isLocal = window.location.protocol === "file:";
    if (!isLocal) {
        window.location.replace(newPath);
        return;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/NavigationBar");
    document.getElementById("menu").innerHTML = await response.text();
});