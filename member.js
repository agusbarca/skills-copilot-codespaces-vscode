function skillsMember() {
    let member = {
        name: 'Rahul', 
        age: 30, 
        skills: ['C', 'C++', 'Java', 'Python']
    };
    let skills = member.skills;
    for(let skill of skills) {
        console.log(skill);
    }
}