player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase" + word);

    CharAt1 = word.charAt(1);
    console.log(CharAt1);
    length1 = Math.floor(word.length / 2);
    CharAt2 = word.charAt(length1);
    length2 = word.length - 1;
    CharAt3 = word.charAt(length2);
    removeCharAt1 = word.replace(CharAt1, "_");
    removeCharAt2 = removeCharAt1.replace(CharAt2, "_");
    removeCharAt3 = removeCharAt2.replace(CharAt3, "_");

    questionword = "<h4 id ='wordDisplay'> q." + removeCharAt3 + "</h4>";
    inputbox = "<br> Answer: <input type= 'text' id='answerword'>";
    checkbutton = "<br><br> <button class = 'btn btn-info' onclick='check()'>Check</button>";

    row = questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
answerturn = "player2";
questionturn = "player1";


function check() {
    getanswer = document.getElementById("answerword").value;
    answer = getanswer.toLowerCase();
    console.log("answer in lower case -:" + answer);
    if (answer == word) {
        console.log("answer is correct")
        if (answerturn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
if(questionturn == "player1"){
questionturn = "player2";
document.getElementById("player_question").innerHTML = "question turn - " + player2_name;
}
else{
    questionturn = "player1";
    document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
}
if(answerturn == "player1"){
    answerturn = "player2";
    document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;
}
else{
    answerturn = "player1";
    document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name;
}
document.getElementById("output").innerHTML = "";
}

