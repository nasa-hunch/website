 import { prisma } from '$lib/prismaConnection'
 import crypto from "crypto";

export let actions = {
    register: async ({request, cookies}) => {
        //get all for the form data
        let formData = await request.formData();
        
        let firstName = formData.get("firstName")?.toString();
        let lastName = formData.get("lastName")?.toString();
        let email = formData.get("email")?.toString();
        let pass1 = formData.get("pass1")?.toString();
        let pass2 = formData.get("pass2")?.toString();

        if(!firstName || !lastName || !email || !pass1 || !pass2) {
            return {
                status: "error",
                message: "Please fill all required fields."
            }
        }

        //now we need to verify that this email is in fact one of a kind which is pretty much impossible
        //we are just going to cast out certain groups here, so we will only check for lowercase and if the email already exsists

        let newEmail = email.toLowerCase();

        //check if a user with this email already exsists

        let userEmailCheck = await prisma.user.findFirst({
            where: {
                email: newEmail
            }
        })

        if(userEmailCheck) {
            return {
                status: "erorr",
                message: "Email already in use!"
            }
        }

        //now that that's done, we can create a salt and hash of the password
        let salt = crypto.randomBytes(32).toString();
        let hash = crypto.pbkdf2Sync(pass1, salt, 1000, 100, "sha512").toString();
        
        //now we can make the user!

        let newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                hash,
                salt,
                createdAt: new Date(Date.now()),
                updatedAt: new Date(Date.now()),
                role: 0,
                orgid: 0
            }
        })

        if(!newUser) {
            return {
                status: "error",
                message: "Something went wrong :("
            }
        }

        return {
            status: "success",
            message: "user created!"
        }

        
        

    }
}