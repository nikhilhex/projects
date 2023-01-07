function GET(uri) {
  var req = new XMLHttpRequest();
  req.open("GET", uri, false);
  req.send(null);
  return req.responseText;
}

const data = JSON.parse(GET("https://api.github.com/users/nikhilhex/repos"));

function alphabeticalOrder(count) {
  for (let i = 0; i < count; i++) {
    let element = document.createElement("li");
    let uri = document.createElement("a");
    uri.id = "a";
    uri.href = data[i].html_url;
    uri.innerText = data[i].name;
    element.appendChild(uri);
    document.getElementById("list").appendChild(element);
  }
}

function newest(count) {
  let dateList = [];
  for (let i = 0; i < count; i++) {
    let date = String(data[i].created_at).slice(0, String(data[i].created_at).indexOf("T"));
    let tempDate = new Date(date);
    dateList.push([tempDate, i]);
  }
  dateList.sort(function(a, b) {
    return b[0].getTime() - a[0].getTime()
  });
  for (let x = 0; x < count; x++) {
    let element = document.createElement("li");
    let uri = document.createElement("a");
    uri.id = "a";
    uri.href = data[dateList[x][1]].html_url;
    uri.innerText = data[dateList[x][1]].name;
    element.appendChild(uri);
    document.getElementById("list").appendChild(element);
  }
}

function oldest(count) {
  let dateList = [];
  for (let i = 0; i < count; i++) {
    let date = String(data[i].created_at).slice(0, String(data[i].created_at).indexOf("T"));
    let tempDate = new Date(date);
    dateList.push([tempDate, i]);
  }
  dateList.sort(function(a, b) {
    return a[0].getTime() - b[0].getTime()
  });
  for (let x = 0; x < count; x++) {
    let element = document.createElement("li");
    let uri = document.createElement("a");
    uri.id = "a";
    uri.href = data[dateList[x][1]].html_url;
    uri.innerText = data[dateList[x][1]].name;
    element.appendChild(uri);
    document.getElementById("list").appendChild(element);
  }
}

function mostRecent(count) {
  let dateList = [];
  for (let i = 0; i < count; i++) {
    let date = String(data[i].pushed_at).slice(0, String(data[i].pushed_at).indexOf("T"));
    let tempDate = new Date(date);
    dateList.push([tempDate, i]);
  }
  dateList.sort(function(a, b) {
    return b[0].getTime() - a[0].getTime()
  });
  for (let x = 0; x < count; x++) {
    let element = document.createElement("li");
    let uri = document.createElement("a");
    uri.id = "a";
    uri.href = data[dateList[x][1]].html_url;
    uri.innerText = data[dateList[x][1]].name;
    element.appendChild(uri);
    document.getElementById("list").appendChild(element);
  }
}


alphabeticalOrder(+data.length);

document.getElementById("sort").addEventListener("change", function() {
  let val = document.getElementById("sort").value;
  document.getElementById("list").remove();
  let newList = document.createElement("ul");
  newList.id = "list";
  document.body.appendChild(newList);
  if (val === "alphabetical-order") {
    alphabeticalOrder(+data.length);
  } else if (val === "newest") {
    newest(+data.length);
  }
  else if (val === "oldest") {
  oldest(+data.length);
  }
  else if (val === "most-recent") {
  mostRecent(+data.length);
  }
})
