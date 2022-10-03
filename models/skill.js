const skills = [
  { id: 7186, name: "Time Management" },
  { id: 1243, name: "Cooking" },
  { id: 9832, name: "Teamwork" },
  { id: 7302, name: "Skateboard Backflip" },
  { id: 4710, name: "Organization" },
];

module.exports = { getAll, getOne };

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => id === skill.id);
}
