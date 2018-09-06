var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId + "\n");
    // function to start here
    displayProducts();
    //start();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\n" + "---------------------------------");
        for (var i = 0; i < res.length; i++) {

            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
        //console.log(res);
        //connection.end();
    });
    start();
};

function start() {

    inquirer
        .prompt([
            {
                name: "selectedProduct",
                type: "integer",
                message: "Which product would you like to buy? Please select by ID"
            },
            {
                name: "unitsBought",
                type: "integer",
                message: "How many would you like to buy?"
            }
        ])
        .then(function (answer) {
            console.log(answer);
        });

};