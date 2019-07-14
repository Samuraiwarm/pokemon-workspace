import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { Card, User, UserRole } from "./generated/prisma";
import { Context } from "./types";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  DateTime: any;
};

export type Attack = {
  __typename?: "Attack";
  id: Scalars["ID"];
  pokemon: Pokemon;
  name: Scalars["String"];
  type: ElementalType;
  damage: Scalars["Int"];
  MP: Scalars["Int"];
};

export type AttackInput = {
  name: Scalars["String"];
  type: ElementalTypeEnum;
  damage: Scalars["Int"];
  MP: Scalars["Int"];
};

export type AttackMessage = {
  __typename?: "AttackMessage";
  payload?: Maybe<Scalars["String"]>;
  error?: Maybe<Scalars["String"]>;
};

export enum AttackOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DamageAsc = "damage_ASC",
  DamageDesc = "damage_DESC",
  MpAsc = "MP_ASC",
  MpDesc = "MP_DESC"
}

export type AttackWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  pokemon?: Maybe<PokemonWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<ElementalTypeWhereInput>;
  damage?: Maybe<Scalars["Int"]>;
  damage_not?: Maybe<Scalars["Int"]>;
  damage_in?: Maybe<Array<Scalars["Int"]>>;
  damage_not_in?: Maybe<Array<Scalars["Int"]>>;
  damage_lt?: Maybe<Scalars["Int"]>;
  damage_lte?: Maybe<Scalars["Int"]>;
  damage_gt?: Maybe<Scalars["Int"]>;
  damage_gte?: Maybe<Scalars["Int"]>;
  MP?: Maybe<Scalars["Int"]>;
  MP_not?: Maybe<Scalars["Int"]>;
  MP_in?: Maybe<Array<Scalars["Int"]>>;
  MP_not_in?: Maybe<Array<Scalars["Int"]>>;
  MP_lt?: Maybe<Scalars["Int"]>;
  MP_lte?: Maybe<Scalars["Int"]>;
  MP_gt?: Maybe<Scalars["Int"]>;
  MP_gte?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<AttackWhereInput>>;
  OR?: Maybe<Array<AttackWhereInput>>;
  NOT?: Maybe<Array<AttackWhereInput>>;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"];
  user: User;
};

export type Board = {
  __typename?: "Board";
  id: Scalars["ID"];
  title: Scalars["String"];
  slug: Scalars["String"];
};

export type BoardWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Scalars["String"]>>;
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  slug_lt?: Maybe<Scalars["String"]>;
  slug_lte?: Maybe<Scalars["String"]>;
  slug_gt?: Maybe<Scalars["String"]>;
  slug_gte?: Maybe<Scalars["String"]>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  slug_starts_with?: Maybe<Scalars["String"]>;
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  slug_ends_with?: Maybe<Scalars["String"]>;
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<BoardWhereInput>>;
  OR?: Maybe<Array<BoardWhereInput>>;
  NOT?: Maybe<Array<BoardWhereInput>>;
};

export type Card = {
  __typename?: "Card";
  id: Scalars["ID"];
  creator: User;
  parent?: Maybe<Board>;
  title: Scalars["String"];
  slug: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  public: Scalars["Boolean"];
  archived: Scalars["Boolean"];
  files?: Maybe<Array<File>>;
};

