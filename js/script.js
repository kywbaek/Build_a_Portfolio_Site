// project links at the bottom of the page are too long for viewport width less than 1200px;
// the following changes the text of the links to appropriate length depends on the width;
var project_links = $(".project-link")
if ((matchMedia) && (project_links)) {
  const mq = window.matchMedia("(max-width: 1200px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
    var project_links = $(".project-link");
    var l = project_links.length;
    if (mq.matches) {
        for (var i = 0; i < l; i++) {
            project_links[i].text = "github link";
        }
    }
    else {
        for (var i = 0; i < l; i++) {
            project_links[i].text = project_links[i].href;
        }
    }
}
