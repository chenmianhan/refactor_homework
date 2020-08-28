class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    const typeList = [
      'engineer',
      'manager',
      'salesman',
    ];
    if (!typeList.includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString() {
    return `${this._name} (${this._type})`;
  }

}
exports.Employee = Employee