export type CardFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type CardInput = {
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  files?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

export type CardMetaInput = {
  __typename?: "CardMetaInput";
  public?: Maybe<Scalars["Boolean"]>;
  archived?: Maybe<Scalars["Boolean"]>;
};

export type CardWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  creator?: Maybe<UserWhereInput>;
  parent?: Maybe<BoardWhereInput>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_lt?: Maybe<Scalars["String"]>;
  title_lte?: Maybe<Scalars["String"]>;
  title_gt?: Maybe<Scalars["String"]>;
  title_gte?: Maybe<Scalars["String"]>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Scalars["String"]>>;
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  slug_lt?: Maybe<Scalars["String"]>;
  slug_lte?: Maybe<Scalars["String"]>;
  slug_gt?: Maybe<Scalars["String"]>;
  slug_gte?: Maybe<Scalars["String"]>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  slug_starts_with?: Maybe<Scalars["String"]>;
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  slug_ends_with?: Maybe<Scalars["String"]>;
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  content_not?: Maybe<Scalars["String"]>;
  content_in?: Maybe<Array<Scalars["String"]>>;
  content_not_in?: Maybe<Array<Scalars["String"]>>;
  content_lt?: Maybe<Scalars["String"]>;
  content_lte?: Maybe<Scalars["String"]>;
  content_gt?: Maybe<Scalars["String"]>;
  content_gte?: Maybe<Scalars["String"]>;
  content_contains?: Maybe<Scalars["String"]>;
  content_not_contains?: Maybe<Scalars["String"]>;
  content_starts_with?: Maybe<Scalars["String"]>;
  content_not_starts_with?: Maybe<Scalars["String"]>;
  content_ends_with?: Maybe<Scalars["String"]>;
  content_not_ends_with?: Maybe<Scalars["String"]>;
  public?: Maybe<Scalars["Boolean"]>;
  public_not?: Maybe<Scalars["Boolean"]>;
  archived?: Maybe<Scalars["Boolean"]>;
  archived_not?: Maybe<Scalars["Boolean"]>;
  files_every?: Maybe<FileWhereInput>;
  files_some?: Maybe<FileWhereInput>;
  files_none?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<CardWhereInput>>;
  OR?: Maybe<Array<CardWhereInput>>;
  NOT?: Maybe<Array<CardWhereInput>>;
};

export type ElementalType = {
  __typename?: "ElementalType";
  id: Scalars["ID"];
  pokemon?: Maybe<Pokemon>;
  attack?: Maybe<Attack>;
  type: ElementalTypeEnum;
  strong: Array<ElementalTypeEnum>;
  weak: Array<ElementalTypeEnum>;
  resist: Array<ElementalTypeEnum>;
};

export enum ElementalTypeEnum {
  Normal = "NORMAL",
  Fire = "FIRE",
  Water = "WATER",
  Electric = "ELECTRIC",
  Grass = "GRASS",
  Ice = "ICE",
  Fighting = "FIGHTING",
  Poison = "POISON",
  Ground = "GROUND",
  Flying = "FLYING",
  Psychic = "PSYCHIC",
  Bug = "BUG",
  Rock = "ROCK",
  Ghost = "GHOST",
  Dragon = "DRAGON",
  Dark = "DARK",
  Steel = "STEEL",
  Fairy = "FAIRY"
}

export type ElementalTypeWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  pokemon?: Maybe<PokemonWhereInput>;
  attack?: Maybe<AttackWhereInput>;
  type?: Maybe<ElementalTypeEnum>;
  type_not?: Maybe<ElementalTypeEnum>;
  type_in?: Maybe<Array<ElementalTypeEnum>>;
  type_not_in?: Maybe<Array<ElementalTypeEnum>>;
  AND?: Maybe<Array<ElementalTypeWhereInput>>;
  OR?: Maybe<Array<ElementalTypeWhereInput>>;
  NOT?: Maybe<Array<ElementalTypeWhereInput>>;
};

export type File = {
  __typename?: "File";
  filename: Scalars["String"];
  mimetype: Scalars["String"];
  encoding: Scalars["String"];
};

export enum FileOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  PathAsc = "path_ASC",
  PathDesc = "path_DESC",
  FilenameAsc = "filename_ASC",
  FilenameDesc = "filename_DESC",
  MimetypeAsc = "mimetype_ASC",
  MimetypeDesc = "mimetype_DESC",
  EncodingAsc = "encoding_ASC",
  EncodingDesc = "encoding_DESC"
}

export enum FileType {
  Image = "IMAGE",
  Document = "DOCUMENT",
  Other = "OTHER"
}

