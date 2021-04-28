
const btn = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const current_theme = localStorage.getItem("theme");
if (current_theme == "dark") {
	document.documentElement.classList.toggle("dark-theme");
	btn.innerText = "☀️";
} else if (current_theme == "light") {
	document.documentElement.classList.toggle("light-theme");
	btn.innerText = "🌑";
}

btn.addEventListener("click", function () {
	if (prefersDarkScheme.matches) {
		document.documentElement.classList.toggle("light-theme");
		var theme = document.documentElement.classList.contains("light-theme") ? "light" : "dark";
	} else {
		document.documentElement.classList.toggle("dark-theme");
		var theme = document.documentElement.classList.contains("dark-theme") ? "dark" : "light";
	}
	if (theme == "dark") {
		btn.innerText = "☀️";
	} else {
		btn.innerText = "🌑";
	}
	localStorage.setItem("theme", theme);
});

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
	targetDetail.addEventListener("click", () => {
		details.forEach((detail) => {
			if (detail !== targetDetail) {
				detail.removeAttribute("open");
			}
		});
	});
});