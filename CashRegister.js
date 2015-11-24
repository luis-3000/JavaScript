/*  Quick virtual Cash register. */


function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Creating my staff object with a staff discount of 20%
var jose = new StaffMember("Jose",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        case "bread": this.add(1.29 * quantity); break;
        case "bananas": this.add(0.29 * quantity); break;
        case "protein": this.add(19.99 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
cashRegister.scan('bread',2);
cashRegister.scan('bananas',15);
cashRegister.scan('protein',1);


// Apply your staff discount by passing the 'jose' object to applyStaffDiscount
cashRegister.applyStaffDiscount(jose);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

/* Sample output:
   Your bill is 43.74
*/