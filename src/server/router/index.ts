// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { userRouter } from "./routers";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("api.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
