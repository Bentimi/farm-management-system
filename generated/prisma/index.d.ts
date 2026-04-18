
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
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ProductInvoice
 * 
 */
export type ProductInvoice = $Result.DefaultSelection<Prisma.$ProductInvoicePayload>

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


export const productStatus: {
  approved: 'approved',
  pending: 'pending',
  rejected: 'rejected',
  review: 'review'
};

export type productStatus = (typeof productStatus)[keyof typeof productStatus]


export const orderStatus: {
  pending: 'pending',
  processing: 'processing',
  successful: 'successful',
  failed: 'failed'
};

export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus]

}

export type genderStatus = $Enums.genderStatus

export const genderStatus: typeof $Enums.genderStatus

export type maritalStatus = $Enums.maritalStatus

export const maritalStatus: typeof $Enums.maritalStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type productStatus = $Enums.productStatus

export const productStatus: typeof $Enums.productStatus

export type orderStatus = $Enums.orderStatus

export const orderStatus: typeof $Enums.orderStatus

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

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productInvoice`: Exposes CRUD operations for the **ProductInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductInvoices
    * const productInvoices = await prisma.productInvoice.findMany()
    * ```
    */
  get productInvoice(): Prisma.ProductInvoiceDelegate<ExtArgs, ClientOptions>;
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
    ProductDescription: 'ProductDescription',
    Cart: 'Cart',
    Order: 'Order',
    ProductInvoice: 'ProductInvoice'
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
      modelProps: "user" | "product" | "productCategory" | "productDescription" | "cart" | "order" | "productInvoice"
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
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ProductInvoice: {
        payload: Prisma.$ProductInvoicePayload<ExtArgs>
        fields: Prisma.ProductInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          findFirst: {
            args: Prisma.ProductInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          findMany: {
            args: Prisma.ProductInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>[]
          }
          create: {
            args: Prisma.ProductInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          createMany: {
            args: Prisma.ProductInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>[]
          }
          delete: {
            args: Prisma.ProductInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          update: {
            args: Prisma.ProductInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          deleteMany: {
            args: Prisma.ProductInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>[]
          }
          upsert: {
            args: Prisma.ProductInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductInvoicePayload>
          }
          aggregate: {
            args: Prisma.ProductInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductInvoice>
          }
          groupBy: {
            args: Prisma.ProductInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProductInvoiceCountAggregateOutputType> | number
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
    cart?: CartOmit
    order?: OrderOmit
    productInvoice?: ProductInvoiceOmit
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
    updatedProducts: number
    approvedProducts: number
    cartItems: number
    orders: number
    invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedProducts?: boolean | UserCountOutputTypeCountUpdatedProductsArgs
    approvedProducts?: boolean | UserCountOutputTypeCountApprovedProductsArgs
    cartItems?: boolean | UserCountOutputTypeCountCartItemsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInvoiceWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    descriptions: number
    carts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    descriptions?: boolean | ProductCountOutputTypeCountDescriptionsArgs
    carts?: boolean | ProductCountOutputTypeCountCartsArgs
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
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
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
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    invoices: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CartCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInvoiceWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    carts: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | OrderCountOutputTypeCountCartsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
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
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    approvedProducts?: boolean | User$approvedProductsArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
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
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    approvedProducts?: boolean | User$approvedProductsArgs<ExtArgs>
    cartItems?: boolean | User$cartItemsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      updatedProducts: Prisma.$ProductPayload<ExtArgs>[]
      approvedProducts: Prisma.$ProductPayload<ExtArgs>[]
      cartItems: Prisma.$CartPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      invoices: Prisma.$ProductInvoicePayload<ExtArgs>[]
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
    updatedProducts<T extends User$updatedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedProducts<T extends User$approvedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends User$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.cartItems
   */
  export type User$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    where?: ProductInvoiceWhereInput
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    cursor?: ProductInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInvoiceScalarFieldEnum | ProductInvoiceScalarFieldEnum[]
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
    approved: $Enums.productStatus | null
    categoryId: string | null
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
    approved: $Enums.productStatus | null
    categoryId: string | null
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
    newPrice: Decimal | null
    description: string | null
    quantity: number
    draft: boolean
    approved: $Enums.productStatus
    categoryId: string
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
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
    descriptions?: boolean | Product$descriptionsArgs<ExtArgs>
    carts?: boolean | Product$cartsArgs<ExtArgs>
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
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
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
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
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
    updatedById?: boolean
    approvedById?: boolean
    photo?: boolean
    last_updated?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "newPrice" | "description" | "quantity" | "draft" | "approved" | "categoryId" | "updatedById" | "approvedById" | "photo" | "last_updated" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
    descriptions?: boolean | Product$descriptionsArgs<ExtArgs>
    carts?: boolean | Product$cartsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    updatedBy?: boolean | Product$updatedByArgs<ExtArgs>
    approvedBy?: boolean | Product$approvedByArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$ProductCategoryPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
      descriptions: Prisma.$ProductDescriptionPayload<ExtArgs>[]
      carts: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      price: Prisma.Decimal
      newPrice: Prisma.Decimal | null
      description: string | null
      quantity: number
      draft: boolean
      approved: $Enums.productStatus
      categoryId: string
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
    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Product$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Product$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    descriptions<T extends Product$descriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$descriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carts<T extends Product$cartsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly approved: FieldRef<"Product", 'productStatus'>
    readonly categoryId: FieldRef<"Product", 'String'>
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
   * Product.carts
   */
  export type Product$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
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
    createdAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    category: number
    createdAt: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    category?: true
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
    createdAt?: boolean
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "createdAt", ExtArgs["result"]["productCategory"]>
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
    productId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProductDescriptionMaxAggregateOutputType = {
    id: string | null
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
    productId?: true
    description?: true
    createdAt?: true
  }

  export type ProductDescriptionMaxAggregateInputType = {
    id?: true
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
    photo: string[]
    productId: string
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
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDescription"]>

  export type ProductDescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    productId?: boolean
    description?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
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
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductDescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDescription"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      photo: string[]
      productId: string
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
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly photo: FieldRef<"ProductDescription", 'String[]'>
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
    data: XOR<ProductDescriptionCreateInput, ProductDescriptionUncheckedCreateInput>
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
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    total_price: Decimal | null
  }

  export type CartSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    total_price: Decimal | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    checked: boolean | null
    orderId: string | null
    quantity: number | null
    price: Decimal | null
    total_price: Decimal | null
    createdAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    checked: boolean | null
    orderId: string | null
    quantity: number | null
    price: Decimal | null
    total_price: Decimal | null
    createdAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    checked: number
    orderId: number
    quantity: number
    price: number
    total_price: number
    createdAt: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    quantity?: true
    price?: true
    total_price?: true
  }

  export type CartSumAggregateInputType = {
    quantity?: true
    price?: true
    total_price?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    checked?: true
    orderId?: true
    quantity?: true
    price?: true
    total_price?: true
    createdAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    checked?: true
    orderId?: true
    quantity?: true
    price?: true
    total_price?: true
    createdAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    checked?: true
    orderId?: true
    quantity?: true
    price?: true
    total_price?: true
    createdAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    productId: string
    userId: string
    checked: boolean | null
    orderId: string | null
    quantity: number
    price: Decimal
    total_price: Decimal
    createdAt: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    checked?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    total_price?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
    invoices?: boolean | Cart$invoicesArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    checked?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    total_price?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    checked?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    total_price?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    checked?: boolean
    orderId?: boolean
    quantity?: boolean
    price?: boolean
    total_price?: boolean
    createdAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "checked" | "orderId" | "quantity" | "price" | "total_price" | "createdAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
    invoices?: boolean | Cart$invoicesArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Cart$orderArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs> | null
      invoices: Prisma.$ProductInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string
      checked: boolean | null
      orderId: string | null
      quantity: number
      price: Prisma.Decimal
      total_price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends Cart$orderArgs<ExtArgs> = {}>(args?: Subset<T, Cart$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends Cart$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Cart$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly productId: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly checked: FieldRef<"Cart", 'Boolean'>
    readonly orderId: FieldRef<"Cart", 'String'>
    readonly quantity: FieldRef<"Cart", 'Int'>
    readonly price: FieldRef<"Cart", 'Decimal'>
    readonly total_price: FieldRef<"Cart", 'Decimal'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.order
   */
  export type Cart$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Cart.invoices
   */
  export type Cart$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    where?: ProductInvoiceWhereInput
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    cursor?: ProductInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductInvoiceScalarFieldEnum | ProductInvoiceScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total_price: Decimal | null
    taxFee: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    total_price: Decimal | null
    taxFee: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderedUserId: string | null
    purchased: boolean | null
    total_price: Decimal | null
    txRef: string | null
    status: $Enums.orderStatus | null
    taxFee: Decimal | null
    verifiedAt: Date | null
    orderedDate: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderedUserId: string | null
    purchased: boolean | null
    total_price: Decimal | null
    txRef: string | null
    status: $Enums.orderStatus | null
    taxFee: Decimal | null
    verifiedAt: Date | null
    orderedDate: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderedUserId: number
    purchased: number
    total_price: number
    txRef: number
    status: number
    taxFee: number
    verifiedAt: number
    orderedDate: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total_price?: true
    taxFee?: true
  }

  export type OrderSumAggregateInputType = {
    total_price?: true
    taxFee?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderedUserId?: true
    purchased?: true
    total_price?: true
    txRef?: true
    status?: true
    taxFee?: true
    verifiedAt?: true
    orderedDate?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderedUserId?: true
    purchased?: true
    total_price?: true
    txRef?: true
    status?: true
    taxFee?: true
    verifiedAt?: true
    orderedDate?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderedUserId?: true
    purchased?: true
    total_price?: true
    txRef?: true
    status?: true
    taxFee?: true
    verifiedAt?: true
    orderedDate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderedUserId: string
    purchased: boolean
    total_price: Decimal
    txRef: string | null
    status: $Enums.orderStatus | null
    taxFee: Decimal | null
    verifiedAt: Date | null
    orderedDate: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderedUserId?: boolean
    purchased?: boolean
    total_price?: boolean
    txRef?: boolean
    status?: boolean
    taxFee?: boolean
    verifiedAt?: boolean
    orderedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    carts?: boolean | Order$cartsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderedUserId?: boolean
    purchased?: boolean
    total_price?: boolean
    txRef?: boolean
    status?: boolean
    taxFee?: boolean
    verifiedAt?: boolean
    orderedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderedUserId?: boolean
    purchased?: boolean
    total_price?: boolean
    txRef?: boolean
    status?: boolean
    taxFee?: boolean
    verifiedAt?: boolean
    orderedDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderedUserId?: boolean
    purchased?: boolean
    total_price?: boolean
    txRef?: boolean
    status?: boolean
    taxFee?: boolean
    verifiedAt?: boolean
    orderedDate?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderedUserId" | "purchased" | "total_price" | "txRef" | "status" | "taxFee" | "verifiedAt" | "orderedDate", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    carts?: boolean | Order$cartsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      carts: Prisma.$CartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderedUserId: string
      purchased: boolean
      total_price: Prisma.Decimal
      txRef: string | null
      status: $Enums.orderStatus | null
      taxFee: Prisma.Decimal | null
      verifiedAt: Date | null
      orderedDate: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carts<T extends Order$cartsArgs<ExtArgs> = {}>(args?: Subset<T, Order$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderedUserId: FieldRef<"Order", 'String'>
    readonly purchased: FieldRef<"Order", 'Boolean'>
    readonly total_price: FieldRef<"Order", 'Decimal'>
    readonly txRef: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'orderStatus'>
    readonly taxFee: FieldRef<"Order", 'Decimal'>
    readonly verifiedAt: FieldRef<"Order", 'DateTime'>
    readonly orderedDate: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.carts
   */
  export type Order$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model ProductInvoice
   */

  export type AggregateProductInvoice = {
    _count: ProductInvoiceCountAggregateOutputType | null
    _avg: ProductInvoiceAvgAggregateOutputType | null
    _sum: ProductInvoiceSumAggregateOutputType | null
    _min: ProductInvoiceMinAggregateOutputType | null
    _max: ProductInvoiceMaxAggregateOutputType | null
  }

  export type ProductInvoiceAvgAggregateOutputType = {
    productPrice: Decimal | null
  }

  export type ProductInvoiceSumAggregateOutputType = {
    productPrice: Decimal | null
  }

  export type ProductInvoiceMinAggregateOutputType = {
    id: string | null
    invoiceUserId: string | null
    cartId: string | null
    productPrice: Decimal | null
  }

  export type ProductInvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceUserId: string | null
    cartId: string | null
    productPrice: Decimal | null
  }

  export type ProductInvoiceCountAggregateOutputType = {
    id: number
    invoiceUserId: number
    cartId: number
    productPrice: number
    _all: number
  }


  export type ProductInvoiceAvgAggregateInputType = {
    productPrice?: true
  }

  export type ProductInvoiceSumAggregateInputType = {
    productPrice?: true
  }

  export type ProductInvoiceMinAggregateInputType = {
    id?: true
    invoiceUserId?: true
    cartId?: true
    productPrice?: true
  }

  export type ProductInvoiceMaxAggregateInputType = {
    id?: true
    invoiceUserId?: true
    cartId?: true
    productPrice?: true
  }

  export type ProductInvoiceCountAggregateInputType = {
    id?: true
    invoiceUserId?: true
    cartId?: true
    productPrice?: true
    _all?: true
  }

  export type ProductInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInvoice to aggregate.
     */
    where?: ProductInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInvoices to fetch.
     */
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductInvoices
    **/
    _count?: true | ProductInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductInvoiceMaxAggregateInputType
  }

  export type GetProductInvoiceAggregateType<T extends ProductInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductInvoice[P]>
      : GetScalarType<T[P], AggregateProductInvoice[P]>
  }




  export type ProductInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductInvoiceWhereInput
    orderBy?: ProductInvoiceOrderByWithAggregationInput | ProductInvoiceOrderByWithAggregationInput[]
    by: ProductInvoiceScalarFieldEnum[] | ProductInvoiceScalarFieldEnum
    having?: ProductInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductInvoiceCountAggregateInputType | true
    _avg?: ProductInvoiceAvgAggregateInputType
    _sum?: ProductInvoiceSumAggregateInputType
    _min?: ProductInvoiceMinAggregateInputType
    _max?: ProductInvoiceMaxAggregateInputType
  }

  export type ProductInvoiceGroupByOutputType = {
    id: string
    invoiceUserId: string
    cartId: string
    productPrice: Decimal
    _count: ProductInvoiceCountAggregateOutputType | null
    _avg: ProductInvoiceAvgAggregateOutputType | null
    _sum: ProductInvoiceSumAggregateOutputType | null
    _min: ProductInvoiceMinAggregateOutputType | null
    _max: ProductInvoiceMaxAggregateOutputType | null
  }

  type GetProductInvoiceGroupByPayload<T extends ProductInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type ProductInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceUserId?: boolean
    cartId?: boolean
    productPrice?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInvoice"]>

  export type ProductInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceUserId?: boolean
    cartId?: boolean
    productPrice?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInvoice"]>

  export type ProductInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceUserId?: boolean
    cartId?: boolean
    productPrice?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productInvoice"]>

  export type ProductInvoiceSelectScalar = {
    id?: boolean
    invoiceUserId?: boolean
    cartId?: boolean
    productPrice?: boolean
  }

  export type ProductInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceUserId" | "cartId" | "productPrice", ExtArgs["result"]["productInvoice"]>
  export type ProductInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type ProductInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }
  export type ProductInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }

  export type $ProductInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductInvoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cart: Prisma.$CartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceUserId: string
      cartId: string
      productPrice: Prisma.Decimal
    }, ExtArgs["result"]["productInvoice"]>
    composites: {}
  }

  type ProductInvoiceGetPayload<S extends boolean | null | undefined | ProductInvoiceDefaultArgs> = $Result.GetResult<Prisma.$ProductInvoicePayload, S>

  type ProductInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductInvoiceCountAggregateInputType | true
    }

  export interface ProductInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductInvoice'], meta: { name: 'ProductInvoice' } }
    /**
     * Find zero or one ProductInvoice that matches the filter.
     * @param {ProductInvoiceFindUniqueArgs} args - Arguments to find a ProductInvoice
     * @example
     * // Get one ProductInvoice
     * const productInvoice = await prisma.productInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductInvoiceFindUniqueArgs>(args: SelectSubset<T, ProductInvoiceFindUniqueArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductInvoiceFindUniqueOrThrowArgs} args - Arguments to find a ProductInvoice
     * @example
     * // Get one ProductInvoice
     * const productInvoice = await prisma.productInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceFindFirstArgs} args - Arguments to find a ProductInvoice
     * @example
     * // Get one ProductInvoice
     * const productInvoice = await prisma.productInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductInvoiceFindFirstArgs>(args?: SelectSubset<T, ProductInvoiceFindFirstArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceFindFirstOrThrowArgs} args - Arguments to find a ProductInvoice
     * @example
     * // Get one ProductInvoice
     * const productInvoice = await prisma.productInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductInvoices
     * const productInvoices = await prisma.productInvoice.findMany()
     * 
     * // Get first 10 ProductInvoices
     * const productInvoices = await prisma.productInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productInvoiceWithIdOnly = await prisma.productInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductInvoiceFindManyArgs>(args?: SelectSubset<T, ProductInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductInvoice.
     * @param {ProductInvoiceCreateArgs} args - Arguments to create a ProductInvoice.
     * @example
     * // Create one ProductInvoice
     * const ProductInvoice = await prisma.productInvoice.create({
     *   data: {
     *     // ... data to create a ProductInvoice
     *   }
     * })
     * 
     */
    create<T extends ProductInvoiceCreateArgs>(args: SelectSubset<T, ProductInvoiceCreateArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductInvoices.
     * @param {ProductInvoiceCreateManyArgs} args - Arguments to create many ProductInvoices.
     * @example
     * // Create many ProductInvoices
     * const productInvoice = await prisma.productInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductInvoiceCreateManyArgs>(args?: SelectSubset<T, ProductInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductInvoices and returns the data saved in the database.
     * @param {ProductInvoiceCreateManyAndReturnArgs} args - Arguments to create many ProductInvoices.
     * @example
     * // Create many ProductInvoices
     * const productInvoice = await prisma.productInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductInvoices and only return the `id`
     * const productInvoiceWithIdOnly = await prisma.productInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductInvoice.
     * @param {ProductInvoiceDeleteArgs} args - Arguments to delete one ProductInvoice.
     * @example
     * // Delete one ProductInvoice
     * const ProductInvoice = await prisma.productInvoice.delete({
     *   where: {
     *     // ... filter to delete one ProductInvoice
     *   }
     * })
     * 
     */
    delete<T extends ProductInvoiceDeleteArgs>(args: SelectSubset<T, ProductInvoiceDeleteArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductInvoice.
     * @param {ProductInvoiceUpdateArgs} args - Arguments to update one ProductInvoice.
     * @example
     * // Update one ProductInvoice
     * const productInvoice = await prisma.productInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductInvoiceUpdateArgs>(args: SelectSubset<T, ProductInvoiceUpdateArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductInvoices.
     * @param {ProductInvoiceDeleteManyArgs} args - Arguments to filter ProductInvoices to delete.
     * @example
     * // Delete a few ProductInvoices
     * const { count } = await prisma.productInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductInvoiceDeleteManyArgs>(args?: SelectSubset<T, ProductInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductInvoices
     * const productInvoice = await prisma.productInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductInvoiceUpdateManyArgs>(args: SelectSubset<T, ProductInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductInvoices and returns the data updated in the database.
     * @param {ProductInvoiceUpdateManyAndReturnArgs} args - Arguments to update many ProductInvoices.
     * @example
     * // Update many ProductInvoices
     * const productInvoice = await prisma.productInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductInvoices and only return the `id`
     * const productInvoiceWithIdOnly = await prisma.productInvoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductInvoice.
     * @param {ProductInvoiceUpsertArgs} args - Arguments to update or create a ProductInvoice.
     * @example
     * // Update or create a ProductInvoice
     * const productInvoice = await prisma.productInvoice.upsert({
     *   create: {
     *     // ... data to create a ProductInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductInvoice we want to update
     *   }
     * })
     */
    upsert<T extends ProductInvoiceUpsertArgs>(args: SelectSubset<T, ProductInvoiceUpsertArgs<ExtArgs>>): Prisma__ProductInvoiceClient<$Result.GetResult<Prisma.$ProductInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceCountArgs} args - Arguments to filter ProductInvoices to count.
     * @example
     * // Count the number of ProductInvoices
     * const count = await prisma.productInvoice.count({
     *   where: {
     *     // ... the filter for the ProductInvoices we want to count
     *   }
     * })
    **/
    count<T extends ProductInvoiceCountArgs>(
      args?: Subset<T, ProductInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductInvoiceAggregateArgs>(args: Subset<T, ProductInvoiceAggregateArgs>): Prisma.PrismaPromise<GetProductInvoiceAggregateType<T>>

    /**
     * Group by ProductInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductInvoiceGroupByArgs} args - Group by arguments.
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
      T extends ProductInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: ProductInvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductInvoice model
   */
  readonly fields: ProductInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductInvoice model
   */
  interface ProductInvoiceFieldRefs {
    readonly id: FieldRef<"ProductInvoice", 'String'>
    readonly invoiceUserId: FieldRef<"ProductInvoice", 'String'>
    readonly cartId: FieldRef<"ProductInvoice", 'String'>
    readonly productPrice: FieldRef<"ProductInvoice", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ProductInvoice findUnique
   */
  export type ProductInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProductInvoice to fetch.
     */
    where: ProductInvoiceWhereUniqueInput
  }

  /**
   * ProductInvoice findUniqueOrThrow
   */
  export type ProductInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProductInvoice to fetch.
     */
    where: ProductInvoiceWhereUniqueInput
  }

  /**
   * ProductInvoice findFirst
   */
  export type ProductInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProductInvoice to fetch.
     */
    where?: ProductInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInvoices to fetch.
     */
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInvoices.
     */
    cursor?: ProductInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInvoices.
     */
    distinct?: ProductInvoiceScalarFieldEnum | ProductInvoiceScalarFieldEnum[]
  }

  /**
   * ProductInvoice findFirstOrThrow
   */
  export type ProductInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProductInvoice to fetch.
     */
    where?: ProductInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInvoices to fetch.
     */
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductInvoices.
     */
    cursor?: ProductInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInvoices.
     */
    distinct?: ProductInvoiceScalarFieldEnum | ProductInvoiceScalarFieldEnum[]
  }

  /**
   * ProductInvoice findMany
   */
  export type ProductInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ProductInvoices to fetch.
     */
    where?: ProductInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductInvoices to fetch.
     */
    orderBy?: ProductInvoiceOrderByWithRelationInput | ProductInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductInvoices.
     */
    cursor?: ProductInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductInvoices.
     */
    distinct?: ProductInvoiceScalarFieldEnum | ProductInvoiceScalarFieldEnum[]
  }

  /**
   * ProductInvoice create
   */
  export type ProductInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductInvoice.
     */
    data: XOR<ProductInvoiceCreateInput, ProductInvoiceUncheckedCreateInput>
  }

  /**
   * ProductInvoice createMany
   */
  export type ProductInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductInvoices.
     */
    data: ProductInvoiceCreateManyInput | ProductInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductInvoice createManyAndReturn
   */
  export type ProductInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProductInvoices.
     */
    data: ProductInvoiceCreateManyInput | ProductInvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInvoice update
   */
  export type ProductInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductInvoice.
     */
    data: XOR<ProductInvoiceUpdateInput, ProductInvoiceUncheckedUpdateInput>
    /**
     * Choose, which ProductInvoice to update.
     */
    where: ProductInvoiceWhereUniqueInput
  }

  /**
   * ProductInvoice updateMany
   */
  export type ProductInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductInvoices.
     */
    data: XOR<ProductInvoiceUpdateManyMutationInput, ProductInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ProductInvoices to update
     */
    where?: ProductInvoiceWhereInput
    /**
     * Limit how many ProductInvoices to update.
     */
    limit?: number
  }

  /**
   * ProductInvoice updateManyAndReturn
   */
  export type ProductInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update ProductInvoices.
     */
    data: XOR<ProductInvoiceUpdateManyMutationInput, ProductInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ProductInvoices to update
     */
    where?: ProductInvoiceWhereInput
    /**
     * Limit how many ProductInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductInvoice upsert
   */
  export type ProductInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductInvoice to update in case it exists.
     */
    where: ProductInvoiceWhereUniqueInput
    /**
     * In case the ProductInvoice found by the `where` argument doesn't exist, create a new ProductInvoice with this data.
     */
    create: XOR<ProductInvoiceCreateInput, ProductInvoiceUncheckedCreateInput>
    /**
     * In case the ProductInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductInvoiceUpdateInput, ProductInvoiceUncheckedUpdateInput>
  }

  /**
   * ProductInvoice delete
   */
  export type ProductInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
    /**
     * Filter which ProductInvoice to delete.
     */
    where: ProductInvoiceWhereUniqueInput
  }

  /**
   * ProductInvoice deleteMany
   */
  export type ProductInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductInvoices to delete
     */
    where?: ProductInvoiceWhereInput
    /**
     * Limit how many ProductInvoices to delete.
     */
    limit?: number
  }

  /**
   * ProductInvoice without action
   */
  export type ProductInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductInvoice
     */
    select?: ProductInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductInvoice
     */
    omit?: ProductInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInvoiceInclude<ExtArgs> | null
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


  export const CartScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    checked: 'checked',
    orderId: 'orderId',
    quantity: 'quantity',
    price: 'price',
    total_price: 'total_price',
    createdAt: 'createdAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderedUserId: 'orderedUserId',
    purchased: 'purchased',
    total_price: 'total_price',
    txRef: 'txRef',
    status: 'status',
    taxFee: 'taxFee',
    verifiedAt: 'verifiedAt',
    orderedDate: 'orderedDate'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductInvoiceScalarFieldEnum: {
    id: 'id',
    invoiceUserId: 'invoiceUserId',
    cartId: 'cartId',
    productPrice: 'productPrice'
  };

  export type ProductInvoiceScalarFieldEnum = (typeof ProductInvoiceScalarFieldEnum)[keyof typeof ProductInvoiceScalarFieldEnum]


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
   * Reference to a field of type 'productStatus'
   */
  export type EnumproductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'productStatus'>
    


  /**
   * Reference to a field of type 'productStatus[]'
   */
  export type ListEnumproductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'productStatus[]'>
    


  /**
   * Reference to a field of type 'orderStatus'
   */
  export type EnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus'>
    


  /**
   * Reference to a field of type 'orderStatus[]'
   */
  export type ListEnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus[]'>
    


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
    updatedProducts?: ProductListRelationFilter
    approvedProducts?: ProductListRelationFilter
    cartItems?: CartListRelationFilter
    orders?: OrderListRelationFilter
    invoices?: ProductInvoiceListRelationFilter
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
    updatedProducts?: ProductOrderByRelationAggregateInput
    approvedProducts?: ProductOrderByRelationAggregateInput
    cartItems?: CartOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    invoices?: ProductInvoiceOrderByRelationAggregateInput
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
    updatedProducts?: ProductListRelationFilter
    approvedProducts?: ProductListRelationFilter
    cartItems?: CartListRelationFilter
    orders?: OrderListRelationFilter
    invoices?: ProductInvoiceListRelationFilter
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
    newPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntFilter<"Product"> | number
    draft?: BoolFilter<"Product"> | boolean
    approved?: EnumproductStatusFilter<"Product"> | $Enums.productStatus
    categoryId?: StringFilter<"Product"> | string
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    descriptions?: ProductDescriptionListRelationFilter
    carts?: CartListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    newPrice?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    category?: ProductCategoryOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    descriptions?: ProductDescriptionOrderByRelationAggregateInput
    carts?: CartOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntFilter<"Product"> | number
    draft?: BoolFilter<"Product"> | boolean
    approved?: EnumproductStatusFilter<"Product"> | $Enums.productStatus
    categoryId?: StringFilter<"Product"> | string
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    descriptions?: ProductDescriptionListRelationFilter
    carts?: CartListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrder
    newPrice?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    draft?: SortOrder
    approved?: SortOrder
    categoryId?: SortOrder
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
    newPrice?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    quantity?: IntWithAggregatesFilter<"Product"> | number
    draft?: BoolWithAggregatesFilter<"Product"> | boolean
    approved?: EnumproductStatusWithAggregatesFilter<"Product"> | $Enums.productStatus
    categoryId?: StringWithAggregatesFilter<"Product"> | string
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
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    category?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "category">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
  }

  export type ProductDescriptionWhereInput = {
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    id?: StringFilter<"ProductDescription"> | string
    photo?: StringNullableListFilter<"ProductDescription">
    productId?: StringFilter<"ProductDescription"> | string
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrder
    productId?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    OR?: ProductDescriptionWhereInput[]
    NOT?: ProductDescriptionWhereInput | ProductDescriptionWhereInput[]
    photo?: StringNullableListFilter<"ProductDescription">
    productId?: StringFilter<"ProductDescription"> | string
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrder
    productId?: SortOrder
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
    photo?: StringNullableListFilter<"ProductDescription">
    productId?: StringWithAggregatesFilter<"ProductDescription"> | string
    description?: StringNullableWithAggregatesFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductDescription"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    productId?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    checked?: BoolNullableFilter<"Cart"> | boolean | null
    orderId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntFilter<"Cart"> | number
    price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    invoices?: ProductInvoiceListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    checked?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    invoices?: ProductInvoiceOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    productId?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    checked?: BoolNullableFilter<"Cart"> | boolean | null
    orderId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntFilter<"Cart"> | number
    price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    invoices?: ProductInvoiceListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    checked?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    productId?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringWithAggregatesFilter<"Cart"> | string
    checked?: BoolNullableWithAggregatesFilter<"Cart"> | boolean | null
    orderId?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    quantity?: IntWithAggregatesFilter<"Cart"> | number
    price?: DecimalWithAggregatesFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderedUserId?: StringFilter<"Order"> | string
    purchased?: BoolFilter<"Order"> | boolean
    total_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    txRef?: StringNullableFilter<"Order"> | string | null
    status?: EnumorderStatusNullableFilter<"Order"> | $Enums.orderStatus | null
    taxFee?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carts?: CartListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderedUserId?: SortOrder
    purchased?: SortOrder
    total_price?: SortOrder
    txRef?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    taxFee?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    orderedDate?: SortOrder
    user?: UserOrderByWithRelationInput
    carts?: CartOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txRef?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderedUserId?: StringFilter<"Order"> | string
    purchased?: BoolFilter<"Order"> | boolean
    total_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusNullableFilter<"Order"> | $Enums.orderStatus | null
    taxFee?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    carts?: CartListRelationFilter
  }, "id" | "txRef">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderedUserId?: SortOrder
    purchased?: SortOrder
    total_price?: SortOrder
    txRef?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    taxFee?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    orderedDate?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderedUserId?: StringWithAggregatesFilter<"Order"> | string
    purchased?: BoolWithAggregatesFilter<"Order"> | boolean
    total_price?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    txRef?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumorderStatusNullableWithAggregatesFilter<"Order"> | $Enums.orderStatus | null
    taxFee?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    orderedDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ProductInvoiceWhereInput = {
    AND?: ProductInvoiceWhereInput | ProductInvoiceWhereInput[]
    OR?: ProductInvoiceWhereInput[]
    NOT?: ProductInvoiceWhereInput | ProductInvoiceWhereInput[]
    id?: StringFilter<"ProductInvoice"> | string
    invoiceUserId?: StringFilter<"ProductInvoice"> | string
    cartId?: StringFilter<"ProductInvoice"> | string
    productPrice?: DecimalFilter<"ProductInvoice"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }

  export type ProductInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceUserId?: SortOrder
    cartId?: SortOrder
    productPrice?: SortOrder
    user?: UserOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
  }

  export type ProductInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductInvoiceWhereInput | ProductInvoiceWhereInput[]
    OR?: ProductInvoiceWhereInput[]
    NOT?: ProductInvoiceWhereInput | ProductInvoiceWhereInput[]
    invoiceUserId?: StringFilter<"ProductInvoice"> | string
    cartId?: StringFilter<"ProductInvoice"> | string
    productPrice?: DecimalFilter<"ProductInvoice"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
  }, "id">

  export type ProductInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceUserId?: SortOrder
    cartId?: SortOrder
    productPrice?: SortOrder
    _count?: ProductInvoiceCountOrderByAggregateInput
    _avg?: ProductInvoiceAvgOrderByAggregateInput
    _max?: ProductInvoiceMaxOrderByAggregateInput
    _min?: ProductInvoiceMinOrderByAggregateInput
    _sum?: ProductInvoiceSumOrderByAggregateInput
  }

  export type ProductInvoiceScalarWhereWithAggregatesInput = {
    AND?: ProductInvoiceScalarWhereWithAggregatesInput | ProductInvoiceScalarWhereWithAggregatesInput[]
    OR?: ProductInvoiceScalarWhereWithAggregatesInput[]
    NOT?: ProductInvoiceScalarWhereWithAggregatesInput | ProductInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductInvoice"> | string
    invoiceUserId?: StringWithAggregatesFilter<"ProductInvoice"> | string
    cartId?: StringWithAggregatesFilter<"ProductInvoice"> | string
    productPrice?: DecimalWithAggregatesFilter<"ProductInvoice"> | Decimal | DecimalJsLike | number | string
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
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductCreateNestedManyWithoutApprovedByInput
    cartItems?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceCreateNestedManyWithoutUserInput
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
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    approvedProducts?: ProductUncheckedCreateNestedManyWithoutApprovedByInput
    cartItems?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutUserInput
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
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUpdateManyWithoutApprovedByNestedInput
    cartItems?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutUserNestedInput
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
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    approvedProducts?: ProductUncheckedUpdateManyWithoutApprovedByNestedInput
    cartItems?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput
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
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
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
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateInput = {
    id?: string
    category?: string | null
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: string
    category?: string | null
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionCreateInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
    description?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDescriptionsInput
  }

  export type ProductDescriptionUncheckedCreateInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
    productId: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDescriptionsNestedInput
  }

  export type ProductDescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    productId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionCreateManyInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
    productId: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    productId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
    user: UserCreateNestedOneWithoutCartItemsInput
    order?: OrderCreateNestedOneWithoutCartsInput
    invoices?: ProductInvoiceCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    productId: string
    userId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    order?: OrderUpdateOneWithoutCartsNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    productId: string
    userId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    carts?: CartCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderedUserId: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    carts?: CartUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderedUserId?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderedUserId: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderedUserId?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInvoiceCreateInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutInvoicesInput
    cart: CartCreateNestedOneWithoutInvoicesInput
  }

  export type ProductInvoiceUncheckedCreateInput = {
    id?: string
    invoiceUserId: string
    cartId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    cart?: CartUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type ProductInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceUserId?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceCreateManyInput = {
    id?: string
    invoiceUserId: string
    cartId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceUserId?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProductInvoiceListRelationFilter = {
    every?: ProductInvoiceWhereInput
    some?: ProductInvoiceWhereInput
    none?: ProductInvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductInvoiceOrderByRelationAggregateInput = {
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumproductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.productStatus | EnumproductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumproductStatusFilter<$PrismaModel> | $Enums.productStatus
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumproductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.productStatus | EnumproductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumproductStatusWithAggregatesFilter<$PrismaModel> | $Enums.productStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproductStatusFilter<$PrismaModel>
    _max?: NestedEnumproductStatusFilter<$PrismaModel>
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
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
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    checked?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    checked?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    checked?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    total_price?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumorderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorderStatusNullableFilter<$PrismaModel> | $Enums.orderStatus | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderedUserId?: SortOrder
    purchased?: SortOrder
    total_price?: SortOrder
    txRef?: SortOrder
    status?: SortOrder
    taxFee?: SortOrder
    verifiedAt?: SortOrder
    orderedDate?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total_price?: SortOrder
    taxFee?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderedUserId?: SortOrder
    purchased?: SortOrder
    total_price?: SortOrder
    txRef?: SortOrder
    status?: SortOrder
    taxFee?: SortOrder
    verifiedAt?: SortOrder
    orderedDate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderedUserId?: SortOrder
    purchased?: SortOrder
    total_price?: SortOrder
    txRef?: SortOrder
    status?: SortOrder
    taxFee?: SortOrder
    verifiedAt?: SortOrder
    orderedDate?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total_price?: SortOrder
    taxFee?: SortOrder
  }

  export type EnumorderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumorderStatusNullableFilter<$PrismaModel>
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceUserId?: SortOrder
    cartId?: SortOrder
    productPrice?: SortOrder
  }

  export type ProductInvoiceAvgOrderByAggregateInput = {
    productPrice?: SortOrder
  }

  export type ProductInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceUserId?: SortOrder
    cartId?: SortOrder
    productPrice?: SortOrder
  }

  export type ProductInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceUserId?: SortOrder
    cartId?: SortOrder
    productPrice?: SortOrder
  }

  export type ProductInvoiceSumOrderByAggregateInput = {
    productPrice?: SortOrder
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

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductInvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput> | ProductInvoiceCreateWithoutUserInput[] | ProductInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutUserInput | ProductInvoiceCreateOrConnectWithoutUserInput[]
    createMany?: ProductInvoiceCreateManyUserInputEnvelope
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
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

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductInvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput> | ProductInvoiceCreateWithoutUserInput[] | ProductInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutUserInput | ProductInvoiceCreateOrConnectWithoutUserInput[]
    createMany?: ProductInvoiceCreateManyUserInputEnvelope
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
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

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductInvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput> | ProductInvoiceCreateWithoutUserInput[] | ProductInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutUserInput | ProductInvoiceCreateOrConnectWithoutUserInput[]
    upsert?: ProductInvoiceUpsertWithWhereUniqueWithoutUserInput | ProductInvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductInvoiceCreateManyUserInputEnvelope
    set?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    disconnect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    delete?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    update?: ProductInvoiceUpdateWithWhereUniqueWithoutUserInput | ProductInvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductInvoiceUpdateManyWithWhereWithoutUserInput | ProductInvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
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

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput> | ProductInvoiceCreateWithoutUserInput[] | ProductInvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutUserInput | ProductInvoiceCreateOrConnectWithoutUserInput[]
    upsert?: ProductInvoiceUpsertWithWhereUniqueWithoutUserInput | ProductInvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductInvoiceCreateManyUserInputEnvelope
    set?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    disconnect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    delete?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    update?: ProductInvoiceUpdateWithWhereUniqueWithoutUserInput | ProductInvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductInvoiceUpdateManyWithWhereWithoutUserInput | ProductInvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
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

  export type CartCreateNestedManyWithoutProductInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ProductDescriptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDescriptionCreateWithoutProductInput, ProductDescriptionUncheckedCreateWithoutProductInput> | ProductDescriptionCreateWithoutProductInput[] | ProductDescriptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDescriptionCreateOrConnectWithoutProductInput | ProductDescriptionCreateOrConnectWithoutProductInput[]
    createMany?: ProductDescriptionCreateManyProductInputEnvelope
    connect?: ProductDescriptionWhereUniqueInput | ProductDescriptionWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumproductStatusFieldUpdateOperationsInput = {
    set?: $Enums.productStatus
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductsInput, ProductCategoryUpdateWithoutProductsInput>, ProductCategoryUncheckedUpdateWithoutProductsInput>
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

  export type CartUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductInput | CartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductInput | CartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductInput | CartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
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

  export type CartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductInput | CartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductInput | CartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductInput | CartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
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

  export type ProductDescriptionCreatephotoInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutDescriptionsInput = {
    create?: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDescriptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductDescriptionUpdatephotoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneRequiredWithoutDescriptionsNestedInput = {
    create?: XOR<ProductCreateWithoutDescriptionsInput, ProductUncheckedCreateWithoutDescriptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDescriptionsInput
    upsert?: ProductUpsertWithoutDescriptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDescriptionsInput, ProductUpdateWithoutDescriptionsInput>, ProductUncheckedUpdateWithoutDescriptionsInput>
  }

  export type ProductCreateNestedOneWithoutCartsInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutCartsInput = {
    create?: XOR<OrderCreateWithoutCartsInput, OrderUncheckedCreateWithoutCartsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCartsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductInvoiceCreateNestedManyWithoutCartInput = {
    create?: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput> | ProductInvoiceCreateWithoutCartInput[] | ProductInvoiceUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutCartInput | ProductInvoiceCreateOrConnectWithoutCartInput[]
    createMany?: ProductInvoiceCreateManyCartInputEnvelope
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
  }

  export type ProductInvoiceUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput> | ProductInvoiceCreateWithoutCartInput[] | ProductInvoiceUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutCartInput | ProductInvoiceCreateOrConnectWithoutCartInput[]
    createMany?: ProductInvoiceCreateManyCartInputEnvelope
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    upsert?: ProductUpsertWithoutCartsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartsInput, ProductUpdateWithoutCartsInput>, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemsInput
    upsert?: UserUpsertWithoutCartItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartItemsInput, UserUpdateWithoutCartItemsInput>, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type OrderUpdateOneWithoutCartsNestedInput = {
    create?: XOR<OrderCreateWithoutCartsInput, OrderUncheckedCreateWithoutCartsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCartsInput
    upsert?: OrderUpsertWithoutCartsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutCartsInput, OrderUpdateWithoutCartsInput>, OrderUncheckedUpdateWithoutCartsInput>
  }

  export type ProductInvoiceUpdateManyWithoutCartNestedInput = {
    create?: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput> | ProductInvoiceCreateWithoutCartInput[] | ProductInvoiceUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutCartInput | ProductInvoiceCreateOrConnectWithoutCartInput[]
    upsert?: ProductInvoiceUpsertWithWhereUniqueWithoutCartInput | ProductInvoiceUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ProductInvoiceCreateManyCartInputEnvelope
    set?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    disconnect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    delete?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    update?: ProductInvoiceUpdateWithWhereUniqueWithoutCartInput | ProductInvoiceUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ProductInvoiceUpdateManyWithWhereWithoutCartInput | ProductInvoiceUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
  }

  export type ProductInvoiceUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput> | ProductInvoiceCreateWithoutCartInput[] | ProductInvoiceUncheckedCreateWithoutCartInput[]
    connectOrCreate?: ProductInvoiceCreateOrConnectWithoutCartInput | ProductInvoiceCreateOrConnectWithoutCartInput[]
    upsert?: ProductInvoiceUpsertWithWhereUniqueWithoutCartInput | ProductInvoiceUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: ProductInvoiceCreateManyCartInputEnvelope
    set?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    disconnect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    delete?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    connect?: ProductInvoiceWhereUniqueInput | ProductInvoiceWhereUniqueInput[]
    update?: ProductInvoiceUpdateWithWhereUniqueWithoutCartInput | ProductInvoiceUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: ProductInvoiceUpdateManyWithWhereWithoutCartInput | ProductInvoiceUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type CartCreateNestedManyWithoutOrderInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput> | CartCreateWithoutOrderInput[] | CartUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput | CartCreateOrConnectWithoutOrderInput[]
    createMany?: CartCreateManyOrderInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput> | CartCreateWithoutOrderInput[] | CartUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput | CartCreateOrConnectWithoutOrderInput[]
    createMany?: CartCreateManyOrderInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type NullableEnumorderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orderStatus | null
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type CartUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput> | CartCreateWithoutOrderInput[] | CartUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput | CartCreateOrConnectWithoutOrderInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutOrderInput | CartUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CartCreateManyOrderInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutOrderInput | CartUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CartUpdateManyWithWhereWithoutOrderInput | CartUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput> | CartCreateWithoutOrderInput[] | CartUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartCreateOrConnectWithoutOrderInput | CartCreateOrConnectWithoutOrderInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutOrderInput | CartUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CartCreateManyOrderInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutOrderInput | CartUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CartUpdateManyWithWhereWithoutOrderInput | CartUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CartCreateOrConnectWithoutInvoicesInput
    connect?: CartWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type CartUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CartCreateOrConnectWithoutInvoicesInput
    upsert?: CartUpsertWithoutInvoicesInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutInvoicesInput, CartUpdateWithoutInvoicesInput>, CartUncheckedUpdateWithoutInvoicesInput>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumproductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.productStatus | EnumproductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumproductStatusFilter<$PrismaModel> | $Enums.productStatus
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumproductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.productStatus | EnumproductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.productStatus[] | ListEnumproductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumproductStatusWithAggregatesFilter<$PrismaModel> | $Enums.productStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproductStatusFilter<$PrismaModel>
    _max?: NestedEnumproductStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumorderStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorderStatusNullableFilter<$PrismaModel> | $Enums.orderStatus | null
  }

  export type NestedEnumorderStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumorderStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorderStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumorderStatusNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
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
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutApprovedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    updatedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutApprovedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutApprovedByInput, ProductUncheckedCreateWithoutApprovedByInput>
  }

  export type ProductCreateManyApprovedByInputEnvelope = {
    data: ProductCreateManyApprovedByInput | ProductCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
    order?: OrderCreateNestedOneWithoutCartsInput
    invoices?: ProductInvoiceCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
    carts?: CartCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductInvoiceCreateWithoutUserInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    cart: CartCreateNestedOneWithoutInvoicesInput
  }

  export type ProductInvoiceUncheckedCreateWithoutUserInput = {
    id?: string
    cartId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceCreateOrConnectWithoutUserInput = {
    where: ProductInvoiceWhereUniqueInput
    create: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput>
  }

  export type ProductInvoiceCreateManyUserInputEnvelope = {
    data: ProductInvoiceCreateManyUserInput | ProductInvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    newPrice?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Product"> | string | null
    quantity?: IntFilter<"Product"> | number
    draft?: BoolFilter<"Product"> | boolean
    approved?: EnumproductStatusFilter<"Product"> | $Enums.productStatus
    categoryId?: StringFilter<"Product"> | string
    updatedById?: StringNullableFilter<"Product"> | string | null
    approvedById?: StringNullableFilter<"Product"> | string | null
    photo?: StringNullableFilter<"Product"> | string | null
    last_updated?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
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

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: StringFilter<"Cart"> | string
    productId?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    checked?: BoolNullableFilter<"Cart"> | boolean | null
    orderId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntFilter<"Cart"> | number
    price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Cart"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderedUserId?: StringFilter<"Order"> | string
    purchased?: BoolFilter<"Order"> | boolean
    total_price?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    txRef?: StringNullableFilter<"Order"> | string | null
    status?: EnumorderStatusNullableFilter<"Order"> | $Enums.orderStatus | null
    taxFee?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    orderedDate?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProductInvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductInvoiceWhereUniqueInput
    update: XOR<ProductInvoiceUpdateWithoutUserInput, ProductInvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<ProductInvoiceCreateWithoutUserInput, ProductInvoiceUncheckedCreateWithoutUserInput>
  }

  export type ProductInvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductInvoiceWhereUniqueInput
    data: XOR<ProductInvoiceUpdateWithoutUserInput, ProductInvoiceUncheckedUpdateWithoutUserInput>
  }

  export type ProductInvoiceUpdateManyWithWhereWithoutUserInput = {
    where: ProductInvoiceScalarWhereInput
    data: XOR<ProductInvoiceUpdateManyMutationInput, ProductInvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductInvoiceScalarWhereInput = {
    AND?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
    OR?: ProductInvoiceScalarWhereInput[]
    NOT?: ProductInvoiceScalarWhereInput | ProductInvoiceScalarWhereInput[]
    id?: StringFilter<"ProductInvoice"> | string
    invoiceUserId?: StringFilter<"ProductInvoice"> | string
    cartId?: StringFilter<"ProductInvoice"> | string
    productPrice?: DecimalFilter<"ProductInvoice"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    id?: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
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
    approvedProducts?: ProductCreateNestedManyWithoutApprovedByInput
    cartItems?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceCreateNestedManyWithoutUserInput
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
    approvedProducts?: ProductUncheckedCreateNestedManyWithoutApprovedByInput
    cartItems?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutUserInput
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
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByInput
    cartItems?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceCreateNestedManyWithoutUserInput
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
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByInput
    cartItems?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedProductsInput, UserUncheckedCreateWithoutApprovedProductsInput>
  }

  export type ProductDescriptionCreateWithoutProductInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
    description?: string | null
    createdAt?: Date | string
  }

  export type ProductDescriptionUncheckedCreateWithoutProductInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
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

  export type CartCreateWithoutProductInput = {
    id?: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemsInput
    order?: OrderCreateNestedOneWithoutCartsInput
    invoices?: ProductInvoiceCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutProductInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
  }

  export type CartCreateManyProductInputEnvelope = {
    data: CartCreateManyProductInput | CartCreateManyProductInput[]
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    approvedProducts?: ProductUpdateManyWithoutApprovedByNestedInput
    cartItems?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutUserNestedInput
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
    approvedProducts?: ProductUncheckedUpdateManyWithoutApprovedByNestedInput
    cartItems?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput
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
    updatedProducts?: ProductUpdateManyWithoutUpdatedByNestedInput
    cartItems?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutUserNestedInput
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
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByNestedInput
    cartItems?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput
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
    photo?: StringNullableListFilter<"ProductDescription">
    productId?: StringFilter<"ProductDescription"> | string
    description?: StringNullableFilter<"ProductDescription"> | string | null
    createdAt?: DateTimeFilter<"ProductDescription"> | Date | string
  }

  export type CartUpsertWithWhereUniqueWithoutProductInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
  }

  export type CartUpdateWithWhereUniqueWithoutProductInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
  }

  export type CartUpdateManyWithWhereWithoutProductInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
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
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    carts?: CartCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDescriptionsInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
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
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCartsInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    category: ProductCategoryCreateNestedOneWithoutProductsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedProductsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedProductsInput
    descriptions?: ProductDescriptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartsInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    updatedById?: string | null
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
    descriptions?: ProductDescriptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
  }

  export type UserCreateWithoutCartItemsInput = {
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
    orders?: OrderCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartItemsInput = {
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
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
  }

  export type OrderCreateWithoutCartsInput = {
    id?: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCartsInput = {
    id?: string
    orderedUserId: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutCartsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCartsInput, OrderUncheckedCreateWithoutCartsInput>
  }

  export type ProductInvoiceCreateWithoutCartInput = {
    id?: string
    productPrice: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutInvoicesInput
  }

  export type ProductInvoiceUncheckedCreateWithoutCartInput = {
    id?: string
    invoiceUserId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceCreateOrConnectWithoutCartInput = {
    where: ProductInvoiceWhereUniqueInput
    create: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput>
  }

  export type ProductInvoiceCreateManyCartInputEnvelope = {
    data: ProductInvoiceCreateManyCartInput | ProductInvoiceCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutCartsInput = {
    update: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type ProductUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCartItemsInput = {
    update: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
    create: XOR<UserCreateWithoutCartItemsInput, UserUncheckedCreateWithoutCartItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartItemsInput, UserUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserUpdateWithoutCartItemsInput = {
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
    orders?: OrderUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartItemsInput = {
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
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithoutCartsInput = {
    update: XOR<OrderUpdateWithoutCartsInput, OrderUncheckedUpdateWithoutCartsInput>
    create: XOR<OrderCreateWithoutCartsInput, OrderUncheckedCreateWithoutCartsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutCartsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutCartsInput, OrderUncheckedUpdateWithoutCartsInput>
  }

  export type OrderUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderedUserId?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInvoiceUpsertWithWhereUniqueWithoutCartInput = {
    where: ProductInvoiceWhereUniqueInput
    update: XOR<ProductInvoiceUpdateWithoutCartInput, ProductInvoiceUncheckedUpdateWithoutCartInput>
    create: XOR<ProductInvoiceCreateWithoutCartInput, ProductInvoiceUncheckedCreateWithoutCartInput>
  }

  export type ProductInvoiceUpdateWithWhereUniqueWithoutCartInput = {
    where: ProductInvoiceWhereUniqueInput
    data: XOR<ProductInvoiceUpdateWithoutCartInput, ProductInvoiceUncheckedUpdateWithoutCartInput>
  }

  export type ProductInvoiceUpdateManyWithWhereWithoutCartInput = {
    where: ProductInvoiceScalarWhereInput
    data: XOR<ProductInvoiceUpdateManyMutationInput, ProductInvoiceUncheckedUpdateManyWithoutCartInput>
  }

  export type UserCreateWithoutOrdersInput = {
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
    cartItems?: CartCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
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
    cartItems?: CartUncheckedCreateNestedManyWithoutUserInput
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type CartCreateWithoutOrderInput = {
    id?: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
    user: UserCreateNestedOneWithoutCartItemsInput
    invoices?: ProductInvoiceCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    userId: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    invoices?: ProductInvoiceUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutOrderInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
  }

  export type CartCreateManyOrderInputEnvelope = {
    data: CartCreateManyOrderInput | CartCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
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
    cartItems?: CartUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
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
    cartItems?: CartUncheckedUpdateManyWithoutUserNestedInput
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartUpsertWithWhereUniqueWithoutOrderInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutOrderInput, CartUncheckedUpdateWithoutOrderInput>
    create: XOR<CartCreateWithoutOrderInput, CartUncheckedCreateWithoutOrderInput>
  }

  export type CartUpdateWithWhereUniqueWithoutOrderInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutOrderInput, CartUncheckedUpdateWithoutOrderInput>
  }

  export type CartUpdateManyWithWhereWithoutOrderInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserCreateWithoutInvoicesInput = {
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
    cartItems?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
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
    cartItems?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type CartCreateWithoutInvoicesInput = {
    id?: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
    user: UserCreateNestedOneWithoutCartItemsInput
    order?: OrderCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateWithoutInvoicesInput = {
    id?: string
    productId: string
    userId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartCreateOrConnectWithoutInvoicesInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
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
    cartItems?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
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
    cartItems?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartUpsertWithoutInvoicesInput = {
    update: XOR<CartUpdateWithoutInvoicesInput, CartUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CartCreateWithoutInvoicesInput, CartUncheckedCreateWithoutInvoicesInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutInvoicesInput, CartUncheckedUpdateWithoutInvoicesInput>
  }

  export type CartUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    order?: OrderUpdateOneWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyUpdatedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    approvedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type ProductCreateManyApprovedByInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
    categoryId: string
    updatedById?: string | null
    photo?: string | null
    last_updated?: Date | string | null
    createdAt?: Date | string
  }

  export type CartCreateManyUserInput = {
    id?: string
    productId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    purchased?: boolean
    total_price: Decimal | DecimalJsLike | number | string
    txRef?: string | null
    status?: $Enums.orderStatus | null
    taxFee?: Decimal | DecimalJsLike | number | string | null
    verifiedAt?: Date | string | null
    orderedDate?: Date | string
  }

  export type ProductInvoiceCreateManyUserInput = {
    id?: string
    cartId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    categoryId?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
    order?: OrderUpdateOneWithoutCartsNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchased?: BoolFieldUpdateOperationsInput | boolean
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    txRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus | null
    taxFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInvoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cart?: CartUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type ProductInvoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductDescriptionCreateManyProductInput = {
    id?: string
    photo?: ProductDescriptionCreatephotoInput | string[]
    description?: string | null
    createdAt?: Date | string
  }

  export type CartCreateManyProductInput = {
    id?: string
    userId: string
    checked?: boolean | null
    orderId?: string | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductDescriptionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductDescriptionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    photo?: ProductDescriptionUpdatephotoInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    order?: OrderUpdateOneWithoutCartsNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name?: string | null
    price: Decimal | DecimalJsLike | number | string
    newPrice?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    quantity?: number
    draft?: boolean
    approved?: $Enums.productStatus
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
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: UserUpdateOneWithoutUpdatedProductsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedProductsNestedInput
    descriptions?: ProductDescriptionUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    descriptions?: ProductDescriptionUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    draft?: BoolFieldUpdateOperationsInput | boolean
    approved?: EnumproductStatusFieldUpdateOperationsInput | $Enums.productStatus
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductInvoiceCreateManyCartInput = {
    id?: string
    invoiceUserId: string
    productPrice: Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type ProductInvoiceUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceUserId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductInvoiceUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceUserId?: StringFieldUpdateOperationsInput | string
    productPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CartCreateManyOrderInput = {
    id?: string
    productId: string
    userId: string
    checked?: boolean | null
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
    user?: UserUpdateOneRequiredWithoutCartItemsNestedInput
    invoices?: ProductInvoiceUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: ProductInvoiceUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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