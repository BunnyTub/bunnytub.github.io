if (window.location.pathname.endsWith(".html")) {
    const newPath = window.location.pathname.replace(/\.html$/, "");
    const isLocal = window.location.protocol === "file:";
    if (!isLocal) {
        window.location.replace(newPath);
    }
}