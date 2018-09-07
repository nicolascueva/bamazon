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
});
////// Shows table of database products
function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\n" + "---------------------------------");
        for (var i = 0; i < res.length; i++) {

            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
        start();
    });
};
////sets first inquirer prompt
function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

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
                var chosenItem;

                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === answer.selectedProduct) {
                        chosenItem = res[i].item_id;
                    }
                }
                ////////This is where I ran into bugs. Couldn't get the correct inventory from the database that corresponds with the customer selected id
                if (chosenItem.stock_quantity < parseInt(answer.unitsBought)) {
                    console.log("Insufficient Inventory");
                    displayProducts();
                } else {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: stock_quantity - answer.unitsBought
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Your final Price: " + chosenItem.price * answer.unitsBought);
                            start();
                        }
                    );
                }
            }
            );


    });
};
