function Solution(size, constraints) {
  var that = this;
  this._base = 1;
  this._solution = new Array(size * size);
  this._available = new Array(size * size);
  this._set_object = new Object;
  this._constraints = constraints;
  this._current_index = -1;
  this._current_small_index = -1;
  this._parent = false;
  Init();

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
  function NextUnsetIndex() {
    for (var i = 0; i < size * size; i++) {
      if (this._available[i].length() != 0) {
        return i;
      }
    }
  }
  this.First = function() {
    // Pick an index, remove all but one candidate.
    // Set small index to 0.
    // Return a copy.
    var s = new Solution(that._size, that._constraints);
    that._current_index++;
    s._parent = that;
    s._current_index = this._current_index;
    s._current_small_index = 0;
    var trying_first = s._available[this._current_index][0];
    s._available[this._current_index] = new Array;
    s._available.push(trying_first);
    return s;
  }
  this.MakeNext = function() {
    // This doesn't have to be immutable, it's first that has to be
    return false;
  }
  this.CantBeSatisfied = function() {
    for (var i = 0; i < that._constraints.length(); i++) {
      var c = that._constraints[i];
      if (c.CantBeSatisfied(that._available)) {
        return false;
      }
    }
    return true;
  }
  this.IsSatisfied = function() {
    for (var i = 0; i < that._constraints.length(); i++) {
      var c = that._constraints[i];
      if (!c.IsSatisfied(that._available)) {
        return false;
      }
    }
    return true;
  }
}
