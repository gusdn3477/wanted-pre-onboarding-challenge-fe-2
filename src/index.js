/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}

/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() {}

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
  throw new Error("must be implemented by subclass!");
};

/**
 * Cool, refreshing milk.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * Check whether milk is solid at room temperature.
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function () {
  return false;
};

/**
 * Represents a TODO App
 * @constructor
 * @param {string} id - The title of the App.
 * @param {string} contents - The contents of the App.
 * @param {boolean} completed - The author of the App.
 * @param {string} category - The category of the App.
 * @param {string=} tags - The tag of the App.
 */

function TODO(id, contents, completed, category, tags) {}

TODO.prototype.CREATE = function ({ id, contents, category, tags }) {};

TODO.prototype.READ = function ({ id }) {};

TODO.prototype.UPDATE = function ({
  id,
  contents,
  completed,
  category,
  tags,
}) {};

TODO.prototype.DELETE = function ({ id, category, tags }) {};
