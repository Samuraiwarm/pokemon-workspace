import { prisma } from "../src/generated/prisma-client";
import * as bcrypt from "bcryptjs";

async function main() {
  await prisma.createUser({
    email: "admin",
    password: await bcrypt.hash("password", 10),
    role: "ADMIN"
  });
  await prisma.createElementalType({
    type: "NORMAL",
    strong: {
      set: []
    },
    weak: {
      set: ["ROCK", "STEEL"]
    },
    resist: {
      set: ["GHOST"]
    }
  })
  await prisma.createElementalType({
    type: "FIGHTING",
    strong: {
      set: ["NORMAL", "ROCK", "STEEL", "ICE", "DARK"]
    },
    weak: {
      set: ["FLYING", "POISON", "BUG", "PSYCHIC", "FAIRY"]
    },
    resist: {
      set: ["GHOST"]
    }
  })
  await prisma.createElementalType({
    type: "FLYING",
    strong: {
      set: ["FIGHTING", "BUG", "GRASS"]
    },
    weak: {
      set: ["ROCK", "STEEL", "ELECTRIC"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "POISON",
    strong: {
      set: ["GRASS", "FAIRY"]
    },
    weak: {
      set: ["POISON", "GROUND", "ROCK", "GHOST", "ELECTRIC"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "GROUND",
    strong: {
      set: ["POISON", "ROCK", "STEEL", "FIRE", "ELECTRIC"]
    },
    weak: {
      set: ["BUG", "GRASS"]
    },
    resist: {
      set: ["FLYING"]
    }
  })
  await prisma.createElementalType({
    type: "ROCK",
    strong: {
      set: ["FLYING", "BUG", "FIRE", "ICE"]
    },
    weak: {
      set: ["FIGHTING", "GROUND", "STEEL"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "BUG",
    strong: {
      set: ["GRASS", "PSYCHIC", "GHOST"]
    },
    weak: {
      set: ["FIGHTING", "FLYING", "POISON", "GHOST", "STEEL", "FIRE", "FAIRY"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "GHOST",
    strong: {
      set: ["GHOST", "PSYCHIC"]
    },
    weak: {
      set: ["DARK"]
    },
    resist: {
      set: ["NORMAL"]
    }
  })
  await prisma.createElementalType({
    type: "STEEL",
    strong: {
      set: ["ROCK", "ICE", "FAIRY"]
    },
    weak: {
      set: ["STEEL", "FIRE", "WATER", "ELECTRIC"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "FIRE",
    strong: {
      set: ["BUG", "STEEL", "GRASS", "ICE"]
    },
    weak: {
      set: ["ROCK", "FIRE", "WATER", "DRAGON"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "WATER",
    strong: {
      set: ["GROUND", "ROCK", "FIRE"]
    },
    weak: {
      set: ["WATER", "GRASS", "DRAGON"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "GRASS",
    strong: {
      set: ["GROUND", "ROCK", "WATER"]
    },
    weak: {
      set: ["FLYING", "POISON", "BUG", "STEEL", "FIRE", "GRASS", "DRAGON"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "ELECTRIC",
    strong: {
      set: ["FLYING", "WATER"]
    },
    weak: {
      set: ["GRASS", "ELECTRIC", "DRAGON"]
    },
    resist: {
      set: ["GROUND"]
    }
  })
  await prisma.createElementalType({
    type: "PSYCHIC",
    strong: {
      set: ["FIGHTING", "POISON"]
    },
    weak: {
      set: ["STEEL", "PSYCHIC"]
    },
    resist: {
      set: ["DRAGON"]
    }
  })
  await prisma.createElementalType({
    type: "ICE",
    strong: {
      set: ["FLYING", "GROUND", "GRASS", "DRAGON"]
    },
    weak: {
      set: ["STEEL", "FIRE", "WATER", "ICE"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "DRAGON",
    strong: {
      set: ["DRAGON"]
    },
    weak: {
      set: ["STEEL"]
    },
    resist: {
      set: ["FAIRY"]
    }
  })
  await prisma.createElementalType({
    type: "DARK",
    strong: {
      set: ["GHOST", "PSYCHIC"]
    },
    weak: {
      set: ["FIGHTING", "DARK", "FAIRY"]
    },
    resist: {
      set: []
    }
  })
  await prisma.createElementalType({
    type: "FAIRY",
    strong: {
      set: ["FIGHTING", "DRAGON", "DARK"]
    },
    weak: {
      set: ["POISON", "STEEL", "FIRE"]
    },
    resist: {
      set: []
    }
  })
}

main().catch(e => console.error(e));
