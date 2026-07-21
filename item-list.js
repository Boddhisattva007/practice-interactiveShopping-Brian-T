const itemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");

addButton.addEventListener("click", function () {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please Enter an Item");
        return;
    }

    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const bulletSpan = document.createElement("span");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    itemSpan.textContent = itemText;

    bulletSpan.textContent = "•";
    bulletSpan.classList.add("item-bullet");

    editButton.type = "button";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function() {
        if(editButton.textContent === "Edit") {
            const editInput = document.createElement("input");

            editInput.type = "text";
            editInput.value = itemSpan.textContent;

            itemSpan.replaceWith(editInput);

            editButton.textContent = "Save Changes";
            editInput.focus();

        } else {
            const editInput = listItem.querySelector("input");
            const updatedText = editInput.value.trim();
            if (updatedText === "") {
                alert("Input Cannot Be Empty.");
                return;
            }

            itemSpan.textContent = updatedText;
            editInput.replaceWith(itemSpan);

            editButton.textContent = "Edit";

        }
    });

    removeButton.type = "button";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    listItem.appendChild(bulletSpan);
    listItem.appendChild(itemSpan);

    shoppingList.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus();

});



