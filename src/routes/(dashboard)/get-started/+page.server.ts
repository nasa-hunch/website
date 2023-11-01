 import { prisma } from '$lib/prismaConnection'
 import { redirect } from '@sveltejs/kit';
 import crypto from "crypto";

export let load = async ({request, cookies}) => {
    //if the user is logged in, we can skip all this stuff
    let session = cookies.get("session");
    if(!session) {
        return;
    }

    console.log(session)

    let sessionCheck = await prisma.session.findFirst({
        where: {
            sessionText: session
        }
    })

    console.log(sessionCheck)

    if(sessionCheck) {
        throw redirect(307, "/dashboard");
    } else {
        return;
    }
}


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
                success: false,
                message: "Please fill all required fields."
            }
        }

        if(pass1 !== pass2) {
            return {
                success: false,
                message: "Passwords do not match!"
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
                success: false,
                message: "Email already in use!"
            }
        }

        //now that that's done, we can create a salt and hash of the password
        let salt = crypto.randomBytes(32).toString("hex");
        let hash = crypto.pbkdf2Sync(pass1, salt, 1000, 100, "sha512").toString("hex");
        
        //now we can make the user!
        let newUserData = {
            firstName,
            lastName,
            email: newEmail,
            hash,
            salt,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            role: null,
            orgid: null,
        }

        console.log(newUserData)

        let newUser = await prisma.user.create({
            data: newUserData
        })

        if(!newUser) {
            return {
                success: false,
                message: "Something went wrong :("
            }
        }

        //creata a new session! 

        let session = crypto.randomBytes(64).toString("hex");
        //add session to db
        let newSession = await prisma.session.create({
            data: {
                sessionText: session,
                userId: newUser.id
            }
        })

        cookies.set("session", session, {
            secure: true,
            sameSite: "strict",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        })

        console.log("User Created")

        throw redirect(307, "/dashboard");

        return {
            success: true,
            message: "user created!"
        }

        
        

    }
}