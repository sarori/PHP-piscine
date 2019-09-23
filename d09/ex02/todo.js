let list = [];

const createNode = text => {
  if (text === null) {
    return;
  }

  var p = document.createElement("p");
  p.innerHTML = ` -\t${text}`;
  p.addEventListener("click", e => {
    if (window.confirm("Are you sure to remove this one?")) {
      ft_list.remove(p);
      const idx = list.find(ele => {
        return text === ele;
      });
      list.splice(idx, 1);
      list = list.filter(ele => {
        if (ele !== "") {
          return ele;
        }
      });
      document.cookie = `list=${list.toString()}`;
      location.reload();
    }
  });
  document.querySelector("#ft_list").appendChild(p);
};

if (document.cookie) {
  const tmp = document.cookie.split("; ").filter(ele => {
    return ele.split("=")[0] === "list";
  });
  if (tmp[0]) {
    list = tmp[0].split("=")[1].split(",");
  }
  list = list.filter(ele => {
    if (ele !== "") {
      return ele;
    }
  });

  if (list) {
    list.forEach(text => {
      if (text) {
        createNode(text);
      }
    });
  }
}

document.querySelector("#new").addEventListener("click", () => {
  const text = window.prompt("add a list", "exam practice");

  list.push(text);
  createNode(text);

  list = list.filter(ele => {
    if (ele !== "") {
      return ele;
    }
  });

  document.cookie = `list=${list.toString()}`;
});
