db.createUser({
  user: "todolist",
  pwd: "123456",
  roles: [
    {
      role: "readWrite",
      db: "todolist",
    },
  ],
});

db = new Mongo().getDB("todolist");

db.createCollection('users', { capped: false });
db.createCollection('tasks', { capped: false });

// db.test.insert([
//   { "item": 1 },
//   { "item": 2 },
//   { "item": 3 },
//   { "item": 4 },
//   { "item": 5 }
// ]);
