const numberList = () => {
  let numberList = document.querySelectorAll("ol");
  if (numberList) {
    numberList.forEach((list) => {
      let startNumber = list.start;
      let starter = 0;
      startNumber ? (starter = startNumber) : (starter = 0);
      let listItems = list.querySelectorAll(":scope > li");

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        if (list.parentNode.nodeName.toLowerCase() === "li") {
          listItem.insertAdjacentHTML(
            "afterbegin",
            `<span class="item-number">${
              list.parentNode.querySelector(".item-number").textContent
            }.${startNumber++}</span>`
          );
        } else {
          listItem.insertAdjacentHTML(
            "afterbegin",
            `<span class="item-number">${startNumber++}</span>`
          );
        }
      }
    });
  }
};
export default numberList;
