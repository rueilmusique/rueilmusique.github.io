document.querySelectorAll(".listeAlaune-wrapper").forEach(wrapper => {

    const list = wrapper.querySelector(".listeAlaune");
    const item = wrapper.querySelector(".item");

    function getScrollWidth() {
        const itemWidth = item.offsetWidth;

        if (window.matchMedia("(max-width:900px), (max-height:500px)").matches) {
            return itemWidth;
        }

        return itemWidth * 2;
    }

    wrapper.querySelector(".previous").addEventListener("click", () => {
        list.scrollBy({
            left: -getScrollWidth(),
            behavior: "smooth"
        });
    });

    wrapper.querySelector(".next").addEventListener("click", () => {
        list.scrollBy({
            left: getScrollWidth(),
            behavior: "smooth"
        });
    });

});