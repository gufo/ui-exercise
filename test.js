jQuery($ => {
    $(".toggle-sidebar").on("click", () => {
        $("main").toggleClass("sidebar-hidden");
    });
});