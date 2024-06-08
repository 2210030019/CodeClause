dayjs.extend(dayjs_plugin_duration);

function activateCountdown(date) {
  const targetDate = dayjs(date);

  document.getElementById("myCountdown").querySelector(".until__event").textContent = `Counting down until ${ targetDate.format("YYYY-MM-DD HH:mm:ss")}`;

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) {
      document.getElementById("myCountdown").querySelector(".until__event").textContent = "The event has started!";
      return;
    }
    
    document.getElementById("myCountdown").querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
    document.getElementById("myCountdown").querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
    document.getElementById("myCountdown").querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
    document.getElementById("myCountdown").querySelector(".until__numeric--days").textContent = Math.floor(duration.asDays()).toString().padStart(2, "0");
  }, 250);
}

document.querySelector("form")
  .addEventListener('submit', function(event) {
    event.preventDefault();
    activateCountdown(document.getElementById("input__time").value);
  });
