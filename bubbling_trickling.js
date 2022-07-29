document.querySelector("#grandparent")
  .addEventListener('click', (event) => {
    console.log("Grandparent Clicked!");
    // event.stopPropagation();
  }, true);       
//   capturing

  document.querySelector("#parent")
  .addEventListener('click', (event) => {
    console.log("Parent Clicked!");
  }, false);
//   capturing
// inf false=> bubbling

  document.querySelector("#child")
  .addEventListener('click', (event) => {
    console.log("Child Clicked!");
  }, false);
//   capturing