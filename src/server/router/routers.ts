import { createRouter } from "./context";
import { z } from "zod";
import {TRPCError} from "@trpc/server";
// @ts-ignore
import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);
export const userRouter = createRouter().query("login", {
    input: z.object({
        email: z.string(),
        password: z.string(),
    }),
    async resolve({ ctx , input}) {
        // @ts-ignore
        const user = await ctx.prisma.user.findUnique({
            where: {
                email: input.email,

            }
        })
        if (!user) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'User not found'
            })
        }
        if (user.password !== input.password) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Incorrect password'
            })
        }
        return {
            user: user
        };
    }
}).query("register", {
    input: z.object({
        email: z.string(),
        password: z.string(),
        school: z.string(),
        name: z.string(),
    }),
    resolve: async function ({ctx, input}) {
        let hashedPassword;
        let exists;
        //encrypt the password

        hashedPassword =  bcrypt.hashSync(input.password, salt);
        console.log(hashedPassword);
        try {
            exists = await ctx.prisma.user.findUnique({
                where: {
                    email: input.email
                }
            })
            if (exists) {
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: 'Email already exists'
                })
            }
            let user = await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    password: input.password,
                    school: input.school,
                    name: input.name
                }
            })
        }catch (e) {
            console.log(e)
        }
        // @ts-ignore
        try {
            const user = await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    password: input.password,
                    school: input.school,
                    name: input.name,

                }
            })
            return {
                message: "User created",
                user: user
            };
        }catch {
            throw new TRPCError({
                code: 'CONFLICT',
                message: 'User already exists'
            })
        }

    }
})