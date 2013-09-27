angular
  .module("app")
  .factory("Helper", [
  function() {
    return {
      isIn: function(val, array) {
        var inArray = false;
        array.forEach(function(item) {
            if (val == item) {
                inArray = true;
            }
        });
        return inArray;
      },

      unique: function(array) {
        var unique = [];
        array.forEach(function (value) {
            if (unique.indexOf(value) === -1) {
                unique.push(value);
            }
        });
        return unique;
      }
    };
  }]);
