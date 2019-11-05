function changeTab(tab) {
    if (tab == 1) {
        document.getElementById("schoolTab_change").classList.add("nav-tabs-active");
        document.getElementById("vaardighedenTab_change").classList.remove("nav-tabs-active");

        document.getElementById("schoolTab").classList.remove("hidden");
        document.getElementById("vaardighedenTab").classList.add("hidden");


    } else {
        document.getElementById("schoolTab_change").classList.remove("nav-tabs-active");
        document.getElementById("vaardighedenTab_change").classList.add("nav-tabs-active");

        document.getElementById("schoolTab").classList.add("hidden");
        document.getElementById("vaardighedenTab").classList.remove("hidden");
    }
}