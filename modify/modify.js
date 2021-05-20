function modify(str) {
    if (!str || !str.length)
        return;
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
    };
    const reg = /[&<>"'/]/gi;
    return str.replace(reg, (match) => map[match]);
}
export default modify;