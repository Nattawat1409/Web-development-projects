document.getElementById("check_grade").addEventListener("click", function() {
    let my_score = parseInt(document.getElementById("selected_num").value);
    let grade_cri = null;
    if (my_score >= 80) {
        grade_cri = "A";
        document.getElementById("criteria").innerHTML = "You're PASSED certainly";
        document.getElementById("my_score").innerHTML = `You got Grade ${grade_cri}`;
    } else if (my_score >= 70) {
        grade_cri = "B";
        document.getElementById("criteria").innerHTML = "You're PASSED quite excellent";
        document.getElementById("my_score").innerHTML = `You got Grade ${grade_cri}`;
    } else if (my_score >= 60) {
        grade_cri = "C";
        document.getElementById("criteria").innerHTML = "You're PASSED";
        document.getElementById("my_score").innerHTML = `You got Grade ${grade_cri}`;
    } else if (my_score >= 50) {
        grade_cri = "D";
        document.getElementById("criteria").innerHTML = "You're almost good";
        document.getElementById("my_score").innerHTML = `You got Grade ${grade_cri}`;
    } else {
        grade_cri = "F";
        document.getElementById("criteria").innerHTML = "You aren't PASSED, please try again next time.";
        document.getElementById("my_score").innerHTML = `You got Grade ${grade_cri}`;
    }
});