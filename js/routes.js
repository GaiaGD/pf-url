
let contentDiv = document.getElementById('main-content');

let routes = {
    '/': homePage,
    '/index.html': homePage,
    '/design': designprojects,
    '/coding': codingprojects,
    // '/work': work,
    // '/contact': contact,
};

window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
}

let onLinkClickGo = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];