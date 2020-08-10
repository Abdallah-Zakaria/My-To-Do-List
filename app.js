var taskForm = document.getElementById("taskForm")

if (Object.keys(localStorage).length !== 0) {
    console.log("its not")
    for (var i = 0; i < Object.keys(localStorage).length; i++) {
        var taskListAll = JSON.parse(localStorage.getItem("taskListAll"));
        console.log(taskListAll)
        for (var i = 0; i < taskListAll.length; i++) {

            var resultTable = document.getElementById("resultTable")
            var tr = document.createElement("tr")
            tr.setAttribute("id", taskListAll[i][0])
            resultTable.appendChild(tr)
    
            var td = document.createElement("td")
            td.textContent = taskListAll[i][0]
            tr.appendChild(td)
            var td = document.createElement("td")
            td.textContent = taskListAll[i][1]
            tr.appendChild(td)
            var td = document.createElement("td")
            td.textContent = taskListAll[i][2]
            tr.appendChild(td)
            var delButton = document.createElement("button")
            delButton.textContent = "X"
            delButton.setAttribute("id", taskListAll[i][0])
            delButton.setAttribute("onClick", "reply_click(this.id)")
            tr.appendChild(delButton)
        }
    }
} else {
    var taskListAll = []
}


taskForm.addEventListener('submit', function () {
    event.preventDefault()
    var task = event.target.task.value
    var date = event.target.date.value
    var urgency = event.target.urgency.value // .split(",");



    var taskList = [task, date, urgency]
    taskListAll.push(taskList)


    var taskListStringify = JSON.stringify(taskListAll)
    localStorage.setItem("taskListAll", taskListStringify);



    var resultTable = document.getElementById("resultTable")
    var tr = document.createElement("tr")
    tr.setAttribute("id", task)
    resultTable.appendChild(tr)

    var td = document.createElement("td")
    td.textContent = task
    tr.appendChild(td)
    var td = document.createElement("td")
    td.textContent = date
    tr.appendChild(td)
    var td = document.createElement("td")
    td.textContent = urgency
    tr.appendChild(td)
    var delButton = document.createElement("button")
    delButton.textContent = "X"
    delButton.setAttribute("id", task)
    delButton.setAttribute("onClick", "reply_click(this.id)")
    tr.appendChild(delButton)
})

var reply_click = function (clicked_id) {
    var deletedTask = document.getElementById(clicked_id)
    deletedTask.remove()

}

//  var clearAll = document.getElementById("clearAll")
//  clearAll.addEventListener("onClick" , function(){
//     var resultTable = document.getElementById("resultTable")
//     resultTable.remove()
//  })


