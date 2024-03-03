let result = {
  tag: "",
  free: true,
  role: false,
  user: "minkalbookstore",
  email: "minkalbookstore@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  var resultCont = document.querySelector("#resultCont");
  resultCont.innerHTML =`<img width="100" src="loading.svg" alt="loading" />`


  let key = "ema_live_HHFHfOQ3BR0YaG6KT7yS2BzXbc5qviVyis2Pdeyf";
  let email = document.getElementById("username").value;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  var str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }

  var resultCont = document.querySelector("#resultCont");
  resultCont.innerHTML = str;
});
