import { Resolvers, Attack, Pokemon } from "../resolver.types";
import { forwardTo } from "prisma-binding";
import gql from 'graphql-tag';

const pokemon: Resolvers = {
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
				}, info
			)
		},
		editPokemon: forwardTo('db'),
		deletePokemon: forwardTo('db'),
		async attackPokemon(parent, args, ctx, info) {
			let attackerPokemon: Pokemon = await ctx.db.query.pokemon(
				{
					where: args.where
				}
			,
			gql`
				{
					name
					currentMP
					attacks {
						id
						name
						damage
						MP
						type {
							type
							strong
							weak
							resist
						}
					}
				}
			`
			);
			
			// pokemon must have this attack
			const attacks: Attack[] = attackerPokemon.attacks.filter(attack => {
				return attack.name === args.data.attack.name || attack.id === args.data.attack.id
			});
			if (!attacks[0]) {
				return {
					error: 'This pokemon does not have this attack!'
				}
			}

			// pokemon must have enough MP to use this attack (if required)
			const selectedAttack: Attack = attacks[0];
			if (attackerPokemon.currentMP < selectedAttack.MP) {
				return { 
					error: 'Not enough MP!'
				}
			}

			let attackedPokemon: Pokemon = await ctx.db.query.pokemon(
				{
					where: args.data.pokemon
				}
			,
			gql`
				{
					currentHP
					type {
						type
					}
				}
			`
			);

			attackerPokemon = await ctx.db.mutation.updatePokemon(
				{
					data: {
						currentMP: attackerPokemon.currentMP - selectedAttack.MP
					},
					where: args.where
				}
			);
			
			let damage: number;
			let status = `${attackerPokemon.name} used ${selectedAttack.name}, ` 
			if (selectedAttack.type.strong.includes(attackedPokemon.type.type)) {
				damage = 2*selectedAttack.damage;
				status += `dealing ${damage} damage. It's super effective!`
			} else if (selectedAttack.type.weak.includes(attackedPokemon.type.type)) {
				damage = Math.floor(0.5*selectedAttack.damage);
				status +=  `dealing ${damage} damage. It's not very effective!`
			} else if (selectedAttack.type.resist.includes(attackedPokemon.type.type)) {
				damage = 0;
				status +=  `dealing ${damage} damage. It was ineffective!`
			} else {
				damage = selectedAttack.damage;
				status +=  `dealing ${damage} damage!`
			}

			if (damage > 0) {
				attackedPokemon = await ctx.db.mutation.updatePokemon(
					{
						data: {
							currentHP: Math.max(attackedPokemon.currentHP - damage, 0)
						},
						where: args.data.pokemon
					}
				)
				if (attackedPokemon.currentHP === 0) {
					status += ` ${attackedPokemon.name} has fainted!`
				}
			}
			return {
				payload: status
			}
		},
	}
}

export default pokemon;