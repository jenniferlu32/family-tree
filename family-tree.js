class FamilyTree {
  constructor(value) {
    if (typeof value == "string") {
      this.value = value;
    } else {
      throw "error";
    }

    this.children = [];
    this.members = [];
    this.familyLog = [];
  }

  insert(child) {
    const newChild = new FamilyTree(child);
    if (child) {
      this.children.push(newChild);
    }
  }

  familySize() {
    if (this.children.length === 0) return 1;
    return 1 + this.children.length;
  }

  findMember(member) {
    if (this.value === member) {
      return this;
    }
    for (let i = 0; i <= this.children.length - 1; i++) {
      let currentChild = this.children[i];
      if (currentChild.value === member) return currentChild;
    }
  }

  log() {
    let generation = 1;
    let branch = "--";
    if (this.familyLog.length === 0) {
      this.familyLog.push(`${branch.repeat(generation)} ${this.value}`);
    } else {
      generation++;
      this.familyLog.push(`\n${branch.repeat(generation)} ${this.value}`);
    }
    return this.familyLog;
  }
}

module.exports = FamilyTree;
//hello world!
