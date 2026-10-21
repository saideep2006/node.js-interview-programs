console.log("Develop a Node.js program to implement a simple task queue using callback \
functions");
function task1(callback) {
    console.log("Task 1 completed");
    callback();
}

function task2(callback) {
    console.log("Task 2 completed");
    callback();
}

function task3() {
    console.log("Task 3 completed");
}

task1(() => {
    task2(() => {
        task3();
    });
});