export type FileWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  card?: Maybe<CardWhereInput>;
  type?: Maybe<FileType>;
  type_not?: Maybe<FileType>;
  type_in?: Maybe<Array<FileType>>;
  type_not_in?: Maybe<Array<FileType>>;
  path?: Maybe<Scalars["String"]>;
  path_not?: Maybe<Scalars["String"]>;
  path_in?: Maybe<Array<Scalars["String"]>>;
  path_not_in?: Maybe<Array<Scalars["String"]>>;
  path_lt?: Maybe<Scalars["String"]>;
  path_lte?: Maybe<Scalars["String"]>;
  path_gt?: Maybe<Scalars["String"]>;
  path_gte?: Maybe<Scalars["String"]>;
  path_contains?: Maybe<Scalars["String"]>;
  path_not_contains?: Maybe<Scalars["String"]>;
  path_starts_with?: Maybe<Scalars["String"]>;
  path_not_starts_with?: Maybe<Scalars["String"]>;
  path_ends_with?: Maybe<Scalars["String"]>;
  path_not_ends_with?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  filename_not?: Maybe<Scalars["String"]>;
  filename_in?: Maybe<Array<Scalars["String"]>>;
  filename_not_in?: Maybe<Array<Scalars["String"]>>;
  filename_lt?: Maybe<Scalars["String"]>;
  filename_lte?: Maybe<Scalars["String"]>;
  filename_gt?: Maybe<Scalars["String"]>;
  filename_gte?: Maybe<Scalars["String"]>;
  filename_contains?: Maybe<Scalars["String"]>;
  filename_not_contains?: Maybe<Scalars["String"]>;
  filename_starts_with?: Maybe<Scalars["String"]>;
  filename_not_starts_with?: Maybe<Scalars["String"]>;
  filename_ends_with?: Maybe<Scalars["String"]>;
  filename_not_ends_with?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  mimetype_not?: Maybe<Scalars["String"]>;
  mimetype_in?: Maybe<Array<Scalars["String"]>>;
  mimetype_not_in?: Maybe<Array<Scalars["String"]>>;
  mimetype_lt?: Maybe<Scalars["String"]>;
  mimetype_lte?: Maybe<Scalars["String"]>;
  mimetype_gt?: Maybe<Scalars["String"]>;
  mimetype_gte?: Maybe<Scalars["String"]>;
  mimetype_contains?: Maybe<Scalars["String"]>;
  mimetype_not_contains?: Maybe<Scalars["String"]>;
  mimetype_starts_with?: Maybe<Scalars["String"]>;
  mimetype_not_starts_with?: Maybe<Scalars["String"]>;
  mimetype_ends_with?: Maybe<Scalars["String"]>;
  mimetype_not_ends_with?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  encoding_not?: Maybe<Scalars["String"]>;
  encoding_in?: Maybe<Array<Scalars["String"]>>;
  encoding_not_in?: Maybe<Array<Scalars["String"]>>;
  encoding_lt?: Maybe<Scalars["String"]>;
  encoding_lte?: Maybe<Scalars["String"]>;
  encoding_gt?: Maybe<Scalars["String"]>;
  encoding_gte?: Maybe<Scalars["String"]>;
  encoding_contains?: Maybe<Scalars["String"]>;
  encoding_not_contains?: Maybe<Scalars["String"]>;
  encoding_starts_with?: Maybe<Scalars["String"]>;
  encoding_not_starts_with?: Maybe<Scalars["String"]>;
  encoding_ends_with?: Maybe<Scalars["String"]>;
  encoding_not_ends_with?: Maybe<Scalars["String"]>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
};

export type HospitalizeMessage = {
  __typename?: "HospitalizeMessage";
  payload?: Maybe<Scalars["String"]>;
  error?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  makeCard: Card;
  editCard: Card;
  createPokemon: Pokemon;
  editPokemon: Pokemon;
  deletePokemon: Pokemon;
  attackPokemon: AttackMessage;
  hospitalizePokemon: HospitalizeMessage;
  login: AuthPayload;
  signup: AuthPayload;
};

export type MutationMakeCardArgs = {
  data?: Maybe<CardInput>;
  board?: Maybe<Scalars["ID"]>;
};

