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

// Haal projecten op

if (document.getElementById("projecten")) {
    console.log('[Projecten] Projecten ophalen')

    document.getElementById("projecten").innerHTML = `<h3 class="text-soft">Loading...</h3>`;

    var request = new XMLHttpRequest();
    request.open('GET', 'https://tygoegmond.nl/projecten.json', true);

    request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);

        document.getElementById("projecten").innerHTML = '';

        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            console.log('[Projecten] ' + obj.naam);

            document.getElementById("projecten").innerHTML += `
                <div class="col">
                    <div class="project-image">
                        <img src="${obj.img}">
                        <div class="project-overlay">
                            <div class="project-info">
                                <div class="project-info-content">
                                    <span class="project-title">${obj.naam}</span>
                                    <p class="text-soft">${obj.datum}</p>
                                    <p>${obj.beschrijving}</p>

                                    <div class="project-links">
                                        <a href="${obj.links.github}">
                                            <i class="mdi mdi-github-circle project-icon-link"></i>
                                        </a>

                                        <a href="h${obj.links.website}">
                                            <i class="mdi mdi-link-variant project-icon-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        // Server bereikt maar een andere status code dan verwacht
        console.log('[Projecten] Er is iets fout gegaan!')
        document.getElementById("projecten").innerHTML = `<h3 class="text-soft">Er is iets fout gegaan.</h3>`;
    }
    };

    request.onerror = function() {
        // Connectie error
        console.log('[Projecten] Er is iets fout gegaan!')
        document.getElementById("projecten").innerHTML = `<h3 class="text-soft">Er is iets fout gegaan.</h3>`;
    };

    request.send();
}