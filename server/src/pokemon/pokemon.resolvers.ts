import { Resolvers } from "../resolver.types";
import { forwardTo } from "prisma-binding";
import { Resolver } from "dns";

export const pokemon: Resolvers = {
	Query: {
		getPokemon: forwardTo('db'),
		getAllPokemons: forwardTo('db')
	},
	Mutation: {
		async createPokemon(parent, args, ctx, info) {
			return await ctx.db.mutation.createPokemon(
				{
					data: {
						user: {
							connect: args.data.user
						},
						name: args.data.name,
						type: {
							connect: {
								type: args.data.type
							}
						},
						maxHP: args.data.maxHP,
						currentHP: args.data.maxHP,
						maxMP: args.data.maxMP,
						currentMP: args.data.maxMP,
					}
				}
			)
		}
	}
}