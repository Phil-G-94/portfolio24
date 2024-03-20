const getHomePage = (req, res, next) => {

    res.render("index", { pageTitle: "Portfolio", path: "/" });
};

export { getHomePage };