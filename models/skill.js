const skills = [
  { id: 7186, name: "Time Management", critical: true },
  { id: 1243, name: "Cooking", critical: false },
  { id: 9832, name: "Teamwork", critical: true },
  { id: 7302, name: "Skateboard Backflip", critical: false },
  { id: 4710, name: "Organization", critical: true },
];

module.exports = { getAll, getOne };

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => id === skill.id);
}
