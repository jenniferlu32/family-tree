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

  log(root = this, level = "--") {
    let solution = `${level} ${root.value}\n`;
    if (root.children.length) {
      root.children.forEach((child) => {
        solution += this.log(child, level + "--");
      });
    }
    return solution;
    // let generation = 1;
    // let branch = "--";

    // if (this.familyLog.length === 0) {
    //   this.familyLog.push(`${branch.repeat(generation)} ${this.value}`);
    // }
    // if (this.children) {
    //   generation++;
    //   this.familyLog.push(
    //     `\n${branch.repeat(generation)} ${this.children[generation]}`
    //   );
    // }
    // return this.familyLog;
  }
}

module.exports = FamilyTree;