export type MutationEditCardArgs = {
  id: Scalars["ID"];
  data?: Maybe<CardInput>;
};

export type MutationCreatePokemonArgs = {
  data: PokemonInput;
};

export type MutationEditPokemonArgs = {
  data: PokemonInput;
  where: PokemonWhereUniqueInput;
};

export type MutationDeletePokemonArgs = {
  where: PokemonWhereUniqueInput;
};

export type MutationAttackPokemonArgs = {
  data: PokemonAttackInput;
  where: PokemonWhereUniqueInput;
};

export type MutationHospitalizePokemonArgs = {
  where: PokemonWhereUniqueInput;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignupArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Pokemon = {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  user: User;
  name: Scalars["String"];
  type: ElementalType;
  attacks?: Maybe<Array<Attack>>;
  currentHP?: Maybe<Scalars["Int"]>;
  maxHP: Scalars["Int"];
  currentMP?: Maybe<Scalars["Int"]>;
  maxMP: Scalars["Int"];
};

export type PokemonAttacksArgs = {
  where?: Maybe<AttackWhereInput>;
  orderBy?: Maybe<AttackOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type PokemonAttackInput = {
  attack: Scalars["ID"];
};

export type PokemonInput = {
  name: Scalars["String"];
  type: ElementalTypeEnum;
  attacks: Array<Maybe<AttackInput>>;
  maxHP: Scalars["Int"];
  maxMP: Scalars["Int"];
};

export enum PokemonOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  CurrentHpAsc = "currentHP_ASC",
  CurrentHpDesc = "currentHP_DESC",
  MaxHpAsc = "maxHP_ASC",
  MaxHpDesc = "maxHP_DESC",
  CurrentMpAsc = "currentMP_ASC",
  CurrentMpDesc = "currentMP_DESC",
  MaxMpAsc = "maxMP_ASC",
  MaxMpDesc = "maxMP_DESC"
}

export type PokemonWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  user?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<ElementalTypeWhereInput>;
  attacks_every?: Maybe<AttackWhereInput>;
  attacks_some?: Maybe<AttackWhereInput>;
  attacks_none?: Maybe<AttackWhereInput>;
  currentHP?: Maybe<Scalars["Int"]>;
  currentHP_not?: Maybe<Scalars["Int"]>;
  currentHP_in?: Maybe<Array<Scalars["Int"]>>;
  currentHP_not_in?: Maybe<Array<Scalars["Int"]>>;
  currentHP_lt?: Maybe<Scalars["Int"]>;
  currentHP_lte?: Maybe<Scalars["Int"]>;
  currentHP_gt?: Maybe<Scalars["Int"]>;
  currentHP_gte?: Maybe<Scalars["Int"]>;
  maxHP?: Maybe<Scalars["Int"]>;
  maxHP_not?: Maybe<Scalars["Int"]>;
  maxHP_in?: Maybe<Array<Scalars["Int"]>>;
  maxHP_not_in?: Maybe<Array<Scalars["Int"]>>;
  maxHP_lt?: Maybe<Scalars["Int"]>;
  maxHP_lte?: Maybe<Scalars["Int"]>;
  maxHP_gt?: Maybe<Scalars["Int"]>;
  maxHP_gte?: Maybe<Scalars["Int"]>;
  currentMP?: Maybe<Scalars["Int"]>;
  currentMP_not?: Maybe<Scalars["Int"]>;
  currentMP_in?: Maybe<Array<Scalars["Int"]>>;
  currentMP_not_in?: Maybe<Array<Scalars["Int"]>>;
  currentMP_lt?: Maybe<Scalars["Int"]>;
  currentMP_lte?: Maybe<Scalars["Int"]>;
  currentMP_gt?: Maybe<Scalars["Int"]>;
  currentMP_gte?: Maybe<Scalars["Int"]>;
  maxMP?: Maybe<Scalars["Int"]>;
  maxMP_not?: Maybe<Scalars["Int"]>;
  maxMP_in?: Maybe<Array<Scalars["Int"]>>;
  maxMP_not_in?: Maybe<Array<Scalars["Int"]>>;
  maxMP_lt?: Maybe<Scalars["Int"]>;
  maxMP_lte?: Maybe<Scalars["Int"]>;
  maxMP_gt?: Maybe<Scalars["Int"]>;
  maxMP_gte?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<PokemonWhereInput>>;
  OR?: Maybe<Array<PokemonWhereInput>>;
  NOT?: Maybe<Array<PokemonWhereInput>>;
};

