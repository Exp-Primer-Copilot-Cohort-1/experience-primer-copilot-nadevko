function skillsMember() {
    var data = {
        "name": "John",
        "age": 30,
        "skills": {
            "html": 10,
            "css": 8,
            "javascript": [
                "React",
                "Angular",
                "Vue"
            ]
        }
    }
    return data.skills;
}