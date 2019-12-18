(async () => {
    const db = await require('./database/connection')();
    const app = require('./app')(db);
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`<><><> Server listening on port: ${PORT} <><><>`));
})();

