
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model ProductDescription
 * 
 */
export type ProductDescription = $Result.DefaultSelection<Prisma.$ProductDescriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const genderStatus: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type genderStatus = (typeof genderStatus)[keyof typeof genderStatus]


export const maritalStatus: {
  single: 'single',
  married: 'married',
  divorced: 'divorced',
  other: 'other'
};

export type maritalStatus = (typeof maritalStatus)[keyof typeof maritalStatus]


export const Role: {
  user: 'user',
  admin: 'admin',
  staff: 'staff'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type genderStatus = $Enums.genderStatus

export const genderStatus: typeof $Enums.genderStatus

export type maritalStatus = $Enums.maritalStatus

export const maritalStatus: typeof $Enums.maritalStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDescription`: Exposes CRUD operations for the **ProductDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDescriptions
    * const productDescriptions = await prisma.productDescription.findMany()
    * ```
    */
  get productDescription(): Prisma.ProductDescriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    ProductCategory: 'ProductCategory',
    ProductDescription: 'ProductDescription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "productCategory" | "productDescription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductDescription: {
        payload: Prisma.$ProductDescriptionPayload<ExtArgs>
        fields: Prisma.ProductDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          findFirst: {
            args: Prisma.ProductDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          findMany: {
            args: Prisma.ProductDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          create: {
            args: Prisma.ProductDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          createMany: {
            args: Prisma.ProductDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          delete: {
            args: Prisma.ProductDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          update: {
            args: Prisma.ProductDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.ProductDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductDescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>[]
          }
          upsert: {
            args: Prisma.ProductDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDescriptionPayload>
          }
          aggregate: {
            args: Prisma.ProductDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDescription>
          }
          groupBy: {
            args: Prisma.ProductDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDescriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    productCategory?: ProductCategoryOmit
    productDescription?: ProductDescriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    uploadedProducts: number
    updatedProducts: number
    approvedProducts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedProducts?: boolean | UserCountOutputTypeCountUploadedProductsArgs
    updatedProducts?: boolean | UserCountOutputTypeCountUpdatedProductsArgs
    approvedProducts?: boolean | UserCountOutputTypeCountApprovedProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    descriptions: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    descriptions?: boolean | ProductCountOutputTypeCountDescriptionsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDescriptionWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    products: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    phone_number: string | null
    gender: $Enums.genderStatus | null
    marital_status: $Enums.maritalStatus | null
    role: $Enums.Role | null
    active: boolean | null
    password: string | null
    last_login: Date | null
    date_joined: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    phone_number: string | null
    gender: $Enums.genderStatus | null
    marital_status: $Enums.maritalStatus | null
    role: $Enums.Role | null
    active: boolean | null
    password: string | null
    last_login: Date | null
    date_joined: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    username: number
    phone_number: number
    gender: number
    marital_status: number
    role: number
    active: number
    password: number
    last_login: number
    date_joined: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    phone_number?: true
    gender?: true
    marital_status?: true
    role?: true
    active?: true
    password?: true
    last_login?: true
    date_joined?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    phone_number?: true
    gender?: true
    marital_status?: true
    role?: true
    active?: true
    password?: true
    last_login?: true
    date_joined?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    username?: true
    phone_number?: true
    gender?: true
    marital_status?: true
    role?: true
    active?: true
    password?: true
    last_login?: true
    date_joined?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    first_name: string | null
    last_name: string | null
    username: string | null
    phone_number: string | null
    gender: $Enums.genderStatus | null
    marital_status: $Enums.maritalStatus | null
    role: $Enums.Role
    active: boolean
    password: string
    last_login: Date | null
    date_joined: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    phone_number?: boolean
    gender?: boolean
    marital_status?: boolean
    role?: boolean
    active?: boolean
    password?: boolean
    last_login?: boolean
    date_joined?: boolean
    uploadedProducts?: boolean | User$uploadedProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    approvedProducts?: boolean | User$approvedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    phone_number?: boolean
    gender?: boolean
    marital_status?: boolean
    role?: boolean
    active?: boolean
    password?: boolean
    last_login?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    phone_number?: boolean
    gender?: boolean
    marital_status?: boolean
    role?: boolean
    active?: boolean
    password?: boolean
    last_login?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    phone_number?: boolean
    gender?: boolean
    marital_status?: boolean
    role?: boolean
    active?: boolean
    password?: boolean
    last_login?: boolean
    date_joined?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "username" | "phone_number" | "gender" | "marital_status" | "role" | "active" | "password" | "last_login" | "date_joined", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedProducts?: boolean | User$uploadedProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    approvedProducts?: boolean | User$approvedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      uploadedProducts: Prisma.$ProductPayload<ExtArgs>[]
      updatedProducts: Prisma.$ProductPayload<ExtArgs>[]
      approvedProducts: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      first_name: string | null
      last_name: string | null
      username: string | null
      phone_number: string | null
      gender: $Enums.genderStatus | null
      marital_status: $Enums.maritalStatus | null
      role: $Enums.Role
      active: boolean
      password: string
      last_login: Date | null
      date_joined: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedProducts<T extends User$uploadedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedProducts<T extends User$updatedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedProducts<T extends User$approvedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'genderStatus'>
    readonly marital_status: FieldRef<"User", 'maritalStatus'>
    readonly role: FieldRef<"User", 'Role'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly date_joined: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.uploadedProducts
   */
  export type User$uploadedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.updatedProducts
   */
  export type User$updatedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.approvedProducts
   */
  export type User$approvedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
    newPrice: Decimal | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
    newPrice: Decimal | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    newPrice: Decimal | null
    description: string | null
    quantity: number | null
    draft: boolean | null
    approved: boolean | null
    categoryId: string | null
    uploadedById: string | null
    updatedById: string | null
    approvedById: string | null
    photo: string | null
    last_updated: Date | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    newPrice: Decimal | null
    description: string | null
    quantity: number | null
    draft: boolean | null
    approved: boolean | null
    categoryId: string | null
    uploadedById: string | null
    updatedById: string | null
    approvedById: string | null
    photo: string | null
    last_updated: Date | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    newPrice: number
    description: number
    quantity: number
    draft: number
    approved: number
    categoryId: number
    uploadedById: number
    updatedById: number
    approvedById: number
    photo: number
    last_updated: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    newPrice?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    newPrice?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    newPrice?: true
    description?: true
    quantity?: true
    draft?: true
    approved?: true
    categoryId?: true
    uploadedById?: true
    updatedById?: true
    approvedById?: true
    photo?: true
    last_updated?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    newPrice?: true
    description?: true
    quantity?: true
    draft?: true
    approved?: true
    categoryId?: true
    uploadedById?: true
    updatedById?: true
    approvedById?: true
    photo?: true
    last_updated?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    newPrice?: true
    description?: true
    quantity?: true
    draft?: true
    approved?: true
    categoryId?: true
    uploadedById?: true
    updatedById?: true
    approvedById?: true
    photo?: true
    last_updated?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string | null
    price: Decimal
    newPrice: Decimal
    description: string | null
    quantity: number | null
    draft: boolean
    approved: boolean
    categoryId: string | null
    uploadedById: string | null
    updatedById: string | null
    approvedById: string | null
    photo: string | null
    last_updated: Date | null
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    newPrice?: boolean
    description?: boolean
    quantity?: boolean
    draft?: boolean
    approved?: boolean
    categoryId?: boolean
    uploadedById?: boolean
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
    descriptions?: boolean | Product$descriptionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    newPrice?: boolean
    description?: boolean
    quantity?: boolean
    draft?: boolean
    approved?: boolean
    categoryId?: boolean
    uploadedById?: boolean
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    newPrice?: boolean
    description?: boolean
    quantity?: boolean
    draft?: boolean
    approved?: boolean
    categoryId?: boolean
    uploadedById?: boolean
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    newPrice?: boolean
    description?: boolean
    quantity?: boolean
    draft?: boolean
    approved?: boolean
    categoryId?: boolean
    uploadedById?: boolean
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "newPrice" | "description" | "quantity" | "draft" | "approved" | "categoryId" | "uploadedById" | "updatedById" | "approvedById" | "photo" | "last_updated" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
    descriptions?: boolean | Product$descriptionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    uploadedBy?: boolean | Product$uploadedByArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$ProductCategoryPayload<ExtArgs> | null
      uploadedBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
      descriptions: Prisma.$ProductDescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      price: Prisma.Decimal
      newPrice: Prisma.Decimal
      description: string | null
      quantity: number | null
      draft: boolean
      approved: boolean
      categoryId: string | null
      uploadedById: string | null
      updatedById: string | null
      approvedById: string | null
      photo: string | null
      last_updated: Date | null
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends Product$uploadedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$uploadedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Product$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Product$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    descriptions<T extends Product$descriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$descriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly newPrice: FieldRef<"Product", 'Decimal'>
    readonly description: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly draft: FieldRef<"Product", 'Boolean'>
    readonly approved: FieldRef<"Product", 'Boolean'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly uploadedById: FieldRef<"Product", 'String'>
    readonly updatedById: FieldRef<"Product", 'String'>
    readonly approvedById: FieldRef<"Product", 'String'>
    readonly photo: FieldRef<"Product", 'String'>
    readonly last_updated: FieldRef<"Product", 'DateTime'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    where?: ProductCategoryWhereInput
  }

  /**
   * Product.uploadedBy
   */
  export type Product$uploadedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.updatedBy
   */
  export type Product$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.approvedBy
   */
  export type Product$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Product.descriptions
   */
  export type Product$descriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    where?: ProductDescriptionWhereInput
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    cursor?: ProductDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    category: string | null
    addedBy: string | null
    createdAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    category: string | null
    addedBy: string | null
    createdAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    category: number
    addedBy: number
    createdAt: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    category?: true
    addedBy?: true
    createdAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    category?: true
    addedBy?: true
    createdAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    category?: true
    addedBy?: true
    createdAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: string
    category: string | null
    addedBy: string | null
    createdAt: Date
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    addedBy?: boolean
    createdAt?: boolean
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    addedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    addedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    category?: boolean
    addedBy?: boolean
    createdAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "addedBy" | "createdAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string | null
      addedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'String'>
    readonly category: FieldRef<"ProductCategory", 'String'>
    readonly addedBy: FieldRef<"ProductCategory", 'String'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data?: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory createManyAndReturn
   */
  export type ProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory updateManyAndReturn
   */
  export type ProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.products
   */
  export type ProductCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductDescription
   */

  export type AggregateProductDescription = {
    _count: ProductDescriptionCountAggregateOutputType | null
    _min: ProductDescriptionMinAggregateOutputType | null
    _max: ProductDescriptionMaxAggregateOutputType | null
  }

  export type ProductDescriptionMinAggregateOutputType = {
    id: string | null
    photo: string | null
    productId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProductDescriptionMaxAggregateOutputType = {
    id: string | null
    photo: string | null
    productId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProductDescriptionCountAggregateOutputType = {
    id: number
    photo: number
    productId: number
    description: number
    createdAt: number
    _all: number
  }


  export type ProductDescriptionMinAggregateInputType = {
    id?: true
    photo?: true
    productId?: true
    description?: true
    createdAt?: true
  }

  export type ProductDescriptionMaxAggregateInputType = {
    id?: true
    photo?: true
    productId?: true
    description?: true
    createdAt?: true
  }

  export type ProductDescriptionCountAggregateInputType = {
    id?: true
    photo?: true
    productId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ProductDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDescription to aggregate.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDescriptions
    **/
    _count?: true | ProductDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDescriptionMaxAggregateInputType
  }

  export type GetProductDescriptionAggregateType<T extends ProductDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDescription[P]>
      : GetScalarType<T[P], AggregateProductDescription[P]>
  }




  export type ProductDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDescriptionWhereInput
    orderBy?: ProductDescriptionOrderByWithAggregationInput | ProductDescriptionOrderByWithAggregationInput[]
    by: ProductDescriptionScalarFieldEnum[] | ProductDescriptionScalarFieldEnum
    having?: ProductDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDescriptionCountAggregateInputType | true
    _min?: ProductDescriptionMinAggregateInputType
    _max?: ProductDescriptionMaxAggregateInputType
  }

  export type ProductDescriptionGroupByOutputType = {
    id: string
    photo: string | null
    productId: string | null
    description: string | null
    createdAt: Date
    _count: ProductDescriptionCountAggregateOutputType | null
    _min: ProductDescriptionMinAggregateOutputType | null
    _max: ProductDescriptionMaxAggregateOutputType | null
  }

  type GetProductDescriptionGroupByPayload<T extends ProductDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type ProductDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectScalar = {
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProductDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo" | "productId" | "description" | "createdAt", ExtArgs["result"]["productDescription"]>
  export type ProductDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDescription$productArgs<ExtArgs>
  }

  export type $ProductDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDescription"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photo: string | null
      productId: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["productDescription"]>
    composites: {}
  }

  type ProductDescriptionGetPayload<S extends boolean | null | undefined | ProductDescriptionDefaultArgs> = $Result.GetResult<Prisma.$ProductDescriptionPayload, S>

  type ProductDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDescriptionCountAggregateInputType | true
    }

  export interface ProductDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDescription'], meta: { name: 'ProductDescription' } }
    /**
     * Find zero or one ProductDescription that matches the filter.
     * @param {ProductDescriptionFindUniqueArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDescriptionFindUniqueArgs>(args: SelectSubset<T, ProductDescriptionFindUniqueArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDescriptionFindUniqueOrThrowArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindFirstArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDescriptionFindFirstArgs>(args?: SelectSubset<T, ProductDescriptionFindFirstArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindFirstOrThrowArgs} args - Arguments to find a ProductDescription
     * @example
     * // Get one ProductDescription
     * const productDescription = await prisma.productDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDescriptions
     * const productDescriptions = await prisma.productDescription.findMany()
     * 
     * // Get first 10 ProductDescriptions
     * const productDescriptions = await prisma.productDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductDescriptionFindManyArgs>(args?: SelectSubset<T, ProductDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductDescription.
     * @param {ProductDescriptionCreateArgs} args - Arguments to create a ProductDescription.
     * @example
     * // Create one ProductDescription
     * const ProductDescription = await prisma.productDescription.create({
     *   data: {
     *     // ... data to create a ProductDescription
     *   }
     * })
     * 
     */
    create<T extends ProductDescriptionCreateArgs>(args: SelectSubset<T, ProductDescriptionCreateArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductDescriptions.
     * @param {ProductDescriptionCreateManyArgs} args - Arguments to create many ProductDescriptions.
     * @example
     * // Create many ProductDescriptions
     * const productDescription = await prisma.productDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDescriptionCreateManyArgs>(args?: SelectSubset<T, ProductDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductDescriptions and returns the data saved in the database.
     * @param {ProductDescriptionCreateManyAndReturnArgs} args - Arguments to create many ProductDescriptions.
     * @example
     * // Create many ProductDescriptions
     * const productDescription = await prisma.productDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductDescriptions and only return the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductDescription.
     * @param {ProductDescriptionDeleteArgs} args - Arguments to delete one ProductDescription.
     * @example
     * // Delete one ProductDescription
     * const ProductDescription = await prisma.productDescription.delete({
     *   where: {
     *     // ... filter to delete one ProductDescription
     *   }
     * })
     * 
     */
    delete<T extends ProductDescriptionDeleteArgs>(args: SelectSubset<T, ProductDescriptionDeleteArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductDescription.
     * @param {ProductDescriptionUpdateArgs} args - Arguments to update one ProductDescription.
     * @example
     * // Update one ProductDescription
     * const productDescription = await prisma.productDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDescriptionUpdateArgs>(args: SelectSubset<T, ProductDescriptionUpdateArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductDescriptions.
     * @param {ProductDescriptionDeleteManyArgs} args - Arguments to filter ProductDescriptions to delete.
     * @example
     * // Delete a few ProductDescriptions
     * const { count } = await prisma.productDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDescriptionDeleteManyArgs>(args?: SelectSubset<T, ProductDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDescriptions
     * const productDescription = await prisma.productDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDescriptionUpdateManyArgs>(args: SelectSubset<T, ProductDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDescriptions and returns the data updated in the database.
     * @param {ProductDescriptionUpdateManyAndReturnArgs} args - Arguments to update many ProductDescriptions.
     * @example
     * // Update many ProductDescriptions
     * const productDescription = await prisma.productDescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductDescriptions and only return the `id`
     * const productDescriptionWithIdOnly = await prisma.productDescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductDescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductDescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductDescription.
     * @param {ProductDescriptionUpsertArgs} args - Arguments to update or create a ProductDescription.
     * @example
     * // Update or create a ProductDescription
     * const productDescription = await prisma.productDescription.upsert({
     *   create: {
     *     // ... data to create a ProductDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDescription we want to update
     *   }
     * })
     */
    upsert<T extends ProductDescriptionUpsertArgs>(args: SelectSubset<T, ProductDescriptionUpsertArgs<ExtArgs>>): Prisma__ProductDescriptionClient<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionCountArgs} args - Arguments to filter ProductDescriptions to count.
     * @example
     * // Count the number of ProductDescriptions
     * const count = await prisma.productDescription.count({
     *   where: {
     *     // ... the filter for the ProductDescriptions we want to count
     *   }
     * })
    **/
    count<T extends ProductDescriptionCountArgs>(
      args?: Subset<T, ProductDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductDescriptionAggregateArgs>(args: Subset<T, ProductDescriptionAggregateArgs>): Prisma.PrismaPromise<GetProductDescriptionAggregateType<T>>

    /**
     * Group by ProductDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: ProductDescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDescription model
   */
  readonly fields: ProductDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDescription$productArgs<ExtArgs> = {}>(args?: Subset<T, ProductDescription$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductDescription model
   */
  interface ProductDescriptionFieldRefs {
    readonly id: FieldRef<"ProductDescription", 'String'>
    readonly photo: FieldRef<"ProductDescription", 'String'>
    readonly productId: FieldRef<"ProductDescription", 'String'>
    readonly description: FieldRef<"ProductDescription", 'String'>
    readonly createdAt: FieldRef<"ProductDescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductDescription findUnique
   */
  export type ProductDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription findUniqueOrThrow
   */
  export type ProductDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription findFirst
   */
  export type ProductDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDescriptions.
     */
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription findFirstOrThrow
   */
  export type ProductDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescription to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDescriptions.
     */
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription findMany
   */
  export type ProductDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ProductDescriptions to fetch.
     */
    where?: ProductDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDescriptions to fetch.
     */
    orderBy?: ProductDescriptionOrderByWithRelationInput | ProductDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDescriptions.
     */
    cursor?: ProductDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDescriptions.
     */
    distinct?: ProductDescriptionScalarFieldEnum | ProductDescriptionScalarFieldEnum[]
  }

  /**
   * ProductDescription create
   */
  export type ProductDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDescription.
     */
    data?: XOR<ProductDescriptionCreateInput, ProductDescriptionUncheckedCreateInput>
  }

  /**
   * ProductDescription createMany
   */
  export type ProductDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDescriptions.
     */
    data: ProductDescriptionCreateManyInput | ProductDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductDescription createManyAndReturn
   */
  export type ProductDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProductDescriptions.
     */
    data: ProductDescriptionCreateManyInput | ProductDescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDescription update
   */
  export type ProductDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDescription.
     */
    data: XOR<ProductDescriptionUpdateInput, ProductDescriptionUncheckedUpdateInput>
    /**
     * Choose, which ProductDescription to update.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription updateMany
   */
  export type ProductDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDescriptions.
     */
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDescriptions to update
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to update.
     */
    limit?: number
  }

  /**
   * ProductDescription updateManyAndReturn
   */
  export type ProductDescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * The data used to update ProductDescriptions.
     */
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ProductDescriptions to update
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDescription upsert
   */
  export type ProductDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDescription to update in case it exists.
     */
    where: ProductDescriptionWhereUniqueInput
    /**
     * In case the ProductDescription found by the `where` argument doesn't exist, create a new ProductDescription with this data.
     */
    create: XOR<ProductDescriptionCreateInput, ProductDescriptionUncheckedCreateInput>
    /**
     * In case the ProductDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDescriptionUpdateInput, ProductDescriptionUncheckedUpdateInput>
  }

  /**
   * ProductDescription delete
   */
  export type ProductDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
    /**
     * Filter which ProductDescription to delete.
     */
    where: ProductDescriptionWhereUniqueInput
  }

  /**
   * ProductDescription deleteMany
   */
  export type ProductDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDescriptions to delete
     */
    where?: ProductDescriptionWhereInput
    /**
     * Limit how many ProductDescriptions to delete.
     */
    limit?: number
  }

  /**
   * ProductDescription.product
   */
  export type ProductDescription$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * ProductDescription without action
   */
  export type ProductDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDescription
     */
    select?: ProductDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDescription
     */
    omit?: ProductDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDescriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    phone_number: 'phone_number',
    gender: 'gender',
    marital_status: 'marital_status',
    role: 'role',
    active: 'active',
    password: 'password',
    last_login: 'last_login',
    date_joined: 'date_joined'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    newPrice: 'newPrice',
    description: 'description',
    quantity: 'quantity',
    draft: 'draft',
    approved: 'approved',
    categoryId: 'categoryId',
    uploadedById: 'uploadedById',
    updatedById: 'updatedById',
    approvedById: 'approvedById',
    photo: 'photo',
    last_updated: 'last_updated',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    addedBy: 'addedBy',
    createdAt: 'createdAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductDescriptionScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    productId: 'productId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProductDescriptionScalarFieldEnum = (typeof ProductDescriptionScalarFieldEnum)[keyof typeof ProductDescriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'genderStatus'
   */
  export type EnumgenderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'genderStatus'>
    


  /**
   * Reference to a field of type 'genderStatus[]'
   */
  export type ListEnumgenderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'genderStatus[]'>
    


  /**
   * Reference to a field of type 'maritalStatus'
   */
  export type EnummaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'maritalStatus'>
    


  /**
   * Reference to a field of type 'maritalStatus[]'
   */
  export type ListEnummaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'maritalStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    gender?: EnumgenderStatusNullableFilter<"User"> | $Enums.genderStatus | null
    marital_status?: EnummaritalStatusNullableFilter<"User"> | $Enums.maritalStatus | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    date_joined?: DateTimeFilter<"User"> | Date | string
    uploadedProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    approvedProducts?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    marital_status?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    uploadedProducts?: ProductOrderByRelationAggregateInput
    updatedProducts?: ProductOrderByRelationAggregateInput
    approvedProducts?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    gender?: EnumgenderStatusNullableFilter<"User"> | $Enums.genderStatus | null
    marital_status?: EnummaritalStatusNullableFilter<"User"> | $Enums.maritalStatus | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    date_joined?: DateTimeFilter<"User"> | Date | string
    uploadedProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
    approvedProducts?: ProductListRelationFilter
  }, "id" | "email" | "username" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    marital_status?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumgenderStatusNullableWithAggregatesFilter<"User"> | $Enums.genderStatus | null
    marital_status?: EnummaritalStatusNullableWithAggregatesFilter<"User"> | $Enums.maritalStatus | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    date_joined?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntNullableFilter<"Product"> | number | null
    draft?: BoolFilter<"Product"> | boolean
    approved?: BoolFilter<"Product"> | boolean
    categoryId?: StringNullableFilter<"Product"> | string | null
    uploadedById?: StringNullableFilter<"Product"> | string | null
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ProductCategoryNullableScalarRelationFilter, ProductCategoryWhereInput> | null
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    descriptions?: ProductDescriptionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    newPrice?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    category?: ProductCategoryOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    descriptions?: ProductDescriptionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntNullableFilter<"Product"> | number | null
    draft?: BoolFilter<"Product"> | boolean
    approved?: BoolFilter<"Product"> | boolean
    categoryId?: StringNullableFilter<"Product"> | string | null
    uploadedById?: StringNullableFilter<"Product"> | string | null
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ProductCategoryNullableScalarRelationFilter, ProductCategoryWhereInput> | null
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    descriptions?: ProductDescriptionListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    newPrice?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"Product"> | number | null
    draft?: BoolWithAggregatesFilter<"Product"> | boolean
    approved?: BoolWithAggregatesFilter<"Product"> | boolean
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    uploadedById?: StringNullableWithAggregatesFilter<"Product"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"Product"> | string | null
    approvedById?: StringNullableWithAggregatesFilter<"Product"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Product"> | string | null
    last_updated?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: StringFilter<"ProductCategory"> | string
    category?: StringNullableFilter<"ProductCategory"> | string | null
    addedBy?: StringNullableFilter<"ProductCategory"> | string | null
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    category?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    addedBy?: StringNullableFilter<"ProductCategory"> | string | null
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "category">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategory"> | string
    category?: StringNullableWithAggregatesFilter<"ProductCategory"> | string | null
    addedBy?: StringNullableWithAggregatesFilter<"ProductCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
  }

  export type ProductDescriptionWhereInput = {
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    id?: StringFilter<"ProductDescription"> | string
    photo?: StringNullableFilter<"ProductDescription"> | string | null
    productId?: StringNullableFilter<"ProductDescription"> | string | null
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type ProductDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    photo?: StringNullableFilter<"ProductDescription"> | string | null
    productId?: StringNullableFilter<"ProductDescription"> | string | null
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type ProductDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductDescriptionCountOrderByAggregateInput
    _max?: ProductDescriptionMaxOrderByAggregateInput
    _min?: ProductDescriptionMinOrderByAggregateInput
  }

  export type ProductDescriptionScalarWhereWithAggregatesInput = {
    AND?: ProductDescriptionScalarWhereWithAggregatesInput | ProductDescriptionScalarWhereWithAggregatesInput[]
    OR?: ProductDescriptionScalarWhereWithAggregatesInput[]
    NOT?: ProductDescriptionScalarWhereWithAggregatesInput | ProductDescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductDescription"> | string
    photo?: StringNullableWithAggregatesFilter<"ProductDescription"> | string | null
    productId?: StringNullableWithAggregatesFilter<"ProductDescription"> | string | null
    description?: StringNullableWithAggregatesFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductDescription"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductCreateNestedManyWithoutUploadedByInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductUncheckedCreateNestedManyWithoutUploadedByInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUpdateManyWithoutUploadedByNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUncheckedUpdateManyWithoutUploadedByNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category?: ProductCategoryCreateNestedOneWithoutProductsInput
    uploadedBy?: UserCreateNestedOneWithoutUploadedProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneWithoutProductsNestedInput
    uploadedBy?: UserUpdateOneWithoutUploadedProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateInput = {
    id?: string
    category?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    category?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: string
    category?: string | null
    addedBy?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionCreateInput = {
    id?: string
    photo?: string | null
    description?: string | null
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutDescriptionsInput
  }

  export type ProductDescriptionUncheckedCreateInput = {
    id?: string
    photo?: string | null
    productId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutDescriptionsNestedInput
  }

  export type ProductDescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionCreateManyInput = {
    id?: string
    photo?: string | null
    productId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumgenderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderStatusNullableFilter<$PrismaModel> | $Enums.genderStatus | null
  }

  export type EnummaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.maritalStatus | EnummaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummaritalStatusNullableFilter<$PrismaModel> | $Enums.maritalStatus | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    gender?: SortOrder
    marital_status?: SortOrder
    role?: SortOrder
    active?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    date_joined?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    gender?: SortOrder
    marital_status?: SortOrder
    role?: SortOrder
    active?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    date_joined?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    phone_number?: SortOrder
    gender?: SortOrder
    marital_status?: SortOrder
    role?: SortOrder
    active?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    date_joined?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumgenderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.genderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderStatusNullableFilter<$PrismaModel>
  }

  export type EnummaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.maritalStatus | EnummaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.maritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnummaritalStatusNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCategoryNullableScalarRelationFilter = {
    is?: ProductCategoryWhereInput | null
    isNot?: ProductCategoryWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProductDescriptionListRelationFilter = {
    every?: ProductDescriptionWhereInput
    some?: ProductDescriptionWhereInput
    none?: ProductDescriptionWhereInput
  }

  export type ProductDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    newPrice?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrder
    uploadedById?: SortOrder
    updatedById?: SortOrder
    approvedById?: SortOrder
    photo?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    newPrice?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    newPrice?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrder
    uploadedById?: SortOrder
    updatedById?: SortOrder
    approvedById?: SortOrder
    photo?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    newPrice?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrder
    uploadedById?: SortOrder
    updatedById?: SortOrder
    approvedById?: SortOrder
    photo?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    newPrice?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ProductDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput> | ProductCreateWithoutUploadedByInput[] | ProductUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUploadedByInput | ProductCreateOrConnectWithoutUploadedByInput[]
    createMany?: ProductCreateManyUploadedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput> | ProductCreateWithoutApprovedByInput[] | ProductUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutApprovedByInput | ProductCreateOrConnectWithoutApprovedByInput[]
    createMany?: ProductCreateManyApprovedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput> | ProductCreateWithoutUploadedByInput[] | ProductUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUploadedByInput | ProductCreateOrConnectWithoutUploadedByInput[]
    createMany?: ProductCreateManyUploadedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput> | ProductCreateWithoutApprovedByInput[] | ProductUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutApprovedByInput | ProductCreateOrConnectWithoutApprovedByInput[]
    createMany?: ProductCreateManyApprovedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumgenderStatusFieldUpdateOperationsInput = {
    set?: $Enums.genderStatus | null
  }

  export type NullableEnummaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.maritalStatus | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput> | ProductCreateWithoutUploadedByInput[] | ProductUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUploadedByInput | ProductCreateOrConnectWithoutUploadedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUploadedByInput | ProductUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ProductCreateManyUploadedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUploadedByInput | ProductUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUploadedByInput | ProductUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByInput | ProductUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByInput | ProductUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByInput | ProductUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput> | ProductCreateWithoutApprovedByInput[] | ProductUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutApprovedByInput | ProductCreateOrConnectWithoutApprovedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutApprovedByInput | ProductUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ProductCreateManyApprovedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutApprovedByInput | ProductUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutApprovedByInput | ProductUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput> | ProductCreateWithoutUploadedByInput[] | ProductUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUploadedByInput | ProductCreateOrConnectWithoutUploadedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUploadedByInput | ProductUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: ProductCreateManyUploadedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUploadedByInput | ProductUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUploadedByInput | ProductUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput> | ProductCreateWithoutUpdatedByInput[] | ProductUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatedByInput | ProductCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUpdatedByInput | ProductUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ProductCreateManyUpdatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUpdatedByInput | ProductUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUpdatedByInput | ProductUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput> | ProductCreateWithoutApprovedByInput[] | ProductUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutApprovedByInput | ProductCreateOrConnectWithoutApprovedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutApprovedByInput | ProductUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ProductCreateManyApprovedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutApprovedByInput | ProductUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutApprovedByInput | ProductUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUploadedProductsInput = {
    create?: XOR<UserCreateWithoutUploadedProductsInput, UserUncheckedCreateWithoutUploadedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductsInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedProductsInput = {
    create?: XOR<UserCreateWithoutApprovedProductsInput, UserUncheckedCreateWithoutApprovedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductDescriptionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
  }

  export type ProductDescriptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    disconnect?: ProductCategoryWhereInput | boolean
    delete?: ProductCategoryWhereInput | boolean
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductsInput, ProductCategoryUpdateWithoutProductsInput>, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateOneWithoutUploadedProductsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedProductsInput, UserUncheckedCreateWithoutUploadedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedProductsInput
    upsert?: UserUpsertWithoutUploadedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedProductsInput, UserUpdateWithoutUploadedProductsInput>, UserUncheckedUpdateWithoutUploadedProductsInput>
  }

  export type UserUpdateOneWithoutUpdatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    upsert?: UserUpsertWithoutUpdatedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedProductsInput, UserUpdateWithoutUpdatedProductsInput>, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type UserUpdateOneWithoutApprovedProductsNestedInput = {
    create?: XOR<UserCreateWithoutApprovedProductsInput, UserUncheckedCreateWithoutApprovedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedProductsInput
    upsert?: UserUpsertWithoutApprovedProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedProductsInput, UserUpdateWithoutApprovedProductsInput>, UserUncheckedUpdateWithoutApprovedProductsInput>
  }

  export type ProductDescriptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductDescriptionUpsertWithWhereUniqueWithoutProductInput | ProductDescriptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    set?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    disconnect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    delete?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    update?: ProductDescriptionUpdateWithWhereUniqueWithoutProductInput | ProductDescriptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDescriptionUpdateManyWithWhereWithoutProductInput | ProductDescriptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
  }

  export type ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    upsert?: ProductDescriptionUpsertWithWhereUniqueWithoutProductInput | ProductDescriptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    set?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    disconnect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    delete?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
    update?: ProductDescriptionUpdateWithWhereUniqueWithoutProductInput | ProductDescriptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDescriptionUpdateManyWithWhereWithoutProductInput | ProductDescriptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutDescriptionsInput = {
    create?: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDescriptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutDescriptionsNestedInput = {
    create?: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDescriptionsInput
    upsert?: ProductUpsertWithoutDescriptionsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDescriptionsInput, ProductUpdateWithoutDescriptionsInput>, ProductUncheckedUpdateWithoutDescriptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumgenderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderStatusNullableFilter<$PrismaModel> | $Enums.genderStatus | null
  }

  export type NestedEnummaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.maritalStatus | EnummaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummaritalStatusNullableFilter<$PrismaModel> | $Enums.maritalStatus | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumgenderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.genderStatus | EnumgenderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.genderStatus[] | ListEnumgenderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.genderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnummaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.maritalStatus | EnummaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.maritalStatus[] | ListEnummaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnummaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.maritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnummaritalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCreateWithoutUploadedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category?: ProductCategoryCreateNestedOneWithoutProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUploadedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUploadedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput>
  }

  export type ProductCreateManyUploadedByInputEnvelope = {
    data: ProductCreateManyUploadedByInput | ProductCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category?: ProductCategoryCreateNestedOneWithoutProductsInput
    uploadedBy?: UserCreateNestedOneWithoutUploadedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductCreateManyUpdatedByInputEnvelope = {
    data: ProductCreateManyUpdatedByInput | ProductCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutApprovedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category?: ProductCategoryCreateNestedOneWithoutProductsInput
    uploadedBy?: UserCreateNestedOneWithoutUploadedProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutApprovedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    updatedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutApprovedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput>
  }

  export type ProductCreateManyApprovedByInputEnvelope = {
    data: ProductCreateManyApprovedByInput | ProductCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUploadedByInput, ProductUncheckedUpdateWithoutUploadedByInput>
    create: XOR<ProductCreateWithoutUploadedByInput, ProductUncheckedCreateWithoutUploadedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUploadedByInput, ProductUncheckedUpdateWithoutUploadedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutUploadedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntNullableFilter<"Product"> | number | null
    draft?: BoolFilter<"Product"> | boolean
    approved?: BoolFilter<"Product"> | boolean
    categoryId?: StringNullableFilter<"Product"> | string | null
    uploadedById?: StringNullableFilter<"Product"> | string | null
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUpdatedByInput, ProductUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ProductCreateWithoutUpdatedByInput, ProductUncheckedCreateWithoutUpdatedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUpdatedByInput, ProductUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutApprovedByInput, ProductUncheckedUpdateWithoutApprovedByInput>
    create: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutApprovedByInput, ProductUncheckedUpdateWithoutApprovedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutApprovedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    id?: string
    category?: string | null
    addedBy?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    category?: string | null
    addedBy?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type UserCreateWithoutUploadedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutUploadedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutUploadedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedProductsInput, UserUncheckedCreateWithoutUploadedProductsInput>
  }

  export type UserCreateWithoutUpdatedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductCreateNestedManyWithoutUploadedByInput
    approvedProducts?: ProductCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductUncheckedCreateNestedManyWithoutUploadedByInput
    approvedProducts?: ProductUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type UserCreateWithoutApprovedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductCreateNestedManyWithoutUploadedByInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutApprovedProductsInput = {
    id?: string
    email?: string | null
    first_name?: string | null
    last_name?: string | null
    username?: string | null
    phone_number?: string | null
    gender?: $Enums.genderStatus | null
    marital_status?: $Enums.maritalStatus | null
    role?: $Enums.Role
    active?: boolean
    password: string
    last_login?: Date | string | null
    date_joined?: Date | string
    uploadedProducts?: ProductUncheckedCreateNestedManyWithoutUploadedByInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutApprovedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedProductsInput, UserUncheckedCreateWithoutApprovedProductsInput>
  }

  export type ProductDescriptionCreateWithoutProductInput = {
    id?: string
    photo?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUncheckedCreateWithoutProductInput = {
    id?: string
    photo?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionCreateOrConnectWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    create: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput>
  }

  export type ProductDescriptionCreateManyProductInputEnvelope = {
    data: ProductDescriptionCreateManyProductInput | ProductDescriptionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCategoryUpsertWithoutProductsInput = {
    update: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUploadedProductsInput = {
    update: XOR<UserUpdateWithoutUploadedProductsInput, UserUncheckedUpdateWithoutUploadedProductsInput>
    create: XOR<UserCreateWithoutUploadedProductsInput, UserUncheckedCreateWithoutUploadedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedProductsInput, UserUncheckedUpdateWithoutUploadedProductsInput>
  }

  export type UserUpdateWithoutUploadedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUpsertWithoutUpdatedProductsInput = {
    update: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type UserUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUpdateManyWithoutUploadedByNestedInput
    approvedProducts?: ProductUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUncheckedUpdateManyWithoutUploadedByNestedInput
    approvedProducts?: ProductUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUpsertWithoutApprovedProductsInput = {
    update: XOR<UserUpdateWithoutApprovedProductsInput, UserUncheckedUpdateWithoutApprovedProductsInput>
    create: XOR<UserCreateWithoutApprovedProductsInput, UserUncheckedCreateWithoutApprovedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedProductsInput, UserUncheckedUpdateWithoutApprovedProductsInput>
  }

  export type UserUpdateWithoutApprovedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUpdateManyWithoutUploadedByNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumgenderStatusFieldUpdateOperationsInput | $Enums.genderStatus | null
    marital_status?: NullableEnummaritalStatusFieldUpdateOperationsInput | $Enums.maritalStatus | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedProducts?: ProductUncheckedUpdateManyWithoutUploadedByNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type ProductDescriptionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    update: XOR<ProductDescriptionUpdateWithoutProductInput, ProductDescriptionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput>
  }

  export type ProductDescriptionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductDescriptionWhereUniqueInput
    data: XOR<ProductDescriptionUpdateWithoutProductInput, ProductDescriptionUncheckedUpdateWithoutProductInput>
  }

  export type ProductDescriptionUpdateManyWithWhereWithoutProductInput = {
    where: ProductDescriptionScalarWhereInput
    data: XOR<ProductDescriptionUpdateManyMutationInput, ProductDescriptionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductDescriptionScalarWhereInput = {
    AND?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
    OR?: ProductDescriptionScalarWhereInput[]
    NOT?: ProductDescriptionScalarWhereInput | ProductDescriptionScalarWhereInput[]
    id?: StringFilter<"ProductDescription"> | string
    photo?: StringNullableFilter<"ProductDescription"> | string | null
    productId?: StringNullableFilter<"ProductDescription"> | string | null
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutUploadedProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    uploadedById?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutDescriptionsInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category?: ProductCategoryCreateNestedOneWithoutProductsInput
    uploadedBy?: UserCreateNestedOneWithoutUploadedProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
  }

  export type ProductUncheckedCreateWithoutDescriptionsInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutDescriptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
  }

  export type ProductUpsertWithoutDescriptionsInput = {
    update: XOR<ProductUpdateWithoutDescriptionsInput, ProductUncheckedUpdateWithoutDescriptionsInput>
    create: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDescriptionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDescriptionsInput, ProductUncheckedUpdateWithoutDescriptionsInput>
  }

  export type ProductUpdateWithoutDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneWithoutProductsNestedInput
    uploadedBy?: UserUpdateOneWithoutUploadedProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyUploadedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductCreateManyUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductCreateManyApprovedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    categoryId?: string | null
    uploadedById?: string | null
    updatedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneWithoutProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneWithoutProductsNestedInput
    uploadedBy?: UserUpdateOneWithoutUploadedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneWithoutProductsNestedInput
    uploadedBy?: UserUpdateOneWithoutUploadedProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionCreateManyProductInput = {
    id?: string
    photo?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice: Decimal | DecimalJsLike | number | string
    description?: string | null
    quantity?: number | null
    draft?: boolean
    approved?: boolean
    uploadedById?: string | null
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutUploadedProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: BoolFieldUpdateOperationsInput | boolean
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}