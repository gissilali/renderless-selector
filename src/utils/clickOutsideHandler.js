export const  handleClickOutside = (element, callback) => {
    document.addEventListener("click", (event) => {
        if (!element.contains(event.target)) {
            callback()
        }
    });

}