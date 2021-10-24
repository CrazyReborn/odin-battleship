const display = () => {
    const display = document.querySelector('.display');
    //vs - very small ships, s - small ships, m - medium ships, l - large ships
    const clear = () => {
        display.innerHTML = '';
    }
    const updatePlacing = (vs, s, m, l) => {
        display.innerHTML = `<p>1 cell ships placed: ${vs}<p><br>` +
                            `<p>2 cells ships placed: ${s}<p><br>` +
                            `<p>3 cells ships placed: ${m}<p><br>` +
                            `<p>4 cell ships placed: ${l}<p><br>`;

    }
    return {
        updatePlacing,
        clear
    }
}

export { display };