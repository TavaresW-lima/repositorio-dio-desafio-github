const userMap = new Map();

const ROLE_ADMIN = "ROLE_ADMIN";
const ROLE_USER = "ROLE_USER";

function getAdmins(usersMap) {
    let admins = [];
    for(let user of userMap.keys()) {
        if(userMap.get(user) === ROLE_ADMIN) {
            admins.push(user);
        };
    }
    console.log(admins);
}


function populaMap() {
    userMap.set("Pedro", ROLE_ADMIN);
    userMap.set("Marcos", ROLE_USER);
    userMap.set("Lucas", ROLE_USER);
    userMap.set("Tiago", ROLE_ADMIN);
    userMap.set("Matheus", ROLE_USER);
    userMap.set("João", ROLE_ADMIN);
}

populaMap();
getAdmins(userMap);