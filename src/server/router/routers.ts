import { createRouter } from "./context";
import { z } from "zod";
import {TRPCError} from "@trpc/server";
// @ts-ignore
import bcrypt from "bcryptjs";
export const userRouter = createRouter().mutation("login", {
    input: z.object({
        email: z.string(),
        password: z.string(),
    }),

    async resolve({ ctx , input}) {
        // @ts-ignore

        const user = await ctx.prisma.user.findUniqueOrThrow({
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

        const isMatch = await bcrypt.compare(input.password, user.password);
        if (!isMatch) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Incorrect Credentials'
            })
        }
        return {
            user: user,
            message: "Login Successful"
        };

    }
}).mutation("register", {
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

        }catch (e) {
            console.log(e)
        }
        // @ts-ignore
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(input.password, salt);
            console.log(hashedPassword);

            let user = await ctx.prisma.user.create({
                data: {
                    email: input.email,
                    password: hashedPassword,
                    school: input.school,
                    name: input.name
                }
            })
            return {
                message: "User created",
                user: user
            };
        }catch(e) {
            console.log(e);
            throw new TRPCError({
                code: 'CONFLICT',
                message: 'User already exists'
            })
        }

    }
})