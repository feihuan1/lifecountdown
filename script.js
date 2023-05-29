const btn = document.querySelector("#btn");
const birthInput = document.getElementById("birthday");
const lifeInput = document.getElementById("life-span");
const result = document.getElementById("result");

const countDown = () => {
  const birthdate = birthInput.value;
  const life = lifeInput.value;
  if (!birthdate) {
    return alert("Please enter date of birth");
  }
  if (!life) {
    return alert("Please enter life span");
  }
  result.style.display = 'block'
  startCount();
};

btn.addEventListener("click", countDown);

const startCount = () => {
  const count = setInterval(() => {
    const birthdateMilSec =
      Math.round(new Date(birthInput.value).valueOf()) / 1000;
    const lifeMilSec = lifeInput.value * 365 * 24 * 60 * 60;
    const lifeSpan = birthdateMilSec + lifeMilSec;
    let today = Math.round(Date.now() / 1000);
    let seconds = lifeSpan - today;
    if(seconds > 0){
        result.innerText = `You have ${seconds} seconds to live!!!`
    }else{
    result.innerText = 'You are dead'
    }
  }, 1000);

  
};
