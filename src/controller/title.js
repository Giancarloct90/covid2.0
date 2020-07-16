import view from "../views/title.html";

export default async () => {
    let div = document.createElement('div');
    div.innerHTML = view;
    return div;
}