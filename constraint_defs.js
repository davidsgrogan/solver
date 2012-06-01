function ResultsObject() {
  this.all_results = [];
}

// from plane:
// write constraint validator and a test, return error or throw exception on
// invalid set of constraints
// maybe function areErrors that returns false or a string
//
// write Constraint base class, figure out what interfaces solution will need
// maybe code solution first?
// 
// then write plus and solo constraints and tests for them

function SoloConstraint(pTarget, pIndex) {

}

function ArithmeticConstraint(pTarget, pIndices) {
  this._target = pTarget;
  this._indices = pIndices;
  this.IsSatisifed = function(c) {
    var o = Evaluate(c);
    return o.num_set == _indices.length && _target in o.all_results;
  }
}

function PlusConstraint(target, indices) {
  ArithmeticConstraint.call(this, target, indices);
}
PlusConstraint.prototype = new ArithmeticConstraint();

PlusConstraint.prototype.Evaluate = function (c) {
  var num_set = 0;
  var sum = 0;
  for (var i = 0; i < _indices.size(); i++) {
    if (c.isSet(i)) {
      num_set++;
      sum += c.valAt(i);
    }
  }
  var o = new ResultsObject;
  o.sum = sum;
  o.num_set = num_set;
  return o;
}
PlusConstraint.prototype.CouldBeSatisfied = function(c) {
  var o = Evaluate(c);
  if (o.num_set == indices.length) {
    return o.sum == target;
  }
  return o.sum < target;
}
