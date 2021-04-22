db.createUser({
    user: 'user',
    pwd: 'pass',
    roles: [
        {
            role: 'readWrite',
            db: 'restdb',
        },
    ],
});

db = new Mongo().getDB("restdb");

db.createCollection('users', { capped: false });

db.users.insert([
    { "name": "Andreas" },
    { "name": "Bjarne" },
    { "name": "Charlotte" },
    { "name": "Dennis" },
    { "name": "Egil" },
    { "name": "Fatima" }
]);
