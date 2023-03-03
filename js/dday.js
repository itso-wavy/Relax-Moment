
//디데이
// const dDay = new Date('#');
// getDDay();
// setInterval(getDDay, 1000);

// function getDDay() {
//   const date = new Date();
//   const diff = (dDay - date) / 1000;
//   const day = Math.floor(diff / 60 / 60 / 24);
//   const hour = String(Math.floor(diff / 60 / 60 - day * 24)).padStart(2, "0");
//   const min = String(
//     Math.floor(diff / 60 - day * 24 * 60 - hour * 60)
//   ).padStart(2, "0");
//   const sec = String(
//     Math.floor(diff - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60)
//   ).padStart(2, "0");
//   clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
// }
