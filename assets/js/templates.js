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
  switch (category) {
    case "Task":
      return `<select name="select"> 
      <option value="Task" selected>Task</option>
      <option value="Random Thought" >Random Thought</option>
      <option value="Idea" >Idea</option>
    </select>`;
    case "Random Thought":
      return `<select name="select"> 
      <option value="Task">Task</option>
      <option value="Random Thought" selected >Random Thought</option>
      <option value="Idea" >Idea</option>
    </select>`;
    case "Idea":
      return `<select name="select"> 
      <option value="Task">Task</option>
      <option value="Random Thought" >Random Thought</option>
      <option value="Idea" selected>Idea</option>
    </select>`;
    default:
      return `<select name="select" > 
        <option value="empty"  style="display:none">empty</option>
        <option value="Task">Task</option>
      <option value="Random Thought" >Random Thought</option>
      <option value="Idea" >Idea</option>
        
      </select>`;
  }
};
