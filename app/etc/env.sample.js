module.exports = {
    API_URL: 'http://localhost:8000',
    API_VERSION: 'v1',

    // Set developer mode. package - load core from node_modules, local - load core from app/core
    // This param is optional
    DEVELOPER_MODE: 'local',

    // When compiling for production, set LOCAL_BUILD to true in order to load local core instead of node_modules
    // False by default
    // Requires production mode
    // This param is optional
    LOCAL_BUILD: true
};