export type PokemonWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  getCards: Array<Maybe<Card>>;
  getPokemon?: Maybe<Pokemon>;
  getAllPokemons: Array<Maybe<Pokemon>>;
  hello?: Maybe<Scalars["String"]>;
  currentUser: User;
};

export type QueryGetPokemonArgs = {
  where: PokemonWhereUniqueInput;
};

export type Subscription = {
  __typename?: "Subscription";
  cards: Array<Maybe<Card>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  password: Scalars["String"];
  role: UserRole;
  profileImage?: Maybe<Scalars["String"]>;
  pokemons?: Maybe<Array<Pokemon>>;
};

export type UserPokemonsArgs = {
  where?: Maybe<PokemonWhereInput>;
  orderBy?: Maybe<PokemonOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export enum UserRole {
  Normal = "NORMAL",
  Admin = "ADMIN"
}

export type UserWhereInput = {
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_lt?: Maybe<Scalars["String"]>;
  email_lte?: Maybe<Scalars["String"]>;
  email_gt?: Maybe<Scalars["String"]>;
  email_gte?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  password_not?: Maybe<Scalars["String"]>;
  password_in?: Maybe<Array<Scalars["String"]>>;
  password_not_in?: Maybe<Array<Scalars["String"]>>;
  password_lt?: Maybe<Scalars["String"]>;
  password_lte?: Maybe<Scalars["String"]>;
  password_gt?: Maybe<Scalars["String"]>;
  password_gte?: Maybe<Scalars["String"]>;
  password_contains?: Maybe<Scalars["String"]>;
  password_not_contains?: Maybe<Scalars["String"]>;
  password_starts_with?: Maybe<Scalars["String"]>;
  password_not_starts_with?: Maybe<Scalars["String"]>;
  password_ends_with?: Maybe<Scalars["String"]>;
  password_not_ends_with?: Maybe<Scalars["String"]>;
  role?: Maybe<UserRole>;
  role_not?: Maybe<UserRole>;
  role_in?: Maybe<Array<UserRole>>;
  role_not_in?: Maybe<Array<UserRole>>;
  profileImage?: Maybe<Scalars["String"]>;
  profileImage_not?: Maybe<Scalars["String"]>;
  profileImage_in?: Maybe<Array<Scalars["String"]>>;
  profileImage_not_in?: Maybe<Array<Scalars["String"]>>;
  profileImage_lt?: Maybe<Scalars["String"]>;
  profileImage_lte?: Maybe<Scalars["String"]>;
  profileImage_gt?: Maybe<Scalars["String"]>;
  profileImage_gte?: Maybe<Scalars["String"]>;
  profileImage_contains?: Maybe<Scalars["String"]>;
  profileImage_not_contains?: Maybe<Scalars["String"]>;
  profileImage_starts_with?: Maybe<Scalars["String"]>;
  profileImage_not_starts_with?: Maybe<Scalars["String"]>;
  profileImage_ends_with?: Maybe<Scalars["String"]>;
  profileImage_not_ends_with?: Maybe<Scalars["String"]>;
  pokemons_every?: Maybe<PokemonWhereInput>;
  pokemons_some?: Maybe<PokemonWhereInput>;
  pokemons_none?: Maybe<PokemonWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Card: ResolverTypeWrapper<Card>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UserRole: ResolverTypeWrapper<UserRole>;
  PokemonWhereInput: PokemonWhereInput;
  UserWhereInput: UserWhereInput;
  ElementalTypeWhereInput: ElementalTypeWhereInput;
  AttackWhereInput: AttackWhereInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  ElementalTypeEnum: ElementalTypeEnum;
  PokemonOrderByInput: PokemonOrderByInput;
  Pokemon: ResolverTypeWrapper<
    Omit<Pokemon, "user" | "type" | "attacks"> & {
      user: ResolversTypes["User"];
      type: ResolversTypes["ElementalType"];
      attacks?: Maybe<Array<ResolversTypes["Attack"]>>;
    }
  >;
  ElementalType: ResolverTypeWrapper<
    Omit<ElementalType, "pokemon" | "attack"> & {
      pokemon?: Maybe<ResolversTypes["Pokemon"]>;
      attack?: Maybe<ResolversTypes["Attack"]>;
    }
  >;
  Attack: ResolverTypeWrapper<
    Omit<Attack, "pokemon" | "type"> & {
      pokemon: ResolversTypes["Pokemon"];
      type: ResolversTypes["ElementalType"];
    }
  >;
  AttackOrderByInput: AttackOrderByInput;
  Board: ResolverTypeWrapper<Board>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  FileWhereInput: FileWhereInput;
  CardWhereInput: CardWhereInput;
  BoardWhereInput: BoardWhereInput;
  FileType: FileType;
  FileOrderByInput: FileOrderByInput;
  File: ResolverTypeWrapper<File>;
  PokemonWhereUniqueInput: PokemonWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  CardInput: CardInput;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
  PokemonInput: PokemonInput;
  AttackInput: AttackInput;
  PokemonAttackInput: PokemonAttackInput;
  AttackMessage: ResolverTypeWrapper<AttackMessage>;
  HospitalizeMessage: ResolverTypeWrapper<HospitalizeMessage>;
  AuthPayload: ResolverTypeWrapper<
    Omit<AuthPayload, "user"> & { user: ResolversTypes["User"] }
  >;
  Subscription: ResolverTypeWrapper<{}>;
  CardMetaInput: ResolverTypeWrapper<CardMetaInput>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Card: Card;
  ID: Scalars["ID"];
  User: User;
  String: Scalars["String"];
  UserRole: UserRole;
  PokemonWhereInput: PokemonWhereInput;
  UserWhereInput: UserWhereInput;
  ElementalTypeWhereInput: ElementalTypeWhereInput;
  AttackWhereInput: AttackWhereInput;
  Int: Scalars["Int"];
  ElementalTypeEnum: ElementalTypeEnum;
  PokemonOrderByInput: PokemonOrderByInput;
  Pokemon: Omit<Pokemon, "user" | "type" | "attacks"> & {
    user: ResolversTypes["User"];
    type: ResolversTypes["ElementalType"];
    attacks?: Maybe<Array<ResolversTypes["Attack"]>>;
  };
  ElementalType: Omit<ElementalType, "pokemon" | "attack"> & {
    pokemon?: Maybe<ResolversTypes["Pokemon"]>;
    attack?: Maybe<ResolversTypes["Attack"]>;
  };
  Attack: Omit<Attack, "pokemon" | "type"> & {
    pokemon: ResolversTypes["Pokemon"];
    type: ResolversTypes["ElementalType"];
  };
  AttackOrderByInput: AttackOrderByInput;
  Board: Board;
  Boolean: Scalars["Boolean"];
  FileWhereInput: FileWhereInput;
  CardWhereInput: CardWhereInput;
  BoardWhereInput: BoardWhereInput;
  FileType: FileType;
  FileOrderByInput: FileOrderByInput;
  File: File;
  PokemonWhereUniqueInput: PokemonWhereUniqueInput;
  Mutation: {};
  CardInput: CardInput;
  Upload: Scalars["Upload"];
  PokemonInput: PokemonInput;
  AttackInput: AttackInput;
  PokemonAttackInput: PokemonAttackInput;
  AttackMessage: AttackMessage;
  HospitalizeMessage: HospitalizeMessage;
  AuthPayload: Omit<AuthPayload, "user"> & { user: ResolversTypes["User"] };
  Subscription: {};
  CardMetaInput: CardMetaInput;
  DateTime: Scalars["DateTime"];
};

export type AttackResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Attack"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pokemon?: Resolver<ResolversTypes["Pokemon"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ElementalType"], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  MP?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type AttackMessageResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["AttackMessage"]
> = {
  payload?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type AuthPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type BoardResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Board"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type CardResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Card"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes["Board"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  public?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  archived?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  files?: Resolver<
    Maybe<Array<ResolversTypes["File"]>>,
    ParentType,
    ContextType,
    CardFilesArgs
  >;
};

export type CardMetaInputResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["CardMetaInput"]
> = {
  public?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  archived?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type ElementalTypeResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["ElementalType"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pokemon?: Resolver<Maybe<ResolversTypes["Pokemon"]>, ParentType, ContextType>;
  attack?: Resolver<Maybe<ResolversTypes["Attack"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ElementalTypeEnum"], ParentType, ContextType>;
  strong?: Resolver<
    Array<ResolversTypes["ElementalTypeEnum"]>,
    ParentType,
    ContextType
  >;
  weak?: Resolver<
    Array<ResolversTypes["ElementalTypeEnum"]>,
    ParentType,
    ContextType
  >;
  resist?: Resolver<
    Array<ResolversTypes["ElementalTypeEnum"]>,
    ParentType,
    ContextType
  >;
};

export type FileResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["File"]
> = {
  filename?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type HospitalizeMessageResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["HospitalizeMessage"]
> = {
  payload?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  makeCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    MutationMakeCardArgs
  >;
  editCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    MutationEditCardArgs
  >;
  createPokemon?: Resolver<
    ResolversTypes["Pokemon"],
    ParentType,
    ContextType,
    MutationCreatePokemonArgs
  >;
  editPokemon?: Resolver<
    ResolversTypes["Pokemon"],
    ParentType,
    ContextType,
    MutationEditPokemonArgs
  >;
  deletePokemon?: Resolver<
    ResolversTypes["Pokemon"],
    ParentType,
    ContextType,
    MutationDeletePokemonArgs
  >;
  attackPokemon?: Resolver<
    ResolversTypes["AttackMessage"],
    ParentType,
    ContextType,
    MutationAttackPokemonArgs
  >;
  hospitalizePokemon?: Resolver<
    ResolversTypes["HospitalizeMessage"],
    ParentType,
    ContextType,
    MutationHospitalizePokemonArgs
  >;
  login?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationLoginArgs
  >;
  signup?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationSignupArgs
  >;
};

export type PokemonResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Pokemon"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ElementalType"], ParentType, ContextType>;
  attacks?: Resolver<
    Maybe<Array<ResolversTypes["Attack"]>>,
    ParentType,
    ContextType,
    PokemonAttacksArgs
  >;
  currentHP?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  maxHP?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  currentMP?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  maxMP?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Query"]
> = {
  getCards?: Resolver<
    Array<Maybe<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
  getPokemon?: Resolver<
    Maybe<ResolversTypes["Pokemon"]>,
    ParentType,
    ContextType,
    QueryGetPokemonArgs
  >;
  getAllPokemons?: Resolver<
    Array<Maybe<ResolversTypes["Pokemon"]>>,
    ParentType,
    ContextType
  >;
  hello?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  currentUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["Subscription"]
> = {
  cards?: SubscriptionResolver<
    Array<Maybe<ResolversTypes["Card"]>>,
    ParentType,
    ContextType
  >;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["UserRole"], ParentType, ContextType>;
  profileImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  pokemons?: Resolver<
    Maybe<Array<ResolversTypes["Pokemon"]>>,
    ParentType,
    ContextType,
    UserPokemonsArgs
  >;
};

export type Resolvers<ContextType = Context> = {
  Attack?: AttackResolvers<ContextType>;
  AttackMessage?: AttackMessageResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Board?: BoardResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  CardMetaInput?: CardMetaInputResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  ElementalType?: ElementalTypeResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  HospitalizeMessage?: HospitalizeMessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
