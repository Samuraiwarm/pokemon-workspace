import { Context } from "../types";
import { rule } from "graphql-shield";
import { getUserId, getUser } from "../utils";

// Rules
export const isAuthenticated = rule()(
  async (parent, args, ctx: Context, info) => {
    return await ctx.db.exists.User({ id: getUserId(ctx) });
  }
);
