document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const textShort = document.querySelector(".text-short");
  const textFull = document.querySelector(".text-long");

  readMoreBtn.addEventListener("click", function () {
    const textFullDisplay = window.getComputedStyle(textFull).display;

    if (textFullDisplay !== "none") {
      // Collapse the text
      textShort.style.maxHeight = "150px"; // Ensure this matches the CSS max-height
      textFull.style.display = "none";
      readMoreBtn.textContent = "Procitajte jos";
    } else {
      // Expand the text
      textShort.style.maxHeight = textShort.scrollHeight + "px";
      textFull.style.display = "block";

      readMoreBtn.textContent = "Umanji";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the read more/less toggle
  function toggleText() {
    const readMoreBtn = this; // Button that was clicked
    const section = readMoreBtn.closest(".description-text-book"); // Closest section
    const textShort = section.querySelector(".text-short");
    const textFull = section.querySelector(".text-long");

    const textFullDisplay = window.getComputedStyle(textFull).display;

    if (textFullDisplay !== "none") {
      // Collapse the text
      textShort.style.maxHeight = "150px"; // Adjust this to match the CSS
      textFull.style.display = "none";
      readMoreBtn.textContent = "Procitajte jos";
    } else {
      // Expand the text
      textShort.style.maxHeight = textShort.scrollHeight + "px";
      textFull.style.display = "block";
      readMoreBtn.textContent = "Procitajte manje";
    }
  }

  // Select all read more buttons and attach the toggle function
  const readMoreBtns = document.querySelectorAll(
    ".description-text-book .read-more-btn"
  );

  readMoreBtns.forEach((btn) => {
    btn.onclick = toggleText;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the read more/less toggle
  function toggleText() {
    const readMoreBtn = this; // Button that was clicked
    const section = readMoreBtn.closest(".charity-text"); // Closest section
    const textShort = section.querySelector(".text-short");
    const textFull = section.querySelector(".text-long");

    const textFullDisplay = window.getComputedStyle(textFull).display;

    if (textFullDisplay !== "none") {
      // Collapse the text
      textShort.style.maxHeight = "150px"; // Adjust this to match the CSS
      textFull.style.display = "none";
      readMoreBtn.textContent = "Procitajte jos";
    } else {
      // Expand the text
      textShort.style.maxHeight = textShort.scrollHeight + "px";
      textFull.style.display = "block";
      readMoreBtn.textContent = "Procitajte manje";
    }
  }

  // Select all read more buttons and attach the toggle function
  const readMoreBtns = document.querySelectorAll(
    ".charity-text .read-more-btn"
  );

  readMoreBtns.forEach((btn) => {
    btn.onclick = toggleText;
  });
});
