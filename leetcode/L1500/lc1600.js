/**

1600. Throne Inheritance

A kingdom consists of a king, his children, his grandchildren, and so on. Every once in a while, someone in the family dies or a child is born.

The kingdom has a well-defined order of inheritance that consists of the king as the first member. Let's define the recursive function Successor(x, curOrder), which given a person x and the inheritance order so far, returns who should be the next person after x in the order of inheritance.

Successor(x, curOrder):
    if x has no children or all of x's children are in curOrder:
        if x is the king return null
        else return Successor(x's parent, curOrder)
    else return x's oldest child who's not in curOrder
For example, assume we have a kingdom that consists of the king, his children Alice and Bob (Alice is older than Bob), and finally Alice's son Jack.

In the beginning, curOrder will be ["king"].
Calling Successor(king, curOrder) will return Alice, so we append to curOrder to get ["king", "Alice"].
Calling Successor(Alice, curOrder) will return Jack, so we append to curOrder to get ["king", "Alice", "Jack"].
Calling Successor(Jack, curOrder) will return Bob, so we append to curOrder to get ["king", "Alice", "Jack", "Bob"].
Calling Successor(Bob, curOrder) will return null. Thus the order of inheritance will be ["king", "Alice", "Jack", "Bob"].
Using the above function, we can always obtain a unique order of inheritance.

Implement the ThroneInheritance class:

ThroneInheritance(string kingName) Initializes an object of the ThroneInheritance class. The name of the king is given as part of the constructor.
void birth(string parentName, string childName) Indicates that parentName gave birth to childName.
void death(string name) Indicates the death of name. The death of the person doesn't affect the Successor function nor the current inheritance order. You can treat it as just marking the person as dead.
string[] getInheritanceOrder() Returns a list representing the current order of inheritance excluding dead people.
 

Example 1:

Input
["ThroneInheritance", "birth", "birth", "birth", "birth", "birth", "birth", "getInheritanceOrder", "death", "getInheritanceOrder"]
[["king"], ["king", "andy"], ["king", "bob"], ["king", "catherine"], ["andy", "matthew"], ["bob", "alex"], ["bob", "asha"], [null], ["bob"], [null]]
Output
[null, null, null, null, null, null, null, ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"], null, ["king", "andy", "matthew", "alex", "asha", "catherine"]]

Explanation
ThroneInheritance t= new ThroneInheritance("king"); // order: king
t.birth("king", "andy"); // order: king > andy
t.birth("king", "bob"); // order: king > andy > bob
t.birth("king", "catherine"); // order: king > andy > bob > catherine
t.birth("andy", "matthew"); // order: king > andy > matthew > bob > catherine
t.birth("bob", "alex"); // order: king > andy > matthew > bob > alex > catherine
t.birth("bob", "asha"); // order: king > andy > matthew > bob > alex > asha > catherine
t.getInheritanceOrder(); // return ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]
t.death("bob"); // order: king > andy > matthew > bob > alex > asha > catherine
t.getInheritanceOrder(); // return ["king", "andy", "matthew", "alex", "asha", "catherine"]
 

Constraints:

1 <= kingName.length, parentName.length, childName.length, name.length <= 15
kingName, parentName, childName, and name consist of lowercase English letters only.
All arguments childName and kingName are distinct.
All name arguments of death will be passed to either the constructor or as childName to birth first.
For each call to birth(parentName, childName), it is guaranteed that parentName is alive.
At most 105 calls will be made to birth and death.
At most 10 calls will be made to getInheritanceOrder.
 */


function Node( name, parent ) {
    this.name = name;
    this.flag = true;
    this.parent = parent;
    this.children = [];
}

/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
    this.cache = {};
    const dummyNode = new Node("Dummy", null);
    dummyNode.flag = false;
    const kingNode = new Node(kingName, dummyNode);
    this.cache[kingName] = kingNode;
    dummyNode.children.push(kingNode);
    this.dummy = dummyNode;
    
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    const pNode = this.cache[parentName];
    const newNode = new Node( childName, pNode ); 
    this.cache[childName] = newNode;
    pNode.children.push( newNode );
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    const node = this.cache[name];
    node.flag = false;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    const ret = [];
    const helper = (node, ret) => {
        if ( !node ) return;
        if ( node.flag ) ret.push( node.name );
        if ( node.children && node.children.length > 0 ) {
            node.children.forEach( item => {
                helper( item, ret );   
            })
        }
    }
    helper( this.dummy, ret );
    return ret;
};

/** 
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */


/**
["ThroneInheritance","birth","birth","birth","birth","birth","birth","getInheritanceOrder","death","getInheritanceOrder"]
[["king"],["king","andy"],["king","bob"],["king","catherine"],["andy","matthew"],["bob","alex"],["bob","asha"],[null],["bob"],[null]]
["ThroneInheritance","getInheritanceOrder","birth","birth","birth","birth","getInheritanceOrder","birth","getInheritanceOrder"]
[["king"],[null],["king","clyde"],["clyde","shannon"],["shannon","scott"],["king","keith"],[null],["clyde","joseph"],[null]]
 */