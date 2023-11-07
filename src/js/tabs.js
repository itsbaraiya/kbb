
// tabs

document.addEventListener('DOMContentLoaded', function () {
	var toggleTabs = document.querySelectorAll('.toggleTab');

	toggleTabs.forEach(function (toggleTab, index) {
		toggleTab.addEventListener('click', function () {
			var tabContent = document.querySelectorAll('.tab-content')[index];

			if (tabContent.style.display === "none" || tabContent.style.display === "") {				
				closeAllTabs();
				
				tabContent.style.display = "block";
				toggleTab.classList.add('active');
			} else {
				tabContent.style.display = "none";
				toggleTab.classList.remove('active');
			}
		});
	});

	function closeAllTabs() {
		var allTabs = document.querySelectorAll('.tab-content');
		var allToggleTabs = document.querySelectorAll('.toggleTab');
		
		allTabs.forEach(function (tab) {
			tab.style.display = "none";
		});
		
		allToggleTabs.forEach(function (toggleTab) {
			toggleTab.classList.remove('active');
		});
	}
});