/**
 * @typedef {Object} TodoProps
 * @property {string} id - The title of the App.
 * @property {string} contents - The contents of the App.
 * @property {boolean} completed - The author of the App.
 * @property {string} category - The category of the App.
 * @property {string=} tags - The tag of the App.
 */

/**
 * Represents a TODO App
 * @constructor
 * @param {string} id - The title of the App.
 * @param {string} contents - The contents of the App.
 * @param {boolean} completed - The author of the App.
 * @param {string} category - The category of the App.
 * @param {string=} tags - The tag of the App.
 */

function TODO(Point) {}

/**
 * @return {TodoProps}
 */
TODO.prototype.CREATE = function ({ id, contents, category, tags }) {};

/**
 * @return {TodoProps}
 */
TODO.prototype.READ = function ({ id }) {};

/**
 * @return {TodoProps}
 */
TODO.prototype.UPDATE = function (TodoProps) {};

/**
 * @return {TodoProps}
 */
TODO.prototype.DELETE = function ({ id, category, tags }) {};
