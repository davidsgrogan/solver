function Solution(size, constraints) {
  var that = this;
  this._base = 1;
  this._solution = new Array(size * size);
  this._available = new Array(size * size);
  this._set_object = new Object;

  function Init() {
    var pristine = new Array;
    for (var i = 0; i < size; i++) {
      pristine.push(this.base + i);
    }
    for (var i = 0; i < size*size; i++) {
      this._available[i] = pristine.slice();
    }
    for (var i = 0; i < that._solution.length; i++) {
      that._solution[i] = -Infinity;
    }
  }
  this.isSet = function(i) {
    return i in Object.keys(set_object);
  }
  this.valAt = function(i) {
    return solution[i];
  }
  this.CantBeSatisfied = function() {
    
  }
  this.IsSatisfied = function() {
    
  }
  this.MakeNext = function() {
    
  }
}
