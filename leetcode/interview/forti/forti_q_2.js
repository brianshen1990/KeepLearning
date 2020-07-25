let groups = {
  g1: {
    group: ['g3', 'g5'],
    member: ['bob', 'alice']
  },
  g2: {
    group: ['g4'],
    member: ['john', 'joe', 'joanna']
  },
  g3: {
    group: ['g1'],
    member: ['bob', 'linda']
  },
  g4: {
    group: ['g1'],
    member: ['harry']
  },
  g5: {
    group: [],
    member: ['rose', 'alice']
  }
}

// return all members of the group “grpName”
const getGroupMember = (groups, grpName) => {
  // starts here
  let belongGroups = [ grpName ];
  
  while ( true ) {
    let newGroups = new Set(belongGroups);
    let found = false;

    belongGroups.map( g => {
      groups[g].group.map( item => {
        if ( !newGroups.has(item) ) {
          found = true;
          newGroups.add(item);
        }
      })
    })
    belongGroups = [...newGroups];
    if (!found) { break; }
    
  }
  let ret = new Set();
  belongGroups.map( item => {
    groups[item].member.map( mem => {
      ret.add( mem );
    });
  });
  return [...ret];
}

console.log( getGroupMember(groups, "g1") ); 