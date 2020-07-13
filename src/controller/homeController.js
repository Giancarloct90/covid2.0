import view from "../views/home.html";

export default () => {
    const div = document.createElement('div');
    div.innerHTML = view;
    return div;
}