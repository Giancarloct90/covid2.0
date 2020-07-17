import view from "../views/worlWide.html";

export default () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    return div;
}