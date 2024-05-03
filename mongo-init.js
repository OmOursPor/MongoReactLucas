db.getSiblingDB('mydb').auth(
  "root",
  "example"
);
db.createUser({
  user: "user",
  pwd: "userpasswd",
  roles: ["readWrite"],
});