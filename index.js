/**
 * Returns version, name of version and all data from a URL if the version is different from the actual version.
 * @param url url from anywhere (preferably from github API but not necessary) or url from your server with the required response values in JSON format
 * @param versionActual actual version of your project
 * @returns array with [boolean if the version is different, name of version, all data from the URL] or null if the version is the same
 * @example
 * // Example usage:
 * const check = await updaterFromURL('https://api.github.com/repos/USERNAME/NAMEPROYECT/releases/latest', '1.0.0');
 */
const updaterFromURL = async (url, versionActual) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.name != versionActual) {
        const result = [data.name != versionActual, data.name, data]
        return result;
    }
    return null;
}
export default updaterFromURL;