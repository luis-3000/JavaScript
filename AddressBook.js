/* Address Book */
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) 
	{
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(_lastName) {
    
    var contactsLength = contacts.Length;
    
    for (var i = 0; i < contactsLength; i++)
    {
        if (_lastName === contacts[i].lastName) 
        {
            var person = contacts[i];
            printPerson(person);
        }
    }
}

search("Jones");

/* Add a new contact ot the Address Book. */
var add = function(_firstName, _lastName, _phoneNumber, _email) {
    contacts[contacts.length] = {
        firstName: _firstName,
        lastName: _lastName,
        phoneNumber: _phoneNumber,
        email: _email
    };
}

add("Jose", "Castillo", "josecastillocs@gmail.com", "(512) 123-4567");
list();