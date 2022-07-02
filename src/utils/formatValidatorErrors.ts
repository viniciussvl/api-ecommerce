/** The common function of the Format Validator helper
 * receives an array of objects with errors that must have at least msg and param properties.
 *
 * @param {Array.<{msg: String, param: String}>} errors
 * @returns
 */

const common = function (errors: Array<Object>) {
  return errors.map(function (item: any) {
    if (!item.msg) {
      throw new Error("Undefined msg property");
    }

    if (!item.param) {
      throw new Error("Undefined param property");
    }

    return {
      msg: item.msg,
      field: item.param,
    };
  });
};

export default {
  common,
};
