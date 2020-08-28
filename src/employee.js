class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  typeList = [
    'engineer',
    'manager',
    'salesman',
  ];

  throwIllegalTypeError(type) {
    return new Error(`Employee cannot be of type ${type}`);
  }

  validateType(type) {
    if (!this.typeList.includes(type)) {
      throw this.throwIllegalTypeError(type);
    }
  }

  toString() {
    return `${this._name} (${this._type})`;
  }

}
exports.Employee = Employee

