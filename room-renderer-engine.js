function renderRoom(data) {
  const roomElement = document.getElementById("room");
  roomElement.style.width = `${data.width}px`;
  roomElement.style.height = `${data.height}px`;

  Object.keys(data).forEach((section) => {
    Object.keys(data[section]).forEach((item) => {
      const itemData = data[section][item];
      const itemElement = document.createElement("div");

      itemElement.className = `item${section === "features" ? " feature" : ""}`;
      itemElement.style.width = `${itemData.width}px`;
      itemElement.style.height = `${itemData.height}px`;
      itemElement.style.left = `${itemData.x}px`;
      itemElement.style.top = `${itemData.y}px`;

      if (itemData.direction) {
        switch (itemData.direction) {
          case "up":
            itemElement.style.transform = "rotate(-90deg)";
            break;
          case "down":
            itemElement.style.transform = "rotate(90deg)";
            break;
          case "left":
            itemElement.style.transform = "rotate(180deg)";
            break;
          default:
            itemElement.style.transform = "rotate(0deg)";
        }
      }

      if (section === "furniture") {
        itemElement.innerHTML = item;
      }

      if (item === "door") {
        itemElement.id = "door";
      }
      roomElement.appendChild(itemElement);
    });
  });
}
