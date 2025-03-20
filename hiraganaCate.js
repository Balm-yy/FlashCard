


// Computer Version
document.addEventListener("DOMContentLoaded", function () {
    const choosed = document.querySelector(".choosed");
    const hidden = document.querySelector(".hidden");

    // Rendre les éléments déplaçables
    choosed.setAttribute("draggable", "true");
    hidden.setAttribute("draggable", "true");

    // Drag start event
    choosed.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", "choosed");
    });

    hidden.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", "hidden");
    });

    // Drag over event (nécessaire pour activer le drop)
    hidden.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    choosed.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    // Drop event
    hidden.addEventListener("drop", (event) => {
        event.preventDefault();
        swapClasses();
    });

    choosed.addEventListener("drop", (event) => {
        event.preventDefault();
        swapClasses();
    });

    function swapClasses() {
        choosed.classList.toggle("hidden");
        choosed.classList.toggle("choosed");
        hidden.classList.toggle("hidden");
        hidden.classList.toggle("choosed");
    }
});





// MOBILE VERSION


document.addEventListener("DOMContentLoaded", function () {
    // Select the elements you want to swap classes between
    const choosed = document.querySelector(".choosed");
    const hidden = document.querySelector(".hidden");

    // Ensure the container exists
    const container = document.querySelector(".sortable-container");

    if (container) {
        // Initialize SortableJS on the container
        new Sortable(container, {
            animation: 150, // Smooth animation during dragging
            swapThreshold: 0.5, // Sensitivity for swapping
            ghostClass: "ghost", // Class for the element being dragged
            onEnd: function (evt) {
                let item = evt.item; // The dragged item
                let hiddenItem = container.querySelector(".hidden");

                // Swap classes if the "choosed" item is dragged over the "hidden" item
                if (item.classList.contains("choosed") && hiddenItem) {
                    item.classList.replace("choosed", "hidden");
                    hiddenItem.classList.replace("hidden", "choosed");
                }
            }
        });
    } else {
        console.error("Sortable container not found!");
    }
});

