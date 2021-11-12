const testWebInitial = () => {
  const testWebp = (callback) => {
    let webp = new Image();
    webp.onload = webp.onerror = () => {
      callback(webp.height == 2);
    };
    webp.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
  testWebp((result) => {
    result
      ? document.documentElement.classList.add("webp")
      : document.documentElement.classList.add("no-webp");
  });
};
