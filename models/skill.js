const skills = [
  { id: 0456, skill: "Time Management", criticalSkill: true },
  { id: 1243, skill: "Cooking", criticalSkill: false },
  { id: 9832, skill: "Teamwork", criticalSkill: true },
  { id: 7302, skill: "Skateboard Backflip", criticalSkill: false },
  { id: 4710, skill: "Organization", criticalSkill: true },
];

module.exports = { getAll };

function getAll() {
  return skills;
}
