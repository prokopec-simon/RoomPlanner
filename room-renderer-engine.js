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

      if (item.includes("window")) {
        itemElement.classList.add("window");
      }

      if (item.includes("door")) {
        itemElement.classList.add("door");
      }

      roomElement.appendChild(itemElement);
    });
  });
}

function loadDataFromUserInput() {
  const roomElement = document.getElementById("json-loader");
  const content = JSON.parse(roomElement.value);
  renderRoom(content);
}

const defaultRoomData = {
  width: 600,
  height: 300,
  features: {
    door: { x: 50, y: 0, width: 50 },
    window1: { x: 150, y: 0, width: 100 },
    window2: { x: 300, y: 0, width: 100 },
    window3: { x: 550, y: 200, width: 100, direction: "down" },
  },
  furniture: {
    bed: { x: 0, y: 150, width: 100, height: 150 },
    sofa: { x: 150, y: 220, width: 150, height: 80 },
    table: { x: 450, y: 180, width: 80, height: 50 },
    tv: { x: 200, y: 50, width: 100, height: 20 },
    chair1: { x: 410, y: 190, width: 30, height: 30 },
    chair2: { x: 550, y: 190, width: 30, height: 30 },
    chair3: { x: 480, y: 140, width: 30, height: 30 },
    chair4: { x: 480, y: 240, width: 30, height: 30 },
    lamp: { x: 10, y: 80, width: 20, height: 40 },
    coffeeTable: { x: 500, y: 20, width: 60, height: 60 },
    cabinet1: { x: 350, y: 0, width: 80, height: 40 },
    cabinet2: { x: 200, y: 0, width: 120, height: 40 },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const loadButton = document.getElementById("load-button");
  loadButton.addEventListener("click", loadDataFromUserInput);

  renderRoom(defaultRoomData);

  const roomElement = document.getElementById("json-loader");
  roomElement.value = JSON.stringify(defaultRoomData, null, 2);
});
