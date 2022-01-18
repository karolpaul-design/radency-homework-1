const date = () => {
  let arr = new Date().toDateString().split(" ");
  arr.shift();
  arr[1] += ",";
  return arr.join(" ");
};

const datesSearch = (str) => {
  let s = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,4}/g;
  let arr = str.match(s);

  return arr !== null ? arr.join(", ") : "";
};

const selectCategory = (category) => {
  const newCategories = [...categories];

  category === "empty" ? newCategories.unshift("empty") : null;

  return `<select name="select">
      ${newCategories.map((item) => {
    
        if (item === category && item !== "empty") {
          return `<option value="${item}" selected>${item}</option>`;
        } else if (item === "empty") {
          return `<option value="${item}" style="display:none" >
          </option>`;
        } else {
          return `<option value="${item}" >${item}</option>`;
        }
      })}
    </select>`;
};
