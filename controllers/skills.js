const Skill = require("../models/skill");
module.exports = { index, show, new: newSkill, create, delete: deleteSkill };

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "Express Skills Index",
  });
}
function show(req, res) {
  //   console.log("This is req.params ", req.params);
  res.render("skills/show", { skill: Skill.getOne(req.params.id) });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "new skill" });
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  res.redirect("/skills");
}
