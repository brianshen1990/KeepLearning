/* 
2. Permitted Users & Groups

your team is creating a new web application that will be accessible by multiple different users and groups of users.
Each user within the system has a specific permission level, and different resources within the application require different permission levels.
It is your responsibility to create a module that will determine which users and groups can access a resource of a specific permission level.

Sample input 0: 
{
  "requiredPermissionLevel": 2,
  "usersGroups": [{
    "name": "bob",
    "type": "user",
    "permissionLevel": 3
  }, {
    "name": "sarah",
    "type": "user",
    "permissionLevel": 1
  }, {
    "name": "charles",
    "type": "user",
    "permissionLevel": 2
  }, {
    "name": "group 1",
    "type": "group",
    "members": [{
      "name": "bob",
      "type": "user"
    }]
  }, {
    "name": "group 2",
    "type": "group",
    "members": [{
      "name": "bob",
      "type": "user"
    }, {
      "name": "sarah",
      "type": "user"
    }]
  }, {
    "name": "group 3",
    "type": "group",
    "members": [{
      "name": "charles",
      "type": "user"
    }, {
      "name": "group 1",
      "type": "group"
    }]
  }]
}

sample Output 0:
  bob
charles
group 1
group 3

*/ 

/*
 * Complete the 'permittedUsersAndGroups' function below.
 *
 * The function is expected to return an array of strings, where
 * each string is the name of the user or group which has the required
 * permission level.
 */

function permittedUsersAndGroups(usersGroups, requiredPermissionLevel) {
  // all quilified users
  const qualifiedUsers = new Set(usersGroups.filter(item =>
    item.type === "user" && item.permissionLevel >= requiredPermissionLevel).map(item => item.name));

  // all groups
  const groupCahce = {};
  const leftGroupsNames = new Set();
  usersGroups.filter(item => item.type === "group").map(item => {
    groupCahce[item.name] = item;
    leftGroupsNames.add(item.name);
  });

  const qualifiedGroups = new Set();
  const groupCalculated = {};
  // console.log("all groups: ", ...leftGroupsNames );

  while (true) {
    let cur = [...leftGroupsNames].filter(item => {
      const group = groupCahce[item];
      // find groups that don't have an unresolved dependency
      const len = group.members.filter(mem => {
        if (mem.type === "user") {
          return true;
        } else {
          return (mem.name in groupCalculated);
        }
      }).length;
      return group.members.length === len;
    });
    if (cur.length === 0) {
      break;
    }

    cur.map(item => {
      leftGroupsNames.delete(item);
      let cacl = true;
      const group = groupCahce[item];
      for (let i = 0; i < group.members.length; i++) {
        const mem = group.members[i];
        if (mem.type === "user") {
          if (!qualifiedUsers.has(mem.name)) {
            cacl = false;
            break;
          }
        } else {
          if (groupCalculated[mem.name] === false) {
            cacl = false;
            break;
          }
        }
      }
      groupCalculated[item] = cacl;
      if (cacl) {
        qualifiedGroups.add(item);
      }
    });
  }
  return [...qualifiedUsers, ...qualifiedGroups];
}


const test = {
  "requiredPermissionLevel": 2,
  "usersGroups": [{
    "name": "bob",
    "type": "user",
    "permissionLevel": 3
  }, {
    "name": "sarah",
    "type": "user",
    "permissionLevel": 1
  }, {
    "name": "charles",
    "type": "user",
    "permissionLevel": 2
  }, {
    "name": "group 1",
    "type": "group",
    "members": [{
      "name": "bob",
      "type": "user"
    }]
  }, {
    "name": "group 2",
    "type": "group",
    "members": [{
      "name": "bob",
      "type": "user"
    }, {
      "name": "sarah",
      "type": "user"
    }]
  }, {
    "name": "group 3",
    "type": "group",
    "members": [{
      "name": "charles",
      "type": "user"
    }, {
      "name": "group 1",
      "type": "group"
    }]
  }]
};