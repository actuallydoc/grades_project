import { createRouter } from "./context";
import { z } from "zod";
import {TRPCError} from "@trpc/server";


export const userRouter = createRouter().query("register", {
    input: z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        school: z.string(),
    }),
    async resolve({ ctx , input}) {
        // @ts-ignore
        const user = await ctx.prisma.user.create({
            data: {
                name: input.username,
                email: input.email,
                password: input.password,
                school: input.school
            }
        })
        return {
            username: input.username,
            email: input.email,
            password: input.password,
        };
    }
})