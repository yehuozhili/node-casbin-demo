import { newEnforcer } from "casbin";

async function test() {
	const e = await newEnforcer("./model.conf", "./policy.csv");

	const sub = "alice"; // the user that wants to access a resource.
	const obj = "roles_listt"; // the resource that is going to be accessed.
	const act = "read:any"; // the operation that the user performs on the resource.

	if ((await e.enforce(sub, obj, act)) === true) {
		// permit alice to read data1
		console.log(true);
	} else {
		console.log(false);
		// deny the request, show an error
	}

	const roles = await e.getRolesForUser("bob");
	console.log(roles);
}

test();
