
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model OrderReqMsg
 * 
 */
export type OrderReqMsg = $Result.DefaultSelection<Prisma.$OrderReqMsgPayload>
/**
 * Model ProductList
 * 
 */
export type ProductList = $Result.DefaultSelection<Prisma.$ProductListPayload>
/**
 * Model ProductListSub
 * 
 */
export type ProductListSub = $Result.DefaultSelection<Prisma.$ProductListSubPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductLog
 * 
 */
export type ProductLog = $Result.DefaultSelection<Prisma.$ProductLogPayload>
/**
 * Model ProductListWebBunryu
 * 
 */
export type ProductListWebBunryu = $Result.DefaultSelection<Prisma.$ProductListWebBunryuPayload>
/**
 * Model ProductListImage
 * 
 */
export type ProductListImage = $Result.DefaultSelection<Prisma.$ProductListImagePayload>
/**
 * Model Cs
 * 
 */
export type Cs = $Result.DefaultSelection<Prisma.$CsPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentItem
 * 
 */
export type PaymentItem = $Result.DefaultSelection<Prisma.$PaymentItemPayload>
/**
 * Model PaymentVirtual
 * 
 */
export type PaymentVirtual = $Result.DefaultSelection<Prisma.$PaymentVirtualPayload>
/**
 * Model PaymentRefund
 * 
 */
export type PaymentRefund = $Result.DefaultSelection<Prisma.$PaymentRefundPayload>
/**
 * Model Em
 * 
 */
export type Em = $Result.DefaultSelection<Prisma.$EmPayload>
/**
 * Model NewCpmMsg
 * 
 */
export type NewCpmMsg = $Result.DefaultSelection<Prisma.$NewCpmMsgPayload>
/**
 * Model PgMsg
 * 
 */
export type PgMsg = $Result.DefaultSelection<Prisma.$PgMsgPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.orderReqMsg`: Exposes CRUD operations for the **OrderReqMsg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderReqMsgs
    * const orderReqMsgs = await prisma.orderReqMsg.findMany()
    * ```
    */
  get orderReqMsg(): Prisma.OrderReqMsgDelegate<ExtArgs>;

  /**
   * `prisma.productList`: Exposes CRUD operations for the **ProductList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductLists
    * const productLists = await prisma.productList.findMany()
    * ```
    */
  get productList(): Prisma.ProductListDelegate<ExtArgs>;

  /**
   * `prisma.productListSub`: Exposes CRUD operations for the **ProductListSub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductListSubs
    * const productListSubs = await prisma.productListSub.findMany()
    * ```
    */
  get productListSub(): Prisma.ProductListSubDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productLog`: Exposes CRUD operations for the **ProductLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductLogs
    * const productLogs = await prisma.productLog.findMany()
    * ```
    */
  get productLog(): Prisma.ProductLogDelegate<ExtArgs>;

  /**
   * `prisma.productListWebBunryu`: Exposes CRUD operations for the **ProductListWebBunryu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductListWebBunryus
    * const productListWebBunryus = await prisma.productListWebBunryu.findMany()
    * ```
    */
  get productListWebBunryu(): Prisma.ProductListWebBunryuDelegate<ExtArgs>;

  /**
   * `prisma.productListImage`: Exposes CRUD operations for the **ProductListImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductListImages
    * const productListImages = await prisma.productListImage.findMany()
    * ```
    */
  get productListImage(): Prisma.ProductListImageDelegate<ExtArgs>;

  /**
   * `prisma.cs`: Exposes CRUD operations for the **Cs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cs
    * const cs = await prisma.cs.findMany()
    * ```
    */
  get cs(): Prisma.CsDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.paymentItem`: Exposes CRUD operations for the **PaymentItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentItems
    * const paymentItems = await prisma.paymentItem.findMany()
    * ```
    */
  get paymentItem(): Prisma.PaymentItemDelegate<ExtArgs>;

  /**
   * `prisma.paymentVirtual`: Exposes CRUD operations for the **PaymentVirtual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentVirtuals
    * const paymentVirtuals = await prisma.paymentVirtual.findMany()
    * ```
    */
  get paymentVirtual(): Prisma.PaymentVirtualDelegate<ExtArgs>;

  /**
   * `prisma.paymentRefund`: Exposes CRUD operations for the **PaymentRefund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRefunds
    * const paymentRefunds = await prisma.paymentRefund.findMany()
    * ```
    */
  get paymentRefund(): Prisma.PaymentRefundDelegate<ExtArgs>;

  /**
   * `prisma.em`: Exposes CRUD operations for the **Em** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ems
    * const ems = await prisma.em.findMany()
    * ```
    */
  get em(): Prisma.EmDelegate<ExtArgs>;

  /**
   * `prisma.newCpmMsg`: Exposes CRUD operations for the **NewCpmMsg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewCpmMsgs
    * const newCpmMsgs = await prisma.newCpmMsg.findMany()
    * ```
    */
  get newCpmMsg(): Prisma.NewCpmMsgDelegate<ExtArgs>;

  /**
   * `prisma.pgMsg`: Exposes CRUD operations for the **PgMsg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PgMsgs
    * const pgMsgs = await prisma.pgMsg.findMany()
    * ```
    */
  get pgMsg(): Prisma.PgMsgDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    OrderReqMsg: 'OrderReqMsg',
    ProductList: 'ProductList',
    ProductListSub: 'ProductListSub',
    Product: 'Product',
    ProductLog: 'ProductLog',
    ProductListWebBunryu: 'ProductListWebBunryu',
    ProductListImage: 'ProductListImage',
    Cs: 'Cs',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Payment: 'Payment',
    PaymentItem: 'PaymentItem',
    PaymentVirtual: 'PaymentVirtual',
    PaymentRefund: 'PaymentRefund',
    Em: 'Em',
    NewCpmMsg: 'NewCpmMsg',
    PgMsg: 'PgMsg'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'orderReqMsg' | 'productList' | 'productListSub' | 'product' | 'productLog' | 'productListWebBunryu' | 'productListImage' | 'cs' | 'cart' | 'cartItem' | 'payment' | 'paymentItem' | 'paymentVirtual' | 'paymentRefund' | 'em' | 'newCpmMsg' | 'pgMsg'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      OrderReqMsg: {
        payload: Prisma.$OrderReqMsgPayload<ExtArgs>
        fields: Prisma.OrderReqMsgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderReqMsgFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderReqMsgFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          findFirst: {
            args: Prisma.OrderReqMsgFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderReqMsgFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          findMany: {
            args: Prisma.OrderReqMsgFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>[]
          }
          create: {
            args: Prisma.OrderReqMsgCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          createMany: {
            args: Prisma.OrderReqMsgCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderReqMsgDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          update: {
            args: Prisma.OrderReqMsgUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          deleteMany: {
            args: Prisma.OrderReqMsgDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderReqMsgUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderReqMsgUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderReqMsgPayload>
          }
          aggregate: {
            args: Prisma.OrderReqMsgAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderReqMsg>
          }
          groupBy: {
            args: Prisma.OrderReqMsgGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderReqMsgGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderReqMsgCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderReqMsgCountAggregateOutputType> | number
          }
        }
      }
      ProductList: {
        payload: Prisma.$ProductListPayload<ExtArgs>
        fields: Prisma.ProductListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          findFirst: {
            args: Prisma.ProductListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          findMany: {
            args: Prisma.ProductListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>[]
          }
          create: {
            args: Prisma.ProductListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          createMany: {
            args: Prisma.ProductListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          update: {
            args: Prisma.ProductListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          deleteMany: {
            args: Prisma.ProductListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListPayload>
          }
          aggregate: {
            args: Prisma.ProductListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductList>
          }
          groupBy: {
            args: Prisma.ProductListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductListCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductListCountAggregateOutputType> | number
          }
        }
      }
      ProductListSub: {
        payload: Prisma.$ProductListSubPayload<ExtArgs>
        fields: Prisma.ProductListSubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductListSubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductListSubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          findFirst: {
            args: Prisma.ProductListSubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductListSubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          findMany: {
            args: Prisma.ProductListSubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>[]
          }
          create: {
            args: Prisma.ProductListSubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          createMany: {
            args: Prisma.ProductListSubCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductListSubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          update: {
            args: Prisma.ProductListSubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          deleteMany: {
            args: Prisma.ProductListSubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductListSubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductListSubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListSubPayload>
          }
          aggregate: {
            args: Prisma.ProductListSubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductListSub>
          }
          groupBy: {
            args: Prisma.ProductListSubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductListSubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductListSubCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductListSubCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductLog: {
        payload: Prisma.$ProductLogPayload<ExtArgs>
        fields: Prisma.ProductLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          findFirst: {
            args: Prisma.ProductLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          findMany: {
            args: Prisma.ProductLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>[]
          }
          create: {
            args: Prisma.ProductLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          createMany: {
            args: Prisma.ProductLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          update: {
            args: Prisma.ProductLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          deleteMany: {
            args: Prisma.ProductLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLogPayload>
          }
          aggregate: {
            args: Prisma.ProductLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductLog>
          }
          groupBy: {
            args: Prisma.ProductLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductLogCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductLogCountAggregateOutputType> | number
          }
        }
      }
      ProductListWebBunryu: {
        payload: Prisma.$ProductListWebBunryuPayload<ExtArgs>
        fields: Prisma.ProductListWebBunryuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductListWebBunryuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductListWebBunryuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          findFirst: {
            args: Prisma.ProductListWebBunryuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductListWebBunryuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          findMany: {
            args: Prisma.ProductListWebBunryuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>[]
          }
          create: {
            args: Prisma.ProductListWebBunryuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          createMany: {
            args: Prisma.ProductListWebBunryuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductListWebBunryuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          update: {
            args: Prisma.ProductListWebBunryuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          deleteMany: {
            args: Prisma.ProductListWebBunryuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductListWebBunryuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductListWebBunryuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListWebBunryuPayload>
          }
          aggregate: {
            args: Prisma.ProductListWebBunryuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductListWebBunryu>
          }
          groupBy: {
            args: Prisma.ProductListWebBunryuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductListWebBunryuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductListWebBunryuCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductListWebBunryuCountAggregateOutputType> | number
          }
        }
      }
      ProductListImage: {
        payload: Prisma.$ProductListImagePayload<ExtArgs>
        fields: Prisma.ProductListImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductListImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductListImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          findFirst: {
            args: Prisma.ProductListImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductListImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          findMany: {
            args: Prisma.ProductListImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>[]
          }
          create: {
            args: Prisma.ProductListImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          createMany: {
            args: Prisma.ProductListImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductListImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          update: {
            args: Prisma.ProductListImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductListImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductListImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductListImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductListImagePayload>
          }
          aggregate: {
            args: Prisma.ProductListImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductListImage>
          }
          groupBy: {
            args: Prisma.ProductListImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductListImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductListImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductListImageCountAggregateOutputType> | number
          }
        }
      }
      Cs: {
        payload: Prisma.$CsPayload<ExtArgs>
        fields: Prisma.CsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          findFirst: {
            args: Prisma.CsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          findMany: {
            args: Prisma.CsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>[]
          }
          create: {
            args: Prisma.CsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          createMany: {
            args: Prisma.CsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          update: {
            args: Prisma.CsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          deleteMany: {
            args: Prisma.CsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CsPayload>
          }
          aggregate: {
            args: Prisma.CsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCs>
          }
          groupBy: {
            args: Prisma.CsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CsCountArgs<ExtArgs>,
            result: $Utils.Optional<CsCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>,
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>,
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentItem: {
        payload: Prisma.$PaymentItemPayload<ExtArgs>
        fields: Prisma.PaymentItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          findFirst: {
            args: Prisma.PaymentItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          findMany: {
            args: Prisma.PaymentItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>[]
          }
          create: {
            args: Prisma.PaymentItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          createMany: {
            args: Prisma.PaymentItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          update: {
            args: Prisma.PaymentItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          deleteMany: {
            args: Prisma.PaymentItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentItemPayload>
          }
          aggregate: {
            args: Prisma.PaymentItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentItem>
          }
          groupBy: {
            args: Prisma.PaymentItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentItemCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentItemCountAggregateOutputType> | number
          }
        }
      }
      PaymentVirtual: {
        payload: Prisma.$PaymentVirtualPayload<ExtArgs>
        fields: Prisma.PaymentVirtualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentVirtualFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentVirtualFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          findFirst: {
            args: Prisma.PaymentVirtualFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentVirtualFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          findMany: {
            args: Prisma.PaymentVirtualFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>[]
          }
          create: {
            args: Prisma.PaymentVirtualCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          createMany: {
            args: Prisma.PaymentVirtualCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentVirtualDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          update: {
            args: Prisma.PaymentVirtualUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          deleteMany: {
            args: Prisma.PaymentVirtualDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentVirtualUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentVirtualUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentVirtualPayload>
          }
          aggregate: {
            args: Prisma.PaymentVirtualAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentVirtual>
          }
          groupBy: {
            args: Prisma.PaymentVirtualGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentVirtualGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentVirtualCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentVirtualCountAggregateOutputType> | number
          }
        }
      }
      PaymentRefund: {
        payload: Prisma.$PaymentRefundPayload<ExtArgs>
        fields: Prisma.PaymentRefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRefundFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRefundFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          findFirst: {
            args: Prisma.PaymentRefundFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRefundFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          findMany: {
            args: Prisma.PaymentRefundFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>[]
          }
          create: {
            args: Prisma.PaymentRefundCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          createMany: {
            args: Prisma.PaymentRefundCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentRefundDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          update: {
            args: Prisma.PaymentRefundUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRefundDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRefundUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentRefundUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentRefundPayload>
          }
          aggregate: {
            args: Prisma.PaymentRefundAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentRefund>
          }
          groupBy: {
            args: Prisma.PaymentRefundGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentRefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRefundCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentRefundCountAggregateOutputType> | number
          }
        }
      }
      Em: {
        payload: Prisma.$EmPayload<ExtArgs>
        fields: Prisma.EmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          findFirst: {
            args: Prisma.EmFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          findMany: {
            args: Prisma.EmFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>[]
          }
          create: {
            args: Prisma.EmCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          createMany: {
            args: Prisma.EmCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          update: {
            args: Prisma.EmUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          deleteMany: {
            args: Prisma.EmDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmPayload>
          }
          aggregate: {
            args: Prisma.EmAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEm>
          }
          groupBy: {
            args: Prisma.EmGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmCountArgs<ExtArgs>,
            result: $Utils.Optional<EmCountAggregateOutputType> | number
          }
        }
      }
      NewCpmMsg: {
        payload: Prisma.$NewCpmMsgPayload<ExtArgs>
        fields: Prisma.NewCpmMsgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewCpmMsgFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewCpmMsgFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          findFirst: {
            args: Prisma.NewCpmMsgFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewCpmMsgFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          findMany: {
            args: Prisma.NewCpmMsgFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>[]
          }
          create: {
            args: Prisma.NewCpmMsgCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          createMany: {
            args: Prisma.NewCpmMsgCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NewCpmMsgDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          update: {
            args: Prisma.NewCpmMsgUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          deleteMany: {
            args: Prisma.NewCpmMsgDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NewCpmMsgUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NewCpmMsgUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NewCpmMsgPayload>
          }
          aggregate: {
            args: Prisma.NewCpmMsgAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNewCpmMsg>
          }
          groupBy: {
            args: Prisma.NewCpmMsgGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NewCpmMsgGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewCpmMsgCountArgs<ExtArgs>,
            result: $Utils.Optional<NewCpmMsgCountAggregateOutputType> | number
          }
        }
      }
      PgMsg: {
        payload: Prisma.$PgMsgPayload<ExtArgs>
        fields: Prisma.PgMsgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PgMsgFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PgMsgFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          findFirst: {
            args: Prisma.PgMsgFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PgMsgFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          findMany: {
            args: Prisma.PgMsgFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>[]
          }
          create: {
            args: Prisma.PgMsgCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          createMany: {
            args: Prisma.PgMsgCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PgMsgDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          update: {
            args: Prisma.PgMsgUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          deleteMany: {
            args: Prisma.PgMsgDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PgMsgUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PgMsgUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PgMsgPayload>
          }
          aggregate: {
            args: Prisma.PgMsgAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePgMsg>
          }
          groupBy: {
            args: Prisma.PgMsgGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PgMsgGroupByOutputType>[]
          }
          count: {
            args: Prisma.PgMsgCountArgs<ExtArgs>,
            result: $Utils.Optional<PgMsgCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    orderReqMsg: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderReqMsg?: boolean | AccountCountOutputTypeCountOrderReqMsgArgs
  }

  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountOrderReqMsgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderReqMsgWhereInput
  }



  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cartItems: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | CartCountOutputTypeCountCartItemsArgs
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
  export type CartCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }



  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    paymentItems: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentItems?: boolean | PaymentCountOutputTypeCountPaymentItemsArgs
  }

  // Custom InputTypes

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountPaymentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: string | null
    password: string | null
    email: string | null
    ykiho: string | null
    saupkiho: string | null
    token: string | null
    expiryDate: Date | null
    admin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    password: string | null
    email: string | null
    ykiho: string | null
    saupkiho: string | null
    token: string | null
    expiryDate: Date | null
    admin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    email: number
    ykiho: number
    saupkiho: number
    token: number
    expiryDate: number
    admin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    email?: true
    ykiho?: true
    saupkiho?: true
    token?: true
    expiryDate?: true
    admin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    email?: true
    ykiho?: true
    saupkiho?: true
    token?: true
    expiryDate?: true
    admin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    email?: true
    ykiho?: true
    saupkiho?: true
    token?: true
    expiryDate?: true
    admin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    userId: string
    password: string
    email: string
    ykiho: string | null
    saupkiho: string | null
    token: string | null
    expiryDate: Date | null
    admin: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    email?: boolean
    ykiho?: boolean
    saupkiho?: boolean
    token?: boolean
    expiryDate?: boolean
    admin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderReqMsg?: boolean | Account$orderReqMsgArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    email?: boolean
    ykiho?: boolean
    saupkiho?: boolean
    token?: boolean
    expiryDate?: boolean
    admin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderReqMsg?: boolean | Account$orderReqMsgArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      orderReqMsg: Prisma.$OrderReqMsgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      password: string
      email: string
      ykiho: string | null
      saupkiho: string | null
      token: string | null
      expiryDate: Date | null
      admin: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orderReqMsg<T extends Account$orderReqMsgArgs<ExtArgs> = {}>(args?: Subset<T, Account$orderReqMsgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly ykiho: FieldRef<"Account", 'String'>
    readonly saupkiho: FieldRef<"Account", 'String'>
    readonly token: FieldRef<"Account", 'String'>
    readonly expiryDate: FieldRef<"Account", 'DateTime'>
    readonly admin: FieldRef<"Account", 'Boolean'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account.orderReqMsg
   */
  export type Account$orderReqMsgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    where?: OrderReqMsgWhereInput
    orderBy?: OrderReqMsgOrderByWithRelationInput | OrderReqMsgOrderByWithRelationInput[]
    cursor?: OrderReqMsgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderReqMsgScalarFieldEnum | OrderReqMsgScalarFieldEnum[]
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model OrderReqMsg
   */

  export type AggregateOrderReqMsg = {
    _count: OrderReqMsgCountAggregateOutputType | null
    _avg: OrderReqMsgAvgAggregateOutputType | null
    _sum: OrderReqMsgSumAggregateOutputType | null
    _min: OrderReqMsgMinAggregateOutputType | null
    _max: OrderReqMsgMaxAggregateOutputType | null
  }

  export type OrderReqMsgAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type OrderReqMsgSumAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type OrderReqMsgMinAggregateOutputType = {
    id: number | null
    accountId: number | null
    message: string | null
    updatedAt: Date | null
  }

  export type OrderReqMsgMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
    message: string | null
    updatedAt: Date | null
  }

  export type OrderReqMsgCountAggregateOutputType = {
    id: number
    accountId: number
    message: number
    updatedAt: number
    _all: number
  }


  export type OrderReqMsgAvgAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type OrderReqMsgSumAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type OrderReqMsgMinAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
    updatedAt?: true
  }

  export type OrderReqMsgMaxAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
    updatedAt?: true
  }

  export type OrderReqMsgCountAggregateInputType = {
    id?: true
    accountId?: true
    message?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderReqMsgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderReqMsg to aggregate.
     */
    where?: OrderReqMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderReqMsgs to fetch.
     */
    orderBy?: OrderReqMsgOrderByWithRelationInput | OrderReqMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderReqMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderReqMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderReqMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderReqMsgs
    **/
    _count?: true | OrderReqMsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderReqMsgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderReqMsgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderReqMsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderReqMsgMaxAggregateInputType
  }

  export type GetOrderReqMsgAggregateType<T extends OrderReqMsgAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderReqMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderReqMsg[P]>
      : GetScalarType<T[P], AggregateOrderReqMsg[P]>
  }




  export type OrderReqMsgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderReqMsgWhereInput
    orderBy?: OrderReqMsgOrderByWithAggregationInput | OrderReqMsgOrderByWithAggregationInput[]
    by: OrderReqMsgScalarFieldEnum[] | OrderReqMsgScalarFieldEnum
    having?: OrderReqMsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderReqMsgCountAggregateInputType | true
    _avg?: OrderReqMsgAvgAggregateInputType
    _sum?: OrderReqMsgSumAggregateInputType
    _min?: OrderReqMsgMinAggregateInputType
    _max?: OrderReqMsgMaxAggregateInputType
  }

  export type OrderReqMsgGroupByOutputType = {
    id: number
    accountId: number
    message: string
    updatedAt: Date
    _count: OrderReqMsgCountAggregateOutputType | null
    _avg: OrderReqMsgAvgAggregateOutputType | null
    _sum: OrderReqMsgSumAggregateOutputType | null
    _min: OrderReqMsgMinAggregateOutputType | null
    _max: OrderReqMsgMaxAggregateOutputType | null
  }

  type GetOrderReqMsgGroupByPayload<T extends OrderReqMsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderReqMsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderReqMsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderReqMsgGroupByOutputType[P]>
            : GetScalarType<T[P], OrderReqMsgGroupByOutputType[P]>
        }
      >
    >


  export type OrderReqMsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    message?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderReqMsg"]>

  export type OrderReqMsgSelectScalar = {
    id?: boolean
    accountId?: boolean
    message?: boolean
    updatedAt?: boolean
  }

  export type OrderReqMsgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }


  export type $OrderReqMsgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderReqMsg"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: number
      message: string
      updatedAt: Date
    }, ExtArgs["result"]["orderReqMsg"]>
    composites: {}
  }


  type OrderReqMsgGetPayload<S extends boolean | null | undefined | OrderReqMsgDefaultArgs> = $Result.GetResult<Prisma.$OrderReqMsgPayload, S>

  type OrderReqMsgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderReqMsgFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderReqMsgCountAggregateInputType | true
    }

  export interface OrderReqMsgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderReqMsg'], meta: { name: 'OrderReqMsg' } }
    /**
     * Find zero or one OrderReqMsg that matches the filter.
     * @param {OrderReqMsgFindUniqueArgs} args - Arguments to find a OrderReqMsg
     * @example
     * // Get one OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderReqMsgFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderReqMsg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderReqMsgFindUniqueOrThrowArgs} args - Arguments to find a OrderReqMsg
     * @example
     * // Get one OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderReqMsgFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderReqMsg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgFindFirstArgs} args - Arguments to find a OrderReqMsg
     * @example
     * // Get one OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderReqMsgFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgFindFirstArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderReqMsg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgFindFirstOrThrowArgs} args - Arguments to find a OrderReqMsg
     * @example
     * // Get one OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderReqMsgFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderReqMsgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderReqMsgs
     * const orderReqMsgs = await prisma.orderReqMsg.findMany()
     * 
     * // Get first 10 OrderReqMsgs
     * const orderReqMsgs = await prisma.orderReqMsg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderReqMsgWithIdOnly = await prisma.orderReqMsg.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderReqMsgFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderReqMsg.
     * @param {OrderReqMsgCreateArgs} args - Arguments to create a OrderReqMsg.
     * @example
     * // Create one OrderReqMsg
     * const OrderReqMsg = await prisma.orderReqMsg.create({
     *   data: {
     *     // ... data to create a OrderReqMsg
     *   }
     * })
     * 
    **/
    create<T extends OrderReqMsgCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgCreateArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderReqMsgs.
     *     @param {OrderReqMsgCreateManyArgs} args - Arguments to create many OrderReqMsgs.
     *     @example
     *     // Create many OrderReqMsgs
     *     const orderReqMsg = await prisma.orderReqMsg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderReqMsgCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderReqMsg.
     * @param {OrderReqMsgDeleteArgs} args - Arguments to delete one OrderReqMsg.
     * @example
     * // Delete one OrderReqMsg
     * const OrderReqMsg = await prisma.orderReqMsg.delete({
     *   where: {
     *     // ... filter to delete one OrderReqMsg
     *   }
     * })
     * 
    **/
    delete<T extends OrderReqMsgDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgDeleteArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderReqMsg.
     * @param {OrderReqMsgUpdateArgs} args - Arguments to update one OrderReqMsg.
     * @example
     * // Update one OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderReqMsgUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgUpdateArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderReqMsgs.
     * @param {OrderReqMsgDeleteManyArgs} args - Arguments to filter OrderReqMsgs to delete.
     * @example
     * // Delete a few OrderReqMsgs
     * const { count } = await prisma.orderReqMsg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderReqMsgDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderReqMsgDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderReqMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderReqMsgs
     * const orderReqMsg = await prisma.orderReqMsg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderReqMsgUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderReqMsg.
     * @param {OrderReqMsgUpsertArgs} args - Arguments to update or create a OrderReqMsg.
     * @example
     * // Update or create a OrderReqMsg
     * const orderReqMsg = await prisma.orderReqMsg.upsert({
     *   create: {
     *     // ... data to create a OrderReqMsg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderReqMsg we want to update
     *   }
     * })
    **/
    upsert<T extends OrderReqMsgUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderReqMsgUpsertArgs<ExtArgs>>
    ): Prisma__OrderReqMsgClient<$Result.GetResult<Prisma.$OrderReqMsgPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderReqMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgCountArgs} args - Arguments to filter OrderReqMsgs to count.
     * @example
     * // Count the number of OrderReqMsgs
     * const count = await prisma.orderReqMsg.count({
     *   where: {
     *     // ... the filter for the OrderReqMsgs we want to count
     *   }
     * })
    **/
    count<T extends OrderReqMsgCountArgs>(
      args?: Subset<T, OrderReqMsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderReqMsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderReqMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderReqMsgAggregateArgs>(args: Subset<T, OrderReqMsgAggregateArgs>): Prisma.PrismaPromise<GetOrderReqMsgAggregateType<T>>

    /**
     * Group by OrderReqMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderReqMsgGroupByArgs} args - Group by arguments.
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
      T extends OrderReqMsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderReqMsgGroupByArgs['orderBy'] }
        : { orderBy?: OrderReqMsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderReqMsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderReqMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderReqMsg model
   */
  readonly fields: OrderReqMsgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderReqMsg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderReqMsgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderReqMsg model
   */ 
  interface OrderReqMsgFieldRefs {
    readonly id: FieldRef<"OrderReqMsg", 'Int'>
    readonly accountId: FieldRef<"OrderReqMsg", 'Int'>
    readonly message: FieldRef<"OrderReqMsg", 'String'>
    readonly updatedAt: FieldRef<"OrderReqMsg", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * OrderReqMsg findUnique
   */
  export type OrderReqMsgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter, which OrderReqMsg to fetch.
     */
    where: OrderReqMsgWhereUniqueInput
  }


  /**
   * OrderReqMsg findUniqueOrThrow
   */
  export type OrderReqMsgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter, which OrderReqMsg to fetch.
     */
    where: OrderReqMsgWhereUniqueInput
  }


  /**
   * OrderReqMsg findFirst
   */
  export type OrderReqMsgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter, which OrderReqMsg to fetch.
     */
    where?: OrderReqMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderReqMsgs to fetch.
     */
    orderBy?: OrderReqMsgOrderByWithRelationInput | OrderReqMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderReqMsgs.
     */
    cursor?: OrderReqMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderReqMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderReqMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderReqMsgs.
     */
    distinct?: OrderReqMsgScalarFieldEnum | OrderReqMsgScalarFieldEnum[]
  }


  /**
   * OrderReqMsg findFirstOrThrow
   */
  export type OrderReqMsgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter, which OrderReqMsg to fetch.
     */
    where?: OrderReqMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderReqMsgs to fetch.
     */
    orderBy?: OrderReqMsgOrderByWithRelationInput | OrderReqMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderReqMsgs.
     */
    cursor?: OrderReqMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderReqMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderReqMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderReqMsgs.
     */
    distinct?: OrderReqMsgScalarFieldEnum | OrderReqMsgScalarFieldEnum[]
  }


  /**
   * OrderReqMsg findMany
   */
  export type OrderReqMsgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter, which OrderReqMsgs to fetch.
     */
    where?: OrderReqMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderReqMsgs to fetch.
     */
    orderBy?: OrderReqMsgOrderByWithRelationInput | OrderReqMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderReqMsgs.
     */
    cursor?: OrderReqMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderReqMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderReqMsgs.
     */
    skip?: number
    distinct?: OrderReqMsgScalarFieldEnum | OrderReqMsgScalarFieldEnum[]
  }


  /**
   * OrderReqMsg create
   */
  export type OrderReqMsgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderReqMsg.
     */
    data: XOR<OrderReqMsgCreateInput, OrderReqMsgUncheckedCreateInput>
  }


  /**
   * OrderReqMsg createMany
   */
  export type OrderReqMsgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderReqMsgs.
     */
    data: OrderReqMsgCreateManyInput | OrderReqMsgCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderReqMsg update
   */
  export type OrderReqMsgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderReqMsg.
     */
    data: XOR<OrderReqMsgUpdateInput, OrderReqMsgUncheckedUpdateInput>
    /**
     * Choose, which OrderReqMsg to update.
     */
    where: OrderReqMsgWhereUniqueInput
  }


  /**
   * OrderReqMsg updateMany
   */
  export type OrderReqMsgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderReqMsgs.
     */
    data: XOR<OrderReqMsgUpdateManyMutationInput, OrderReqMsgUncheckedUpdateManyInput>
    /**
     * Filter which OrderReqMsgs to update
     */
    where?: OrderReqMsgWhereInput
  }


  /**
   * OrderReqMsg upsert
   */
  export type OrderReqMsgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderReqMsg to update in case it exists.
     */
    where: OrderReqMsgWhereUniqueInput
    /**
     * In case the OrderReqMsg found by the `where` argument doesn't exist, create a new OrderReqMsg with this data.
     */
    create: XOR<OrderReqMsgCreateInput, OrderReqMsgUncheckedCreateInput>
    /**
     * In case the OrderReqMsg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderReqMsgUpdateInput, OrderReqMsgUncheckedUpdateInput>
  }


  /**
   * OrderReqMsg delete
   */
  export type OrderReqMsgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
    /**
     * Filter which OrderReqMsg to delete.
     */
    where: OrderReqMsgWhereUniqueInput
  }


  /**
   * OrderReqMsg deleteMany
   */
  export type OrderReqMsgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderReqMsgs to delete
     */
    where?: OrderReqMsgWhereInput
  }


  /**
   * OrderReqMsg without action
   */
  export type OrderReqMsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderReqMsg
     */
    select?: OrderReqMsgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderReqMsgInclude<ExtArgs> | null
  }



  /**
   * Model ProductList
   */

  export type AggregateProductList = {
    _count: ProductListCountAggregateOutputType | null
    _avg: ProductListAvgAggregateOutputType | null
    _sum: ProductListSumAggregateOutputType | null
    _min: ProductListMinAggregateOutputType | null
    _max: ProductListMaxAggregateOutputType | null
  }

  export type ProductListAvgAggregateOutputType = {
    step: number | null
  }

  export type ProductListSumAggregateOutputType = {
    step: number | null
  }

  export type ProductListMinAggregateOutputType = {
    jisa: string | null
    smCode: string | null
    smYmd: string | null
    addUser: string | null
    createDt: Date | null
    bigo: string | null
    web: boolean | null
    bunryu: string | null
    step: number | null
    fit: boolean | null
    card: boolean | null
  }

  export type ProductListMaxAggregateOutputType = {
    jisa: string | null
    smCode: string | null
    smYmd: string | null
    addUser: string | null
    createDt: Date | null
    bigo: string | null
    web: boolean | null
    bunryu: string | null
    step: number | null
    fit: boolean | null
    card: boolean | null
  }

  export type ProductListCountAggregateOutputType = {
    jisa: number
    smCode: number
    smYmd: number
    addUser: number
    createDt: number
    bigo: number
    web: number
    bunryu: number
    step: number
    fit: number
    card: number
    _all: number
  }


  export type ProductListAvgAggregateInputType = {
    step?: true
  }

  export type ProductListSumAggregateInputType = {
    step?: true
  }

  export type ProductListMinAggregateInputType = {
    jisa?: true
    smCode?: true
    smYmd?: true
    addUser?: true
    createDt?: true
    bigo?: true
    web?: true
    bunryu?: true
    step?: true
    fit?: true
    card?: true
  }

  export type ProductListMaxAggregateInputType = {
    jisa?: true
    smCode?: true
    smYmd?: true
    addUser?: true
    createDt?: true
    bigo?: true
    web?: true
    bunryu?: true
    step?: true
    fit?: true
    card?: true
  }

  export type ProductListCountAggregateInputType = {
    jisa?: true
    smCode?: true
    smYmd?: true
    addUser?: true
    createDt?: true
    bigo?: true
    web?: true
    bunryu?: true
    step?: true
    fit?: true
    card?: true
    _all?: true
  }

  export type ProductListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductList to aggregate.
     */
    where?: ProductListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLists to fetch.
     */
    orderBy?: ProductListOrderByWithRelationInput | ProductListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductLists
    **/
    _count?: true | ProductListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductListMaxAggregateInputType
  }

  export type GetProductListAggregateType<T extends ProductListAggregateArgs> = {
        [P in keyof T & keyof AggregateProductList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductList[P]>
      : GetScalarType<T[P], AggregateProductList[P]>
  }




  export type ProductListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductListWhereInput
    orderBy?: ProductListOrderByWithAggregationInput | ProductListOrderByWithAggregationInput[]
    by: ProductListScalarFieldEnum[] | ProductListScalarFieldEnum
    having?: ProductListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductListCountAggregateInputType | true
    _avg?: ProductListAvgAggregateInputType
    _sum?: ProductListSumAggregateInputType
    _min?: ProductListMinAggregateInputType
    _max?: ProductListMaxAggregateInputType
  }

  export type ProductListGroupByOutputType = {
    jisa: string
    smCode: string
    smYmd: string
    addUser: string
    createDt: Date
    bigo: string
    web: boolean
    bunryu: string
    step: number
    fit: boolean
    card: boolean
    _count: ProductListCountAggregateOutputType | null
    _avg: ProductListAvgAggregateOutputType | null
    _sum: ProductListSumAggregateOutputType | null
    _min: ProductListMinAggregateOutputType | null
    _max: ProductListMaxAggregateOutputType | null
  }

  type GetProductListGroupByPayload<T extends ProductListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductListGroupByOutputType[P]>
            : GetScalarType<T[P], ProductListGroupByOutputType[P]>
        }
      >
    >


  export type ProductListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jisa?: boolean
    smCode?: boolean
    smYmd?: boolean
    addUser?: boolean
    createDt?: boolean
    bigo?: boolean
    web?: boolean
    bunryu?: boolean
    step?: boolean
    fit?: boolean
    card?: boolean
  }, ExtArgs["result"]["productList"]>

  export type ProductListSelectScalar = {
    jisa?: boolean
    smCode?: boolean
    smYmd?: boolean
    addUser?: boolean
    createDt?: boolean
    bigo?: boolean
    web?: boolean
    bunryu?: boolean
    step?: boolean
    fit?: boolean
    card?: boolean
  }


  export type $ProductListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      jisa: string
      smCode: string
      smYmd: string
      addUser: string
      createDt: Date
      bigo: string
      web: boolean
      bunryu: string
      step: number
      fit: boolean
      card: boolean
    }, ExtArgs["result"]["productList"]>
    composites: {}
  }


  type ProductListGetPayload<S extends boolean | null | undefined | ProductListDefaultArgs> = $Result.GetResult<Prisma.$ProductListPayload, S>

  type ProductListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductListFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductListCountAggregateInputType | true
    }

  export interface ProductListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductList'], meta: { name: 'ProductList' } }
    /**
     * Find zero or one ProductList that matches the filter.
     * @param {ProductListFindUniqueArgs} args - Arguments to find a ProductList
     * @example
     * // Get one ProductList
     * const productList = await prisma.productList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductListFindUniqueOrThrowArgs} args - Arguments to find a ProductList
     * @example
     * // Get one ProductList
     * const productList = await prisma.productList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListFindFirstArgs} args - Arguments to find a ProductList
     * @example
     * // Get one ProductList
     * const productList = await prisma.productList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListFindFirstArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListFindFirstOrThrowArgs} args - Arguments to find a ProductList
     * @example
     * // Get one ProductList
     * const productList = await prisma.productList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductLists
     * const productLists = await prisma.productList.findMany()
     * 
     * // Get first 10 ProductLists
     * const productLists = await prisma.productList.findMany({ take: 10 })
     * 
     * // Only select the `jisa`
     * const productListWithJisaOnly = await prisma.productList.findMany({ select: { jisa: true } })
     * 
    **/
    findMany<T extends ProductListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductList.
     * @param {ProductListCreateArgs} args - Arguments to create a ProductList.
     * @example
     * // Create one ProductList
     * const ProductList = await prisma.productList.create({
     *   data: {
     *     // ... data to create a ProductList
     *   }
     * })
     * 
    **/
    create<T extends ProductListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListCreateArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductLists.
     *     @param {ProductListCreateManyArgs} args - Arguments to create many ProductLists.
     *     @example
     *     // Create many ProductLists
     *     const productList = await prisma.productList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductList.
     * @param {ProductListDeleteArgs} args - Arguments to delete one ProductList.
     * @example
     * // Delete one ProductList
     * const ProductList = await prisma.productList.delete({
     *   where: {
     *     // ... filter to delete one ProductList
     *   }
     * })
     * 
    **/
    delete<T extends ProductListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListDeleteArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductList.
     * @param {ProductListUpdateArgs} args - Arguments to update one ProductList.
     * @example
     * // Update one ProductList
     * const productList = await prisma.productList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListUpdateArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductLists.
     * @param {ProductListDeleteManyArgs} args - Arguments to filter ProductLists to delete.
     * @example
     * // Delete a few ProductLists
     * const { count } = await prisma.productList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductLists
     * const productList = await prisma.productList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductList.
     * @param {ProductListUpsertArgs} args - Arguments to update or create a ProductList.
     * @example
     * // Update or create a ProductList
     * const productList = await prisma.productList.upsert({
     *   create: {
     *     // ... data to create a ProductList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductList we want to update
     *   }
     * })
    **/
    upsert<T extends ProductListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListUpsertArgs<ExtArgs>>
    ): Prisma__ProductListClient<$Result.GetResult<Prisma.$ProductListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListCountArgs} args - Arguments to filter ProductLists to count.
     * @example
     * // Count the number of ProductLists
     * const count = await prisma.productList.count({
     *   where: {
     *     // ... the filter for the ProductLists we want to count
     *   }
     * })
    **/
    count<T extends ProductListCountArgs>(
      args?: Subset<T, ProductListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductListAggregateArgs>(args: Subset<T, ProductListAggregateArgs>): Prisma.PrismaPromise<GetProductListAggregateType<T>>

    /**
     * Group by ProductList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListGroupByArgs} args - Group by arguments.
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
      T extends ProductListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductListGroupByArgs['orderBy'] }
        : { orderBy?: ProductListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductList model
   */
  readonly fields: ProductListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductList model
   */ 
  interface ProductListFieldRefs {
    readonly jisa: FieldRef<"ProductList", 'String'>
    readonly smCode: FieldRef<"ProductList", 'String'>
    readonly smYmd: FieldRef<"ProductList", 'String'>
    readonly addUser: FieldRef<"ProductList", 'String'>
    readonly createDt: FieldRef<"ProductList", 'DateTime'>
    readonly bigo: FieldRef<"ProductList", 'String'>
    readonly web: FieldRef<"ProductList", 'Boolean'>
    readonly bunryu: FieldRef<"ProductList", 'String'>
    readonly step: FieldRef<"ProductList", 'Int'>
    readonly fit: FieldRef<"ProductList", 'Boolean'>
    readonly card: FieldRef<"ProductList", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ProductList findUnique
   */
  export type ProductListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter, which ProductList to fetch.
     */
    where: ProductListWhereUniqueInput
  }


  /**
   * ProductList findUniqueOrThrow
   */
  export type ProductListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter, which ProductList to fetch.
     */
    where: ProductListWhereUniqueInput
  }


  /**
   * ProductList findFirst
   */
  export type ProductListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter, which ProductList to fetch.
     */
    where?: ProductListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLists to fetch.
     */
    orderBy?: ProductListOrderByWithRelationInput | ProductListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLists.
     */
    cursor?: ProductListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLists.
     */
    distinct?: ProductListScalarFieldEnum | ProductListScalarFieldEnum[]
  }


  /**
   * ProductList findFirstOrThrow
   */
  export type ProductListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter, which ProductList to fetch.
     */
    where?: ProductListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLists to fetch.
     */
    orderBy?: ProductListOrderByWithRelationInput | ProductListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLists.
     */
    cursor?: ProductListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLists.
     */
    distinct?: ProductListScalarFieldEnum | ProductListScalarFieldEnum[]
  }


  /**
   * ProductList findMany
   */
  export type ProductListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter, which ProductLists to fetch.
     */
    where?: ProductListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLists to fetch.
     */
    orderBy?: ProductListOrderByWithRelationInput | ProductListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductLists.
     */
    cursor?: ProductListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLists.
     */
    skip?: number
    distinct?: ProductListScalarFieldEnum | ProductListScalarFieldEnum[]
  }


  /**
   * ProductList create
   */
  export type ProductListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductList.
     */
    data: XOR<ProductListCreateInput, ProductListUncheckedCreateInput>
  }


  /**
   * ProductList createMany
   */
  export type ProductListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductLists.
     */
    data: ProductListCreateManyInput | ProductListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductList update
   */
  export type ProductListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductList.
     */
    data: XOR<ProductListUpdateInput, ProductListUncheckedUpdateInput>
    /**
     * Choose, which ProductList to update.
     */
    where: ProductListWhereUniqueInput
  }


  /**
   * ProductList updateMany
   */
  export type ProductListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductLists.
     */
    data: XOR<ProductListUpdateManyMutationInput, ProductListUncheckedUpdateManyInput>
    /**
     * Filter which ProductLists to update
     */
    where?: ProductListWhereInput
  }


  /**
   * ProductList upsert
   */
  export type ProductListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductList to update in case it exists.
     */
    where: ProductListWhereUniqueInput
    /**
     * In case the ProductList found by the `where` argument doesn't exist, create a new ProductList with this data.
     */
    create: XOR<ProductListCreateInput, ProductListUncheckedCreateInput>
    /**
     * In case the ProductList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductListUpdateInput, ProductListUncheckedUpdateInput>
  }


  /**
   * ProductList delete
   */
  export type ProductListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
    /**
     * Filter which ProductList to delete.
     */
    where: ProductListWhereUniqueInput
  }


  /**
   * ProductList deleteMany
   */
  export type ProductListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductLists to delete
     */
    where?: ProductListWhereInput
  }


  /**
   * ProductList without action
   */
  export type ProductListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductList
     */
    select?: ProductListSelect<ExtArgs> | null
  }



  /**
   * Model ProductListSub
   */

  export type AggregateProductListSub = {
    _count: ProductListSubCountAggregateOutputType | null
    _avg: ProductListSubAvgAggregateOutputType | null
    _sum: ProductListSubSumAggregateOutputType | null
    _min: ProductListSubMinAggregateOutputType | null
    _max: ProductListSubMaxAggregateOutputType | null
  }

  export type ProductListSubAvgAggregateOutputType = {
    auto: number | null
    danga: number | null
  }

  export type ProductListSubSumAggregateOutputType = {
    auto: number | null
    danga: number | null
  }

  export type ProductListSubMinAggregateOutputType = {
    auto: number | null
    jisa: string | null
    smCode: string | null
    smMyung: string | null
    smYmd: string | null
    danga: number | null
    danwi: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
  }

  export type ProductListSubMaxAggregateOutputType = {
    auto: number | null
    jisa: string | null
    smCode: string | null
    smMyung: string | null
    smYmd: string | null
    danga: number | null
    danwi: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
  }

  export type ProductListSubCountAggregateOutputType = {
    auto: number
    jisa: number
    smCode: number
    smMyung: number
    smYmd: number
    danga: number
    danwi: number
    etc1: number
    etc2: number
    etc3: number
    etc4: number
    etc5: number
    _all: number
  }


  export type ProductListSubAvgAggregateInputType = {
    auto?: true
    danga?: true
  }

  export type ProductListSubSumAggregateInputType = {
    auto?: true
    danga?: true
  }

  export type ProductListSubMinAggregateInputType = {
    auto?: true
    jisa?: true
    smCode?: true
    smMyung?: true
    smYmd?: true
    danga?: true
    danwi?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
  }

  export type ProductListSubMaxAggregateInputType = {
    auto?: true
    jisa?: true
    smCode?: true
    smMyung?: true
    smYmd?: true
    danga?: true
    danwi?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
  }

  export type ProductListSubCountAggregateInputType = {
    auto?: true
    jisa?: true
    smCode?: true
    smMyung?: true
    smYmd?: true
    danga?: true
    danwi?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    _all?: true
  }

  export type ProductListSubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListSub to aggregate.
     */
    where?: ProductListSubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListSubs to fetch.
     */
    orderBy?: ProductListSubOrderByWithRelationInput | ProductListSubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductListSubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListSubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListSubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductListSubs
    **/
    _count?: true | ProductListSubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductListSubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductListSubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductListSubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductListSubMaxAggregateInputType
  }

  export type GetProductListSubAggregateType<T extends ProductListSubAggregateArgs> = {
        [P in keyof T & keyof AggregateProductListSub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductListSub[P]>
      : GetScalarType<T[P], AggregateProductListSub[P]>
  }




  export type ProductListSubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductListSubWhereInput
    orderBy?: ProductListSubOrderByWithAggregationInput | ProductListSubOrderByWithAggregationInput[]
    by: ProductListSubScalarFieldEnum[] | ProductListSubScalarFieldEnum
    having?: ProductListSubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductListSubCountAggregateInputType | true
    _avg?: ProductListSubAvgAggregateInputType
    _sum?: ProductListSubSumAggregateInputType
    _min?: ProductListSubMinAggregateInputType
    _max?: ProductListSubMaxAggregateInputType
  }

  export type ProductListSubGroupByOutputType = {
    auto: number
    jisa: string
    smCode: string
    smMyung: string
    smYmd: string
    danga: number
    danwi: string
    etc1: string
    etc2: string
    etc3: string
    etc4: string
    etc5: string
    _count: ProductListSubCountAggregateOutputType | null
    _avg: ProductListSubAvgAggregateOutputType | null
    _sum: ProductListSubSumAggregateOutputType | null
    _min: ProductListSubMinAggregateOutputType | null
    _max: ProductListSubMaxAggregateOutputType | null
  }

  type GetProductListSubGroupByPayload<T extends ProductListSubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductListSubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductListSubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductListSubGroupByOutputType[P]>
            : GetScalarType<T[P], ProductListSubGroupByOutputType[P]>
        }
      >
    >


  export type ProductListSubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auto?: boolean
    jisa?: boolean
    smCode?: boolean
    smMyung?: boolean
    smYmd?: boolean
    danga?: boolean
    danwi?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
  }, ExtArgs["result"]["productListSub"]>

  export type ProductListSubSelectScalar = {
    auto?: boolean
    jisa?: boolean
    smCode?: boolean
    smMyung?: boolean
    smYmd?: boolean
    danga?: boolean
    danwi?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
  }


  export type $ProductListSubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductListSub"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auto: number
      jisa: string
      smCode: string
      smMyung: string
      smYmd: string
      danga: number
      danwi: string
      etc1: string
      etc2: string
      etc3: string
      etc4: string
      etc5: string
    }, ExtArgs["result"]["productListSub"]>
    composites: {}
  }


  type ProductListSubGetPayload<S extends boolean | null | undefined | ProductListSubDefaultArgs> = $Result.GetResult<Prisma.$ProductListSubPayload, S>

  type ProductListSubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductListSubFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductListSubCountAggregateInputType | true
    }

  export interface ProductListSubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductListSub'], meta: { name: 'ProductListSub' } }
    /**
     * Find zero or one ProductListSub that matches the filter.
     * @param {ProductListSubFindUniqueArgs} args - Arguments to find a ProductListSub
     * @example
     * // Get one ProductListSub
     * const productListSub = await prisma.productListSub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductListSubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductListSub that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductListSubFindUniqueOrThrowArgs} args - Arguments to find a ProductListSub
     * @example
     * // Get one ProductListSub
     * const productListSub = await prisma.productListSub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductListSubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductListSub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubFindFirstArgs} args - Arguments to find a ProductListSub
     * @example
     * // Get one ProductListSub
     * const productListSub = await prisma.productListSub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductListSubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubFindFirstArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductListSub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubFindFirstOrThrowArgs} args - Arguments to find a ProductListSub
     * @example
     * // Get one ProductListSub
     * const productListSub = await prisma.productListSub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductListSubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductListSubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductListSubs
     * const productListSubs = await prisma.productListSub.findMany()
     * 
     * // Get first 10 ProductListSubs
     * const productListSubs = await prisma.productListSub.findMany({ take: 10 })
     * 
     * // Only select the `auto`
     * const productListSubWithAutoOnly = await prisma.productListSub.findMany({ select: { auto: true } })
     * 
    **/
    findMany<T extends ProductListSubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductListSub.
     * @param {ProductListSubCreateArgs} args - Arguments to create a ProductListSub.
     * @example
     * // Create one ProductListSub
     * const ProductListSub = await prisma.productListSub.create({
     *   data: {
     *     // ... data to create a ProductListSub
     *   }
     * })
     * 
    **/
    create<T extends ProductListSubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubCreateArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductListSubs.
     *     @param {ProductListSubCreateManyArgs} args - Arguments to create many ProductListSubs.
     *     @example
     *     // Create many ProductListSubs
     *     const productListSub = await prisma.productListSub.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductListSubCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductListSub.
     * @param {ProductListSubDeleteArgs} args - Arguments to delete one ProductListSub.
     * @example
     * // Delete one ProductListSub
     * const ProductListSub = await prisma.productListSub.delete({
     *   where: {
     *     // ... filter to delete one ProductListSub
     *   }
     * })
     * 
    **/
    delete<T extends ProductListSubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubDeleteArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductListSub.
     * @param {ProductListSubUpdateArgs} args - Arguments to update one ProductListSub.
     * @example
     * // Update one ProductListSub
     * const productListSub = await prisma.productListSub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductListSubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubUpdateArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductListSubs.
     * @param {ProductListSubDeleteManyArgs} args - Arguments to filter ProductListSubs to delete.
     * @example
     * // Delete a few ProductListSubs
     * const { count } = await prisma.productListSub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductListSubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListSubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductListSubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductListSubs
     * const productListSub = await prisma.productListSub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductListSubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductListSub.
     * @param {ProductListSubUpsertArgs} args - Arguments to update or create a ProductListSub.
     * @example
     * // Update or create a ProductListSub
     * const productListSub = await prisma.productListSub.upsert({
     *   create: {
     *     // ... data to create a ProductListSub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductListSub we want to update
     *   }
     * })
    **/
    upsert<T extends ProductListSubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListSubUpsertArgs<ExtArgs>>
    ): Prisma__ProductListSubClient<$Result.GetResult<Prisma.$ProductListSubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductListSubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubCountArgs} args - Arguments to filter ProductListSubs to count.
     * @example
     * // Count the number of ProductListSubs
     * const count = await prisma.productListSub.count({
     *   where: {
     *     // ... the filter for the ProductListSubs we want to count
     *   }
     * })
    **/
    count<T extends ProductListSubCountArgs>(
      args?: Subset<T, ProductListSubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductListSubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductListSub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductListSubAggregateArgs>(args: Subset<T, ProductListSubAggregateArgs>): Prisma.PrismaPromise<GetProductListSubAggregateType<T>>

    /**
     * Group by ProductListSub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListSubGroupByArgs} args - Group by arguments.
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
      T extends ProductListSubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductListSubGroupByArgs['orderBy'] }
        : { orderBy?: ProductListSubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductListSubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductListSubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductListSub model
   */
  readonly fields: ProductListSubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductListSub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductListSubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductListSub model
   */ 
  interface ProductListSubFieldRefs {
    readonly auto: FieldRef<"ProductListSub", 'Int'>
    readonly jisa: FieldRef<"ProductListSub", 'String'>
    readonly smCode: FieldRef<"ProductListSub", 'String'>
    readonly smMyung: FieldRef<"ProductListSub", 'String'>
    readonly smYmd: FieldRef<"ProductListSub", 'String'>
    readonly danga: FieldRef<"ProductListSub", 'Float'>
    readonly danwi: FieldRef<"ProductListSub", 'String'>
    readonly etc1: FieldRef<"ProductListSub", 'String'>
    readonly etc2: FieldRef<"ProductListSub", 'String'>
    readonly etc3: FieldRef<"ProductListSub", 'String'>
    readonly etc4: FieldRef<"ProductListSub", 'String'>
    readonly etc5: FieldRef<"ProductListSub", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductListSub findUnique
   */
  export type ProductListSubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter, which ProductListSub to fetch.
     */
    where: ProductListSubWhereUniqueInput
  }


  /**
   * ProductListSub findUniqueOrThrow
   */
  export type ProductListSubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter, which ProductListSub to fetch.
     */
    where: ProductListSubWhereUniqueInput
  }


  /**
   * ProductListSub findFirst
   */
  export type ProductListSubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter, which ProductListSub to fetch.
     */
    where?: ProductListSubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListSubs to fetch.
     */
    orderBy?: ProductListSubOrderByWithRelationInput | ProductListSubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListSubs.
     */
    cursor?: ProductListSubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListSubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListSubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListSubs.
     */
    distinct?: ProductListSubScalarFieldEnum | ProductListSubScalarFieldEnum[]
  }


  /**
   * ProductListSub findFirstOrThrow
   */
  export type ProductListSubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter, which ProductListSub to fetch.
     */
    where?: ProductListSubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListSubs to fetch.
     */
    orderBy?: ProductListSubOrderByWithRelationInput | ProductListSubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListSubs.
     */
    cursor?: ProductListSubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListSubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListSubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListSubs.
     */
    distinct?: ProductListSubScalarFieldEnum | ProductListSubScalarFieldEnum[]
  }


  /**
   * ProductListSub findMany
   */
  export type ProductListSubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter, which ProductListSubs to fetch.
     */
    where?: ProductListSubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListSubs to fetch.
     */
    orderBy?: ProductListSubOrderByWithRelationInput | ProductListSubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductListSubs.
     */
    cursor?: ProductListSubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListSubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListSubs.
     */
    skip?: number
    distinct?: ProductListSubScalarFieldEnum | ProductListSubScalarFieldEnum[]
  }


  /**
   * ProductListSub create
   */
  export type ProductListSubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductListSub.
     */
    data: XOR<ProductListSubCreateInput, ProductListSubUncheckedCreateInput>
  }


  /**
   * ProductListSub createMany
   */
  export type ProductListSubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductListSubs.
     */
    data: ProductListSubCreateManyInput | ProductListSubCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductListSub update
   */
  export type ProductListSubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductListSub.
     */
    data: XOR<ProductListSubUpdateInput, ProductListSubUncheckedUpdateInput>
    /**
     * Choose, which ProductListSub to update.
     */
    where: ProductListSubWhereUniqueInput
  }


  /**
   * ProductListSub updateMany
   */
  export type ProductListSubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductListSubs.
     */
    data: XOR<ProductListSubUpdateManyMutationInput, ProductListSubUncheckedUpdateManyInput>
    /**
     * Filter which ProductListSubs to update
     */
    where?: ProductListSubWhereInput
  }


  /**
   * ProductListSub upsert
   */
  export type ProductListSubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductListSub to update in case it exists.
     */
    where: ProductListSubWhereUniqueInput
    /**
     * In case the ProductListSub found by the `where` argument doesn't exist, create a new ProductListSub with this data.
     */
    create: XOR<ProductListSubCreateInput, ProductListSubUncheckedCreateInput>
    /**
     * In case the ProductListSub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductListSubUpdateInput, ProductListSubUncheckedUpdateInput>
  }


  /**
   * ProductListSub delete
   */
  export type ProductListSubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
    /**
     * Filter which ProductListSub to delete.
     */
    where: ProductListSubWhereUniqueInput
  }


  /**
   * ProductListSub deleteMany
   */
  export type ProductListSubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListSubs to delete
     */
    where?: ProductListSubWhereInput
  }


  /**
   * ProductListSub without action
   */
  export type ProductListSubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListSub
     */
    select?: ProductListSubSelect<ExtArgs> | null
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
    auto: number | null
    count: number | null
    webPaymentItemId: number | null
  }

  export type ProductSumAggregateOutputType = {
    auto: number | null
    count: number | null
    webPaymentItemId: number | null
  }

  export type ProductMinAggregateOutputType = {
    auto: number | null
    clCode: string | null
    jisa: string | null
    csCode: string | null
    ctTel: string | null
    count: number | null
    receive: string | null
    receiveYmd: string | null
    sell: string | null
    sellYmd: string | null
    orderCheck: string | null
    seller: string | null
    check: string | null
    check2: string | null
    rgb: string | null
    bigo: string | null
    createDt: Date | null
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean | null
    webPaymentItemId: number | null
    webBNPL: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    auto: number | null
    clCode: string | null
    jisa: string | null
    csCode: string | null
    ctTel: string | null
    count: number | null
    receive: string | null
    receiveYmd: string | null
    sell: string | null
    sellYmd: string | null
    orderCheck: string | null
    seller: string | null
    check: string | null
    check2: string | null
    rgb: string | null
    bigo: string | null
    createDt: Date | null
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean | null
    webPaymentItemId: number | null
    webBNPL: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    auto: number
    clCode: number
    jisa: number
    csCode: number
    ctTel: number
    count: number
    receive: number
    receiveYmd: number
    sell: number
    sellYmd: number
    orderCheck: number
    seller: number
    check: number
    check2: number
    rgb: number
    bigo: number
    createDt: number
    bigo2: number
    etc1: number
    etc2: number
    etc3: number
    etc4: number
    etc5: number
    web: number
    webPaymentItemId: number
    webBNPL: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    auto?: true
    count?: true
    webPaymentItemId?: true
  }

  export type ProductSumAggregateInputType = {
    auto?: true
    count?: true
    webPaymentItemId?: true
  }

  export type ProductMinAggregateInputType = {
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
  }

  export type ProductMaxAggregateInputType = {
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
  }

  export type ProductCountAggregateInputType = {
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
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
    auto: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt: Date
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean
    webPaymentItemId: number | null
    webBNPL: boolean
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
    auto?: boolean
    clCode?: boolean
    jisa?: boolean
    csCode?: boolean
    ctTel?: boolean
    count?: boolean
    receive?: boolean
    receiveYmd?: boolean
    sell?: boolean
    sellYmd?: boolean
    orderCheck?: boolean
    seller?: boolean
    check?: boolean
    check2?: boolean
    rgb?: boolean
    bigo?: boolean
    createDt?: boolean
    bigo2?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
    web?: boolean
    webPaymentItemId?: boolean
    webBNPL?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    auto?: boolean
    clCode?: boolean
    jisa?: boolean
    csCode?: boolean
    ctTel?: boolean
    count?: boolean
    receive?: boolean
    receiveYmd?: boolean
    sell?: boolean
    sellYmd?: boolean
    orderCheck?: boolean
    seller?: boolean
    check?: boolean
    check2?: boolean
    rgb?: boolean
    bigo?: boolean
    createDt?: boolean
    bigo2?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
    web?: boolean
    webPaymentItemId?: boolean
    webBNPL?: boolean
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auto: number
      clCode: string
      jisa: string
      csCode: string
      ctTel: string
      count: number
      receive: string
      receiveYmd: string
      sell: string
      sellYmd: string
      orderCheck: string
      seller: string
      check: string
      check2: string
      rgb: string
      bigo: string
      createDt: Date
      bigo2: string | null
      etc1: string | null
      etc2: string | null
      etc3: string | null
      etc4: string | null
      etc5: string | null
      web: boolean
      webPaymentItemId: number | null
      webBNPL: boolean
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `auto`
     * const productWithAutoOnly = await prisma.product.findMany({ select: { auto: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly auto: FieldRef<"Product", 'Int'>
    readonly clCode: FieldRef<"Product", 'String'>
    readonly jisa: FieldRef<"Product", 'String'>
    readonly csCode: FieldRef<"Product", 'String'>
    readonly ctTel: FieldRef<"Product", 'String'>
    readonly count: FieldRef<"Product", 'Int'>
    readonly receive: FieldRef<"Product", 'String'>
    readonly receiveYmd: FieldRef<"Product", 'String'>
    readonly sell: FieldRef<"Product", 'String'>
    readonly sellYmd: FieldRef<"Product", 'String'>
    readonly orderCheck: FieldRef<"Product", 'String'>
    readonly seller: FieldRef<"Product", 'String'>
    readonly check: FieldRef<"Product", 'String'>
    readonly check2: FieldRef<"Product", 'String'>
    readonly rgb: FieldRef<"Product", 'String'>
    readonly bigo: FieldRef<"Product", 'String'>
    readonly createDt: FieldRef<"Product", 'DateTime'>
    readonly bigo2: FieldRef<"Product", 'String'>
    readonly etc1: FieldRef<"Product", 'String'>
    readonly etc2: FieldRef<"Product", 'String'>
    readonly etc3: FieldRef<"Product", 'String'>
    readonly etc4: FieldRef<"Product", 'String'>
    readonly etc5: FieldRef<"Product", 'String'>
    readonly web: FieldRef<"Product", 'Boolean'>
    readonly webPaymentItemId: FieldRef<"Product", 'Int'>
    readonly webBNPL: FieldRef<"Product", 'Boolean'>
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
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
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
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
  }



  /**
   * Model ProductLog
   */

  export type AggregateProductLog = {
    _count: ProductLogCountAggregateOutputType | null
    _avg: ProductLogAvgAggregateOutputType | null
    _sum: ProductLogSumAggregateOutputType | null
    _min: ProductLogMinAggregateOutputType | null
    _max: ProductLogMaxAggregateOutputType | null
  }

  export type ProductLogAvgAggregateOutputType = {
    logAuto: number | null
    auto: number | null
    count: number | null
    webPaymentItemId: number | null
  }

  export type ProductLogSumAggregateOutputType = {
    logAuto: number | null
    auto: number | null
    count: number | null
    webPaymentItemId: number | null
  }

  export type ProductLogMinAggregateOutputType = {
    logAuto: number | null
    logDatetime: Date | null
    logGubun: string | null
    logUser: string | null
    logComputer: string | null
    auto: number | null
    clCode: string | null
    jisa: string | null
    csCode: string | null
    ctTel: string | null
    count: number | null
    receive: string | null
    receiveYmd: string | null
    sell: string | null
    sellYmd: string | null
    orderCheck: string | null
    seller: string | null
    check: string | null
    check2: string | null
    rgb: string | null
    bigo: string | null
    createDt: Date | null
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean | null
    webPaymentItemId: number | null
    webBNPL: boolean | null
  }

  export type ProductLogMaxAggregateOutputType = {
    logAuto: number | null
    logDatetime: Date | null
    logGubun: string | null
    logUser: string | null
    logComputer: string | null
    auto: number | null
    clCode: string | null
    jisa: string | null
    csCode: string | null
    ctTel: string | null
    count: number | null
    receive: string | null
    receiveYmd: string | null
    sell: string | null
    sellYmd: string | null
    orderCheck: string | null
    seller: string | null
    check: string | null
    check2: string | null
    rgb: string | null
    bigo: string | null
    createDt: Date | null
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean | null
    webPaymentItemId: number | null
    webBNPL: boolean | null
  }

  export type ProductLogCountAggregateOutputType = {
    logAuto: number
    logDatetime: number
    logGubun: number
    logUser: number
    logComputer: number
    auto: number
    clCode: number
    jisa: number
    csCode: number
    ctTel: number
    count: number
    receive: number
    receiveYmd: number
    sell: number
    sellYmd: number
    orderCheck: number
    seller: number
    check: number
    check2: number
    rgb: number
    bigo: number
    createDt: number
    bigo2: number
    etc1: number
    etc2: number
    etc3: number
    etc4: number
    etc5: number
    web: number
    webPaymentItemId: number
    webBNPL: number
    _all: number
  }


  export type ProductLogAvgAggregateInputType = {
    logAuto?: true
    auto?: true
    count?: true
    webPaymentItemId?: true
  }

  export type ProductLogSumAggregateInputType = {
    logAuto?: true
    auto?: true
    count?: true
    webPaymentItemId?: true
  }

  export type ProductLogMinAggregateInputType = {
    logAuto?: true
    logDatetime?: true
    logGubun?: true
    logUser?: true
    logComputer?: true
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
  }

  export type ProductLogMaxAggregateInputType = {
    logAuto?: true
    logDatetime?: true
    logGubun?: true
    logUser?: true
    logComputer?: true
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
  }

  export type ProductLogCountAggregateInputType = {
    logAuto?: true
    logDatetime?: true
    logGubun?: true
    logUser?: true
    logComputer?: true
    auto?: true
    clCode?: true
    jisa?: true
    csCode?: true
    ctTel?: true
    count?: true
    receive?: true
    receiveYmd?: true
    sell?: true
    sellYmd?: true
    orderCheck?: true
    seller?: true
    check?: true
    check2?: true
    rgb?: true
    bigo?: true
    createDt?: true
    bigo2?: true
    etc1?: true
    etc2?: true
    etc3?: true
    etc4?: true
    etc5?: true
    web?: true
    webPaymentItemId?: true
    webBNPL?: true
    _all?: true
  }

  export type ProductLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductLog to aggregate.
     */
    where?: ProductLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLogs to fetch.
     */
    orderBy?: ProductLogOrderByWithRelationInput | ProductLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductLogs
    **/
    _count?: true | ProductLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductLogMaxAggregateInputType
  }

  export type GetProductLogAggregateType<T extends ProductLogAggregateArgs> = {
        [P in keyof T & keyof AggregateProductLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductLog[P]>
      : GetScalarType<T[P], AggregateProductLog[P]>
  }




  export type ProductLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductLogWhereInput
    orderBy?: ProductLogOrderByWithAggregationInput | ProductLogOrderByWithAggregationInput[]
    by: ProductLogScalarFieldEnum[] | ProductLogScalarFieldEnum
    having?: ProductLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductLogCountAggregateInputType | true
    _avg?: ProductLogAvgAggregateInputType
    _sum?: ProductLogSumAggregateInputType
    _min?: ProductLogMinAggregateInputType
    _max?: ProductLogMaxAggregateInputType
  }

  export type ProductLogGroupByOutputType = {
    logAuto: number
    logDatetime: Date
    logGubun: string
    logUser: string
    logComputer: string
    auto: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt: Date
    bigo2: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    etc4: string | null
    etc5: string | null
    web: boolean
    webPaymentItemId: number | null
    webBNPL: boolean
    _count: ProductLogCountAggregateOutputType | null
    _avg: ProductLogAvgAggregateOutputType | null
    _sum: ProductLogSumAggregateOutputType | null
    _min: ProductLogMinAggregateOutputType | null
    _max: ProductLogMaxAggregateOutputType | null
  }

  type GetProductLogGroupByPayload<T extends ProductLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductLogGroupByOutputType[P]>
            : GetScalarType<T[P], ProductLogGroupByOutputType[P]>
        }
      >
    >


  export type ProductLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logAuto?: boolean
    logDatetime?: boolean
    logGubun?: boolean
    logUser?: boolean
    logComputer?: boolean
    auto?: boolean
    clCode?: boolean
    jisa?: boolean
    csCode?: boolean
    ctTel?: boolean
    count?: boolean
    receive?: boolean
    receiveYmd?: boolean
    sell?: boolean
    sellYmd?: boolean
    orderCheck?: boolean
    seller?: boolean
    check?: boolean
    check2?: boolean
    rgb?: boolean
    bigo?: boolean
    createDt?: boolean
    bigo2?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
    web?: boolean
    webPaymentItemId?: boolean
    webBNPL?: boolean
  }, ExtArgs["result"]["productLog"]>

  export type ProductLogSelectScalar = {
    logAuto?: boolean
    logDatetime?: boolean
    logGubun?: boolean
    logUser?: boolean
    logComputer?: boolean
    auto?: boolean
    clCode?: boolean
    jisa?: boolean
    csCode?: boolean
    ctTel?: boolean
    count?: boolean
    receive?: boolean
    receiveYmd?: boolean
    sell?: boolean
    sellYmd?: boolean
    orderCheck?: boolean
    seller?: boolean
    check?: boolean
    check2?: boolean
    rgb?: boolean
    bigo?: boolean
    createDt?: boolean
    bigo2?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    etc4?: boolean
    etc5?: boolean
    web?: boolean
    webPaymentItemId?: boolean
    webBNPL?: boolean
  }


  export type $ProductLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      logAuto: number
      logDatetime: Date
      logGubun: string
      logUser: string
      logComputer: string
      auto: number
      clCode: string
      jisa: string
      csCode: string
      ctTel: string
      count: number
      receive: string
      receiveYmd: string
      sell: string
      sellYmd: string
      orderCheck: string
      seller: string
      check: string
      check2: string
      rgb: string
      bigo: string
      createDt: Date
      bigo2: string | null
      etc1: string | null
      etc2: string | null
      etc3: string | null
      etc4: string | null
      etc5: string | null
      web: boolean
      webPaymentItemId: number | null
      webBNPL: boolean
    }, ExtArgs["result"]["productLog"]>
    composites: {}
  }


  type ProductLogGetPayload<S extends boolean | null | undefined | ProductLogDefaultArgs> = $Result.GetResult<Prisma.$ProductLogPayload, S>

  type ProductLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductLogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductLogCountAggregateInputType | true
    }

  export interface ProductLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductLog'], meta: { name: 'ProductLog' } }
    /**
     * Find zero or one ProductLog that matches the filter.
     * @param {ProductLogFindUniqueArgs} args - Arguments to find a ProductLog
     * @example
     * // Get one ProductLog
     * const productLog = await prisma.productLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductLogFindUniqueOrThrowArgs} args - Arguments to find a ProductLog
     * @example
     * // Get one ProductLog
     * const productLog = await prisma.productLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogFindFirstArgs} args - Arguments to find a ProductLog
     * @example
     * // Get one ProductLog
     * const productLog = await prisma.productLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogFindFirstArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogFindFirstOrThrowArgs} args - Arguments to find a ProductLog
     * @example
     * // Get one ProductLog
     * const productLog = await prisma.productLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductLogs
     * const productLogs = await prisma.productLog.findMany()
     * 
     * // Get first 10 ProductLogs
     * const productLogs = await prisma.productLog.findMany({ take: 10 })
     * 
     * // Only select the `logAuto`
     * const productLogWithLogAutoOnly = await prisma.productLog.findMany({ select: { logAuto: true } })
     * 
    **/
    findMany<T extends ProductLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductLog.
     * @param {ProductLogCreateArgs} args - Arguments to create a ProductLog.
     * @example
     * // Create one ProductLog
     * const ProductLog = await prisma.productLog.create({
     *   data: {
     *     // ... data to create a ProductLog
     *   }
     * })
     * 
    **/
    create<T extends ProductLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogCreateArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductLogs.
     *     @param {ProductLogCreateManyArgs} args - Arguments to create many ProductLogs.
     *     @example
     *     // Create many ProductLogs
     *     const productLog = await prisma.productLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductLog.
     * @param {ProductLogDeleteArgs} args - Arguments to delete one ProductLog.
     * @example
     * // Delete one ProductLog
     * const ProductLog = await prisma.productLog.delete({
     *   where: {
     *     // ... filter to delete one ProductLog
     *   }
     * })
     * 
    **/
    delete<T extends ProductLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogDeleteArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductLog.
     * @param {ProductLogUpdateArgs} args - Arguments to update one ProductLog.
     * @example
     * // Update one ProductLog
     * const productLog = await prisma.productLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogUpdateArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductLogs.
     * @param {ProductLogDeleteManyArgs} args - Arguments to filter ProductLogs to delete.
     * @example
     * // Delete a few ProductLogs
     * const { count } = await prisma.productLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductLogs
     * const productLog = await prisma.productLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductLog.
     * @param {ProductLogUpsertArgs} args - Arguments to update or create a ProductLog.
     * @example
     * // Update or create a ProductLog
     * const productLog = await prisma.productLog.upsert({
     *   create: {
     *     // ... data to create a ProductLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductLog we want to update
     *   }
     * })
    **/
    upsert<T extends ProductLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLogUpsertArgs<ExtArgs>>
    ): Prisma__ProductLogClient<$Result.GetResult<Prisma.$ProductLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogCountArgs} args - Arguments to filter ProductLogs to count.
     * @example
     * // Count the number of ProductLogs
     * const count = await prisma.productLog.count({
     *   where: {
     *     // ... the filter for the ProductLogs we want to count
     *   }
     * })
    **/
    count<T extends ProductLogCountArgs>(
      args?: Subset<T, ProductLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductLogAggregateArgs>(args: Subset<T, ProductLogAggregateArgs>): Prisma.PrismaPromise<GetProductLogAggregateType<T>>

    /**
     * Group by ProductLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLogGroupByArgs} args - Group by arguments.
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
      T extends ProductLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductLogGroupByArgs['orderBy'] }
        : { orderBy?: ProductLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductLog model
   */
  readonly fields: ProductLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductLog model
   */ 
  interface ProductLogFieldRefs {
    readonly logAuto: FieldRef<"ProductLog", 'Int'>
    readonly logDatetime: FieldRef<"ProductLog", 'DateTime'>
    readonly logGubun: FieldRef<"ProductLog", 'String'>
    readonly logUser: FieldRef<"ProductLog", 'String'>
    readonly logComputer: FieldRef<"ProductLog", 'String'>
    readonly auto: FieldRef<"ProductLog", 'Int'>
    readonly clCode: FieldRef<"ProductLog", 'String'>
    readonly jisa: FieldRef<"ProductLog", 'String'>
    readonly csCode: FieldRef<"ProductLog", 'String'>
    readonly ctTel: FieldRef<"ProductLog", 'String'>
    readonly count: FieldRef<"ProductLog", 'Int'>
    readonly receive: FieldRef<"ProductLog", 'String'>
    readonly receiveYmd: FieldRef<"ProductLog", 'String'>
    readonly sell: FieldRef<"ProductLog", 'String'>
    readonly sellYmd: FieldRef<"ProductLog", 'String'>
    readonly orderCheck: FieldRef<"ProductLog", 'String'>
    readonly seller: FieldRef<"ProductLog", 'String'>
    readonly check: FieldRef<"ProductLog", 'String'>
    readonly check2: FieldRef<"ProductLog", 'String'>
    readonly rgb: FieldRef<"ProductLog", 'String'>
    readonly bigo: FieldRef<"ProductLog", 'String'>
    readonly createDt: FieldRef<"ProductLog", 'DateTime'>
    readonly bigo2: FieldRef<"ProductLog", 'String'>
    readonly etc1: FieldRef<"ProductLog", 'String'>
    readonly etc2: FieldRef<"ProductLog", 'String'>
    readonly etc3: FieldRef<"ProductLog", 'String'>
    readonly etc4: FieldRef<"ProductLog", 'String'>
    readonly etc5: FieldRef<"ProductLog", 'String'>
    readonly web: FieldRef<"ProductLog", 'Boolean'>
    readonly webPaymentItemId: FieldRef<"ProductLog", 'Int'>
    readonly webBNPL: FieldRef<"ProductLog", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ProductLog findUnique
   */
  export type ProductLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter, which ProductLog to fetch.
     */
    where: ProductLogWhereUniqueInput
  }


  /**
   * ProductLog findUniqueOrThrow
   */
  export type ProductLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter, which ProductLog to fetch.
     */
    where: ProductLogWhereUniqueInput
  }


  /**
   * ProductLog findFirst
   */
  export type ProductLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter, which ProductLog to fetch.
     */
    where?: ProductLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLogs to fetch.
     */
    orderBy?: ProductLogOrderByWithRelationInput | ProductLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLogs.
     */
    cursor?: ProductLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLogs.
     */
    distinct?: ProductLogScalarFieldEnum | ProductLogScalarFieldEnum[]
  }


  /**
   * ProductLog findFirstOrThrow
   */
  export type ProductLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter, which ProductLog to fetch.
     */
    where?: ProductLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLogs to fetch.
     */
    orderBy?: ProductLogOrderByWithRelationInput | ProductLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLogs.
     */
    cursor?: ProductLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLogs.
     */
    distinct?: ProductLogScalarFieldEnum | ProductLogScalarFieldEnum[]
  }


  /**
   * ProductLog findMany
   */
  export type ProductLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter, which ProductLogs to fetch.
     */
    where?: ProductLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLogs to fetch.
     */
    orderBy?: ProductLogOrderByWithRelationInput | ProductLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductLogs.
     */
    cursor?: ProductLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLogs.
     */
    skip?: number
    distinct?: ProductLogScalarFieldEnum | ProductLogScalarFieldEnum[]
  }


  /**
   * ProductLog create
   */
  export type ProductLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductLog.
     */
    data: XOR<ProductLogCreateInput, ProductLogUncheckedCreateInput>
  }


  /**
   * ProductLog createMany
   */
  export type ProductLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductLogs.
     */
    data: ProductLogCreateManyInput | ProductLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductLog update
   */
  export type ProductLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductLog.
     */
    data: XOR<ProductLogUpdateInput, ProductLogUncheckedUpdateInput>
    /**
     * Choose, which ProductLog to update.
     */
    where: ProductLogWhereUniqueInput
  }


  /**
   * ProductLog updateMany
   */
  export type ProductLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductLogs.
     */
    data: XOR<ProductLogUpdateManyMutationInput, ProductLogUncheckedUpdateManyInput>
    /**
     * Filter which ProductLogs to update
     */
    where?: ProductLogWhereInput
  }


  /**
   * ProductLog upsert
   */
  export type ProductLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductLog to update in case it exists.
     */
    where: ProductLogWhereUniqueInput
    /**
     * In case the ProductLog found by the `where` argument doesn't exist, create a new ProductLog with this data.
     */
    create: XOR<ProductLogCreateInput, ProductLogUncheckedCreateInput>
    /**
     * In case the ProductLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductLogUpdateInput, ProductLogUncheckedUpdateInput>
  }


  /**
   * ProductLog delete
   */
  export type ProductLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
    /**
     * Filter which ProductLog to delete.
     */
    where: ProductLogWhereUniqueInput
  }


  /**
   * ProductLog deleteMany
   */
  export type ProductLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductLogs to delete
     */
    where?: ProductLogWhereInput
  }


  /**
   * ProductLog without action
   */
  export type ProductLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLog
     */
    select?: ProductLogSelect<ExtArgs> | null
  }



  /**
   * Model ProductListWebBunryu
   */

  export type AggregateProductListWebBunryu = {
    _count: ProductListWebBunryuCountAggregateOutputType | null
    _min: ProductListWebBunryuMinAggregateOutputType | null
    _max: ProductListWebBunryuMaxAggregateOutputType | null
  }

  export type ProductListWebBunryuMinAggregateOutputType = {
    code: string | null
    name: string | null
    fit: boolean | null
  }

  export type ProductListWebBunryuMaxAggregateOutputType = {
    code: string | null
    name: string | null
    fit: boolean | null
  }

  export type ProductListWebBunryuCountAggregateOutputType = {
    code: number
    name: number
    fit: number
    _all: number
  }


  export type ProductListWebBunryuMinAggregateInputType = {
    code?: true
    name?: true
    fit?: true
  }

  export type ProductListWebBunryuMaxAggregateInputType = {
    code?: true
    name?: true
    fit?: true
  }

  export type ProductListWebBunryuCountAggregateInputType = {
    code?: true
    name?: true
    fit?: true
    _all?: true
  }

  export type ProductListWebBunryuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListWebBunryu to aggregate.
     */
    where?: ProductListWebBunryuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListWebBunryus to fetch.
     */
    orderBy?: ProductListWebBunryuOrderByWithRelationInput | ProductListWebBunryuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductListWebBunryuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListWebBunryus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListWebBunryus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductListWebBunryus
    **/
    _count?: true | ProductListWebBunryuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductListWebBunryuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductListWebBunryuMaxAggregateInputType
  }

  export type GetProductListWebBunryuAggregateType<T extends ProductListWebBunryuAggregateArgs> = {
        [P in keyof T & keyof AggregateProductListWebBunryu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductListWebBunryu[P]>
      : GetScalarType<T[P], AggregateProductListWebBunryu[P]>
  }




  export type ProductListWebBunryuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductListWebBunryuWhereInput
    orderBy?: ProductListWebBunryuOrderByWithAggregationInput | ProductListWebBunryuOrderByWithAggregationInput[]
    by: ProductListWebBunryuScalarFieldEnum[] | ProductListWebBunryuScalarFieldEnum
    having?: ProductListWebBunryuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductListWebBunryuCountAggregateInputType | true
    _min?: ProductListWebBunryuMinAggregateInputType
    _max?: ProductListWebBunryuMaxAggregateInputType
  }

  export type ProductListWebBunryuGroupByOutputType = {
    code: string
    name: string
    fit: boolean | null
    _count: ProductListWebBunryuCountAggregateOutputType | null
    _min: ProductListWebBunryuMinAggregateOutputType | null
    _max: ProductListWebBunryuMaxAggregateOutputType | null
  }

  type GetProductListWebBunryuGroupByPayload<T extends ProductListWebBunryuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductListWebBunryuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductListWebBunryuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductListWebBunryuGroupByOutputType[P]>
            : GetScalarType<T[P], ProductListWebBunryuGroupByOutputType[P]>
        }
      >
    >


  export type ProductListWebBunryuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    fit?: boolean
  }, ExtArgs["result"]["productListWebBunryu"]>

  export type ProductListWebBunryuSelectScalar = {
    code?: boolean
    name?: boolean
    fit?: boolean
  }


  export type $ProductListWebBunryuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductListWebBunryu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      fit: boolean | null
    }, ExtArgs["result"]["productListWebBunryu"]>
    composites: {}
  }


  type ProductListWebBunryuGetPayload<S extends boolean | null | undefined | ProductListWebBunryuDefaultArgs> = $Result.GetResult<Prisma.$ProductListWebBunryuPayload, S>

  type ProductListWebBunryuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductListWebBunryuFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductListWebBunryuCountAggregateInputType | true
    }

  export interface ProductListWebBunryuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductListWebBunryu'], meta: { name: 'ProductListWebBunryu' } }
    /**
     * Find zero or one ProductListWebBunryu that matches the filter.
     * @param {ProductListWebBunryuFindUniqueArgs} args - Arguments to find a ProductListWebBunryu
     * @example
     * // Get one ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductListWebBunryuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductListWebBunryu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductListWebBunryuFindUniqueOrThrowArgs} args - Arguments to find a ProductListWebBunryu
     * @example
     * // Get one ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductListWebBunryuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductListWebBunryu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuFindFirstArgs} args - Arguments to find a ProductListWebBunryu
     * @example
     * // Get one ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductListWebBunryuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuFindFirstArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductListWebBunryu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuFindFirstOrThrowArgs} args - Arguments to find a ProductListWebBunryu
     * @example
     * // Get one ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductListWebBunryuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductListWebBunryus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductListWebBunryus
     * const productListWebBunryus = await prisma.productListWebBunryu.findMany()
     * 
     * // Get first 10 ProductListWebBunryus
     * const productListWebBunryus = await prisma.productListWebBunryu.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const productListWebBunryuWithCodeOnly = await prisma.productListWebBunryu.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends ProductListWebBunryuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductListWebBunryu.
     * @param {ProductListWebBunryuCreateArgs} args - Arguments to create a ProductListWebBunryu.
     * @example
     * // Create one ProductListWebBunryu
     * const ProductListWebBunryu = await prisma.productListWebBunryu.create({
     *   data: {
     *     // ... data to create a ProductListWebBunryu
     *   }
     * })
     * 
    **/
    create<T extends ProductListWebBunryuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuCreateArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductListWebBunryus.
     *     @param {ProductListWebBunryuCreateManyArgs} args - Arguments to create many ProductListWebBunryus.
     *     @example
     *     // Create many ProductListWebBunryus
     *     const productListWebBunryu = await prisma.productListWebBunryu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductListWebBunryuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductListWebBunryu.
     * @param {ProductListWebBunryuDeleteArgs} args - Arguments to delete one ProductListWebBunryu.
     * @example
     * // Delete one ProductListWebBunryu
     * const ProductListWebBunryu = await prisma.productListWebBunryu.delete({
     *   where: {
     *     // ... filter to delete one ProductListWebBunryu
     *   }
     * })
     * 
    **/
    delete<T extends ProductListWebBunryuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuDeleteArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductListWebBunryu.
     * @param {ProductListWebBunryuUpdateArgs} args - Arguments to update one ProductListWebBunryu.
     * @example
     * // Update one ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductListWebBunryuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuUpdateArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductListWebBunryus.
     * @param {ProductListWebBunryuDeleteManyArgs} args - Arguments to filter ProductListWebBunryus to delete.
     * @example
     * // Delete a few ProductListWebBunryus
     * const { count } = await prisma.productListWebBunryu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductListWebBunryuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListWebBunryuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductListWebBunryus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductListWebBunryus
     * const productListWebBunryu = await prisma.productListWebBunryu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductListWebBunryuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductListWebBunryu.
     * @param {ProductListWebBunryuUpsertArgs} args - Arguments to update or create a ProductListWebBunryu.
     * @example
     * // Update or create a ProductListWebBunryu
     * const productListWebBunryu = await prisma.productListWebBunryu.upsert({
     *   create: {
     *     // ... data to create a ProductListWebBunryu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductListWebBunryu we want to update
     *   }
     * })
    **/
    upsert<T extends ProductListWebBunryuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListWebBunryuUpsertArgs<ExtArgs>>
    ): Prisma__ProductListWebBunryuClient<$Result.GetResult<Prisma.$ProductListWebBunryuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductListWebBunryus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuCountArgs} args - Arguments to filter ProductListWebBunryus to count.
     * @example
     * // Count the number of ProductListWebBunryus
     * const count = await prisma.productListWebBunryu.count({
     *   where: {
     *     // ... the filter for the ProductListWebBunryus we want to count
     *   }
     * })
    **/
    count<T extends ProductListWebBunryuCountArgs>(
      args?: Subset<T, ProductListWebBunryuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductListWebBunryuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductListWebBunryu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductListWebBunryuAggregateArgs>(args: Subset<T, ProductListWebBunryuAggregateArgs>): Prisma.PrismaPromise<GetProductListWebBunryuAggregateType<T>>

    /**
     * Group by ProductListWebBunryu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListWebBunryuGroupByArgs} args - Group by arguments.
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
      T extends ProductListWebBunryuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductListWebBunryuGroupByArgs['orderBy'] }
        : { orderBy?: ProductListWebBunryuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductListWebBunryuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductListWebBunryuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductListWebBunryu model
   */
  readonly fields: ProductListWebBunryuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductListWebBunryu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductListWebBunryuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductListWebBunryu model
   */ 
  interface ProductListWebBunryuFieldRefs {
    readonly code: FieldRef<"ProductListWebBunryu", 'String'>
    readonly name: FieldRef<"ProductListWebBunryu", 'String'>
    readonly fit: FieldRef<"ProductListWebBunryu", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ProductListWebBunryu findUnique
   */
  export type ProductListWebBunryuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter, which ProductListWebBunryu to fetch.
     */
    where: ProductListWebBunryuWhereUniqueInput
  }


  /**
   * ProductListWebBunryu findUniqueOrThrow
   */
  export type ProductListWebBunryuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter, which ProductListWebBunryu to fetch.
     */
    where: ProductListWebBunryuWhereUniqueInput
  }


  /**
   * ProductListWebBunryu findFirst
   */
  export type ProductListWebBunryuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter, which ProductListWebBunryu to fetch.
     */
    where?: ProductListWebBunryuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListWebBunryus to fetch.
     */
    orderBy?: ProductListWebBunryuOrderByWithRelationInput | ProductListWebBunryuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListWebBunryus.
     */
    cursor?: ProductListWebBunryuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListWebBunryus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListWebBunryus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListWebBunryus.
     */
    distinct?: ProductListWebBunryuScalarFieldEnum | ProductListWebBunryuScalarFieldEnum[]
  }


  /**
   * ProductListWebBunryu findFirstOrThrow
   */
  export type ProductListWebBunryuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter, which ProductListWebBunryu to fetch.
     */
    where?: ProductListWebBunryuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListWebBunryus to fetch.
     */
    orderBy?: ProductListWebBunryuOrderByWithRelationInput | ProductListWebBunryuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListWebBunryus.
     */
    cursor?: ProductListWebBunryuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListWebBunryus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListWebBunryus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListWebBunryus.
     */
    distinct?: ProductListWebBunryuScalarFieldEnum | ProductListWebBunryuScalarFieldEnum[]
  }


  /**
   * ProductListWebBunryu findMany
   */
  export type ProductListWebBunryuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter, which ProductListWebBunryus to fetch.
     */
    where?: ProductListWebBunryuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListWebBunryus to fetch.
     */
    orderBy?: ProductListWebBunryuOrderByWithRelationInput | ProductListWebBunryuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductListWebBunryus.
     */
    cursor?: ProductListWebBunryuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListWebBunryus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListWebBunryus.
     */
    skip?: number
    distinct?: ProductListWebBunryuScalarFieldEnum | ProductListWebBunryuScalarFieldEnum[]
  }


  /**
   * ProductListWebBunryu create
   */
  export type ProductListWebBunryuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductListWebBunryu.
     */
    data: XOR<ProductListWebBunryuCreateInput, ProductListWebBunryuUncheckedCreateInput>
  }


  /**
   * ProductListWebBunryu createMany
   */
  export type ProductListWebBunryuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductListWebBunryus.
     */
    data: ProductListWebBunryuCreateManyInput | ProductListWebBunryuCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductListWebBunryu update
   */
  export type ProductListWebBunryuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductListWebBunryu.
     */
    data: XOR<ProductListWebBunryuUpdateInput, ProductListWebBunryuUncheckedUpdateInput>
    /**
     * Choose, which ProductListWebBunryu to update.
     */
    where: ProductListWebBunryuWhereUniqueInput
  }


  /**
   * ProductListWebBunryu updateMany
   */
  export type ProductListWebBunryuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductListWebBunryus.
     */
    data: XOR<ProductListWebBunryuUpdateManyMutationInput, ProductListWebBunryuUncheckedUpdateManyInput>
    /**
     * Filter which ProductListWebBunryus to update
     */
    where?: ProductListWebBunryuWhereInput
  }


  /**
   * ProductListWebBunryu upsert
   */
  export type ProductListWebBunryuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductListWebBunryu to update in case it exists.
     */
    where: ProductListWebBunryuWhereUniqueInput
    /**
     * In case the ProductListWebBunryu found by the `where` argument doesn't exist, create a new ProductListWebBunryu with this data.
     */
    create: XOR<ProductListWebBunryuCreateInput, ProductListWebBunryuUncheckedCreateInput>
    /**
     * In case the ProductListWebBunryu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductListWebBunryuUpdateInput, ProductListWebBunryuUncheckedUpdateInput>
  }


  /**
   * ProductListWebBunryu delete
   */
  export type ProductListWebBunryuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
    /**
     * Filter which ProductListWebBunryu to delete.
     */
    where: ProductListWebBunryuWhereUniqueInput
  }


  /**
   * ProductListWebBunryu deleteMany
   */
  export type ProductListWebBunryuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListWebBunryus to delete
     */
    where?: ProductListWebBunryuWhereInput
  }


  /**
   * ProductListWebBunryu without action
   */
  export type ProductListWebBunryuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListWebBunryu
     */
    select?: ProductListWebBunryuSelect<ExtArgs> | null
  }



  /**
   * Model ProductListImage
   */

  export type AggregateProductListImage = {
    _count: ProductListImageCountAggregateOutputType | null
    _min: ProductListImageMinAggregateOutputType | null
    _max: ProductListImageMaxAggregateOutputType | null
  }

  export type ProductListImageMinAggregateOutputType = {
    jisa: string | null
    smCode: string | null
    image: Buffer | null
  }

  export type ProductListImageMaxAggregateOutputType = {
    jisa: string | null
    smCode: string | null
    image: Buffer | null
  }

  export type ProductListImageCountAggregateOutputType = {
    jisa: number
    smCode: number
    image: number
    _all: number
  }


  export type ProductListImageMinAggregateInputType = {
    jisa?: true
    smCode?: true
    image?: true
  }

  export type ProductListImageMaxAggregateInputType = {
    jisa?: true
    smCode?: true
    image?: true
  }

  export type ProductListImageCountAggregateInputType = {
    jisa?: true
    smCode?: true
    image?: true
    _all?: true
  }

  export type ProductListImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListImage to aggregate.
     */
    where?: ProductListImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListImages to fetch.
     */
    orderBy?: ProductListImageOrderByWithRelationInput | ProductListImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductListImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductListImages
    **/
    _count?: true | ProductListImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductListImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductListImageMaxAggregateInputType
  }

  export type GetProductListImageAggregateType<T extends ProductListImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductListImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductListImage[P]>
      : GetScalarType<T[P], AggregateProductListImage[P]>
  }




  export type ProductListImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductListImageWhereInput
    orderBy?: ProductListImageOrderByWithAggregationInput | ProductListImageOrderByWithAggregationInput[]
    by: ProductListImageScalarFieldEnum[] | ProductListImageScalarFieldEnum
    having?: ProductListImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductListImageCountAggregateInputType | true
    _min?: ProductListImageMinAggregateInputType
    _max?: ProductListImageMaxAggregateInputType
  }

  export type ProductListImageGroupByOutputType = {
    jisa: string
    smCode: string
    image: Buffer | null
    _count: ProductListImageCountAggregateOutputType | null
    _min: ProductListImageMinAggregateOutputType | null
    _max: ProductListImageMaxAggregateOutputType | null
  }

  type GetProductListImageGroupByPayload<T extends ProductListImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductListImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductListImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductListImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductListImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductListImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jisa?: boolean
    smCode?: boolean
    image?: boolean
  }, ExtArgs["result"]["productListImage"]>

  export type ProductListImageSelectScalar = {
    jisa?: boolean
    smCode?: boolean
    image?: boolean
  }


  export type $ProductListImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductListImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      jisa: string
      smCode: string
      image: Buffer | null
    }, ExtArgs["result"]["productListImage"]>
    composites: {}
  }


  type ProductListImageGetPayload<S extends boolean | null | undefined | ProductListImageDefaultArgs> = $Result.GetResult<Prisma.$ProductListImagePayload, S>

  type ProductListImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductListImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductListImageCountAggregateInputType | true
    }

  export interface ProductListImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductListImage'], meta: { name: 'ProductListImage' } }
    /**
     * Find zero or one ProductListImage that matches the filter.
     * @param {ProductListImageFindUniqueArgs} args - Arguments to find a ProductListImage
     * @example
     * // Get one ProductListImage
     * const productListImage = await prisma.productListImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductListImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductListImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductListImageFindUniqueOrThrowArgs} args - Arguments to find a ProductListImage
     * @example
     * // Get one ProductListImage
     * const productListImage = await prisma.productListImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductListImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductListImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageFindFirstArgs} args - Arguments to find a ProductListImage
     * @example
     * // Get one ProductListImage
     * const productListImage = await prisma.productListImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductListImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageFindFirstArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductListImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageFindFirstOrThrowArgs} args - Arguments to find a ProductListImage
     * @example
     * // Get one ProductListImage
     * const productListImage = await prisma.productListImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductListImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductListImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductListImages
     * const productListImages = await prisma.productListImage.findMany()
     * 
     * // Get first 10 ProductListImages
     * const productListImages = await prisma.productListImage.findMany({ take: 10 })
     * 
     * // Only select the `jisa`
     * const productListImageWithJisaOnly = await prisma.productListImage.findMany({ select: { jisa: true } })
     * 
    **/
    findMany<T extends ProductListImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductListImage.
     * @param {ProductListImageCreateArgs} args - Arguments to create a ProductListImage.
     * @example
     * // Create one ProductListImage
     * const ProductListImage = await prisma.productListImage.create({
     *   data: {
     *     // ... data to create a ProductListImage
     *   }
     * })
     * 
    **/
    create<T extends ProductListImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageCreateArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductListImages.
     *     @param {ProductListImageCreateManyArgs} args - Arguments to create many ProductListImages.
     *     @example
     *     // Create many ProductListImages
     *     const productListImage = await prisma.productListImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductListImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductListImage.
     * @param {ProductListImageDeleteArgs} args - Arguments to delete one ProductListImage.
     * @example
     * // Delete one ProductListImage
     * const ProductListImage = await prisma.productListImage.delete({
     *   where: {
     *     // ... filter to delete one ProductListImage
     *   }
     * })
     * 
    **/
    delete<T extends ProductListImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageDeleteArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductListImage.
     * @param {ProductListImageUpdateArgs} args - Arguments to update one ProductListImage.
     * @example
     * // Update one ProductListImage
     * const productListImage = await prisma.productListImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductListImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageUpdateArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductListImages.
     * @param {ProductListImageDeleteManyArgs} args - Arguments to filter ProductListImages to delete.
     * @example
     * // Delete a few ProductListImages
     * const { count } = await prisma.productListImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductListImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductListImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductListImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductListImages
     * const productListImage = await prisma.productListImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductListImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductListImage.
     * @param {ProductListImageUpsertArgs} args - Arguments to update or create a ProductListImage.
     * @example
     * // Update or create a ProductListImage
     * const productListImage = await prisma.productListImage.upsert({
     *   create: {
     *     // ... data to create a ProductListImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductListImage we want to update
     *   }
     * })
    **/
    upsert<T extends ProductListImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductListImageUpsertArgs<ExtArgs>>
    ): Prisma__ProductListImageClient<$Result.GetResult<Prisma.$ProductListImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductListImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageCountArgs} args - Arguments to filter ProductListImages to count.
     * @example
     * // Count the number of ProductListImages
     * const count = await prisma.productListImage.count({
     *   where: {
     *     // ... the filter for the ProductListImages we want to count
     *   }
     * })
    **/
    count<T extends ProductListImageCountArgs>(
      args?: Subset<T, ProductListImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductListImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductListImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductListImageAggregateArgs>(args: Subset<T, ProductListImageAggregateArgs>): Prisma.PrismaPromise<GetProductListImageAggregateType<T>>

    /**
     * Group by ProductListImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductListImageGroupByArgs} args - Group by arguments.
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
      T extends ProductListImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductListImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductListImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductListImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductListImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductListImage model
   */
  readonly fields: ProductListImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductListImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductListImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductListImage model
   */ 
  interface ProductListImageFieldRefs {
    readonly jisa: FieldRef<"ProductListImage", 'String'>
    readonly smCode: FieldRef<"ProductListImage", 'String'>
    readonly image: FieldRef<"ProductListImage", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * ProductListImage findUnique
   */
  export type ProductListImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter, which ProductListImage to fetch.
     */
    where: ProductListImageWhereUniqueInput
  }


  /**
   * ProductListImage findUniqueOrThrow
   */
  export type ProductListImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter, which ProductListImage to fetch.
     */
    where: ProductListImageWhereUniqueInput
  }


  /**
   * ProductListImage findFirst
   */
  export type ProductListImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter, which ProductListImage to fetch.
     */
    where?: ProductListImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListImages to fetch.
     */
    orderBy?: ProductListImageOrderByWithRelationInput | ProductListImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListImages.
     */
    cursor?: ProductListImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListImages.
     */
    distinct?: ProductListImageScalarFieldEnum | ProductListImageScalarFieldEnum[]
  }


  /**
   * ProductListImage findFirstOrThrow
   */
  export type ProductListImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter, which ProductListImage to fetch.
     */
    where?: ProductListImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListImages to fetch.
     */
    orderBy?: ProductListImageOrderByWithRelationInput | ProductListImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductListImages.
     */
    cursor?: ProductListImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductListImages.
     */
    distinct?: ProductListImageScalarFieldEnum | ProductListImageScalarFieldEnum[]
  }


  /**
   * ProductListImage findMany
   */
  export type ProductListImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter, which ProductListImages to fetch.
     */
    where?: ProductListImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductListImages to fetch.
     */
    orderBy?: ProductListImageOrderByWithRelationInput | ProductListImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductListImages.
     */
    cursor?: ProductListImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductListImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductListImages.
     */
    skip?: number
    distinct?: ProductListImageScalarFieldEnum | ProductListImageScalarFieldEnum[]
  }


  /**
   * ProductListImage create
   */
  export type ProductListImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * The data needed to create a ProductListImage.
     */
    data: XOR<ProductListImageCreateInput, ProductListImageUncheckedCreateInput>
  }


  /**
   * ProductListImage createMany
   */
  export type ProductListImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductListImages.
     */
    data: ProductListImageCreateManyInput | ProductListImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductListImage update
   */
  export type ProductListImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * The data needed to update a ProductListImage.
     */
    data: XOR<ProductListImageUpdateInput, ProductListImageUncheckedUpdateInput>
    /**
     * Choose, which ProductListImage to update.
     */
    where: ProductListImageWhereUniqueInput
  }


  /**
   * ProductListImage updateMany
   */
  export type ProductListImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductListImages.
     */
    data: XOR<ProductListImageUpdateManyMutationInput, ProductListImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductListImages to update
     */
    where?: ProductListImageWhereInput
  }


  /**
   * ProductListImage upsert
   */
  export type ProductListImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * The filter to search for the ProductListImage to update in case it exists.
     */
    where: ProductListImageWhereUniqueInput
    /**
     * In case the ProductListImage found by the `where` argument doesn't exist, create a new ProductListImage with this data.
     */
    create: XOR<ProductListImageCreateInput, ProductListImageUncheckedCreateInput>
    /**
     * In case the ProductListImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductListImageUpdateInput, ProductListImageUncheckedUpdateInput>
  }


  /**
   * ProductListImage delete
   */
  export type ProductListImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
    /**
     * Filter which ProductListImage to delete.
     */
    where: ProductListImageWhereUniqueInput
  }


  /**
   * ProductListImage deleteMany
   */
  export type ProductListImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductListImages to delete
     */
    where?: ProductListImageWhereInput
  }


  /**
   * ProductListImage without action
   */
  export type ProductListImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductListImage
     */
    select?: ProductListImageSelect<ExtArgs> | null
  }



  /**
   * Model Cs
   */

  export type AggregateCs = {
    _count: CsCountAggregateOutputType | null
    _avg: CsAvgAggregateOutputType | null
    _sum: CsSumAggregateOutputType | null
    _min: CsMinAggregateOutputType | null
    _max: CsMaxAggregateOutputType | null
  }

  export type CsAvgAggregateOutputType = {
    dup: number | null
    saupdup: number | null
    askumak: number | null
  }

  export type CsSumAggregateOutputType = {
    dup: number | null
    saupdup: number | null
    askumak: number | null
  }

  export type CsMinAggregateOutputType = {
    gubun: string | null
    code: string | null
    myung: string | null
    daepyo: string | null
    tel: string | null
    fax: string | null
    post: string | null
    dup: number | null
    juso: string | null
    bunji: string | null
    jisa: string | null
    emCode: string | null
    damdang: string | null
    damdanghp: string | null
    jongbl: string | null
    upte: string | null
    saupnum: string | null
    sauppost: string | null
    saupdup: number | null
    saupjuso: string | null
    saupbunji: string | null
    email: string | null
    ediid: string | null
    edipassword: string | null
    local: string | null
    nonchart: string | null
    fymd: string | null
    lymd: string | null
    bigo: string | null
    user: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    Chonguser: string | null
    pro: string | null
    yanghan: string | null
    chunggu: string | null
    cherbang: string | null
    youngsu: string | null
    pacs: string | null
    barcode: string | null
    yakguk: string | null
    update: string | null
    askumak: number | null
    etc4: string | null
    etc5: string | null
    etc6: string | null
    etc7: string | null
    cms: string | null
    daegidisp: string | null
    gumjinlink: string | null
    capture: string | null
    sutak: string | null
    sutaklink: string | null
    gumsalinkyn: string | null
    gumsalink: string | null
    scaner: string | null
    card: string | null
    cardlink: string | null
    eleccherban: string | null
    yakgukprint: string | null
    gumsabarcod: string | null
    bdbarcode: string | null
    updatepath: string | null
    server: string | null
    sanjae: string | null
    paljji: string | null
    jungji: string | null
    servermodel: string | null
    servername: string | null
    serverSN: string | null
    serverMT: string | null
    serverHDD: string | null
    serverMemory: string | null
    serverLocation: string | null
    serversetup: string | null
    window: string | null
    windowmemo: string | null
    virusname: string | null
    virussetup: string | null
    virusend: string | null
    upsname: string | null
    upssetup: string | null
    upsend: string | null
    rollprint: string | null
    inuser: string | null
    upuser: string | null
    indate: string | null
    update2: string | null
    etc8: string | null
    etc9: string | null
    etc10: string | null
    etc11: string | null
    etc12: string | null
    etc13: string | null
    etc14: string | null
    etc15: string | null
    bogubun: string | null
    aschk: string | null
    etc16: string | null
    etc17: string | null
    etc18: string | null
    etc19: string | null
    etc20: string | null
    etc21: string | null
    etc22: string | null
    etc23: string | null
    etc24: string | null
    etc25: string | null
    etc26: string | null
    etc27: string | null
    etc28: string | null
    etc29: string | null
    etc30: string | null
    etc31: string | null
    etc32: string | null
    etc33: string | null
    etc34: string | null
    etc35: string | null
    server_cust: string | null
    server_orde: string | null
    server_mici: string | null
    server_admi: string | null
    server_svrp: string | null
    server_svrb: string | null
    oauthpwd: string | null
    medi_use: string | null
    medi_pc: string | null
    medi_autoju: string | null
    medi_grname: string | null
  }

  export type CsMaxAggregateOutputType = {
    gubun: string | null
    code: string | null
    myung: string | null
    daepyo: string | null
    tel: string | null
    fax: string | null
    post: string | null
    dup: number | null
    juso: string | null
    bunji: string | null
    jisa: string | null
    emCode: string | null
    damdang: string | null
    damdanghp: string | null
    jongbl: string | null
    upte: string | null
    saupnum: string | null
    sauppost: string | null
    saupdup: number | null
    saupjuso: string | null
    saupbunji: string | null
    email: string | null
    ediid: string | null
    edipassword: string | null
    local: string | null
    nonchart: string | null
    fymd: string | null
    lymd: string | null
    bigo: string | null
    user: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    Chonguser: string | null
    pro: string | null
    yanghan: string | null
    chunggu: string | null
    cherbang: string | null
    youngsu: string | null
    pacs: string | null
    barcode: string | null
    yakguk: string | null
    update: string | null
    askumak: number | null
    etc4: string | null
    etc5: string | null
    etc6: string | null
    etc7: string | null
    cms: string | null
    daegidisp: string | null
    gumjinlink: string | null
    capture: string | null
    sutak: string | null
    sutaklink: string | null
    gumsalinkyn: string | null
    gumsalink: string | null
    scaner: string | null
    card: string | null
    cardlink: string | null
    eleccherban: string | null
    yakgukprint: string | null
    gumsabarcod: string | null
    bdbarcode: string | null
    updatepath: string | null
    server: string | null
    sanjae: string | null
    paljji: string | null
    jungji: string | null
    servermodel: string | null
    servername: string | null
    serverSN: string | null
    serverMT: string | null
    serverHDD: string | null
    serverMemory: string | null
    serverLocation: string | null
    serversetup: string | null
    window: string | null
    windowmemo: string | null
    virusname: string | null
    virussetup: string | null
    virusend: string | null
    upsname: string | null
    upssetup: string | null
    upsend: string | null
    rollprint: string | null
    inuser: string | null
    upuser: string | null
    indate: string | null
    update2: string | null
    etc8: string | null
    etc9: string | null
    etc10: string | null
    etc11: string | null
    etc12: string | null
    etc13: string | null
    etc14: string | null
    etc15: string | null
    bogubun: string | null
    aschk: string | null
    etc16: string | null
    etc17: string | null
    etc18: string | null
    etc19: string | null
    etc20: string | null
    etc21: string | null
    etc22: string | null
    etc23: string | null
    etc24: string | null
    etc25: string | null
    etc26: string | null
    etc27: string | null
    etc28: string | null
    etc29: string | null
    etc30: string | null
    etc31: string | null
    etc32: string | null
    etc33: string | null
    etc34: string | null
    etc35: string | null
    server_cust: string | null
    server_orde: string | null
    server_mici: string | null
    server_admi: string | null
    server_svrp: string | null
    server_svrb: string | null
    oauthpwd: string | null
    medi_use: string | null
    medi_pc: string | null
    medi_autoju: string | null
    medi_grname: string | null
  }

  export type CsCountAggregateOutputType = {
    gubun: number
    code: number
    myung: number
    daepyo: number
    tel: number
    fax: number
    post: number
    dup: number
    juso: number
    bunji: number
    jisa: number
    emCode: number
    damdang: number
    damdanghp: number
    jongbl: number
    upte: number
    saupnum: number
    sauppost: number
    saupdup: number
    saupjuso: number
    saupbunji: number
    email: number
    ediid: number
    edipassword: number
    local: number
    nonchart: number
    fymd: number
    lymd: number
    bigo: number
    user: number
    etc1: number
    etc2: number
    etc3: number
    Chonguser: number
    pro: number
    yanghan: number
    chunggu: number
    cherbang: number
    youngsu: number
    pacs: number
    barcode: number
    yakguk: number
    update: number
    askumak: number
    etc4: number
    etc5: number
    etc6: number
    etc7: number
    cms: number
    daegidisp: number
    gumjinlink: number
    capture: number
    sutak: number
    sutaklink: number
    gumsalinkyn: number
    gumsalink: number
    scaner: number
    card: number
    cardlink: number
    eleccherban: number
    yakgukprint: number
    gumsabarcod: number
    bdbarcode: number
    updatepath: number
    server: number
    sanjae: number
    paljji: number
    jungji: number
    servermodel: number
    servername: number
    serverSN: number
    serverMT: number
    serverHDD: number
    serverMemory: number
    serverLocation: number
    serversetup: number
    window: number
    windowmemo: number
    virusname: number
    virussetup: number
    virusend: number
    upsname: number
    upssetup: number
    upsend: number
    rollprint: number
    inuser: number
    upuser: number
    indate: number
    update2: number
    etc8: number
    etc9: number
    etc10: number
    etc11: number
    etc12: number
    etc13: number
    etc14: number
    etc15: number
    bogubun: number
    aschk: number
    etc16: number
    etc17: number
    etc18: number
    etc19: number
    etc20: number
    etc21: number
    etc22: number
    etc23: number
    etc24: number
    etc25: number
    etc26: number
    etc27: number
    etc28: number
    etc29: number
    etc30: number
    etc31: number
    etc32: number
    etc33: number
    etc34: number
    etc35: number
    server_cust: number
    server_orde: number
    server_mici: number
    server_admi: number
    server_svrp: number
    server_svrb: number
    oauthpwd: number
    medi_use: number
    medi_pc: number
    medi_autoju: number
    medi_grname: number
    _all: number
  }


  export type CsAvgAggregateInputType = {
    dup?: true
    saupdup?: true
    askumak?: true
  }

  export type CsSumAggregateInputType = {
    dup?: true
    saupdup?: true
    askumak?: true
  }

  export type CsMinAggregateInputType = {
    gubun?: true
    code?: true
    myung?: true
    daepyo?: true
    tel?: true
    fax?: true
    post?: true
    dup?: true
    juso?: true
    bunji?: true
    jisa?: true
    emCode?: true
    damdang?: true
    damdanghp?: true
    jongbl?: true
    upte?: true
    saupnum?: true
    sauppost?: true
    saupdup?: true
    saupjuso?: true
    saupbunji?: true
    email?: true
    ediid?: true
    edipassword?: true
    local?: true
    nonchart?: true
    fymd?: true
    lymd?: true
    bigo?: true
    user?: true
    etc1?: true
    etc2?: true
    etc3?: true
    Chonguser?: true
    pro?: true
    yanghan?: true
    chunggu?: true
    cherbang?: true
    youngsu?: true
    pacs?: true
    barcode?: true
    yakguk?: true
    update?: true
    askumak?: true
    etc4?: true
    etc5?: true
    etc6?: true
    etc7?: true
    cms?: true
    daegidisp?: true
    gumjinlink?: true
    capture?: true
    sutak?: true
    sutaklink?: true
    gumsalinkyn?: true
    gumsalink?: true
    scaner?: true
    card?: true
    cardlink?: true
    eleccherban?: true
    yakgukprint?: true
    gumsabarcod?: true
    bdbarcode?: true
    updatepath?: true
    server?: true
    sanjae?: true
    paljji?: true
    jungji?: true
    servermodel?: true
    servername?: true
    serverSN?: true
    serverMT?: true
    serverHDD?: true
    serverMemory?: true
    serverLocation?: true
    serversetup?: true
    window?: true
    windowmemo?: true
    virusname?: true
    virussetup?: true
    virusend?: true
    upsname?: true
    upssetup?: true
    upsend?: true
    rollprint?: true
    inuser?: true
    upuser?: true
    indate?: true
    update2?: true
    etc8?: true
    etc9?: true
    etc10?: true
    etc11?: true
    etc12?: true
    etc13?: true
    etc14?: true
    etc15?: true
    bogubun?: true
    aschk?: true
    etc16?: true
    etc17?: true
    etc18?: true
    etc19?: true
    etc20?: true
    etc21?: true
    etc22?: true
    etc23?: true
    etc24?: true
    etc25?: true
    etc26?: true
    etc27?: true
    etc28?: true
    etc29?: true
    etc30?: true
    etc31?: true
    etc32?: true
    etc33?: true
    etc34?: true
    etc35?: true
    server_cust?: true
    server_orde?: true
    server_mici?: true
    server_admi?: true
    server_svrp?: true
    server_svrb?: true
    oauthpwd?: true
    medi_use?: true
    medi_pc?: true
    medi_autoju?: true
    medi_grname?: true
  }

  export type CsMaxAggregateInputType = {
    gubun?: true
    code?: true
    myung?: true
    daepyo?: true
    tel?: true
    fax?: true
    post?: true
    dup?: true
    juso?: true
    bunji?: true
    jisa?: true
    emCode?: true
    damdang?: true
    damdanghp?: true
    jongbl?: true
    upte?: true
    saupnum?: true
    sauppost?: true
    saupdup?: true
    saupjuso?: true
    saupbunji?: true
    email?: true
    ediid?: true
    edipassword?: true
    local?: true
    nonchart?: true
    fymd?: true
    lymd?: true
    bigo?: true
    user?: true
    etc1?: true
    etc2?: true
    etc3?: true
    Chonguser?: true
    pro?: true
    yanghan?: true
    chunggu?: true
    cherbang?: true
    youngsu?: true
    pacs?: true
    barcode?: true
    yakguk?: true
    update?: true
    askumak?: true
    etc4?: true
    etc5?: true
    etc6?: true
    etc7?: true
    cms?: true
    daegidisp?: true
    gumjinlink?: true
    capture?: true
    sutak?: true
    sutaklink?: true
    gumsalinkyn?: true
    gumsalink?: true
    scaner?: true
    card?: true
    cardlink?: true
    eleccherban?: true
    yakgukprint?: true
    gumsabarcod?: true
    bdbarcode?: true
    updatepath?: true
    server?: true
    sanjae?: true
    paljji?: true
    jungji?: true
    servermodel?: true
    servername?: true
    serverSN?: true
    serverMT?: true
    serverHDD?: true
    serverMemory?: true
    serverLocation?: true
    serversetup?: true
    window?: true
    windowmemo?: true
    virusname?: true
    virussetup?: true
    virusend?: true
    upsname?: true
    upssetup?: true
    upsend?: true
    rollprint?: true
    inuser?: true
    upuser?: true
    indate?: true
    update2?: true
    etc8?: true
    etc9?: true
    etc10?: true
    etc11?: true
    etc12?: true
    etc13?: true
    etc14?: true
    etc15?: true
    bogubun?: true
    aschk?: true
    etc16?: true
    etc17?: true
    etc18?: true
    etc19?: true
    etc20?: true
    etc21?: true
    etc22?: true
    etc23?: true
    etc24?: true
    etc25?: true
    etc26?: true
    etc27?: true
    etc28?: true
    etc29?: true
    etc30?: true
    etc31?: true
    etc32?: true
    etc33?: true
    etc34?: true
    etc35?: true
    server_cust?: true
    server_orde?: true
    server_mici?: true
    server_admi?: true
    server_svrp?: true
    server_svrb?: true
    oauthpwd?: true
    medi_use?: true
    medi_pc?: true
    medi_autoju?: true
    medi_grname?: true
  }

  export type CsCountAggregateInputType = {
    gubun?: true
    code?: true
    myung?: true
    daepyo?: true
    tel?: true
    fax?: true
    post?: true
    dup?: true
    juso?: true
    bunji?: true
    jisa?: true
    emCode?: true
    damdang?: true
    damdanghp?: true
    jongbl?: true
    upte?: true
    saupnum?: true
    sauppost?: true
    saupdup?: true
    saupjuso?: true
    saupbunji?: true
    email?: true
    ediid?: true
    edipassword?: true
    local?: true
    nonchart?: true
    fymd?: true
    lymd?: true
    bigo?: true
    user?: true
    etc1?: true
    etc2?: true
    etc3?: true
    Chonguser?: true
    pro?: true
    yanghan?: true
    chunggu?: true
    cherbang?: true
    youngsu?: true
    pacs?: true
    barcode?: true
    yakguk?: true
    update?: true
    askumak?: true
    etc4?: true
    etc5?: true
    etc6?: true
    etc7?: true
    cms?: true
    daegidisp?: true
    gumjinlink?: true
    capture?: true
    sutak?: true
    sutaklink?: true
    gumsalinkyn?: true
    gumsalink?: true
    scaner?: true
    card?: true
    cardlink?: true
    eleccherban?: true
    yakgukprint?: true
    gumsabarcod?: true
    bdbarcode?: true
    updatepath?: true
    server?: true
    sanjae?: true
    paljji?: true
    jungji?: true
    servermodel?: true
    servername?: true
    serverSN?: true
    serverMT?: true
    serverHDD?: true
    serverMemory?: true
    serverLocation?: true
    serversetup?: true
    window?: true
    windowmemo?: true
    virusname?: true
    virussetup?: true
    virusend?: true
    upsname?: true
    upssetup?: true
    upsend?: true
    rollprint?: true
    inuser?: true
    upuser?: true
    indate?: true
    update2?: true
    etc8?: true
    etc9?: true
    etc10?: true
    etc11?: true
    etc12?: true
    etc13?: true
    etc14?: true
    etc15?: true
    bogubun?: true
    aschk?: true
    etc16?: true
    etc17?: true
    etc18?: true
    etc19?: true
    etc20?: true
    etc21?: true
    etc22?: true
    etc23?: true
    etc24?: true
    etc25?: true
    etc26?: true
    etc27?: true
    etc28?: true
    etc29?: true
    etc30?: true
    etc31?: true
    etc32?: true
    etc33?: true
    etc34?: true
    etc35?: true
    server_cust?: true
    server_orde?: true
    server_mici?: true
    server_admi?: true
    server_svrp?: true
    server_svrb?: true
    oauthpwd?: true
    medi_use?: true
    medi_pc?: true
    medi_autoju?: true
    medi_grname?: true
    _all?: true
  }

  export type CsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cs to aggregate.
     */
    where?: CsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cs to fetch.
     */
    orderBy?: CsOrderByWithRelationInput | CsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cs
    **/
    _count?: true | CsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CsMaxAggregateInputType
  }

  export type GetCsAggregateType<T extends CsAggregateArgs> = {
        [P in keyof T & keyof AggregateCs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCs[P]>
      : GetScalarType<T[P], AggregateCs[P]>
  }




  export type CsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CsWhereInput
    orderBy?: CsOrderByWithAggregationInput | CsOrderByWithAggregationInput[]
    by: CsScalarFieldEnum[] | CsScalarFieldEnum
    having?: CsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CsCountAggregateInputType | true
    _avg?: CsAvgAggregateInputType
    _sum?: CsSumAggregateInputType
    _min?: CsMinAggregateInputType
    _max?: CsMaxAggregateInputType
  }

  export type CsGroupByOutputType = {
    gubun: string
    code: string
    myung: string | null
    daepyo: string | null
    tel: string | null
    fax: string | null
    post: string | null
    dup: number | null
    juso: string | null
    bunji: string | null
    jisa: string | null
    emCode: string | null
    damdang: string | null
    damdanghp: string | null
    jongbl: string | null
    upte: string | null
    saupnum: string | null
    sauppost: string | null
    saupdup: number | null
    saupjuso: string | null
    saupbunji: string | null
    email: string | null
    ediid: string | null
    edipassword: string | null
    local: string | null
    nonchart: string | null
    fymd: string | null
    lymd: string | null
    bigo: string | null
    user: string | null
    etc1: string | null
    etc2: string | null
    etc3: string | null
    Chonguser: string | null
    pro: string | null
    yanghan: string | null
    chunggu: string | null
    cherbang: string | null
    youngsu: string | null
    pacs: string | null
    barcode: string | null
    yakguk: string | null
    update: string | null
    askumak: number | null
    etc4: string | null
    etc5: string | null
    etc6: string | null
    etc7: string | null
    cms: string | null
    daegidisp: string | null
    gumjinlink: string | null
    capture: string | null
    sutak: string | null
    sutaklink: string | null
    gumsalinkyn: string | null
    gumsalink: string | null
    scaner: string | null
    card: string | null
    cardlink: string | null
    eleccherban: string | null
    yakgukprint: string | null
    gumsabarcod: string | null
    bdbarcode: string | null
    updatepath: string | null
    server: string | null
    sanjae: string | null
    paljji: string | null
    jungji: string | null
    servermodel: string | null
    servername: string | null
    serverSN: string | null
    serverMT: string | null
    serverHDD: string | null
    serverMemory: string | null
    serverLocation: string | null
    serversetup: string | null
    window: string | null
    windowmemo: string | null
    virusname: string | null
    virussetup: string | null
    virusend: string | null
    upsname: string | null
    upssetup: string | null
    upsend: string | null
    rollprint: string
    inuser: string | null
    upuser: string | null
    indate: string | null
    update2: string | null
    etc8: string | null
    etc9: string | null
    etc10: string | null
    etc11: string | null
    etc12: string | null
    etc13: string | null
    etc14: string | null
    etc15: string | null
    bogubun: string | null
    aschk: string | null
    etc16: string | null
    etc17: string | null
    etc18: string | null
    etc19: string | null
    etc20: string | null
    etc21: string | null
    etc22: string | null
    etc23: string | null
    etc24: string | null
    etc25: string | null
    etc26: string | null
    etc27: string | null
    etc28: string | null
    etc29: string | null
    etc30: string | null
    etc31: string | null
    etc32: string | null
    etc33: string | null
    etc34: string | null
    etc35: string | null
    server_cust: string | null
    server_orde: string | null
    server_mici: string | null
    server_admi: string | null
    server_svrp: string | null
    server_svrb: string | null
    oauthpwd: string
    medi_use: string | null
    medi_pc: string | null
    medi_autoju: string | null
    medi_grname: string | null
    _count: CsCountAggregateOutputType | null
    _avg: CsAvgAggregateOutputType | null
    _sum: CsSumAggregateOutputType | null
    _min: CsMinAggregateOutputType | null
    _max: CsMaxAggregateOutputType | null
  }

  type GetCsGroupByPayload<T extends CsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CsGroupByOutputType[P]>
            : GetScalarType<T[P], CsGroupByOutputType[P]>
        }
      >
    >


  export type CsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gubun?: boolean
    code?: boolean
    myung?: boolean
    daepyo?: boolean
    tel?: boolean
    fax?: boolean
    post?: boolean
    dup?: boolean
    juso?: boolean
    bunji?: boolean
    jisa?: boolean
    emCode?: boolean
    damdang?: boolean
    damdanghp?: boolean
    jongbl?: boolean
    upte?: boolean
    saupnum?: boolean
    sauppost?: boolean
    saupdup?: boolean
    saupjuso?: boolean
    saupbunji?: boolean
    email?: boolean
    ediid?: boolean
    edipassword?: boolean
    local?: boolean
    nonchart?: boolean
    fymd?: boolean
    lymd?: boolean
    bigo?: boolean
    user?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    Chonguser?: boolean
    pro?: boolean
    yanghan?: boolean
    chunggu?: boolean
    cherbang?: boolean
    youngsu?: boolean
    pacs?: boolean
    barcode?: boolean
    yakguk?: boolean
    update?: boolean
    askumak?: boolean
    etc4?: boolean
    etc5?: boolean
    etc6?: boolean
    etc7?: boolean
    cms?: boolean
    daegidisp?: boolean
    gumjinlink?: boolean
    capture?: boolean
    sutak?: boolean
    sutaklink?: boolean
    gumsalinkyn?: boolean
    gumsalink?: boolean
    scaner?: boolean
    card?: boolean
    cardlink?: boolean
    eleccherban?: boolean
    yakgukprint?: boolean
    gumsabarcod?: boolean
    bdbarcode?: boolean
    updatepath?: boolean
    server?: boolean
    sanjae?: boolean
    paljji?: boolean
    jungji?: boolean
    servermodel?: boolean
    servername?: boolean
    serverSN?: boolean
    serverMT?: boolean
    serverHDD?: boolean
    serverMemory?: boolean
    serverLocation?: boolean
    serversetup?: boolean
    window?: boolean
    windowmemo?: boolean
    virusname?: boolean
    virussetup?: boolean
    virusend?: boolean
    upsname?: boolean
    upssetup?: boolean
    upsend?: boolean
    rollprint?: boolean
    inuser?: boolean
    upuser?: boolean
    indate?: boolean
    update2?: boolean
    etc8?: boolean
    etc9?: boolean
    etc10?: boolean
    etc11?: boolean
    etc12?: boolean
    etc13?: boolean
    etc14?: boolean
    etc15?: boolean
    bogubun?: boolean
    aschk?: boolean
    etc16?: boolean
    etc17?: boolean
    etc18?: boolean
    etc19?: boolean
    etc20?: boolean
    etc21?: boolean
    etc22?: boolean
    etc23?: boolean
    etc24?: boolean
    etc25?: boolean
    etc26?: boolean
    etc27?: boolean
    etc28?: boolean
    etc29?: boolean
    etc30?: boolean
    etc31?: boolean
    etc32?: boolean
    etc33?: boolean
    etc34?: boolean
    etc35?: boolean
    server_cust?: boolean
    server_orde?: boolean
    server_mici?: boolean
    server_admi?: boolean
    server_svrp?: boolean
    server_svrb?: boolean
    oauthpwd?: boolean
    medi_use?: boolean
    medi_pc?: boolean
    medi_autoju?: boolean
    medi_grname?: boolean
  }, ExtArgs["result"]["cs"]>

  export type CsSelectScalar = {
    gubun?: boolean
    code?: boolean
    myung?: boolean
    daepyo?: boolean
    tel?: boolean
    fax?: boolean
    post?: boolean
    dup?: boolean
    juso?: boolean
    bunji?: boolean
    jisa?: boolean
    emCode?: boolean
    damdang?: boolean
    damdanghp?: boolean
    jongbl?: boolean
    upte?: boolean
    saupnum?: boolean
    sauppost?: boolean
    saupdup?: boolean
    saupjuso?: boolean
    saupbunji?: boolean
    email?: boolean
    ediid?: boolean
    edipassword?: boolean
    local?: boolean
    nonchart?: boolean
    fymd?: boolean
    lymd?: boolean
    bigo?: boolean
    user?: boolean
    etc1?: boolean
    etc2?: boolean
    etc3?: boolean
    Chonguser?: boolean
    pro?: boolean
    yanghan?: boolean
    chunggu?: boolean
    cherbang?: boolean
    youngsu?: boolean
    pacs?: boolean
    barcode?: boolean
    yakguk?: boolean
    update?: boolean
    askumak?: boolean
    etc4?: boolean
    etc5?: boolean
    etc6?: boolean
    etc7?: boolean
    cms?: boolean
    daegidisp?: boolean
    gumjinlink?: boolean
    capture?: boolean
    sutak?: boolean
    sutaklink?: boolean
    gumsalinkyn?: boolean
    gumsalink?: boolean
    scaner?: boolean
    card?: boolean
    cardlink?: boolean
    eleccherban?: boolean
    yakgukprint?: boolean
    gumsabarcod?: boolean
    bdbarcode?: boolean
    updatepath?: boolean
    server?: boolean
    sanjae?: boolean
    paljji?: boolean
    jungji?: boolean
    servermodel?: boolean
    servername?: boolean
    serverSN?: boolean
    serverMT?: boolean
    serverHDD?: boolean
    serverMemory?: boolean
    serverLocation?: boolean
    serversetup?: boolean
    window?: boolean
    windowmemo?: boolean
    virusname?: boolean
    virussetup?: boolean
    virusend?: boolean
    upsname?: boolean
    upssetup?: boolean
    upsend?: boolean
    rollprint?: boolean
    inuser?: boolean
    upuser?: boolean
    indate?: boolean
    update2?: boolean
    etc8?: boolean
    etc9?: boolean
    etc10?: boolean
    etc11?: boolean
    etc12?: boolean
    etc13?: boolean
    etc14?: boolean
    etc15?: boolean
    bogubun?: boolean
    aschk?: boolean
    etc16?: boolean
    etc17?: boolean
    etc18?: boolean
    etc19?: boolean
    etc20?: boolean
    etc21?: boolean
    etc22?: boolean
    etc23?: boolean
    etc24?: boolean
    etc25?: boolean
    etc26?: boolean
    etc27?: boolean
    etc28?: boolean
    etc29?: boolean
    etc30?: boolean
    etc31?: boolean
    etc32?: boolean
    etc33?: boolean
    etc34?: boolean
    etc35?: boolean
    server_cust?: boolean
    server_orde?: boolean
    server_mici?: boolean
    server_admi?: boolean
    server_svrp?: boolean
    server_svrb?: boolean
    oauthpwd?: boolean
    medi_use?: boolean
    medi_pc?: boolean
    medi_autoju?: boolean
    medi_grname?: boolean
  }


  export type $CsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gubun: string
      code: string
      myung: string | null
      daepyo: string | null
      tel: string | null
      fax: string | null
      post: string | null
      dup: number | null
      juso: string | null
      bunji: string | null
      jisa: string | null
      emCode: string | null
      damdang: string | null
      damdanghp: string | null
      jongbl: string | null
      upte: string | null
      saupnum: string | null
      sauppost: string | null
      saupdup: number | null
      saupjuso: string | null
      saupbunji: string | null
      email: string | null
      ediid: string | null
      edipassword: string | null
      local: string | null
      nonchart: string | null
      fymd: string | null
      lymd: string | null
      bigo: string | null
      user: string | null
      etc1: string | null
      etc2: string | null
      etc3: string | null
      Chonguser: string | null
      pro: string | null
      yanghan: string | null
      chunggu: string | null
      cherbang: string | null
      youngsu: string | null
      pacs: string | null
      barcode: string | null
      yakguk: string | null
      update: string | null
      askumak: number | null
      etc4: string | null
      etc5: string | null
      etc6: string | null
      etc7: string | null
      cms: string | null
      daegidisp: string | null
      gumjinlink: string | null
      capture: string | null
      sutak: string | null
      sutaklink: string | null
      gumsalinkyn: string | null
      gumsalink: string | null
      scaner: string | null
      card: string | null
      cardlink: string | null
      eleccherban: string | null
      yakgukprint: string | null
      gumsabarcod: string | null
      bdbarcode: string | null
      updatepath: string | null
      server: string | null
      sanjae: string | null
      paljji: string | null
      jungji: string | null
      servermodel: string | null
      servername: string | null
      serverSN: string | null
      serverMT: string | null
      serverHDD: string | null
      serverMemory: string | null
      serverLocation: string | null
      serversetup: string | null
      window: string | null
      windowmemo: string | null
      virusname: string | null
      virussetup: string | null
      virusend: string | null
      upsname: string | null
      upssetup: string | null
      upsend: string | null
      rollprint: string
      inuser: string | null
      upuser: string | null
      indate: string | null
      update2: string | null
      etc8: string | null
      etc9: string | null
      etc10: string | null
      etc11: string | null
      etc12: string | null
      etc13: string | null
      etc14: string | null
      etc15: string | null
      bogubun: string | null
      aschk: string | null
      etc16: string | null
      etc17: string | null
      etc18: string | null
      etc19: string | null
      etc20: string | null
      etc21: string | null
      etc22: string | null
      etc23: string | null
      etc24: string | null
      etc25: string | null
      etc26: string | null
      etc27: string | null
      etc28: string | null
      etc29: string | null
      etc30: string | null
      etc31: string | null
      etc32: string | null
      etc33: string | null
      etc34: string | null
      etc35: string | null
      server_cust: string | null
      server_orde: string | null
      server_mici: string | null
      server_admi: string | null
      server_svrp: string | null
      server_svrb: string | null
      oauthpwd: string
      medi_use: string | null
      medi_pc: string | null
      medi_autoju: string | null
      medi_grname: string | null
    }, ExtArgs["result"]["cs"]>
    composites: {}
  }


  type CsGetPayload<S extends boolean | null | undefined | CsDefaultArgs> = $Result.GetResult<Prisma.$CsPayload, S>

  type CsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CsCountAggregateInputType | true
    }

  export interface CsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cs'], meta: { name: 'Cs' } }
    /**
     * Find zero or one Cs that matches the filter.
     * @param {CsFindUniqueArgs} args - Arguments to find a Cs
     * @example
     * // Get one Cs
     * const cs = await prisma.cs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CsFindUniqueArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CsFindUniqueOrThrowArgs} args - Arguments to find a Cs
     * @example
     * // Get one Cs
     * const cs = await prisma.cs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsFindFirstArgs} args - Arguments to find a Cs
     * @example
     * // Get one Cs
     * const cs = await prisma.cs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CsFindFirstArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsFindFirstOrThrowArgs} args - Arguments to find a Cs
     * @example
     * // Get one Cs
     * const cs = await prisma.cs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cs
     * const cs = await prisma.cs.findMany()
     * 
     * // Get first 10 Cs
     * const cs = await prisma.cs.findMany({ take: 10 })
     * 
     * // Only select the `gubun`
     * const csWithGubunOnly = await prisma.cs.findMany({ select: { gubun: true } })
     * 
    **/
    findMany<T extends CsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cs.
     * @param {CsCreateArgs} args - Arguments to create a Cs.
     * @example
     * // Create one Cs
     * const Cs = await prisma.cs.create({
     *   data: {
     *     // ... data to create a Cs
     *   }
     * })
     * 
    **/
    create<T extends CsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CsCreateArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cs.
     *     @param {CsCreateManyArgs} args - Arguments to create many Cs.
     *     @example
     *     // Create many Cs
     *     const cs = await prisma.cs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cs.
     * @param {CsDeleteArgs} args - Arguments to delete one Cs.
     * @example
     * // Delete one Cs
     * const Cs = await prisma.cs.delete({
     *   where: {
     *     // ... filter to delete one Cs
     *   }
     * })
     * 
    **/
    delete<T extends CsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CsDeleteArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cs.
     * @param {CsUpdateArgs} args - Arguments to update one Cs.
     * @example
     * // Update one Cs
     * const cs = await prisma.cs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CsUpdateArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cs.
     * @param {CsDeleteManyArgs} args - Arguments to filter Cs to delete.
     * @example
     * // Delete a few Cs
     * const { count } = await prisma.cs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cs
     * const cs = await prisma.cs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cs.
     * @param {CsUpsertArgs} args - Arguments to update or create a Cs.
     * @example
     * // Update or create a Cs
     * const cs = await prisma.cs.upsert({
     *   create: {
     *     // ... data to create a Cs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cs we want to update
     *   }
     * })
    **/
    upsert<T extends CsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CsUpsertArgs<ExtArgs>>
    ): Prisma__CsClient<$Result.GetResult<Prisma.$CsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsCountArgs} args - Arguments to filter Cs to count.
     * @example
     * // Count the number of Cs
     * const count = await prisma.cs.count({
     *   where: {
     *     // ... the filter for the Cs we want to count
     *   }
     * })
    **/
    count<T extends CsCountArgs>(
      args?: Subset<T, CsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CsAggregateArgs>(args: Subset<T, CsAggregateArgs>): Prisma.PrismaPromise<GetCsAggregateType<T>>

    /**
     * Group by Cs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CsGroupByArgs} args - Group by arguments.
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
      T extends CsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CsGroupByArgs['orderBy'] }
        : { orderBy?: CsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cs model
   */
  readonly fields: CsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cs model
   */ 
  interface CsFieldRefs {
    readonly gubun: FieldRef<"Cs", 'String'>
    readonly code: FieldRef<"Cs", 'String'>
    readonly myung: FieldRef<"Cs", 'String'>
    readonly daepyo: FieldRef<"Cs", 'String'>
    readonly tel: FieldRef<"Cs", 'String'>
    readonly fax: FieldRef<"Cs", 'String'>
    readonly post: FieldRef<"Cs", 'String'>
    readonly dup: FieldRef<"Cs", 'Int'>
    readonly juso: FieldRef<"Cs", 'String'>
    readonly bunji: FieldRef<"Cs", 'String'>
    readonly jisa: FieldRef<"Cs", 'String'>
    readonly emCode: FieldRef<"Cs", 'String'>
    readonly damdang: FieldRef<"Cs", 'String'>
    readonly damdanghp: FieldRef<"Cs", 'String'>
    readonly jongbl: FieldRef<"Cs", 'String'>
    readonly upte: FieldRef<"Cs", 'String'>
    readonly saupnum: FieldRef<"Cs", 'String'>
    readonly sauppost: FieldRef<"Cs", 'String'>
    readonly saupdup: FieldRef<"Cs", 'Int'>
    readonly saupjuso: FieldRef<"Cs", 'String'>
    readonly saupbunji: FieldRef<"Cs", 'String'>
    readonly email: FieldRef<"Cs", 'String'>
    readonly ediid: FieldRef<"Cs", 'String'>
    readonly edipassword: FieldRef<"Cs", 'String'>
    readonly local: FieldRef<"Cs", 'String'>
    readonly nonchart: FieldRef<"Cs", 'String'>
    readonly fymd: FieldRef<"Cs", 'String'>
    readonly lymd: FieldRef<"Cs", 'String'>
    readonly bigo: FieldRef<"Cs", 'String'>
    readonly user: FieldRef<"Cs", 'String'>
    readonly etc1: FieldRef<"Cs", 'String'>
    readonly etc2: FieldRef<"Cs", 'String'>
    readonly etc3: FieldRef<"Cs", 'String'>
    readonly Chonguser: FieldRef<"Cs", 'String'>
    readonly pro: FieldRef<"Cs", 'String'>
    readonly yanghan: FieldRef<"Cs", 'String'>
    readonly chunggu: FieldRef<"Cs", 'String'>
    readonly cherbang: FieldRef<"Cs", 'String'>
    readonly youngsu: FieldRef<"Cs", 'String'>
    readonly pacs: FieldRef<"Cs", 'String'>
    readonly barcode: FieldRef<"Cs", 'String'>
    readonly yakguk: FieldRef<"Cs", 'String'>
    readonly update: FieldRef<"Cs", 'String'>
    readonly askumak: FieldRef<"Cs", 'Int'>
    readonly etc4: FieldRef<"Cs", 'String'>
    readonly etc5: FieldRef<"Cs", 'String'>
    readonly etc6: FieldRef<"Cs", 'String'>
    readonly etc7: FieldRef<"Cs", 'String'>
    readonly cms: FieldRef<"Cs", 'String'>
    readonly daegidisp: FieldRef<"Cs", 'String'>
    readonly gumjinlink: FieldRef<"Cs", 'String'>
    readonly capture: FieldRef<"Cs", 'String'>
    readonly sutak: FieldRef<"Cs", 'String'>
    readonly sutaklink: FieldRef<"Cs", 'String'>
    readonly gumsalinkyn: FieldRef<"Cs", 'String'>
    readonly gumsalink: FieldRef<"Cs", 'String'>
    readonly scaner: FieldRef<"Cs", 'String'>
    readonly card: FieldRef<"Cs", 'String'>
    readonly cardlink: FieldRef<"Cs", 'String'>
    readonly eleccherban: FieldRef<"Cs", 'String'>
    readonly yakgukprint: FieldRef<"Cs", 'String'>
    readonly gumsabarcod: FieldRef<"Cs", 'String'>
    readonly bdbarcode: FieldRef<"Cs", 'String'>
    readonly updatepath: FieldRef<"Cs", 'String'>
    readonly server: FieldRef<"Cs", 'String'>
    readonly sanjae: FieldRef<"Cs", 'String'>
    readonly paljji: FieldRef<"Cs", 'String'>
    readonly jungji: FieldRef<"Cs", 'String'>
    readonly servermodel: FieldRef<"Cs", 'String'>
    readonly servername: FieldRef<"Cs", 'String'>
    readonly serverSN: FieldRef<"Cs", 'String'>
    readonly serverMT: FieldRef<"Cs", 'String'>
    readonly serverHDD: FieldRef<"Cs", 'String'>
    readonly serverMemory: FieldRef<"Cs", 'String'>
    readonly serverLocation: FieldRef<"Cs", 'String'>
    readonly serversetup: FieldRef<"Cs", 'String'>
    readonly window: FieldRef<"Cs", 'String'>
    readonly windowmemo: FieldRef<"Cs", 'String'>
    readonly virusname: FieldRef<"Cs", 'String'>
    readonly virussetup: FieldRef<"Cs", 'String'>
    readonly virusend: FieldRef<"Cs", 'String'>
    readonly upsname: FieldRef<"Cs", 'String'>
    readonly upssetup: FieldRef<"Cs", 'String'>
    readonly upsend: FieldRef<"Cs", 'String'>
    readonly rollprint: FieldRef<"Cs", 'String'>
    readonly inuser: FieldRef<"Cs", 'String'>
    readonly upuser: FieldRef<"Cs", 'String'>
    readonly indate: FieldRef<"Cs", 'String'>
    readonly update2: FieldRef<"Cs", 'String'>
    readonly etc8: FieldRef<"Cs", 'String'>
    readonly etc9: FieldRef<"Cs", 'String'>
    readonly etc10: FieldRef<"Cs", 'String'>
    readonly etc11: FieldRef<"Cs", 'String'>
    readonly etc12: FieldRef<"Cs", 'String'>
    readonly etc13: FieldRef<"Cs", 'String'>
    readonly etc14: FieldRef<"Cs", 'String'>
    readonly etc15: FieldRef<"Cs", 'String'>
    readonly bogubun: FieldRef<"Cs", 'String'>
    readonly aschk: FieldRef<"Cs", 'String'>
    readonly etc16: FieldRef<"Cs", 'String'>
    readonly etc17: FieldRef<"Cs", 'String'>
    readonly etc18: FieldRef<"Cs", 'String'>
    readonly etc19: FieldRef<"Cs", 'String'>
    readonly etc20: FieldRef<"Cs", 'String'>
    readonly etc21: FieldRef<"Cs", 'String'>
    readonly etc22: FieldRef<"Cs", 'String'>
    readonly etc23: FieldRef<"Cs", 'String'>
    readonly etc24: FieldRef<"Cs", 'String'>
    readonly etc25: FieldRef<"Cs", 'String'>
    readonly etc26: FieldRef<"Cs", 'String'>
    readonly etc27: FieldRef<"Cs", 'String'>
    readonly etc28: FieldRef<"Cs", 'String'>
    readonly etc29: FieldRef<"Cs", 'String'>
    readonly etc30: FieldRef<"Cs", 'String'>
    readonly etc31: FieldRef<"Cs", 'String'>
    readonly etc32: FieldRef<"Cs", 'String'>
    readonly etc33: FieldRef<"Cs", 'String'>
    readonly etc34: FieldRef<"Cs", 'String'>
    readonly etc35: FieldRef<"Cs", 'String'>
    readonly server_cust: FieldRef<"Cs", 'String'>
    readonly server_orde: FieldRef<"Cs", 'String'>
    readonly server_mici: FieldRef<"Cs", 'String'>
    readonly server_admi: FieldRef<"Cs", 'String'>
    readonly server_svrp: FieldRef<"Cs", 'String'>
    readonly server_svrb: FieldRef<"Cs", 'String'>
    readonly oauthpwd: FieldRef<"Cs", 'String'>
    readonly medi_use: FieldRef<"Cs", 'String'>
    readonly medi_pc: FieldRef<"Cs", 'String'>
    readonly medi_autoju: FieldRef<"Cs", 'String'>
    readonly medi_grname: FieldRef<"Cs", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Cs findUnique
   */
  export type CsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter, which Cs to fetch.
     */
    where: CsWhereUniqueInput
  }


  /**
   * Cs findUniqueOrThrow
   */
  export type CsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter, which Cs to fetch.
     */
    where: CsWhereUniqueInput
  }


  /**
   * Cs findFirst
   */
  export type CsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter, which Cs to fetch.
     */
    where?: CsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cs to fetch.
     */
    orderBy?: CsOrderByWithRelationInput | CsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cs.
     */
    cursor?: CsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cs.
     */
    distinct?: CsScalarFieldEnum | CsScalarFieldEnum[]
  }


  /**
   * Cs findFirstOrThrow
   */
  export type CsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter, which Cs to fetch.
     */
    where?: CsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cs to fetch.
     */
    orderBy?: CsOrderByWithRelationInput | CsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cs.
     */
    cursor?: CsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cs.
     */
    distinct?: CsScalarFieldEnum | CsScalarFieldEnum[]
  }


  /**
   * Cs findMany
   */
  export type CsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter, which Cs to fetch.
     */
    where?: CsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cs to fetch.
     */
    orderBy?: CsOrderByWithRelationInput | CsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cs.
     */
    cursor?: CsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cs.
     */
    skip?: number
    distinct?: CsScalarFieldEnum | CsScalarFieldEnum[]
  }


  /**
   * Cs create
   */
  export type CsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * The data needed to create a Cs.
     */
    data: XOR<CsCreateInput, CsUncheckedCreateInput>
  }


  /**
   * Cs createMany
   */
  export type CsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cs.
     */
    data: CsCreateManyInput | CsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cs update
   */
  export type CsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * The data needed to update a Cs.
     */
    data: XOR<CsUpdateInput, CsUncheckedUpdateInput>
    /**
     * Choose, which Cs to update.
     */
    where: CsWhereUniqueInput
  }


  /**
   * Cs updateMany
   */
  export type CsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cs.
     */
    data: XOR<CsUpdateManyMutationInput, CsUncheckedUpdateManyInput>
    /**
     * Filter which Cs to update
     */
    where?: CsWhereInput
  }


  /**
   * Cs upsert
   */
  export type CsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * The filter to search for the Cs to update in case it exists.
     */
    where: CsWhereUniqueInput
    /**
     * In case the Cs found by the `where` argument doesn't exist, create a new Cs with this data.
     */
    create: XOR<CsCreateInput, CsUncheckedCreateInput>
    /**
     * In case the Cs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CsUpdateInput, CsUncheckedUpdateInput>
  }


  /**
   * Cs delete
   */
  export type CsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
    /**
     * Filter which Cs to delete.
     */
    where: CsWhereUniqueInput
  }


  /**
   * Cs deleteMany
   */
  export type CsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cs to delete
     */
    where?: CsWhereInput
  }


  /**
   * Cs without action
   */
  export type CsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cs
     */
    select?: CsSelect<ExtArgs> | null
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
    id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    ykiho: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    ykiho: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    ykiho: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    ykiho?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    ykiho?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    ykiho?: true
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
    id: number
    ykiho: string
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
    ykiho?: boolean
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    ykiho?: boolean
  }

  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ykiho: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }


  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends CartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends CartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends CartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends CartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartCreateArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carts.
     *     @param {CartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends CartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartDeleteArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends CartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends CartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends CartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends CartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartUpsertArgs<ExtArgs>>
    ): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cartItems<T extends Cart$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cart model
   */ 
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly ykiho: FieldRef<"Cart", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * Cart.cartItems
   */
  export type Cart$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: CartInclude<ExtArgs> | null
  }



  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    code: string | null
    quantity: number | null
    fit: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    code: string | null
    quantity: number | null
    fit: boolean | null
    createdDate: Date | null
    updatedDate: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    code: number
    quantity: number
    fit: number
    createdDate: number
    updatedDate: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    cartId?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    cartId?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    code?: true
    quantity?: true
    fit?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    code?: true
    quantity?: true
    fit?: true
    createdDate?: true
    updatedDate?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    code?: true
    quantity?: true
    fit?: true
    createdDate?: true
    updatedDate?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cartId: number
    code: string
    quantity: number
    fit: boolean
    createdDate: Date
    updatedDate: Date | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    code?: boolean
    quantity?: boolean
    fit?: boolean
    createdDate?: boolean
    updatedDate?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    code?: boolean
    quantity?: boolean
    fit?: boolean
    createdDate?: boolean
    updatedDate?: boolean
  }

  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
  }


  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      code: string
      quantity: number
      fit: boolean
      createdDate: Date
      updatedDate: Date | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }


  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CartItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
    **/
    create<T extends CartItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CartItems.
     *     @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     *     @example
     *     // Create many CartItems
     *     const cartItem = await prisma.cartItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
    **/
    delete<T extends CartItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
    **/
    upsert<T extends CartItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>
    ): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CartItem model
   */ 
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly cartId: FieldRef<"CartItem", 'Int'>
    readonly code: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly fit: FieldRef<"CartItem", 'Boolean'>
    readonly createdDate: FieldRef<"CartItem", 'DateTime'>
    readonly updatedDate: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }


  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }


  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }


  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }


  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
  }


  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartItemInclude<ExtArgs> | null
  }



  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    quantity: number | null
    test: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    quantity: number | null
    test: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    ykiho: string | null
    orderId: string | null
    paymentKey: string | null
    customerName: string | null
    method: string | null
    amount: number | null
    quantity: number | null
    requestedAt: Date | null
    approvedAt: Date | null
    sendType: string | null
    cancel: boolean | null
    test: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    ykiho: string | null
    orderId: string | null
    paymentKey: string | null
    customerName: string | null
    method: string | null
    amount: number | null
    quantity: number | null
    requestedAt: Date | null
    approvedAt: Date | null
    sendType: string | null
    cancel: boolean | null
    test: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    ykiho: number
    orderId: number
    paymentKey: number
    customerName: number
    method: number
    amount: number
    quantity: number
    requestedAt: number
    approvedAt: number
    sendType: number
    cancel: number
    test: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    quantity?: true
    test?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    quantity?: true
    test?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    ykiho?: true
    orderId?: true
    paymentKey?: true
    customerName?: true
    method?: true
    amount?: true
    quantity?: true
    requestedAt?: true
    approvedAt?: true
    sendType?: true
    cancel?: true
    test?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    ykiho?: true
    orderId?: true
    paymentKey?: true
    customerName?: true
    method?: true
    amount?: true
    quantity?: true
    requestedAt?: true
    approvedAt?: true
    sendType?: true
    cancel?: true
    test?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    ykiho?: true
    orderId?: true
    paymentKey?: true
    customerName?: true
    method?: true
    amount?: true
    quantity?: true
    requestedAt?: true
    approvedAt?: true
    sendType?: true
    cancel?: true
    test?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt: Date | null
    approvedAt: Date | null
    sendType: string
    cancel: boolean
    test: number | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ykiho?: boolean
    orderId?: boolean
    paymentKey?: boolean
    customerName?: boolean
    method?: boolean
    amount?: boolean
    quantity?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    sendType?: boolean
    cancel?: boolean
    test?: boolean
    paymentItems?: boolean | Payment$paymentItemsArgs<ExtArgs>
    virtual?: boolean | Payment$virtualArgs<ExtArgs>
    refund?: boolean | Payment$refundArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    ykiho?: boolean
    orderId?: boolean
    paymentKey?: boolean
    customerName?: boolean
    method?: boolean
    amount?: boolean
    quantity?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    sendType?: boolean
    cancel?: boolean
    test?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentItems?: boolean | Payment$paymentItemsArgs<ExtArgs>
    virtual?: boolean | Payment$virtualArgs<ExtArgs>
    refund?: boolean | Payment$refundArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      paymentItems: Prisma.$PaymentItemPayload<ExtArgs>[]
      virtual: Prisma.$PaymentVirtualPayload<ExtArgs> | null
      refund: Prisma.$PaymentRefundPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ykiho: string
      orderId: string
      paymentKey: string
      customerName: string
      method: string
      amount: number
      quantity: number
      requestedAt: Date | null
      approvedAt: Date | null
      sendType: string
      cancel: boolean
      test: number | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }


  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paymentItems<T extends Payment$paymentItemsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$paymentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    virtual<T extends Payment$virtualArgs<ExtArgs> = {}>(args?: Subset<T, Payment$virtualArgs<ExtArgs>>): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    refund<T extends Payment$refundArgs<ExtArgs> = {}>(args?: Subset<T, Payment$refundArgs<ExtArgs>>): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly ykiho: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly paymentKey: FieldRef<"Payment", 'String'>
    readonly customerName: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly quantity: FieldRef<"Payment", 'Int'>
    readonly requestedAt: FieldRef<"Payment", 'DateTime'>
    readonly approvedAt: FieldRef<"Payment", 'DateTime'>
    readonly sendType: FieldRef<"Payment", 'String'>
    readonly cancel: FieldRef<"Payment", 'Boolean'>
    readonly test: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment.paymentItems
   */
  export type Payment$paymentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    where?: PaymentItemWhereInput
    orderBy?: PaymentItemOrderByWithRelationInput | PaymentItemOrderByWithRelationInput[]
    cursor?: PaymentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentItemScalarFieldEnum | PaymentItemScalarFieldEnum[]
  }


  /**
   * Payment.virtual
   */
  export type Payment$virtualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    where?: PaymentVirtualWhereInput
  }


  /**
   * Payment.refund
   */
  export type Payment$refundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    where?: PaymentRefundWhereInput
  }


  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
  }



  /**
   * Model PaymentItem
   */

  export type AggregatePaymentItem = {
    _count: PaymentItemCountAggregateOutputType | null
    _avg: PaymentItemAvgAggregateOutputType | null
    _sum: PaymentItemSumAggregateOutputType | null
    _min: PaymentItemMinAggregateOutputType | null
    _max: PaymentItemMaxAggregateOutputType | null
  }

  export type PaymentItemAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
    quantity: number | null
    amount: number | null
  }

  export type PaymentItemSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
    quantity: number | null
    amount: number | null
  }

  export type PaymentItemMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    code: string | null
    name: string | null
    fit: boolean | null
    quantity: number | null
    amount: number | null
  }

  export type PaymentItemMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    code: string | null
    name: string | null
    fit: boolean | null
    quantity: number | null
    amount: number | null
  }

  export type PaymentItemCountAggregateOutputType = {
    id: number
    paymentId: number
    code: number
    name: number
    fit: number
    quantity: number
    amount: number
    _all: number
  }


  export type PaymentItemAvgAggregateInputType = {
    id?: true
    paymentId?: true
    quantity?: true
    amount?: true
  }

  export type PaymentItemSumAggregateInputType = {
    id?: true
    paymentId?: true
    quantity?: true
    amount?: true
  }

  export type PaymentItemMinAggregateInputType = {
    id?: true
    paymentId?: true
    code?: true
    name?: true
    fit?: true
    quantity?: true
    amount?: true
  }

  export type PaymentItemMaxAggregateInputType = {
    id?: true
    paymentId?: true
    code?: true
    name?: true
    fit?: true
    quantity?: true
    amount?: true
  }

  export type PaymentItemCountAggregateInputType = {
    id?: true
    paymentId?: true
    code?: true
    name?: true
    fit?: true
    quantity?: true
    amount?: true
    _all?: true
  }

  export type PaymentItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentItem to aggregate.
     */
    where?: PaymentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentItems to fetch.
     */
    orderBy?: PaymentItemOrderByWithRelationInput | PaymentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentItems
    **/
    _count?: true | PaymentItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentItemMaxAggregateInputType
  }

  export type GetPaymentItemAggregateType<T extends PaymentItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentItem[P]>
      : GetScalarType<T[P], AggregatePaymentItem[P]>
  }




  export type PaymentItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentItemWhereInput
    orderBy?: PaymentItemOrderByWithAggregationInput | PaymentItemOrderByWithAggregationInput[]
    by: PaymentItemScalarFieldEnum[] | PaymentItemScalarFieldEnum
    having?: PaymentItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentItemCountAggregateInputType | true
    _avg?: PaymentItemAvgAggregateInputType
    _sum?: PaymentItemSumAggregateInputType
    _min?: PaymentItemMinAggregateInputType
    _max?: PaymentItemMaxAggregateInputType
  }

  export type PaymentItemGroupByOutputType = {
    id: number
    paymentId: number
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
    _count: PaymentItemCountAggregateOutputType | null
    _avg: PaymentItemAvgAggregateOutputType | null
    _sum: PaymentItemSumAggregateOutputType | null
    _min: PaymentItemMinAggregateOutputType | null
    _max: PaymentItemMaxAggregateOutputType | null
  }

  type GetPaymentItemGroupByPayload<T extends PaymentItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentItemGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentItemGroupByOutputType[P]>
        }
      >
    >


  export type PaymentItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    code?: boolean
    name?: boolean
    fit?: boolean
    quantity?: boolean
    amount?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentItem"]>

  export type PaymentItemSelectScalar = {
    id?: boolean
    paymentId?: boolean
    code?: boolean
    name?: boolean
    fit?: boolean
    quantity?: boolean
    amount?: boolean
  }

  export type PaymentItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $PaymentItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentItem"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      code: string
      name: string
      fit: boolean
      quantity: number
      amount: number
    }, ExtArgs["result"]["paymentItem"]>
    composites: {}
  }


  type PaymentItemGetPayload<S extends boolean | null | undefined | PaymentItemDefaultArgs> = $Result.GetResult<Prisma.$PaymentItemPayload, S>

  type PaymentItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentItemCountAggregateInputType | true
    }

  export interface PaymentItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentItem'], meta: { name: 'PaymentItem' } }
    /**
     * Find zero or one PaymentItem that matches the filter.
     * @param {PaymentItemFindUniqueArgs} args - Arguments to find a PaymentItem
     * @example
     * // Get one PaymentItem
     * const paymentItem = await prisma.paymentItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentItemFindUniqueOrThrowArgs} args - Arguments to find a PaymentItem
     * @example
     * // Get one PaymentItem
     * const paymentItem = await prisma.paymentItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemFindFirstArgs} args - Arguments to find a PaymentItem
     * @example
     * // Get one PaymentItem
     * const paymentItem = await prisma.paymentItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemFindFirstOrThrowArgs} args - Arguments to find a PaymentItem
     * @example
     * // Get one PaymentItem
     * const paymentItem = await prisma.paymentItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentItems
     * const paymentItems = await prisma.paymentItem.findMany()
     * 
     * // Get first 10 PaymentItems
     * const paymentItems = await prisma.paymentItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentItemWithIdOnly = await prisma.paymentItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentItem.
     * @param {PaymentItemCreateArgs} args - Arguments to create a PaymentItem.
     * @example
     * // Create one PaymentItem
     * const PaymentItem = await prisma.paymentItem.create({
     *   data: {
     *     // ... data to create a PaymentItem
     *   }
     * })
     * 
    **/
    create<T extends PaymentItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemCreateArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentItems.
     *     @param {PaymentItemCreateManyArgs} args - Arguments to create many PaymentItems.
     *     @example
     *     // Create many PaymentItems
     *     const paymentItem = await prisma.paymentItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentItem.
     * @param {PaymentItemDeleteArgs} args - Arguments to delete one PaymentItem.
     * @example
     * // Delete one PaymentItem
     * const PaymentItem = await prisma.paymentItem.delete({
     *   where: {
     *     // ... filter to delete one PaymentItem
     *   }
     * })
     * 
    **/
    delete<T extends PaymentItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemDeleteArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentItem.
     * @param {PaymentItemUpdateArgs} args - Arguments to update one PaymentItem.
     * @example
     * // Update one PaymentItem
     * const paymentItem = await prisma.paymentItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemUpdateArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentItems.
     * @param {PaymentItemDeleteManyArgs} args - Arguments to filter PaymentItems to delete.
     * @example
     * // Delete a few PaymentItems
     * const { count } = await prisma.paymentItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentItems
     * const paymentItem = await prisma.paymentItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentItem.
     * @param {PaymentItemUpsertArgs} args - Arguments to update or create a PaymentItem.
     * @example
     * // Update or create a PaymentItem
     * const paymentItem = await prisma.paymentItem.upsert({
     *   create: {
     *     // ... data to create a PaymentItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentItem we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentItemUpsertArgs<ExtArgs>>
    ): Prisma__PaymentItemClient<$Result.GetResult<Prisma.$PaymentItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemCountArgs} args - Arguments to filter PaymentItems to count.
     * @example
     * // Count the number of PaymentItems
     * const count = await prisma.paymentItem.count({
     *   where: {
     *     // ... the filter for the PaymentItems we want to count
     *   }
     * })
    **/
    count<T extends PaymentItemCountArgs>(
      args?: Subset<T, PaymentItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentItemAggregateArgs>(args: Subset<T, PaymentItemAggregateArgs>): Prisma.PrismaPromise<GetPaymentItemAggregateType<T>>

    /**
     * Group by PaymentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentItemGroupByArgs} args - Group by arguments.
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
      T extends PaymentItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentItemGroupByArgs['orderBy'] }
        : { orderBy?: PaymentItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentItem model
   */
  readonly fields: PaymentItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentItem model
   */ 
  interface PaymentItemFieldRefs {
    readonly id: FieldRef<"PaymentItem", 'Int'>
    readonly paymentId: FieldRef<"PaymentItem", 'Int'>
    readonly code: FieldRef<"PaymentItem", 'String'>
    readonly name: FieldRef<"PaymentItem", 'String'>
    readonly fit: FieldRef<"PaymentItem", 'Boolean'>
    readonly quantity: FieldRef<"PaymentItem", 'Int'>
    readonly amount: FieldRef<"PaymentItem", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * PaymentItem findUnique
   */
  export type PaymentItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter, which PaymentItem to fetch.
     */
    where: PaymentItemWhereUniqueInput
  }


  /**
   * PaymentItem findUniqueOrThrow
   */
  export type PaymentItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter, which PaymentItem to fetch.
     */
    where: PaymentItemWhereUniqueInput
  }


  /**
   * PaymentItem findFirst
   */
  export type PaymentItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter, which PaymentItem to fetch.
     */
    where?: PaymentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentItems to fetch.
     */
    orderBy?: PaymentItemOrderByWithRelationInput | PaymentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentItems.
     */
    cursor?: PaymentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentItems.
     */
    distinct?: PaymentItemScalarFieldEnum | PaymentItemScalarFieldEnum[]
  }


  /**
   * PaymentItem findFirstOrThrow
   */
  export type PaymentItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter, which PaymentItem to fetch.
     */
    where?: PaymentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentItems to fetch.
     */
    orderBy?: PaymentItemOrderByWithRelationInput | PaymentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentItems.
     */
    cursor?: PaymentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentItems.
     */
    distinct?: PaymentItemScalarFieldEnum | PaymentItemScalarFieldEnum[]
  }


  /**
   * PaymentItem findMany
   */
  export type PaymentItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter, which PaymentItems to fetch.
     */
    where?: PaymentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentItems to fetch.
     */
    orderBy?: PaymentItemOrderByWithRelationInput | PaymentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentItems.
     */
    cursor?: PaymentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentItems.
     */
    skip?: number
    distinct?: PaymentItemScalarFieldEnum | PaymentItemScalarFieldEnum[]
  }


  /**
   * PaymentItem create
   */
  export type PaymentItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentItem.
     */
    data: XOR<PaymentItemCreateInput, PaymentItemUncheckedCreateInput>
  }


  /**
   * PaymentItem createMany
   */
  export type PaymentItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentItems.
     */
    data: PaymentItemCreateManyInput | PaymentItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentItem update
   */
  export type PaymentItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentItem.
     */
    data: XOR<PaymentItemUpdateInput, PaymentItemUncheckedUpdateInput>
    /**
     * Choose, which PaymentItem to update.
     */
    where: PaymentItemWhereUniqueInput
  }


  /**
   * PaymentItem updateMany
   */
  export type PaymentItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentItems.
     */
    data: XOR<PaymentItemUpdateManyMutationInput, PaymentItemUncheckedUpdateManyInput>
    /**
     * Filter which PaymentItems to update
     */
    where?: PaymentItemWhereInput
  }


  /**
   * PaymentItem upsert
   */
  export type PaymentItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentItem to update in case it exists.
     */
    where: PaymentItemWhereUniqueInput
    /**
     * In case the PaymentItem found by the `where` argument doesn't exist, create a new PaymentItem with this data.
     */
    create: XOR<PaymentItemCreateInput, PaymentItemUncheckedCreateInput>
    /**
     * In case the PaymentItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentItemUpdateInput, PaymentItemUncheckedUpdateInput>
  }


  /**
   * PaymentItem delete
   */
  export type PaymentItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
    /**
     * Filter which PaymentItem to delete.
     */
    where: PaymentItemWhereUniqueInput
  }


  /**
   * PaymentItem deleteMany
   */
  export type PaymentItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentItems to delete
     */
    where?: PaymentItemWhereInput
  }


  /**
   * PaymentItem without action
   */
  export type PaymentItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentItem
     */
    select?: PaymentItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentItemInclude<ExtArgs> | null
  }



  /**
   * Model PaymentVirtual
   */

  export type AggregatePaymentVirtual = {
    _count: PaymentVirtualCountAggregateOutputType | null
    _avg: PaymentVirtualAvgAggregateOutputType | null
    _sum: PaymentVirtualSumAggregateOutputType | null
    _min: PaymentVirtualMinAggregateOutputType | null
    _max: PaymentVirtualMaxAggregateOutputType | null
  }

  export type PaymentVirtualAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type PaymentVirtualSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type PaymentVirtualMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    bankCode: string | null
    customerName: string | null
    dueDate: Date | null
    accountNumber: string | null
  }

  export type PaymentVirtualMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    bankCode: string | null
    customerName: string | null
    dueDate: Date | null
    accountNumber: string | null
  }

  export type PaymentVirtualCountAggregateOutputType = {
    id: number
    paymentId: number
    bankCode: number
    customerName: number
    dueDate: number
    accountNumber: number
    _all: number
  }


  export type PaymentVirtualAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type PaymentVirtualSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type PaymentVirtualMinAggregateInputType = {
    id?: true
    paymentId?: true
    bankCode?: true
    customerName?: true
    dueDate?: true
    accountNumber?: true
  }

  export type PaymentVirtualMaxAggregateInputType = {
    id?: true
    paymentId?: true
    bankCode?: true
    customerName?: true
    dueDate?: true
    accountNumber?: true
  }

  export type PaymentVirtualCountAggregateInputType = {
    id?: true
    paymentId?: true
    bankCode?: true
    customerName?: true
    dueDate?: true
    accountNumber?: true
    _all?: true
  }

  export type PaymentVirtualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentVirtual to aggregate.
     */
    where?: PaymentVirtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentVirtuals to fetch.
     */
    orderBy?: PaymentVirtualOrderByWithRelationInput | PaymentVirtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentVirtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentVirtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentVirtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentVirtuals
    **/
    _count?: true | PaymentVirtualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentVirtualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentVirtualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentVirtualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentVirtualMaxAggregateInputType
  }

  export type GetPaymentVirtualAggregateType<T extends PaymentVirtualAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentVirtual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentVirtual[P]>
      : GetScalarType<T[P], AggregatePaymentVirtual[P]>
  }




  export type PaymentVirtualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentVirtualWhereInput
    orderBy?: PaymentVirtualOrderByWithAggregationInput | PaymentVirtualOrderByWithAggregationInput[]
    by: PaymentVirtualScalarFieldEnum[] | PaymentVirtualScalarFieldEnum
    having?: PaymentVirtualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentVirtualCountAggregateInputType | true
    _avg?: PaymentVirtualAvgAggregateInputType
    _sum?: PaymentVirtualSumAggregateInputType
    _min?: PaymentVirtualMinAggregateInputType
    _max?: PaymentVirtualMaxAggregateInputType
  }

  export type PaymentVirtualGroupByOutputType = {
    id: number
    paymentId: number
    bankCode: string
    customerName: string
    dueDate: Date
    accountNumber: string
    _count: PaymentVirtualCountAggregateOutputType | null
    _avg: PaymentVirtualAvgAggregateOutputType | null
    _sum: PaymentVirtualSumAggregateOutputType | null
    _min: PaymentVirtualMinAggregateOutputType | null
    _max: PaymentVirtualMaxAggregateOutputType | null
  }

  type GetPaymentVirtualGroupByPayload<T extends PaymentVirtualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentVirtualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentVirtualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentVirtualGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentVirtualGroupByOutputType[P]>
        }
      >
    >


  export type PaymentVirtualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    bankCode?: boolean
    customerName?: boolean
    dueDate?: boolean
    accountNumber?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentVirtual"]>

  export type PaymentVirtualSelectScalar = {
    id?: boolean
    paymentId?: boolean
    bankCode?: boolean
    customerName?: boolean
    dueDate?: boolean
    accountNumber?: boolean
  }

  export type PaymentVirtualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $PaymentVirtualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentVirtual"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      bankCode: string
      customerName: string
      dueDate: Date
      accountNumber: string
    }, ExtArgs["result"]["paymentVirtual"]>
    composites: {}
  }


  type PaymentVirtualGetPayload<S extends boolean | null | undefined | PaymentVirtualDefaultArgs> = $Result.GetResult<Prisma.$PaymentVirtualPayload, S>

  type PaymentVirtualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentVirtualFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentVirtualCountAggregateInputType | true
    }

  export interface PaymentVirtualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentVirtual'], meta: { name: 'PaymentVirtual' } }
    /**
     * Find zero or one PaymentVirtual that matches the filter.
     * @param {PaymentVirtualFindUniqueArgs} args - Arguments to find a PaymentVirtual
     * @example
     * // Get one PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentVirtualFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentVirtual that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentVirtualFindUniqueOrThrowArgs} args - Arguments to find a PaymentVirtual
     * @example
     * // Get one PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentVirtualFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentVirtual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualFindFirstArgs} args - Arguments to find a PaymentVirtual
     * @example
     * // Get one PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentVirtualFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentVirtual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualFindFirstOrThrowArgs} args - Arguments to find a PaymentVirtual
     * @example
     * // Get one PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentVirtualFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentVirtuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentVirtuals
     * const paymentVirtuals = await prisma.paymentVirtual.findMany()
     * 
     * // Get first 10 PaymentVirtuals
     * const paymentVirtuals = await prisma.paymentVirtual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentVirtualWithIdOnly = await prisma.paymentVirtual.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentVirtualFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentVirtual.
     * @param {PaymentVirtualCreateArgs} args - Arguments to create a PaymentVirtual.
     * @example
     * // Create one PaymentVirtual
     * const PaymentVirtual = await prisma.paymentVirtual.create({
     *   data: {
     *     // ... data to create a PaymentVirtual
     *   }
     * })
     * 
    **/
    create<T extends PaymentVirtualCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualCreateArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentVirtuals.
     *     @param {PaymentVirtualCreateManyArgs} args - Arguments to create many PaymentVirtuals.
     *     @example
     *     // Create many PaymentVirtuals
     *     const paymentVirtual = await prisma.paymentVirtual.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentVirtualCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentVirtual.
     * @param {PaymentVirtualDeleteArgs} args - Arguments to delete one PaymentVirtual.
     * @example
     * // Delete one PaymentVirtual
     * const PaymentVirtual = await prisma.paymentVirtual.delete({
     *   where: {
     *     // ... filter to delete one PaymentVirtual
     *   }
     * })
     * 
    **/
    delete<T extends PaymentVirtualDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualDeleteArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentVirtual.
     * @param {PaymentVirtualUpdateArgs} args - Arguments to update one PaymentVirtual.
     * @example
     * // Update one PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentVirtualUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualUpdateArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentVirtuals.
     * @param {PaymentVirtualDeleteManyArgs} args - Arguments to filter PaymentVirtuals to delete.
     * @example
     * // Delete a few PaymentVirtuals
     * const { count } = await prisma.paymentVirtual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentVirtualDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentVirtualDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentVirtuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentVirtuals
     * const paymentVirtual = await prisma.paymentVirtual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentVirtualUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentVirtual.
     * @param {PaymentVirtualUpsertArgs} args - Arguments to update or create a PaymentVirtual.
     * @example
     * // Update or create a PaymentVirtual
     * const paymentVirtual = await prisma.paymentVirtual.upsert({
     *   create: {
     *     // ... data to create a PaymentVirtual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentVirtual we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentVirtualUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentVirtualUpsertArgs<ExtArgs>>
    ): Prisma__PaymentVirtualClient<$Result.GetResult<Prisma.$PaymentVirtualPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentVirtuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualCountArgs} args - Arguments to filter PaymentVirtuals to count.
     * @example
     * // Count the number of PaymentVirtuals
     * const count = await prisma.paymentVirtual.count({
     *   where: {
     *     // ... the filter for the PaymentVirtuals we want to count
     *   }
     * })
    **/
    count<T extends PaymentVirtualCountArgs>(
      args?: Subset<T, PaymentVirtualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentVirtualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentVirtual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentVirtualAggregateArgs>(args: Subset<T, PaymentVirtualAggregateArgs>): Prisma.PrismaPromise<GetPaymentVirtualAggregateType<T>>

    /**
     * Group by PaymentVirtual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentVirtualGroupByArgs} args - Group by arguments.
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
      T extends PaymentVirtualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentVirtualGroupByArgs['orderBy'] }
        : { orderBy?: PaymentVirtualGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentVirtualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentVirtualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentVirtual model
   */
  readonly fields: PaymentVirtualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentVirtual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentVirtualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentVirtual model
   */ 
  interface PaymentVirtualFieldRefs {
    readonly id: FieldRef<"PaymentVirtual", 'Int'>
    readonly paymentId: FieldRef<"PaymentVirtual", 'Int'>
    readonly bankCode: FieldRef<"PaymentVirtual", 'String'>
    readonly customerName: FieldRef<"PaymentVirtual", 'String'>
    readonly dueDate: FieldRef<"PaymentVirtual", 'DateTime'>
    readonly accountNumber: FieldRef<"PaymentVirtual", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PaymentVirtual findUnique
   */
  export type PaymentVirtualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter, which PaymentVirtual to fetch.
     */
    where: PaymentVirtualWhereUniqueInput
  }


  /**
   * PaymentVirtual findUniqueOrThrow
   */
  export type PaymentVirtualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter, which PaymentVirtual to fetch.
     */
    where: PaymentVirtualWhereUniqueInput
  }


  /**
   * PaymentVirtual findFirst
   */
  export type PaymentVirtualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter, which PaymentVirtual to fetch.
     */
    where?: PaymentVirtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentVirtuals to fetch.
     */
    orderBy?: PaymentVirtualOrderByWithRelationInput | PaymentVirtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentVirtuals.
     */
    cursor?: PaymentVirtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentVirtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentVirtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentVirtuals.
     */
    distinct?: PaymentVirtualScalarFieldEnum | PaymentVirtualScalarFieldEnum[]
  }


  /**
   * PaymentVirtual findFirstOrThrow
   */
  export type PaymentVirtualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter, which PaymentVirtual to fetch.
     */
    where?: PaymentVirtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentVirtuals to fetch.
     */
    orderBy?: PaymentVirtualOrderByWithRelationInput | PaymentVirtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentVirtuals.
     */
    cursor?: PaymentVirtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentVirtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentVirtuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentVirtuals.
     */
    distinct?: PaymentVirtualScalarFieldEnum | PaymentVirtualScalarFieldEnum[]
  }


  /**
   * PaymentVirtual findMany
   */
  export type PaymentVirtualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter, which PaymentVirtuals to fetch.
     */
    where?: PaymentVirtualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentVirtuals to fetch.
     */
    orderBy?: PaymentVirtualOrderByWithRelationInput | PaymentVirtualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentVirtuals.
     */
    cursor?: PaymentVirtualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentVirtuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentVirtuals.
     */
    skip?: number
    distinct?: PaymentVirtualScalarFieldEnum | PaymentVirtualScalarFieldEnum[]
  }


  /**
   * PaymentVirtual create
   */
  export type PaymentVirtualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentVirtual.
     */
    data: XOR<PaymentVirtualCreateInput, PaymentVirtualUncheckedCreateInput>
  }


  /**
   * PaymentVirtual createMany
   */
  export type PaymentVirtualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentVirtuals.
     */
    data: PaymentVirtualCreateManyInput | PaymentVirtualCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentVirtual update
   */
  export type PaymentVirtualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentVirtual.
     */
    data: XOR<PaymentVirtualUpdateInput, PaymentVirtualUncheckedUpdateInput>
    /**
     * Choose, which PaymentVirtual to update.
     */
    where: PaymentVirtualWhereUniqueInput
  }


  /**
   * PaymentVirtual updateMany
   */
  export type PaymentVirtualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentVirtuals.
     */
    data: XOR<PaymentVirtualUpdateManyMutationInput, PaymentVirtualUncheckedUpdateManyInput>
    /**
     * Filter which PaymentVirtuals to update
     */
    where?: PaymentVirtualWhereInput
  }


  /**
   * PaymentVirtual upsert
   */
  export type PaymentVirtualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentVirtual to update in case it exists.
     */
    where: PaymentVirtualWhereUniqueInput
    /**
     * In case the PaymentVirtual found by the `where` argument doesn't exist, create a new PaymentVirtual with this data.
     */
    create: XOR<PaymentVirtualCreateInput, PaymentVirtualUncheckedCreateInput>
    /**
     * In case the PaymentVirtual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentVirtualUpdateInput, PaymentVirtualUncheckedUpdateInput>
  }


  /**
   * PaymentVirtual delete
   */
  export type PaymentVirtualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
    /**
     * Filter which PaymentVirtual to delete.
     */
    where: PaymentVirtualWhereUniqueInput
  }


  /**
   * PaymentVirtual deleteMany
   */
  export type PaymentVirtualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentVirtuals to delete
     */
    where?: PaymentVirtualWhereInput
  }


  /**
   * PaymentVirtual without action
   */
  export type PaymentVirtualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentVirtual
     */
    select?: PaymentVirtualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentVirtualInclude<ExtArgs> | null
  }



  /**
   * Model PaymentRefund
   */

  export type AggregatePaymentRefund = {
    _count: PaymentRefundCountAggregateOutputType | null
    _avg: PaymentRefundAvgAggregateOutputType | null
    _sum: PaymentRefundSumAggregateOutputType | null
    _min: PaymentRefundMinAggregateOutputType | null
    _max: PaymentRefundMaxAggregateOutputType | null
  }

  export type PaymentRefundAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: number | null
  }

  export type PaymentRefundSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
    amount: number | null
  }

  export type PaymentRefundMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    bank: string | null
    accountNumber: string | null
    holderName: string | null
    amount: number | null
    reason: string | null
  }

  export type PaymentRefundMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    bank: string | null
    accountNumber: string | null
    holderName: string | null
    amount: number | null
    reason: string | null
  }

  export type PaymentRefundCountAggregateOutputType = {
    id: number
    paymentId: number
    bank: number
    accountNumber: number
    holderName: number
    amount: number
    reason: number
    _all: number
  }


  export type PaymentRefundAvgAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
  }

  export type PaymentRefundSumAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
  }

  export type PaymentRefundMinAggregateInputType = {
    id?: true
    paymentId?: true
    bank?: true
    accountNumber?: true
    holderName?: true
    amount?: true
    reason?: true
  }

  export type PaymentRefundMaxAggregateInputType = {
    id?: true
    paymentId?: true
    bank?: true
    accountNumber?: true
    holderName?: true
    amount?: true
    reason?: true
  }

  export type PaymentRefundCountAggregateInputType = {
    id?: true
    paymentId?: true
    bank?: true
    accountNumber?: true
    holderName?: true
    amount?: true
    reason?: true
    _all?: true
  }

  export type PaymentRefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRefund to aggregate.
     */
    where?: PaymentRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRefunds to fetch.
     */
    orderBy?: PaymentRefundOrderByWithRelationInput | PaymentRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRefunds
    **/
    _count?: true | PaymentRefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRefundMaxAggregateInputType
  }

  export type GetPaymentRefundAggregateType<T extends PaymentRefundAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRefund[P]>
      : GetScalarType<T[P], AggregatePaymentRefund[P]>
  }




  export type PaymentRefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRefundWhereInput
    orderBy?: PaymentRefundOrderByWithAggregationInput | PaymentRefundOrderByWithAggregationInput[]
    by: PaymentRefundScalarFieldEnum[] | PaymentRefundScalarFieldEnum
    having?: PaymentRefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRefundCountAggregateInputType | true
    _avg?: PaymentRefundAvgAggregateInputType
    _sum?: PaymentRefundSumAggregateInputType
    _min?: PaymentRefundMinAggregateInputType
    _max?: PaymentRefundMaxAggregateInputType
  }

  export type PaymentRefundGroupByOutputType = {
    id: number
    paymentId: number
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
    _count: PaymentRefundCountAggregateOutputType | null
    _avg: PaymentRefundAvgAggregateOutputType | null
    _sum: PaymentRefundSumAggregateOutputType | null
    _min: PaymentRefundMinAggregateOutputType | null
    _max: PaymentRefundMaxAggregateOutputType | null
  }

  type GetPaymentRefundGroupByPayload<T extends PaymentRefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRefundGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRefundGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    bank?: boolean
    accountNumber?: boolean
    holderName?: boolean
    amount?: boolean
    reason?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRefund"]>

  export type PaymentRefundSelectScalar = {
    id?: boolean
    paymentId?: boolean
    bank?: boolean
    accountNumber?: boolean
    holderName?: boolean
    amount?: boolean
    reason?: boolean
  }

  export type PaymentRefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $PaymentRefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRefund"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      bank: string
      accountNumber: string
      holderName: string
      amount: number
      reason: string
    }, ExtArgs["result"]["paymentRefund"]>
    composites: {}
  }


  type PaymentRefundGetPayload<S extends boolean | null | undefined | PaymentRefundDefaultArgs> = $Result.GetResult<Prisma.$PaymentRefundPayload, S>

  type PaymentRefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentRefundFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentRefundCountAggregateInputType | true
    }

  export interface PaymentRefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRefund'], meta: { name: 'PaymentRefund' } }
    /**
     * Find zero or one PaymentRefund that matches the filter.
     * @param {PaymentRefundFindUniqueArgs} args - Arguments to find a PaymentRefund
     * @example
     * // Get one PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentRefundFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentRefund that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentRefundFindUniqueOrThrowArgs} args - Arguments to find a PaymentRefund
     * @example
     * // Get one PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentRefundFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentRefund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundFindFirstArgs} args - Arguments to find a PaymentRefund
     * @example
     * // Get one PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentRefundFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentRefund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundFindFirstOrThrowArgs} args - Arguments to find a PaymentRefund
     * @example
     * // Get one PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentRefundFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentRefunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRefunds
     * const paymentRefunds = await prisma.paymentRefund.findMany()
     * 
     * // Get first 10 PaymentRefunds
     * const paymentRefunds = await prisma.paymentRefund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRefundWithIdOnly = await prisma.paymentRefund.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentRefundFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentRefund.
     * @param {PaymentRefundCreateArgs} args - Arguments to create a PaymentRefund.
     * @example
     * // Create one PaymentRefund
     * const PaymentRefund = await prisma.paymentRefund.create({
     *   data: {
     *     // ... data to create a PaymentRefund
     *   }
     * })
     * 
    **/
    create<T extends PaymentRefundCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundCreateArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentRefunds.
     *     @param {PaymentRefundCreateManyArgs} args - Arguments to create many PaymentRefunds.
     *     @example
     *     // Create many PaymentRefunds
     *     const paymentRefund = await prisma.paymentRefund.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentRefundCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentRefund.
     * @param {PaymentRefundDeleteArgs} args - Arguments to delete one PaymentRefund.
     * @example
     * // Delete one PaymentRefund
     * const PaymentRefund = await prisma.paymentRefund.delete({
     *   where: {
     *     // ... filter to delete one PaymentRefund
     *   }
     * })
     * 
    **/
    delete<T extends PaymentRefundDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundDeleteArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentRefund.
     * @param {PaymentRefundUpdateArgs} args - Arguments to update one PaymentRefund.
     * @example
     * // Update one PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentRefundUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundUpdateArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentRefunds.
     * @param {PaymentRefundDeleteManyArgs} args - Arguments to filter PaymentRefunds to delete.
     * @example
     * // Delete a few PaymentRefunds
     * const { count } = await prisma.paymentRefund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentRefundDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentRefundDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRefunds
     * const paymentRefund = await prisma.paymentRefund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentRefundUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentRefund.
     * @param {PaymentRefundUpsertArgs} args - Arguments to update or create a PaymentRefund.
     * @example
     * // Update or create a PaymentRefund
     * const paymentRefund = await prisma.paymentRefund.upsert({
     *   create: {
     *     // ... data to create a PaymentRefund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRefund we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentRefundUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentRefundUpsertArgs<ExtArgs>>
    ): Prisma__PaymentRefundClient<$Result.GetResult<Prisma.$PaymentRefundPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentRefunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundCountArgs} args - Arguments to filter PaymentRefunds to count.
     * @example
     * // Count the number of PaymentRefunds
     * const count = await prisma.paymentRefund.count({
     *   where: {
     *     // ... the filter for the PaymentRefunds we want to count
     *   }
     * })
    **/
    count<T extends PaymentRefundCountArgs>(
      args?: Subset<T, PaymentRefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentRefundAggregateArgs>(args: Subset<T, PaymentRefundAggregateArgs>): Prisma.PrismaPromise<GetPaymentRefundAggregateType<T>>

    /**
     * Group by PaymentRefund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRefundGroupByArgs} args - Group by arguments.
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
      T extends PaymentRefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRefundGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRefundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentRefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRefund model
   */
  readonly fields: PaymentRefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRefund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentRefund model
   */ 
  interface PaymentRefundFieldRefs {
    readonly id: FieldRef<"PaymentRefund", 'Int'>
    readonly paymentId: FieldRef<"PaymentRefund", 'Int'>
    readonly bank: FieldRef<"PaymentRefund", 'String'>
    readonly accountNumber: FieldRef<"PaymentRefund", 'String'>
    readonly holderName: FieldRef<"PaymentRefund", 'String'>
    readonly amount: FieldRef<"PaymentRefund", 'Int'>
    readonly reason: FieldRef<"PaymentRefund", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PaymentRefund findUnique
   */
  export type PaymentRefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRefund to fetch.
     */
    where: PaymentRefundWhereUniqueInput
  }


  /**
   * PaymentRefund findUniqueOrThrow
   */
  export type PaymentRefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRefund to fetch.
     */
    where: PaymentRefundWhereUniqueInput
  }


  /**
   * PaymentRefund findFirst
   */
  export type PaymentRefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRefund to fetch.
     */
    where?: PaymentRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRefunds to fetch.
     */
    orderBy?: PaymentRefundOrderByWithRelationInput | PaymentRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRefunds.
     */
    cursor?: PaymentRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRefunds.
     */
    distinct?: PaymentRefundScalarFieldEnum | PaymentRefundScalarFieldEnum[]
  }


  /**
   * PaymentRefund findFirstOrThrow
   */
  export type PaymentRefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRefund to fetch.
     */
    where?: PaymentRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRefunds to fetch.
     */
    orderBy?: PaymentRefundOrderByWithRelationInput | PaymentRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRefunds.
     */
    cursor?: PaymentRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRefunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRefunds.
     */
    distinct?: PaymentRefundScalarFieldEnum | PaymentRefundScalarFieldEnum[]
  }


  /**
   * PaymentRefund findMany
   */
  export type PaymentRefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRefunds to fetch.
     */
    where?: PaymentRefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRefunds to fetch.
     */
    orderBy?: PaymentRefundOrderByWithRelationInput | PaymentRefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRefunds.
     */
    cursor?: PaymentRefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRefunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRefunds.
     */
    skip?: number
    distinct?: PaymentRefundScalarFieldEnum | PaymentRefundScalarFieldEnum[]
  }


  /**
   * PaymentRefund create
   */
  export type PaymentRefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRefund.
     */
    data: XOR<PaymentRefundCreateInput, PaymentRefundUncheckedCreateInput>
  }


  /**
   * PaymentRefund createMany
   */
  export type PaymentRefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRefunds.
     */
    data: PaymentRefundCreateManyInput | PaymentRefundCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentRefund update
   */
  export type PaymentRefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRefund.
     */
    data: XOR<PaymentRefundUpdateInput, PaymentRefundUncheckedUpdateInput>
    /**
     * Choose, which PaymentRefund to update.
     */
    where: PaymentRefundWhereUniqueInput
  }


  /**
   * PaymentRefund updateMany
   */
  export type PaymentRefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRefunds.
     */
    data: XOR<PaymentRefundUpdateManyMutationInput, PaymentRefundUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRefunds to update
     */
    where?: PaymentRefundWhereInput
  }


  /**
   * PaymentRefund upsert
   */
  export type PaymentRefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRefund to update in case it exists.
     */
    where: PaymentRefundWhereUniqueInput
    /**
     * In case the PaymentRefund found by the `where` argument doesn't exist, create a new PaymentRefund with this data.
     */
    create: XOR<PaymentRefundCreateInput, PaymentRefundUncheckedCreateInput>
    /**
     * In case the PaymentRefund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRefundUpdateInput, PaymentRefundUncheckedUpdateInput>
  }


  /**
   * PaymentRefund delete
   */
  export type PaymentRefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
    /**
     * Filter which PaymentRefund to delete.
     */
    where: PaymentRefundWhereUniqueInput
  }


  /**
   * PaymentRefund deleteMany
   */
  export type PaymentRefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRefunds to delete
     */
    where?: PaymentRefundWhereInput
  }


  /**
   * PaymentRefund without action
   */
  export type PaymentRefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRefund
     */
    select?: PaymentRefundSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentRefundInclude<ExtArgs> | null
  }



  /**
   * Model Em
   */

  export type AggregateEm = {
    _count: EmCountAggregateOutputType | null
    _min: EmMinAggregateOutputType | null
    _max: EmMaxAggregateOutputType | null
  }

  export type EmMinAggregateOutputType = {
    code: string | null
    name: string | null
    jisa: string | null
    buCode: string | null
    endYmd: string | null
  }

  export type EmMaxAggregateOutputType = {
    code: string | null
    name: string | null
    jisa: string | null
    buCode: string | null
    endYmd: string | null
  }

  export type EmCountAggregateOutputType = {
    code: number
    name: number
    jisa: number
    buCode: number
    endYmd: number
    _all: number
  }


  export type EmMinAggregateInputType = {
    code?: true
    name?: true
    jisa?: true
    buCode?: true
    endYmd?: true
  }

  export type EmMaxAggregateInputType = {
    code?: true
    name?: true
    jisa?: true
    buCode?: true
    endYmd?: true
  }

  export type EmCountAggregateInputType = {
    code?: true
    name?: true
    jisa?: true
    buCode?: true
    endYmd?: true
    _all?: true
  }

  export type EmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Em to aggregate.
     */
    where?: EmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ems to fetch.
     */
    orderBy?: EmOrderByWithRelationInput | EmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ems
    **/
    _count?: true | EmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmMaxAggregateInputType
  }

  export type GetEmAggregateType<T extends EmAggregateArgs> = {
        [P in keyof T & keyof AggregateEm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEm[P]>
      : GetScalarType<T[P], AggregateEm[P]>
  }




  export type EmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmWhereInput
    orderBy?: EmOrderByWithAggregationInput | EmOrderByWithAggregationInput[]
    by: EmScalarFieldEnum[] | EmScalarFieldEnum
    having?: EmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmCountAggregateInputType | true
    _min?: EmMinAggregateInputType
    _max?: EmMaxAggregateInputType
  }

  export type EmGroupByOutputType = {
    code: string
    name: string | null
    jisa: string | null
    buCode: string | null
    endYmd: string | null
    _count: EmCountAggregateOutputType | null
    _min: EmMinAggregateOutputType | null
    _max: EmMaxAggregateOutputType | null
  }

  type GetEmGroupByPayload<T extends EmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmGroupByOutputType[P]>
            : GetScalarType<T[P], EmGroupByOutputType[P]>
        }
      >
    >


  export type EmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    jisa?: boolean
    buCode?: boolean
    endYmd?: boolean
  }, ExtArgs["result"]["em"]>

  export type EmSelectScalar = {
    code?: boolean
    name?: boolean
    jisa?: boolean
    buCode?: boolean
    endYmd?: boolean
  }


  export type $EmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Em"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string | null
      jisa: string | null
      buCode: string | null
      endYmd: string | null
    }, ExtArgs["result"]["em"]>
    composites: {}
  }


  type EmGetPayload<S extends boolean | null | undefined | EmDefaultArgs> = $Result.GetResult<Prisma.$EmPayload, S>

  type EmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EmCountAggregateInputType | true
    }

  export interface EmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Em'], meta: { name: 'Em' } }
    /**
     * Find zero or one Em that matches the filter.
     * @param {EmFindUniqueArgs} args - Arguments to find a Em
     * @example
     * // Get one Em
     * const em = await prisma.em.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmFindUniqueArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Em that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmFindUniqueOrThrowArgs} args - Arguments to find a Em
     * @example
     * // Get one Em
     * const em = await prisma.em.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Em that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmFindFirstArgs} args - Arguments to find a Em
     * @example
     * // Get one Em
     * const em = await prisma.em.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmFindFirstArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Em that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmFindFirstOrThrowArgs} args - Arguments to find a Em
     * @example
     * // Get one Em
     * const em = await prisma.em.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ems
     * const ems = await prisma.em.findMany()
     * 
     * // Get first 10 Ems
     * const ems = await prisma.em.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const emWithCodeOnly = await prisma.em.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends EmFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Em.
     * @param {EmCreateArgs} args - Arguments to create a Em.
     * @example
     * // Create one Em
     * const Em = await prisma.em.create({
     *   data: {
     *     // ... data to create a Em
     *   }
     * })
     * 
    **/
    create<T extends EmCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmCreateArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ems.
     *     @param {EmCreateManyArgs} args - Arguments to create many Ems.
     *     @example
     *     // Create many Ems
     *     const em = await prisma.em.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Em.
     * @param {EmDeleteArgs} args - Arguments to delete one Em.
     * @example
     * // Delete one Em
     * const Em = await prisma.em.delete({
     *   where: {
     *     // ... filter to delete one Em
     *   }
     * })
     * 
    **/
    delete<T extends EmDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmDeleteArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Em.
     * @param {EmUpdateArgs} args - Arguments to update one Em.
     * @example
     * // Update one Em
     * const em = await prisma.em.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmUpdateArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ems.
     * @param {EmDeleteManyArgs} args - Arguments to filter Ems to delete.
     * @example
     * // Delete a few Ems
     * const { count } = await prisma.em.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ems
     * const em = await prisma.em.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Em.
     * @param {EmUpsertArgs} args - Arguments to update or create a Em.
     * @example
     * // Update or create a Em
     * const em = await prisma.em.upsert({
     *   create: {
     *     // ... data to create a Em
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Em we want to update
     *   }
     * })
    **/
    upsert<T extends EmUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmUpsertArgs<ExtArgs>>
    ): Prisma__EmClient<$Result.GetResult<Prisma.$EmPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmCountArgs} args - Arguments to filter Ems to count.
     * @example
     * // Count the number of Ems
     * const count = await prisma.em.count({
     *   where: {
     *     // ... the filter for the Ems we want to count
     *   }
     * })
    **/
    count<T extends EmCountArgs>(
      args?: Subset<T, EmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Em.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmAggregateArgs>(args: Subset<T, EmAggregateArgs>): Prisma.PrismaPromise<GetEmAggregateType<T>>

    /**
     * Group by Em.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmGroupByArgs} args - Group by arguments.
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
      T extends EmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmGroupByArgs['orderBy'] }
        : { orderBy?: EmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Em model
   */
  readonly fields: EmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Em.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Em model
   */ 
  interface EmFieldRefs {
    readonly code: FieldRef<"Em", 'String'>
    readonly name: FieldRef<"Em", 'String'>
    readonly jisa: FieldRef<"Em", 'String'>
    readonly buCode: FieldRef<"Em", 'String'>
    readonly endYmd: FieldRef<"Em", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Em findUnique
   */
  export type EmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter, which Em to fetch.
     */
    where: EmWhereUniqueInput
  }


  /**
   * Em findUniqueOrThrow
   */
  export type EmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter, which Em to fetch.
     */
    where: EmWhereUniqueInput
  }


  /**
   * Em findFirst
   */
  export type EmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter, which Em to fetch.
     */
    where?: EmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ems to fetch.
     */
    orderBy?: EmOrderByWithRelationInput | EmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ems.
     */
    cursor?: EmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ems.
     */
    distinct?: EmScalarFieldEnum | EmScalarFieldEnum[]
  }


  /**
   * Em findFirstOrThrow
   */
  export type EmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter, which Em to fetch.
     */
    where?: EmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ems to fetch.
     */
    orderBy?: EmOrderByWithRelationInput | EmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ems.
     */
    cursor?: EmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ems.
     */
    distinct?: EmScalarFieldEnum | EmScalarFieldEnum[]
  }


  /**
   * Em findMany
   */
  export type EmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter, which Ems to fetch.
     */
    where?: EmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ems to fetch.
     */
    orderBy?: EmOrderByWithRelationInput | EmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ems.
     */
    cursor?: EmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ems.
     */
    skip?: number
    distinct?: EmScalarFieldEnum | EmScalarFieldEnum[]
  }


  /**
   * Em create
   */
  export type EmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * The data needed to create a Em.
     */
    data: XOR<EmCreateInput, EmUncheckedCreateInput>
  }


  /**
   * Em createMany
   */
  export type EmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ems.
     */
    data: EmCreateManyInput | EmCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Em update
   */
  export type EmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * The data needed to update a Em.
     */
    data: XOR<EmUpdateInput, EmUncheckedUpdateInput>
    /**
     * Choose, which Em to update.
     */
    where: EmWhereUniqueInput
  }


  /**
   * Em updateMany
   */
  export type EmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ems.
     */
    data: XOR<EmUpdateManyMutationInput, EmUncheckedUpdateManyInput>
    /**
     * Filter which Ems to update
     */
    where?: EmWhereInput
  }


  /**
   * Em upsert
   */
  export type EmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * The filter to search for the Em to update in case it exists.
     */
    where: EmWhereUniqueInput
    /**
     * In case the Em found by the `where` argument doesn't exist, create a new Em with this data.
     */
    create: XOR<EmCreateInput, EmUncheckedCreateInput>
    /**
     * In case the Em was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmUpdateInput, EmUncheckedUpdateInput>
  }


  /**
   * Em delete
   */
  export type EmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
    /**
     * Filter which Em to delete.
     */
    where: EmWhereUniqueInput
  }


  /**
   * Em deleteMany
   */
  export type EmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ems to delete
     */
    where?: EmWhereInput
  }


  /**
   * Em without action
   */
  export type EmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Em
     */
    select?: EmSelect<ExtArgs> | null
  }



  /**
   * Model NewCpmMsg
   */

  export type AggregateNewCpmMsg = {
    _count: NewCpmMsgCountAggregateOutputType | null
    _avg: NewCpmMsgAvgAggregateOutputType | null
    _sum: NewCpmMsgSumAggregateOutputType | null
    _min: NewCpmMsgMinAggregateOutputType | null
    _max: NewCpmMsgMaxAggregateOutputType | null
  }

  export type NewCpmMsgAvgAggregateOutputType = {
    auto: number | null
  }

  export type NewCpmMsgSumAggregateOutputType = {
    auto: number | null
  }

  export type NewCpmMsgMinAggregateOutputType = {
    auto: number | null
    chk: string | null
    recUser: string | null
    recDate: string | null
    msg: string | null
    bmsg: Buffer | null
    senUser: string | null
    senDate: string | null
    show: string | null
    dc: boolean | null
    dcUser: string | null
    dcDate: string | null
    etc1: string | null
  }

  export type NewCpmMsgMaxAggregateOutputType = {
    auto: number | null
    chk: string | null
    recUser: string | null
    recDate: string | null
    msg: string | null
    bmsg: Buffer | null
    senUser: string | null
    senDate: string | null
    show: string | null
    dc: boolean | null
    dcUser: string | null
    dcDate: string | null
    etc1: string | null
  }

  export type NewCpmMsgCountAggregateOutputType = {
    auto: number
    chk: number
    recUser: number
    recDate: number
    msg: number
    bmsg: number
    senUser: number
    senDate: number
    show: number
    dc: number
    dcUser: number
    dcDate: number
    etc1: number
    _all: number
  }


  export type NewCpmMsgAvgAggregateInputType = {
    auto?: true
  }

  export type NewCpmMsgSumAggregateInputType = {
    auto?: true
  }

  export type NewCpmMsgMinAggregateInputType = {
    auto?: true
    chk?: true
    recUser?: true
    recDate?: true
    msg?: true
    bmsg?: true
    senUser?: true
    senDate?: true
    show?: true
    dc?: true
    dcUser?: true
    dcDate?: true
    etc1?: true
  }

  export type NewCpmMsgMaxAggregateInputType = {
    auto?: true
    chk?: true
    recUser?: true
    recDate?: true
    msg?: true
    bmsg?: true
    senUser?: true
    senDate?: true
    show?: true
    dc?: true
    dcUser?: true
    dcDate?: true
    etc1?: true
  }

  export type NewCpmMsgCountAggregateInputType = {
    auto?: true
    chk?: true
    recUser?: true
    recDate?: true
    msg?: true
    bmsg?: true
    senUser?: true
    senDate?: true
    show?: true
    dc?: true
    dcUser?: true
    dcDate?: true
    etc1?: true
    _all?: true
  }

  export type NewCpmMsgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewCpmMsg to aggregate.
     */
    where?: NewCpmMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewCpmMsgs to fetch.
     */
    orderBy?: NewCpmMsgOrderByWithRelationInput | NewCpmMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewCpmMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewCpmMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewCpmMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewCpmMsgs
    **/
    _count?: true | NewCpmMsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewCpmMsgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewCpmMsgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewCpmMsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewCpmMsgMaxAggregateInputType
  }

  export type GetNewCpmMsgAggregateType<T extends NewCpmMsgAggregateArgs> = {
        [P in keyof T & keyof AggregateNewCpmMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewCpmMsg[P]>
      : GetScalarType<T[P], AggregateNewCpmMsg[P]>
  }




  export type NewCpmMsgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewCpmMsgWhereInput
    orderBy?: NewCpmMsgOrderByWithAggregationInput | NewCpmMsgOrderByWithAggregationInput[]
    by: NewCpmMsgScalarFieldEnum[] | NewCpmMsgScalarFieldEnum
    having?: NewCpmMsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewCpmMsgCountAggregateInputType | true
    _avg?: NewCpmMsgAvgAggregateInputType
    _sum?: NewCpmMsgSumAggregateInputType
    _min?: NewCpmMsgMinAggregateInputType
    _max?: NewCpmMsgMaxAggregateInputType
  }

  export type NewCpmMsgGroupByOutputType = {
    auto: number
    chk: string
    recUser: string | null
    recDate: string | null
    msg: string | null
    bmsg: Buffer | null
    senUser: string | null
    senDate: string | null
    show: string | null
    dc: boolean | null
    dcUser: string | null
    dcDate: string | null
    etc1: string | null
    _count: NewCpmMsgCountAggregateOutputType | null
    _avg: NewCpmMsgAvgAggregateOutputType | null
    _sum: NewCpmMsgSumAggregateOutputType | null
    _min: NewCpmMsgMinAggregateOutputType | null
    _max: NewCpmMsgMaxAggregateOutputType | null
  }

  type GetNewCpmMsgGroupByPayload<T extends NewCpmMsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewCpmMsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewCpmMsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewCpmMsgGroupByOutputType[P]>
            : GetScalarType<T[P], NewCpmMsgGroupByOutputType[P]>
        }
      >
    >


  export type NewCpmMsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auto?: boolean
    chk?: boolean
    recUser?: boolean
    recDate?: boolean
    msg?: boolean
    bmsg?: boolean
    senUser?: boolean
    senDate?: boolean
    show?: boolean
    dc?: boolean
    dcUser?: boolean
    dcDate?: boolean
    etc1?: boolean
  }, ExtArgs["result"]["newCpmMsg"]>

  export type NewCpmMsgSelectScalar = {
    auto?: boolean
    chk?: boolean
    recUser?: boolean
    recDate?: boolean
    msg?: boolean
    bmsg?: boolean
    senUser?: boolean
    senDate?: boolean
    show?: boolean
    dc?: boolean
    dcUser?: boolean
    dcDate?: boolean
    etc1?: boolean
  }


  export type $NewCpmMsgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewCpmMsg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auto: number
      chk: string
      recUser: string | null
      recDate: string | null
      msg: string | null
      bmsg: Buffer | null
      senUser: string | null
      senDate: string | null
      show: string | null
      dc: boolean | null
      dcUser: string | null
      dcDate: string | null
      etc1: string | null
    }, ExtArgs["result"]["newCpmMsg"]>
    composites: {}
  }


  type NewCpmMsgGetPayload<S extends boolean | null | undefined | NewCpmMsgDefaultArgs> = $Result.GetResult<Prisma.$NewCpmMsgPayload, S>

  type NewCpmMsgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewCpmMsgFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: NewCpmMsgCountAggregateInputType | true
    }

  export interface NewCpmMsgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewCpmMsg'], meta: { name: 'NewCpmMsg' } }
    /**
     * Find zero or one NewCpmMsg that matches the filter.
     * @param {NewCpmMsgFindUniqueArgs} args - Arguments to find a NewCpmMsg
     * @example
     * // Get one NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NewCpmMsgFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgFindUniqueArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NewCpmMsg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NewCpmMsgFindUniqueOrThrowArgs} args - Arguments to find a NewCpmMsg
     * @example
     * // Get one NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NewCpmMsgFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NewCpmMsg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgFindFirstArgs} args - Arguments to find a NewCpmMsg
     * @example
     * // Get one NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NewCpmMsgFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgFindFirstArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NewCpmMsg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgFindFirstOrThrowArgs} args - Arguments to find a NewCpmMsg
     * @example
     * // Get one NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NewCpmMsgFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NewCpmMsgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewCpmMsgs
     * const newCpmMsgs = await prisma.newCpmMsg.findMany()
     * 
     * // Get first 10 NewCpmMsgs
     * const newCpmMsgs = await prisma.newCpmMsg.findMany({ take: 10 })
     * 
     * // Only select the `auto`
     * const newCpmMsgWithAutoOnly = await prisma.newCpmMsg.findMany({ select: { auto: true } })
     * 
    **/
    findMany<T extends NewCpmMsgFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NewCpmMsg.
     * @param {NewCpmMsgCreateArgs} args - Arguments to create a NewCpmMsg.
     * @example
     * // Create one NewCpmMsg
     * const NewCpmMsg = await prisma.newCpmMsg.create({
     *   data: {
     *     // ... data to create a NewCpmMsg
     *   }
     * })
     * 
    **/
    create<T extends NewCpmMsgCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgCreateArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NewCpmMsgs.
     *     @param {NewCpmMsgCreateManyArgs} args - Arguments to create many NewCpmMsgs.
     *     @example
     *     // Create many NewCpmMsgs
     *     const newCpmMsg = await prisma.newCpmMsg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NewCpmMsgCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewCpmMsg.
     * @param {NewCpmMsgDeleteArgs} args - Arguments to delete one NewCpmMsg.
     * @example
     * // Delete one NewCpmMsg
     * const NewCpmMsg = await prisma.newCpmMsg.delete({
     *   where: {
     *     // ... filter to delete one NewCpmMsg
     *   }
     * })
     * 
    **/
    delete<T extends NewCpmMsgDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgDeleteArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NewCpmMsg.
     * @param {NewCpmMsgUpdateArgs} args - Arguments to update one NewCpmMsg.
     * @example
     * // Update one NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NewCpmMsgUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgUpdateArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NewCpmMsgs.
     * @param {NewCpmMsgDeleteManyArgs} args - Arguments to filter NewCpmMsgs to delete.
     * @example
     * // Delete a few NewCpmMsgs
     * const { count } = await prisma.newCpmMsg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NewCpmMsgDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NewCpmMsgDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewCpmMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewCpmMsgs
     * const newCpmMsg = await prisma.newCpmMsg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NewCpmMsgUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewCpmMsg.
     * @param {NewCpmMsgUpsertArgs} args - Arguments to update or create a NewCpmMsg.
     * @example
     * // Update or create a NewCpmMsg
     * const newCpmMsg = await prisma.newCpmMsg.upsert({
     *   create: {
     *     // ... data to create a NewCpmMsg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewCpmMsg we want to update
     *   }
     * })
    **/
    upsert<T extends NewCpmMsgUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NewCpmMsgUpsertArgs<ExtArgs>>
    ): Prisma__NewCpmMsgClient<$Result.GetResult<Prisma.$NewCpmMsgPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NewCpmMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgCountArgs} args - Arguments to filter NewCpmMsgs to count.
     * @example
     * // Count the number of NewCpmMsgs
     * const count = await prisma.newCpmMsg.count({
     *   where: {
     *     // ... the filter for the NewCpmMsgs we want to count
     *   }
     * })
    **/
    count<T extends NewCpmMsgCountArgs>(
      args?: Subset<T, NewCpmMsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewCpmMsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewCpmMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewCpmMsgAggregateArgs>(args: Subset<T, NewCpmMsgAggregateArgs>): Prisma.PrismaPromise<GetNewCpmMsgAggregateType<T>>

    /**
     * Group by NewCpmMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewCpmMsgGroupByArgs} args - Group by arguments.
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
      T extends NewCpmMsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewCpmMsgGroupByArgs['orderBy'] }
        : { orderBy?: NewCpmMsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewCpmMsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewCpmMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewCpmMsg model
   */
  readonly fields: NewCpmMsgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewCpmMsg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewCpmMsgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NewCpmMsg model
   */ 
  interface NewCpmMsgFieldRefs {
    readonly auto: FieldRef<"NewCpmMsg", 'Int'>
    readonly chk: FieldRef<"NewCpmMsg", 'String'>
    readonly recUser: FieldRef<"NewCpmMsg", 'String'>
    readonly recDate: FieldRef<"NewCpmMsg", 'String'>
    readonly msg: FieldRef<"NewCpmMsg", 'String'>
    readonly bmsg: FieldRef<"NewCpmMsg", 'Bytes'>
    readonly senUser: FieldRef<"NewCpmMsg", 'String'>
    readonly senDate: FieldRef<"NewCpmMsg", 'String'>
    readonly show: FieldRef<"NewCpmMsg", 'String'>
    readonly dc: FieldRef<"NewCpmMsg", 'Boolean'>
    readonly dcUser: FieldRef<"NewCpmMsg", 'String'>
    readonly dcDate: FieldRef<"NewCpmMsg", 'String'>
    readonly etc1: FieldRef<"NewCpmMsg", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NewCpmMsg findUnique
   */
  export type NewCpmMsgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter, which NewCpmMsg to fetch.
     */
    where: NewCpmMsgWhereUniqueInput
  }


  /**
   * NewCpmMsg findUniqueOrThrow
   */
  export type NewCpmMsgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter, which NewCpmMsg to fetch.
     */
    where: NewCpmMsgWhereUniqueInput
  }


  /**
   * NewCpmMsg findFirst
   */
  export type NewCpmMsgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter, which NewCpmMsg to fetch.
     */
    where?: NewCpmMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewCpmMsgs to fetch.
     */
    orderBy?: NewCpmMsgOrderByWithRelationInput | NewCpmMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewCpmMsgs.
     */
    cursor?: NewCpmMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewCpmMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewCpmMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewCpmMsgs.
     */
    distinct?: NewCpmMsgScalarFieldEnum | NewCpmMsgScalarFieldEnum[]
  }


  /**
   * NewCpmMsg findFirstOrThrow
   */
  export type NewCpmMsgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter, which NewCpmMsg to fetch.
     */
    where?: NewCpmMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewCpmMsgs to fetch.
     */
    orderBy?: NewCpmMsgOrderByWithRelationInput | NewCpmMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewCpmMsgs.
     */
    cursor?: NewCpmMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewCpmMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewCpmMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewCpmMsgs.
     */
    distinct?: NewCpmMsgScalarFieldEnum | NewCpmMsgScalarFieldEnum[]
  }


  /**
   * NewCpmMsg findMany
   */
  export type NewCpmMsgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter, which NewCpmMsgs to fetch.
     */
    where?: NewCpmMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewCpmMsgs to fetch.
     */
    orderBy?: NewCpmMsgOrderByWithRelationInput | NewCpmMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewCpmMsgs.
     */
    cursor?: NewCpmMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewCpmMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewCpmMsgs.
     */
    skip?: number
    distinct?: NewCpmMsgScalarFieldEnum | NewCpmMsgScalarFieldEnum[]
  }


  /**
   * NewCpmMsg create
   */
  export type NewCpmMsgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * The data needed to create a NewCpmMsg.
     */
    data: XOR<NewCpmMsgCreateInput, NewCpmMsgUncheckedCreateInput>
  }


  /**
   * NewCpmMsg createMany
   */
  export type NewCpmMsgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewCpmMsgs.
     */
    data: NewCpmMsgCreateManyInput | NewCpmMsgCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NewCpmMsg update
   */
  export type NewCpmMsgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * The data needed to update a NewCpmMsg.
     */
    data: XOR<NewCpmMsgUpdateInput, NewCpmMsgUncheckedUpdateInput>
    /**
     * Choose, which NewCpmMsg to update.
     */
    where: NewCpmMsgWhereUniqueInput
  }


  /**
   * NewCpmMsg updateMany
   */
  export type NewCpmMsgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewCpmMsgs.
     */
    data: XOR<NewCpmMsgUpdateManyMutationInput, NewCpmMsgUncheckedUpdateManyInput>
    /**
     * Filter which NewCpmMsgs to update
     */
    where?: NewCpmMsgWhereInput
  }


  /**
   * NewCpmMsg upsert
   */
  export type NewCpmMsgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * The filter to search for the NewCpmMsg to update in case it exists.
     */
    where: NewCpmMsgWhereUniqueInput
    /**
     * In case the NewCpmMsg found by the `where` argument doesn't exist, create a new NewCpmMsg with this data.
     */
    create: XOR<NewCpmMsgCreateInput, NewCpmMsgUncheckedCreateInput>
    /**
     * In case the NewCpmMsg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewCpmMsgUpdateInput, NewCpmMsgUncheckedUpdateInput>
  }


  /**
   * NewCpmMsg delete
   */
  export type NewCpmMsgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
    /**
     * Filter which NewCpmMsg to delete.
     */
    where: NewCpmMsgWhereUniqueInput
  }


  /**
   * NewCpmMsg deleteMany
   */
  export type NewCpmMsgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewCpmMsgs to delete
     */
    where?: NewCpmMsgWhereInput
  }


  /**
   * NewCpmMsg without action
   */
  export type NewCpmMsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewCpmMsg
     */
    select?: NewCpmMsgSelect<ExtArgs> | null
  }



  /**
   * Model PgMsg
   */

  export type AggregatePgMsg = {
    _count: PgMsgCountAggregateOutputType | null
    _avg: PgMsgAvgAggregateOutputType | null
    _sum: PgMsgSumAggregateOutputType | null
    _min: PgMsgMinAggregateOutputType | null
    _max: PgMsgMaxAggregateOutputType | null
  }

  export type PgMsgAvgAggregateOutputType = {
    id: number | null
  }

  export type PgMsgSumAggregateOutputType = {
    id: number | null
  }

  export type PgMsgMinAggregateOutputType = {
    id: number | null
    msg: Buffer | null
  }

  export type PgMsgMaxAggregateOutputType = {
    id: number | null
    msg: Buffer | null
  }

  export type PgMsgCountAggregateOutputType = {
    id: number
    msg: number
    _all: number
  }


  export type PgMsgAvgAggregateInputType = {
    id?: true
  }

  export type PgMsgSumAggregateInputType = {
    id?: true
  }

  export type PgMsgMinAggregateInputType = {
    id?: true
    msg?: true
  }

  export type PgMsgMaxAggregateInputType = {
    id?: true
    msg?: true
  }

  export type PgMsgCountAggregateInputType = {
    id?: true
    msg?: true
    _all?: true
  }

  export type PgMsgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgMsg to aggregate.
     */
    where?: PgMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgMsgs to fetch.
     */
    orderBy?: PgMsgOrderByWithRelationInput | PgMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PgMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PgMsgs
    **/
    _count?: true | PgMsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PgMsgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PgMsgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgMsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgMsgMaxAggregateInputType
  }

  export type GetPgMsgAggregateType<T extends PgMsgAggregateArgs> = {
        [P in keyof T & keyof AggregatePgMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgMsg[P]>
      : GetScalarType<T[P], AggregatePgMsg[P]>
  }




  export type PgMsgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgMsgWhereInput
    orderBy?: PgMsgOrderByWithAggregationInput | PgMsgOrderByWithAggregationInput[]
    by: PgMsgScalarFieldEnum[] | PgMsgScalarFieldEnum
    having?: PgMsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgMsgCountAggregateInputType | true
    _avg?: PgMsgAvgAggregateInputType
    _sum?: PgMsgSumAggregateInputType
    _min?: PgMsgMinAggregateInputType
    _max?: PgMsgMaxAggregateInputType
  }

  export type PgMsgGroupByOutputType = {
    id: number
    msg: Buffer | null
    _count: PgMsgCountAggregateOutputType | null
    _avg: PgMsgAvgAggregateOutputType | null
    _sum: PgMsgSumAggregateOutputType | null
    _min: PgMsgMinAggregateOutputType | null
    _max: PgMsgMaxAggregateOutputType | null
  }

  type GetPgMsgGroupByPayload<T extends PgMsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgMsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgMsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgMsgGroupByOutputType[P]>
            : GetScalarType<T[P], PgMsgGroupByOutputType[P]>
        }
      >
    >


  export type PgMsgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msg?: boolean
  }, ExtArgs["result"]["pgMsg"]>

  export type PgMsgSelectScalar = {
    id?: boolean
    msg?: boolean
  }


  export type $PgMsgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PgMsg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      msg: Buffer | null
    }, ExtArgs["result"]["pgMsg"]>
    composites: {}
  }


  type PgMsgGetPayload<S extends boolean | null | undefined | PgMsgDefaultArgs> = $Result.GetResult<Prisma.$PgMsgPayload, S>

  type PgMsgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PgMsgFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PgMsgCountAggregateInputType | true
    }

  export interface PgMsgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PgMsg'], meta: { name: 'PgMsg' } }
    /**
     * Find zero or one PgMsg that matches the filter.
     * @param {PgMsgFindUniqueArgs} args - Arguments to find a PgMsg
     * @example
     * // Get one PgMsg
     * const pgMsg = await prisma.pgMsg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PgMsgFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgFindUniqueArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PgMsg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PgMsgFindUniqueOrThrowArgs} args - Arguments to find a PgMsg
     * @example
     * // Get one PgMsg
     * const pgMsg = await prisma.pgMsg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PgMsgFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PgMsg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgFindFirstArgs} args - Arguments to find a PgMsg
     * @example
     * // Get one PgMsg
     * const pgMsg = await prisma.pgMsg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PgMsgFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgFindFirstArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PgMsg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgFindFirstOrThrowArgs} args - Arguments to find a PgMsg
     * @example
     * // Get one PgMsg
     * const pgMsg = await prisma.pgMsg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PgMsgFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PgMsgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PgMsgs
     * const pgMsgs = await prisma.pgMsg.findMany()
     * 
     * // Get first 10 PgMsgs
     * const pgMsgs = await prisma.pgMsg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pgMsgWithIdOnly = await prisma.pgMsg.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PgMsgFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PgMsg.
     * @param {PgMsgCreateArgs} args - Arguments to create a PgMsg.
     * @example
     * // Create one PgMsg
     * const PgMsg = await prisma.pgMsg.create({
     *   data: {
     *     // ... data to create a PgMsg
     *   }
     * })
     * 
    **/
    create<T extends PgMsgCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgCreateArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PgMsgs.
     *     @param {PgMsgCreateManyArgs} args - Arguments to create many PgMsgs.
     *     @example
     *     // Create many PgMsgs
     *     const pgMsg = await prisma.pgMsg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PgMsgCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PgMsg.
     * @param {PgMsgDeleteArgs} args - Arguments to delete one PgMsg.
     * @example
     * // Delete one PgMsg
     * const PgMsg = await prisma.pgMsg.delete({
     *   where: {
     *     // ... filter to delete one PgMsg
     *   }
     * })
     * 
    **/
    delete<T extends PgMsgDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgDeleteArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PgMsg.
     * @param {PgMsgUpdateArgs} args - Arguments to update one PgMsg.
     * @example
     * // Update one PgMsg
     * const pgMsg = await prisma.pgMsg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PgMsgUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgUpdateArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PgMsgs.
     * @param {PgMsgDeleteManyArgs} args - Arguments to filter PgMsgs to delete.
     * @example
     * // Delete a few PgMsgs
     * const { count } = await prisma.pgMsg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PgMsgDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PgMsgDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PgMsgs
     * const pgMsg = await prisma.pgMsg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PgMsgUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PgMsg.
     * @param {PgMsgUpsertArgs} args - Arguments to update or create a PgMsg.
     * @example
     * // Update or create a PgMsg
     * const pgMsg = await prisma.pgMsg.upsert({
     *   create: {
     *     // ... data to create a PgMsg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PgMsg we want to update
     *   }
     * })
    **/
    upsert<T extends PgMsgUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PgMsgUpsertArgs<ExtArgs>>
    ): Prisma__PgMsgClient<$Result.GetResult<Prisma.$PgMsgPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PgMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgCountArgs} args - Arguments to filter PgMsgs to count.
     * @example
     * // Count the number of PgMsgs
     * const count = await prisma.pgMsg.count({
     *   where: {
     *     // ... the filter for the PgMsgs we want to count
     *   }
     * })
    **/
    count<T extends PgMsgCountArgs>(
      args?: Subset<T, PgMsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgMsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PgMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgMsgAggregateArgs>(args: Subset<T, PgMsgAggregateArgs>): Prisma.PrismaPromise<GetPgMsgAggregateType<T>>

    /**
     * Group by PgMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgMsgGroupByArgs} args - Group by arguments.
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
      T extends PgMsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PgMsgGroupByArgs['orderBy'] }
        : { orderBy?: PgMsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PgMsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PgMsg model
   */
  readonly fields: PgMsgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PgMsg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PgMsgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PgMsg model
   */ 
  interface PgMsgFieldRefs {
    readonly id: FieldRef<"PgMsg", 'Int'>
    readonly msg: FieldRef<"PgMsg", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * PgMsg findUnique
   */
  export type PgMsgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter, which PgMsg to fetch.
     */
    where: PgMsgWhereUniqueInput
  }


  /**
   * PgMsg findUniqueOrThrow
   */
  export type PgMsgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter, which PgMsg to fetch.
     */
    where: PgMsgWhereUniqueInput
  }


  /**
   * PgMsg findFirst
   */
  export type PgMsgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter, which PgMsg to fetch.
     */
    where?: PgMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgMsgs to fetch.
     */
    orderBy?: PgMsgOrderByWithRelationInput | PgMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgMsgs.
     */
    cursor?: PgMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgMsgs.
     */
    distinct?: PgMsgScalarFieldEnum | PgMsgScalarFieldEnum[]
  }


  /**
   * PgMsg findFirstOrThrow
   */
  export type PgMsgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter, which PgMsg to fetch.
     */
    where?: PgMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgMsgs to fetch.
     */
    orderBy?: PgMsgOrderByWithRelationInput | PgMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgMsgs.
     */
    cursor?: PgMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgMsgs.
     */
    distinct?: PgMsgScalarFieldEnum | PgMsgScalarFieldEnum[]
  }


  /**
   * PgMsg findMany
   */
  export type PgMsgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter, which PgMsgs to fetch.
     */
    where?: PgMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgMsgs to fetch.
     */
    orderBy?: PgMsgOrderByWithRelationInput | PgMsgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PgMsgs.
     */
    cursor?: PgMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgMsgs.
     */
    skip?: number
    distinct?: PgMsgScalarFieldEnum | PgMsgScalarFieldEnum[]
  }


  /**
   * PgMsg create
   */
  export type PgMsgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * The data needed to create a PgMsg.
     */
    data?: XOR<PgMsgCreateInput, PgMsgUncheckedCreateInput>
  }


  /**
   * PgMsg createMany
   */
  export type PgMsgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PgMsgs.
     */
    data: PgMsgCreateManyInput | PgMsgCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PgMsg update
   */
  export type PgMsgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * The data needed to update a PgMsg.
     */
    data: XOR<PgMsgUpdateInput, PgMsgUncheckedUpdateInput>
    /**
     * Choose, which PgMsg to update.
     */
    where: PgMsgWhereUniqueInput
  }


  /**
   * PgMsg updateMany
   */
  export type PgMsgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PgMsgs.
     */
    data: XOR<PgMsgUpdateManyMutationInput, PgMsgUncheckedUpdateManyInput>
    /**
     * Filter which PgMsgs to update
     */
    where?: PgMsgWhereInput
  }


  /**
   * PgMsg upsert
   */
  export type PgMsgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * The filter to search for the PgMsg to update in case it exists.
     */
    where: PgMsgWhereUniqueInput
    /**
     * In case the PgMsg found by the `where` argument doesn't exist, create a new PgMsg with this data.
     */
    create: XOR<PgMsgCreateInput, PgMsgUncheckedCreateInput>
    /**
     * In case the PgMsg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PgMsgUpdateInput, PgMsgUncheckedUpdateInput>
  }


  /**
   * PgMsg delete
   */
  export type PgMsgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
    /**
     * Filter which PgMsg to delete.
     */
    where: PgMsgWhereUniqueInput
  }


  /**
   * PgMsg deleteMany
   */
  export type PgMsgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgMsgs to delete
     */
    where?: PgMsgWhereInput
  }


  /**
   * PgMsg without action
   */
  export type PgMsgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgMsg
     */
    select?: PgMsgSelect<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    email: 'email',
    ykiho: 'ykiho',
    saupkiho: 'saupkiho',
    token: 'token',
    expiryDate: 'expiryDate',
    admin: 'admin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const OrderReqMsgScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    message: 'message',
    updatedAt: 'updatedAt'
  };

  export type OrderReqMsgScalarFieldEnum = (typeof OrderReqMsgScalarFieldEnum)[keyof typeof OrderReqMsgScalarFieldEnum]


  export const ProductListScalarFieldEnum: {
    jisa: 'jisa',
    smCode: 'smCode',
    smYmd: 'smYmd',
    addUser: 'addUser',
    createDt: 'createDt',
    bigo: 'bigo',
    web: 'web',
    bunryu: 'bunryu',
    step: 'step',
    fit: 'fit',
    card: 'card'
  };

  export type ProductListScalarFieldEnum = (typeof ProductListScalarFieldEnum)[keyof typeof ProductListScalarFieldEnum]


  export const ProductListSubScalarFieldEnum: {
    auto: 'auto',
    jisa: 'jisa',
    smCode: 'smCode',
    smMyung: 'smMyung',
    smYmd: 'smYmd',
    danga: 'danga',
    danwi: 'danwi',
    etc1: 'etc1',
    etc2: 'etc2',
    etc3: 'etc3',
    etc4: 'etc4',
    etc5: 'etc5'
  };

  export type ProductListSubScalarFieldEnum = (typeof ProductListSubScalarFieldEnum)[keyof typeof ProductListSubScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    auto: 'auto',
    clCode: 'clCode',
    jisa: 'jisa',
    csCode: 'csCode',
    ctTel: 'ctTel',
    count: 'count',
    receive: 'receive',
    receiveYmd: 'receiveYmd',
    sell: 'sell',
    sellYmd: 'sellYmd',
    orderCheck: 'orderCheck',
    seller: 'seller',
    check: 'check',
    check2: 'check2',
    rgb: 'rgb',
    bigo: 'bigo',
    createDt: 'createDt',
    bigo2: 'bigo2',
    etc1: 'etc1',
    etc2: 'etc2',
    etc3: 'etc3',
    etc4: 'etc4',
    etc5: 'etc5',
    web: 'web',
    webPaymentItemId: 'webPaymentItemId',
    webBNPL: 'webBNPL'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductLogScalarFieldEnum: {
    logAuto: 'logAuto',
    logDatetime: 'logDatetime',
    logGubun: 'logGubun',
    logUser: 'logUser',
    logComputer: 'logComputer',
    auto: 'auto',
    clCode: 'clCode',
    jisa: 'jisa',
    csCode: 'csCode',
    ctTel: 'ctTel',
    count: 'count',
    receive: 'receive',
    receiveYmd: 'receiveYmd',
    sell: 'sell',
    sellYmd: 'sellYmd',
    orderCheck: 'orderCheck',
    seller: 'seller',
    check: 'check',
    check2: 'check2',
    rgb: 'rgb',
    bigo: 'bigo',
    createDt: 'createDt',
    bigo2: 'bigo2',
    etc1: 'etc1',
    etc2: 'etc2',
    etc3: 'etc3',
    etc4: 'etc4',
    etc5: 'etc5',
    web: 'web',
    webPaymentItemId: 'webPaymentItemId',
    webBNPL: 'webBNPL'
  };

  export type ProductLogScalarFieldEnum = (typeof ProductLogScalarFieldEnum)[keyof typeof ProductLogScalarFieldEnum]


  export const ProductListWebBunryuScalarFieldEnum: {
    code: 'code',
    name: 'name',
    fit: 'fit'
  };

  export type ProductListWebBunryuScalarFieldEnum = (typeof ProductListWebBunryuScalarFieldEnum)[keyof typeof ProductListWebBunryuScalarFieldEnum]


  export const ProductListImageScalarFieldEnum: {
    jisa: 'jisa',
    smCode: 'smCode',
    image: 'image'
  };

  export type ProductListImageScalarFieldEnum = (typeof ProductListImageScalarFieldEnum)[keyof typeof ProductListImageScalarFieldEnum]


  export const CsScalarFieldEnum: {
    gubun: 'gubun',
    code: 'code',
    myung: 'myung',
    daepyo: 'daepyo',
    tel: 'tel',
    fax: 'fax',
    post: 'post',
    dup: 'dup',
    juso: 'juso',
    bunji: 'bunji',
    jisa: 'jisa',
    emCode: 'emCode',
    damdang: 'damdang',
    damdanghp: 'damdanghp',
    jongbl: 'jongbl',
    upte: 'upte',
    saupnum: 'saupnum',
    sauppost: 'sauppost',
    saupdup: 'saupdup',
    saupjuso: 'saupjuso',
    saupbunji: 'saupbunji',
    email: 'email',
    ediid: 'ediid',
    edipassword: 'edipassword',
    local: 'local',
    nonchart: 'nonchart',
    fymd: 'fymd',
    lymd: 'lymd',
    bigo: 'bigo',
    user: 'user',
    etc1: 'etc1',
    etc2: 'etc2',
    etc3: 'etc3',
    Chonguser: 'Chonguser',
    pro: 'pro',
    yanghan: 'yanghan',
    chunggu: 'chunggu',
    cherbang: 'cherbang',
    youngsu: 'youngsu',
    pacs: 'pacs',
    barcode: 'barcode',
    yakguk: 'yakguk',
    update: 'update',
    askumak: 'askumak',
    etc4: 'etc4',
    etc5: 'etc5',
    etc6: 'etc6',
    etc7: 'etc7',
    cms: 'cms',
    daegidisp: 'daegidisp',
    gumjinlink: 'gumjinlink',
    capture: 'capture',
    sutak: 'sutak',
    sutaklink: 'sutaklink',
    gumsalinkyn: 'gumsalinkyn',
    gumsalink: 'gumsalink',
    scaner: 'scaner',
    card: 'card',
    cardlink: 'cardlink',
    eleccherban: 'eleccherban',
    yakgukprint: 'yakgukprint',
    gumsabarcod: 'gumsabarcod',
    bdbarcode: 'bdbarcode',
    updatepath: 'updatepath',
    server: 'server',
    sanjae: 'sanjae',
    paljji: 'paljji',
    jungji: 'jungji',
    servermodel: 'servermodel',
    servername: 'servername',
    serverSN: 'serverSN',
    serverMT: 'serverMT',
    serverHDD: 'serverHDD',
    serverMemory: 'serverMemory',
    serverLocation: 'serverLocation',
    serversetup: 'serversetup',
    window: 'window',
    windowmemo: 'windowmemo',
    virusname: 'virusname',
    virussetup: 'virussetup',
    virusend: 'virusend',
    upsname: 'upsname',
    upssetup: 'upssetup',
    upsend: 'upsend',
    rollprint: 'rollprint',
    inuser: 'inuser',
    upuser: 'upuser',
    indate: 'indate',
    update2: 'update2',
    etc8: 'etc8',
    etc9: 'etc9',
    etc10: 'etc10',
    etc11: 'etc11',
    etc12: 'etc12',
    etc13: 'etc13',
    etc14: 'etc14',
    etc15: 'etc15',
    bogubun: 'bogubun',
    aschk: 'aschk',
    etc16: 'etc16',
    etc17: 'etc17',
    etc18: 'etc18',
    etc19: 'etc19',
    etc20: 'etc20',
    etc21: 'etc21',
    etc22: 'etc22',
    etc23: 'etc23',
    etc24: 'etc24',
    etc25: 'etc25',
    etc26: 'etc26',
    etc27: 'etc27',
    etc28: 'etc28',
    etc29: 'etc29',
    etc30: 'etc30',
    etc31: 'etc31',
    etc32: 'etc32',
    etc33: 'etc33',
    etc34: 'etc34',
    etc35: 'etc35',
    server_cust: 'server_cust',
    server_orde: 'server_orde',
    server_mici: 'server_mici',
    server_admi: 'server_admi',
    server_svrp: 'server_svrp',
    server_svrb: 'server_svrb',
    oauthpwd: 'oauthpwd',
    medi_use: 'medi_use',
    medi_pc: 'medi_pc',
    medi_autoju: 'medi_autoju',
    medi_grname: 'medi_grname'
  };

  export type CsScalarFieldEnum = (typeof CsScalarFieldEnum)[keyof typeof CsScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    ykiho: 'ykiho'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    code: 'code',
    quantity: 'quantity',
    fit: 'fit',
    createdDate: 'createdDate',
    updatedDate: 'updatedDate'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    ykiho: 'ykiho',
    orderId: 'orderId',
    paymentKey: 'paymentKey',
    customerName: 'customerName',
    method: 'method',
    amount: 'amount',
    quantity: 'quantity',
    requestedAt: 'requestedAt',
    approvedAt: 'approvedAt',
    sendType: 'sendType',
    cancel: 'cancel',
    test: 'test'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentItemScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    code: 'code',
    name: 'name',
    fit: 'fit',
    quantity: 'quantity',
    amount: 'amount'
  };

  export type PaymentItemScalarFieldEnum = (typeof PaymentItemScalarFieldEnum)[keyof typeof PaymentItemScalarFieldEnum]


  export const PaymentVirtualScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    bankCode: 'bankCode',
    customerName: 'customerName',
    dueDate: 'dueDate',
    accountNumber: 'accountNumber'
  };

  export type PaymentVirtualScalarFieldEnum = (typeof PaymentVirtualScalarFieldEnum)[keyof typeof PaymentVirtualScalarFieldEnum]


  export const PaymentRefundScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    bank: 'bank',
    accountNumber: 'accountNumber',
    holderName: 'holderName',
    amount: 'amount',
    reason: 'reason'
  };

  export type PaymentRefundScalarFieldEnum = (typeof PaymentRefundScalarFieldEnum)[keyof typeof PaymentRefundScalarFieldEnum]


  export const EmScalarFieldEnum: {
    code: 'code',
    name: 'name',
    jisa: 'jisa',
    buCode: 'buCode',
    endYmd: 'endYmd'
  };

  export type EmScalarFieldEnum = (typeof EmScalarFieldEnum)[keyof typeof EmScalarFieldEnum]


  export const NewCpmMsgScalarFieldEnum: {
    auto: 'auto',
    chk: 'chk',
    recUser: 'recUser',
    recDate: 'recDate',
    msg: 'msg',
    bmsg: 'bmsg',
    senUser: 'senUser',
    senDate: 'senDate',
    show: 'show',
    dc: 'dc',
    dcUser: 'dcUser',
    dcDate: 'dcDate',
    etc1: 'etc1'
  };

  export type NewCpmMsgScalarFieldEnum = (typeof NewCpmMsgScalarFieldEnum)[keyof typeof NewCpmMsgScalarFieldEnum]


  export const PgMsgScalarFieldEnum: {
    id: 'id',
    msg: 'msg'
  };

  export type PgMsgScalarFieldEnum = (typeof PgMsgScalarFieldEnum)[keyof typeof PgMsgScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    ykiho?: StringNullableFilter<"Account"> | string | null
    saupkiho?: StringNullableFilter<"Account"> | string | null
    token?: StringNullableFilter<"Account"> | string | null
    expiryDate?: DateTimeNullableFilter<"Account"> | Date | string | null
    admin?: BoolNullableFilter<"Account"> | boolean | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    orderReqMsg?: OrderReqMsgListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    ykiho?: SortOrderInput | SortOrder
    saupkiho?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderReqMsg?: OrderReqMsgOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    ykiho?: StringNullableFilter<"Account"> | string | null
    saupkiho?: StringNullableFilter<"Account"> | string | null
    token?: StringNullableFilter<"Account"> | string | null
    expiryDate?: DateTimeNullableFilter<"Account"> | Date | string | null
    admin?: BoolNullableFilter<"Account"> | boolean | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    orderReqMsg?: OrderReqMsgListRelationFilter
  }, "id" | "userId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    ykiho?: SortOrderInput | SortOrder
    saupkiho?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    admin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    userId?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    ykiho?: StringNullableWithAggregatesFilter<"Account"> | string | null
    saupkiho?: StringNullableWithAggregatesFilter<"Account"> | string | null
    token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    admin?: BoolNullableWithAggregatesFilter<"Account"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type OrderReqMsgWhereInput = {
    AND?: OrderReqMsgWhereInput | OrderReqMsgWhereInput[]
    OR?: OrderReqMsgWhereInput[]
    NOT?: OrderReqMsgWhereInput | OrderReqMsgWhereInput[]
    id?: IntFilter<"OrderReqMsg"> | number
    accountId?: IntFilter<"OrderReqMsg"> | number
    message?: StringFilter<"OrderReqMsg"> | string
    updatedAt?: DateTimeFilter<"OrderReqMsg"> | Date | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type OrderReqMsgOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type OrderReqMsgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountId_message?: OrderReqMsgAccountIdMessageCompoundUniqueInput
    AND?: OrderReqMsgWhereInput | OrderReqMsgWhereInput[]
    OR?: OrderReqMsgWhereInput[]
    NOT?: OrderReqMsgWhereInput | OrderReqMsgWhereInput[]
    accountId?: IntFilter<"OrderReqMsg"> | number
    message?: StringFilter<"OrderReqMsg"> | string
    updatedAt?: DateTimeFilter<"OrderReqMsg"> | Date | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id" | "accountId_message">

  export type OrderReqMsgOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderReqMsgCountOrderByAggregateInput
    _avg?: OrderReqMsgAvgOrderByAggregateInput
    _max?: OrderReqMsgMaxOrderByAggregateInput
    _min?: OrderReqMsgMinOrderByAggregateInput
    _sum?: OrderReqMsgSumOrderByAggregateInput
  }

  export type OrderReqMsgScalarWhereWithAggregatesInput = {
    AND?: OrderReqMsgScalarWhereWithAggregatesInput | OrderReqMsgScalarWhereWithAggregatesInput[]
    OR?: OrderReqMsgScalarWhereWithAggregatesInput[]
    NOT?: OrderReqMsgScalarWhereWithAggregatesInput | OrderReqMsgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderReqMsg"> | number
    accountId?: IntWithAggregatesFilter<"OrderReqMsg"> | number
    message?: StringWithAggregatesFilter<"OrderReqMsg"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderReqMsg"> | Date | string
  }

  export type ProductListWhereInput = {
    AND?: ProductListWhereInput | ProductListWhereInput[]
    OR?: ProductListWhereInput[]
    NOT?: ProductListWhereInput | ProductListWhereInput[]
    jisa?: StringFilter<"ProductList"> | string
    smCode?: StringFilter<"ProductList"> | string
    smYmd?: StringFilter<"ProductList"> | string
    addUser?: StringFilter<"ProductList"> | string
    createDt?: DateTimeFilter<"ProductList"> | Date | string
    bigo?: StringFilter<"ProductList"> | string
    web?: BoolFilter<"ProductList"> | boolean
    bunryu?: StringFilter<"ProductList"> | string
    step?: IntFilter<"ProductList"> | number
    fit?: BoolFilter<"ProductList"> | boolean
    card?: BoolFilter<"ProductList"> | boolean
  }

  export type ProductListOrderByWithRelationInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    smYmd?: SortOrder
    addUser?: SortOrder
    createDt?: SortOrder
    bigo?: SortOrder
    web?: SortOrder
    bunryu?: SortOrder
    step?: SortOrder
    fit?: SortOrder
    card?: SortOrder
  }

  export type ProductListWhereUniqueInput = Prisma.AtLeast<{
    jisa?: string
    smCode?: string
    AND?: ProductListWhereInput | ProductListWhereInput[]
    OR?: ProductListWhereInput[]
    NOT?: ProductListWhereInput | ProductListWhereInput[]
    smYmd?: StringFilter<"ProductList"> | string
    addUser?: StringFilter<"ProductList"> | string
    createDt?: DateTimeFilter<"ProductList"> | Date | string
    bigo?: StringFilter<"ProductList"> | string
    web?: BoolFilter<"ProductList"> | boolean
    bunryu?: StringFilter<"ProductList"> | string
    step?: IntFilter<"ProductList"> | number
    fit?: BoolFilter<"ProductList"> | boolean
    card?: BoolFilter<"ProductList"> | boolean
  }, "jisa" | "smCode">

  export type ProductListOrderByWithAggregationInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    smYmd?: SortOrder
    addUser?: SortOrder
    createDt?: SortOrder
    bigo?: SortOrder
    web?: SortOrder
    bunryu?: SortOrder
    step?: SortOrder
    fit?: SortOrder
    card?: SortOrder
    _count?: ProductListCountOrderByAggregateInput
    _avg?: ProductListAvgOrderByAggregateInput
    _max?: ProductListMaxOrderByAggregateInput
    _min?: ProductListMinOrderByAggregateInput
    _sum?: ProductListSumOrderByAggregateInput
  }

  export type ProductListScalarWhereWithAggregatesInput = {
    AND?: ProductListScalarWhereWithAggregatesInput | ProductListScalarWhereWithAggregatesInput[]
    OR?: ProductListScalarWhereWithAggregatesInput[]
    NOT?: ProductListScalarWhereWithAggregatesInput | ProductListScalarWhereWithAggregatesInput[]
    jisa?: StringWithAggregatesFilter<"ProductList"> | string
    smCode?: StringWithAggregatesFilter<"ProductList"> | string
    smYmd?: StringWithAggregatesFilter<"ProductList"> | string
    addUser?: StringWithAggregatesFilter<"ProductList"> | string
    createDt?: DateTimeWithAggregatesFilter<"ProductList"> | Date | string
    bigo?: StringWithAggregatesFilter<"ProductList"> | string
    web?: BoolWithAggregatesFilter<"ProductList"> | boolean
    bunryu?: StringWithAggregatesFilter<"ProductList"> | string
    step?: IntWithAggregatesFilter<"ProductList"> | number
    fit?: BoolWithAggregatesFilter<"ProductList"> | boolean
    card?: BoolWithAggregatesFilter<"ProductList"> | boolean
  }

  export type ProductListSubWhereInput = {
    AND?: ProductListSubWhereInput | ProductListSubWhereInput[]
    OR?: ProductListSubWhereInput[]
    NOT?: ProductListSubWhereInput | ProductListSubWhereInput[]
    auto?: IntFilter<"ProductListSub"> | number
    jisa?: StringFilter<"ProductListSub"> | string
    smCode?: StringFilter<"ProductListSub"> | string
    smMyung?: StringFilter<"ProductListSub"> | string
    smYmd?: StringFilter<"ProductListSub"> | string
    danga?: FloatFilter<"ProductListSub"> | number
    danwi?: StringFilter<"ProductListSub"> | string
    etc1?: StringFilter<"ProductListSub"> | string
    etc2?: StringFilter<"ProductListSub"> | string
    etc3?: StringFilter<"ProductListSub"> | string
    etc4?: StringFilter<"ProductListSub"> | string
    etc5?: StringFilter<"ProductListSub"> | string
  }

  export type ProductListSubOrderByWithRelationInput = {
    auto?: SortOrder
    jisa?: SortOrder
    smCode?: SortOrder
    smMyung?: SortOrder
    smYmd?: SortOrder
    danga?: SortOrder
    danwi?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
  }

  export type ProductListSubWhereUniqueInput = Prisma.AtLeast<{
    auto?: number
    AND?: ProductListSubWhereInput | ProductListSubWhereInput[]
    OR?: ProductListSubWhereInput[]
    NOT?: ProductListSubWhereInput | ProductListSubWhereInput[]
    jisa?: StringFilter<"ProductListSub"> | string
    smCode?: StringFilter<"ProductListSub"> | string
    smMyung?: StringFilter<"ProductListSub"> | string
    smYmd?: StringFilter<"ProductListSub"> | string
    danga?: FloatFilter<"ProductListSub"> | number
    danwi?: StringFilter<"ProductListSub"> | string
    etc1?: StringFilter<"ProductListSub"> | string
    etc2?: StringFilter<"ProductListSub"> | string
    etc3?: StringFilter<"ProductListSub"> | string
    etc4?: StringFilter<"ProductListSub"> | string
    etc5?: StringFilter<"ProductListSub"> | string
  }, "auto">

  export type ProductListSubOrderByWithAggregationInput = {
    auto?: SortOrder
    jisa?: SortOrder
    smCode?: SortOrder
    smMyung?: SortOrder
    smYmd?: SortOrder
    danga?: SortOrder
    danwi?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    _count?: ProductListSubCountOrderByAggregateInput
    _avg?: ProductListSubAvgOrderByAggregateInput
    _max?: ProductListSubMaxOrderByAggregateInput
    _min?: ProductListSubMinOrderByAggregateInput
    _sum?: ProductListSubSumOrderByAggregateInput
  }

  export type ProductListSubScalarWhereWithAggregatesInput = {
    AND?: ProductListSubScalarWhereWithAggregatesInput | ProductListSubScalarWhereWithAggregatesInput[]
    OR?: ProductListSubScalarWhereWithAggregatesInput[]
    NOT?: ProductListSubScalarWhereWithAggregatesInput | ProductListSubScalarWhereWithAggregatesInput[]
    auto?: IntWithAggregatesFilter<"ProductListSub"> | number
    jisa?: StringWithAggregatesFilter<"ProductListSub"> | string
    smCode?: StringWithAggregatesFilter<"ProductListSub"> | string
    smMyung?: StringWithAggregatesFilter<"ProductListSub"> | string
    smYmd?: StringWithAggregatesFilter<"ProductListSub"> | string
    danga?: FloatWithAggregatesFilter<"ProductListSub"> | number
    danwi?: StringWithAggregatesFilter<"ProductListSub"> | string
    etc1?: StringWithAggregatesFilter<"ProductListSub"> | string
    etc2?: StringWithAggregatesFilter<"ProductListSub"> | string
    etc3?: StringWithAggregatesFilter<"ProductListSub"> | string
    etc4?: StringWithAggregatesFilter<"ProductListSub"> | string
    etc5?: StringWithAggregatesFilter<"ProductListSub"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    auto?: IntFilter<"Product"> | number
    clCode?: StringFilter<"Product"> | string
    jisa?: StringFilter<"Product"> | string
    csCode?: StringFilter<"Product"> | string
    ctTel?: StringFilter<"Product"> | string
    count?: IntFilter<"Product"> | number
    receive?: StringFilter<"Product"> | string
    receiveYmd?: StringFilter<"Product"> | string
    sell?: StringFilter<"Product"> | string
    sellYmd?: StringFilter<"Product"> | string
    orderCheck?: StringFilter<"Product"> | string
    seller?: StringFilter<"Product"> | string
    check?: StringFilter<"Product"> | string
    check2?: StringFilter<"Product"> | string
    rgb?: StringFilter<"Product"> | string
    bigo?: StringFilter<"Product"> | string
    createDt?: DateTimeFilter<"Product"> | Date | string
    bigo2?: StringNullableFilter<"Product"> | string | null
    etc1?: StringNullableFilter<"Product"> | string | null
    etc2?: StringNullableFilter<"Product"> | string | null
    etc3?: StringNullableFilter<"Product"> | string | null
    etc4?: StringNullableFilter<"Product"> | string | null
    etc5?: StringNullableFilter<"Product"> | string | null
    web?: BoolFilter<"Product"> | boolean
    webPaymentItemId?: IntNullableFilter<"Product"> | number | null
    webBNPL?: BoolFilter<"Product"> | boolean
  }

  export type ProductOrderByWithRelationInput = {
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrderInput | SortOrder
    webBNPL?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    auto?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    clCode?: StringFilter<"Product"> | string
    jisa?: StringFilter<"Product"> | string
    csCode?: StringFilter<"Product"> | string
    ctTel?: StringFilter<"Product"> | string
    count?: IntFilter<"Product"> | number
    receive?: StringFilter<"Product"> | string
    receiveYmd?: StringFilter<"Product"> | string
    sell?: StringFilter<"Product"> | string
    sellYmd?: StringFilter<"Product"> | string
    orderCheck?: StringFilter<"Product"> | string
    seller?: StringFilter<"Product"> | string
    check?: StringFilter<"Product"> | string
    check2?: StringFilter<"Product"> | string
    rgb?: StringFilter<"Product"> | string
    bigo?: StringFilter<"Product"> | string
    createDt?: DateTimeFilter<"Product"> | Date | string
    bigo2?: StringNullableFilter<"Product"> | string | null
    etc1?: StringNullableFilter<"Product"> | string | null
    etc2?: StringNullableFilter<"Product"> | string | null
    etc3?: StringNullableFilter<"Product"> | string | null
    etc4?: StringNullableFilter<"Product"> | string | null
    etc5?: StringNullableFilter<"Product"> | string | null
    web?: BoolFilter<"Product"> | boolean
    webPaymentItemId?: IntNullableFilter<"Product"> | number | null
    webBNPL?: BoolFilter<"Product"> | boolean
  }, "auto">

  export type ProductOrderByWithAggregationInput = {
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrderInput | SortOrder
    webBNPL?: SortOrder
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
    auto?: IntWithAggregatesFilter<"Product"> | number
    clCode?: StringWithAggregatesFilter<"Product"> | string
    jisa?: StringWithAggregatesFilter<"Product"> | string
    csCode?: StringWithAggregatesFilter<"Product"> | string
    ctTel?: StringWithAggregatesFilter<"Product"> | string
    count?: IntWithAggregatesFilter<"Product"> | number
    receive?: StringWithAggregatesFilter<"Product"> | string
    receiveYmd?: StringWithAggregatesFilter<"Product"> | string
    sell?: StringWithAggregatesFilter<"Product"> | string
    sellYmd?: StringWithAggregatesFilter<"Product"> | string
    orderCheck?: StringWithAggregatesFilter<"Product"> | string
    seller?: StringWithAggregatesFilter<"Product"> | string
    check?: StringWithAggregatesFilter<"Product"> | string
    check2?: StringWithAggregatesFilter<"Product"> | string
    rgb?: StringWithAggregatesFilter<"Product"> | string
    bigo?: StringWithAggregatesFilter<"Product"> | string
    createDt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    bigo2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    etc1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    etc2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    etc3?: StringNullableWithAggregatesFilter<"Product"> | string | null
    etc4?: StringNullableWithAggregatesFilter<"Product"> | string | null
    etc5?: StringNullableWithAggregatesFilter<"Product"> | string | null
    web?: BoolWithAggregatesFilter<"Product"> | boolean
    webPaymentItemId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    webBNPL?: BoolWithAggregatesFilter<"Product"> | boolean
  }

  export type ProductLogWhereInput = {
    AND?: ProductLogWhereInput | ProductLogWhereInput[]
    OR?: ProductLogWhereInput[]
    NOT?: ProductLogWhereInput | ProductLogWhereInput[]
    logAuto?: IntFilter<"ProductLog"> | number
    logDatetime?: DateTimeFilter<"ProductLog"> | Date | string
    logGubun?: StringFilter<"ProductLog"> | string
    logUser?: StringFilter<"ProductLog"> | string
    logComputer?: StringFilter<"ProductLog"> | string
    auto?: IntFilter<"ProductLog"> | number
    clCode?: StringFilter<"ProductLog"> | string
    jisa?: StringFilter<"ProductLog"> | string
    csCode?: StringFilter<"ProductLog"> | string
    ctTel?: StringFilter<"ProductLog"> | string
    count?: IntFilter<"ProductLog"> | number
    receive?: StringFilter<"ProductLog"> | string
    receiveYmd?: StringFilter<"ProductLog"> | string
    sell?: StringFilter<"ProductLog"> | string
    sellYmd?: StringFilter<"ProductLog"> | string
    orderCheck?: StringFilter<"ProductLog"> | string
    seller?: StringFilter<"ProductLog"> | string
    check?: StringFilter<"ProductLog"> | string
    check2?: StringFilter<"ProductLog"> | string
    rgb?: StringFilter<"ProductLog"> | string
    bigo?: StringFilter<"ProductLog"> | string
    createDt?: DateTimeFilter<"ProductLog"> | Date | string
    bigo2?: StringNullableFilter<"ProductLog"> | string | null
    etc1?: StringNullableFilter<"ProductLog"> | string | null
    etc2?: StringNullableFilter<"ProductLog"> | string | null
    etc3?: StringNullableFilter<"ProductLog"> | string | null
    etc4?: StringNullableFilter<"ProductLog"> | string | null
    etc5?: StringNullableFilter<"ProductLog"> | string | null
    web?: BoolFilter<"ProductLog"> | boolean
    webPaymentItemId?: IntNullableFilter<"ProductLog"> | number | null
    webBNPL?: BoolFilter<"ProductLog"> | boolean
  }

  export type ProductLogOrderByWithRelationInput = {
    logAuto?: SortOrder
    logDatetime?: SortOrder
    logGubun?: SortOrder
    logUser?: SortOrder
    logComputer?: SortOrder
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrderInput | SortOrder
    webBNPL?: SortOrder
  }

  export type ProductLogWhereUniqueInput = Prisma.AtLeast<{
    logAuto?: number
    AND?: ProductLogWhereInput | ProductLogWhereInput[]
    OR?: ProductLogWhereInput[]
    NOT?: ProductLogWhereInput | ProductLogWhereInput[]
    logDatetime?: DateTimeFilter<"ProductLog"> | Date | string
    logGubun?: StringFilter<"ProductLog"> | string
    logUser?: StringFilter<"ProductLog"> | string
    logComputer?: StringFilter<"ProductLog"> | string
    auto?: IntFilter<"ProductLog"> | number
    clCode?: StringFilter<"ProductLog"> | string
    jisa?: StringFilter<"ProductLog"> | string
    csCode?: StringFilter<"ProductLog"> | string
    ctTel?: StringFilter<"ProductLog"> | string
    count?: IntFilter<"ProductLog"> | number
    receive?: StringFilter<"ProductLog"> | string
    receiveYmd?: StringFilter<"ProductLog"> | string
    sell?: StringFilter<"ProductLog"> | string
    sellYmd?: StringFilter<"ProductLog"> | string
    orderCheck?: StringFilter<"ProductLog"> | string
    seller?: StringFilter<"ProductLog"> | string
    check?: StringFilter<"ProductLog"> | string
    check2?: StringFilter<"ProductLog"> | string
    rgb?: StringFilter<"ProductLog"> | string
    bigo?: StringFilter<"ProductLog"> | string
    createDt?: DateTimeFilter<"ProductLog"> | Date | string
    bigo2?: StringNullableFilter<"ProductLog"> | string | null
    etc1?: StringNullableFilter<"ProductLog"> | string | null
    etc2?: StringNullableFilter<"ProductLog"> | string | null
    etc3?: StringNullableFilter<"ProductLog"> | string | null
    etc4?: StringNullableFilter<"ProductLog"> | string | null
    etc5?: StringNullableFilter<"ProductLog"> | string | null
    web?: BoolFilter<"ProductLog"> | boolean
    webPaymentItemId?: IntNullableFilter<"ProductLog"> | number | null
    webBNPL?: BoolFilter<"ProductLog"> | boolean
  }, "logAuto">

  export type ProductLogOrderByWithAggregationInput = {
    logAuto?: SortOrder
    logDatetime?: SortOrder
    logGubun?: SortOrder
    logUser?: SortOrder
    logComputer?: SortOrder
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrderInput | SortOrder
    webBNPL?: SortOrder
    _count?: ProductLogCountOrderByAggregateInput
    _avg?: ProductLogAvgOrderByAggregateInput
    _max?: ProductLogMaxOrderByAggregateInput
    _min?: ProductLogMinOrderByAggregateInput
    _sum?: ProductLogSumOrderByAggregateInput
  }

  export type ProductLogScalarWhereWithAggregatesInput = {
    AND?: ProductLogScalarWhereWithAggregatesInput | ProductLogScalarWhereWithAggregatesInput[]
    OR?: ProductLogScalarWhereWithAggregatesInput[]
    NOT?: ProductLogScalarWhereWithAggregatesInput | ProductLogScalarWhereWithAggregatesInput[]
    logAuto?: IntWithAggregatesFilter<"ProductLog"> | number
    logDatetime?: DateTimeWithAggregatesFilter<"ProductLog"> | Date | string
    logGubun?: StringWithAggregatesFilter<"ProductLog"> | string
    logUser?: StringWithAggregatesFilter<"ProductLog"> | string
    logComputer?: StringWithAggregatesFilter<"ProductLog"> | string
    auto?: IntWithAggregatesFilter<"ProductLog"> | number
    clCode?: StringWithAggregatesFilter<"ProductLog"> | string
    jisa?: StringWithAggregatesFilter<"ProductLog"> | string
    csCode?: StringWithAggregatesFilter<"ProductLog"> | string
    ctTel?: StringWithAggregatesFilter<"ProductLog"> | string
    count?: IntWithAggregatesFilter<"ProductLog"> | number
    receive?: StringWithAggregatesFilter<"ProductLog"> | string
    receiveYmd?: StringWithAggregatesFilter<"ProductLog"> | string
    sell?: StringWithAggregatesFilter<"ProductLog"> | string
    sellYmd?: StringWithAggregatesFilter<"ProductLog"> | string
    orderCheck?: StringWithAggregatesFilter<"ProductLog"> | string
    seller?: StringWithAggregatesFilter<"ProductLog"> | string
    check?: StringWithAggregatesFilter<"ProductLog"> | string
    check2?: StringWithAggregatesFilter<"ProductLog"> | string
    rgb?: StringWithAggregatesFilter<"ProductLog"> | string
    bigo?: StringWithAggregatesFilter<"ProductLog"> | string
    createDt?: DateTimeWithAggregatesFilter<"ProductLog"> | Date | string
    bigo2?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    etc1?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    etc2?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    etc3?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    etc4?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    etc5?: StringNullableWithAggregatesFilter<"ProductLog"> | string | null
    web?: BoolWithAggregatesFilter<"ProductLog"> | boolean
    webPaymentItemId?: IntNullableWithAggregatesFilter<"ProductLog"> | number | null
    webBNPL?: BoolWithAggregatesFilter<"ProductLog"> | boolean
  }

  export type ProductListWebBunryuWhereInput = {
    AND?: ProductListWebBunryuWhereInput | ProductListWebBunryuWhereInput[]
    OR?: ProductListWebBunryuWhereInput[]
    NOT?: ProductListWebBunryuWhereInput | ProductListWebBunryuWhereInput[]
    code?: StringFilter<"ProductListWebBunryu"> | string
    name?: StringFilter<"ProductListWebBunryu"> | string
    fit?: BoolNullableFilter<"ProductListWebBunryu"> | boolean | null
  }

  export type ProductListWebBunryuOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrderInput | SortOrder
  }

  export type ProductListWebBunryuWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ProductListWebBunryuWhereInput | ProductListWebBunryuWhereInput[]
    OR?: ProductListWebBunryuWhereInput[]
    NOT?: ProductListWebBunryuWhereInput | ProductListWebBunryuWhereInput[]
    name?: StringFilter<"ProductListWebBunryu"> | string
    fit?: BoolNullableFilter<"ProductListWebBunryu"> | boolean | null
  }, "code">

  export type ProductListWebBunryuOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrderInput | SortOrder
    _count?: ProductListWebBunryuCountOrderByAggregateInput
    _max?: ProductListWebBunryuMaxOrderByAggregateInput
    _min?: ProductListWebBunryuMinOrderByAggregateInput
  }

  export type ProductListWebBunryuScalarWhereWithAggregatesInput = {
    AND?: ProductListWebBunryuScalarWhereWithAggregatesInput | ProductListWebBunryuScalarWhereWithAggregatesInput[]
    OR?: ProductListWebBunryuScalarWhereWithAggregatesInput[]
    NOT?: ProductListWebBunryuScalarWhereWithAggregatesInput | ProductListWebBunryuScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"ProductListWebBunryu"> | string
    name?: StringWithAggregatesFilter<"ProductListWebBunryu"> | string
    fit?: BoolNullableWithAggregatesFilter<"ProductListWebBunryu"> | boolean | null
  }

  export type ProductListImageWhereInput = {
    AND?: ProductListImageWhereInput | ProductListImageWhereInput[]
    OR?: ProductListImageWhereInput[]
    NOT?: ProductListImageWhereInput | ProductListImageWhereInput[]
    jisa?: StringFilter<"ProductListImage"> | string
    smCode?: StringFilter<"ProductListImage"> | string
    image?: BytesNullableFilter<"ProductListImage"> | Buffer | null
  }

  export type ProductListImageOrderByWithRelationInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type ProductListImageWhereUniqueInput = Prisma.AtLeast<{
    jisa?: string
    smCode?: string
    AND?: ProductListImageWhereInput | ProductListImageWhereInput[]
    OR?: ProductListImageWhereInput[]
    NOT?: ProductListImageWhereInput | ProductListImageWhereInput[]
    image?: BytesNullableFilter<"ProductListImage"> | Buffer | null
  }, "jisa" | "smCode">

  export type ProductListImageOrderByWithAggregationInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: ProductListImageCountOrderByAggregateInput
    _max?: ProductListImageMaxOrderByAggregateInput
    _min?: ProductListImageMinOrderByAggregateInput
  }

  export type ProductListImageScalarWhereWithAggregatesInput = {
    AND?: ProductListImageScalarWhereWithAggregatesInput | ProductListImageScalarWhereWithAggregatesInput[]
    OR?: ProductListImageScalarWhereWithAggregatesInput[]
    NOT?: ProductListImageScalarWhereWithAggregatesInput | ProductListImageScalarWhereWithAggregatesInput[]
    jisa?: StringWithAggregatesFilter<"ProductListImage"> | string
    smCode?: StringWithAggregatesFilter<"ProductListImage"> | string
    image?: BytesNullableWithAggregatesFilter<"ProductListImage"> | Buffer | null
  }

  export type CsWhereInput = {
    AND?: CsWhereInput | CsWhereInput[]
    OR?: CsWhereInput[]
    NOT?: CsWhereInput | CsWhereInput[]
    gubun?: StringFilter<"Cs"> | string
    code?: StringFilter<"Cs"> | string
    myung?: StringNullableFilter<"Cs"> | string | null
    daepyo?: StringNullableFilter<"Cs"> | string | null
    tel?: StringNullableFilter<"Cs"> | string | null
    fax?: StringNullableFilter<"Cs"> | string | null
    post?: StringNullableFilter<"Cs"> | string | null
    dup?: IntNullableFilter<"Cs"> | number | null
    juso?: StringNullableFilter<"Cs"> | string | null
    bunji?: StringNullableFilter<"Cs"> | string | null
    jisa?: StringNullableFilter<"Cs"> | string | null
    emCode?: StringNullableFilter<"Cs"> | string | null
    damdang?: StringNullableFilter<"Cs"> | string | null
    damdanghp?: StringNullableFilter<"Cs"> | string | null
    jongbl?: StringNullableFilter<"Cs"> | string | null
    upte?: StringNullableFilter<"Cs"> | string | null
    saupnum?: StringNullableFilter<"Cs"> | string | null
    sauppost?: StringNullableFilter<"Cs"> | string | null
    saupdup?: IntNullableFilter<"Cs"> | number | null
    saupjuso?: StringNullableFilter<"Cs"> | string | null
    saupbunji?: StringNullableFilter<"Cs"> | string | null
    email?: StringNullableFilter<"Cs"> | string | null
    ediid?: StringNullableFilter<"Cs"> | string | null
    edipassword?: StringNullableFilter<"Cs"> | string | null
    local?: StringNullableFilter<"Cs"> | string | null
    nonchart?: StringNullableFilter<"Cs"> | string | null
    fymd?: StringNullableFilter<"Cs"> | string | null
    lymd?: StringNullableFilter<"Cs"> | string | null
    bigo?: StringNullableFilter<"Cs"> | string | null
    user?: StringNullableFilter<"Cs"> | string | null
    etc1?: StringNullableFilter<"Cs"> | string | null
    etc2?: StringNullableFilter<"Cs"> | string | null
    etc3?: StringNullableFilter<"Cs"> | string | null
    Chonguser?: StringNullableFilter<"Cs"> | string | null
    pro?: StringNullableFilter<"Cs"> | string | null
    yanghan?: StringNullableFilter<"Cs"> | string | null
    chunggu?: StringNullableFilter<"Cs"> | string | null
    cherbang?: StringNullableFilter<"Cs"> | string | null
    youngsu?: StringNullableFilter<"Cs"> | string | null
    pacs?: StringNullableFilter<"Cs"> | string | null
    barcode?: StringNullableFilter<"Cs"> | string | null
    yakguk?: StringNullableFilter<"Cs"> | string | null
    update?: StringNullableFilter<"Cs"> | string | null
    askumak?: IntNullableFilter<"Cs"> | number | null
    etc4?: StringNullableFilter<"Cs"> | string | null
    etc5?: StringNullableFilter<"Cs"> | string | null
    etc6?: StringNullableFilter<"Cs"> | string | null
    etc7?: StringNullableFilter<"Cs"> | string | null
    cms?: StringNullableFilter<"Cs"> | string | null
    daegidisp?: StringNullableFilter<"Cs"> | string | null
    gumjinlink?: StringNullableFilter<"Cs"> | string | null
    capture?: StringNullableFilter<"Cs"> | string | null
    sutak?: StringNullableFilter<"Cs"> | string | null
    sutaklink?: StringNullableFilter<"Cs"> | string | null
    gumsalinkyn?: StringNullableFilter<"Cs"> | string | null
    gumsalink?: StringNullableFilter<"Cs"> | string | null
    scaner?: StringNullableFilter<"Cs"> | string | null
    card?: StringNullableFilter<"Cs"> | string | null
    cardlink?: StringNullableFilter<"Cs"> | string | null
    eleccherban?: StringNullableFilter<"Cs"> | string | null
    yakgukprint?: StringNullableFilter<"Cs"> | string | null
    gumsabarcod?: StringNullableFilter<"Cs"> | string | null
    bdbarcode?: StringNullableFilter<"Cs"> | string | null
    updatepath?: StringNullableFilter<"Cs"> | string | null
    server?: StringNullableFilter<"Cs"> | string | null
    sanjae?: StringNullableFilter<"Cs"> | string | null
    paljji?: StringNullableFilter<"Cs"> | string | null
    jungji?: StringNullableFilter<"Cs"> | string | null
    servermodel?: StringNullableFilter<"Cs"> | string | null
    servername?: StringNullableFilter<"Cs"> | string | null
    serverSN?: StringNullableFilter<"Cs"> | string | null
    serverMT?: StringNullableFilter<"Cs"> | string | null
    serverHDD?: StringNullableFilter<"Cs"> | string | null
    serverMemory?: StringNullableFilter<"Cs"> | string | null
    serverLocation?: StringNullableFilter<"Cs"> | string | null
    serversetup?: StringNullableFilter<"Cs"> | string | null
    window?: StringNullableFilter<"Cs"> | string | null
    windowmemo?: StringNullableFilter<"Cs"> | string | null
    virusname?: StringNullableFilter<"Cs"> | string | null
    virussetup?: StringNullableFilter<"Cs"> | string | null
    virusend?: StringNullableFilter<"Cs"> | string | null
    upsname?: StringNullableFilter<"Cs"> | string | null
    upssetup?: StringNullableFilter<"Cs"> | string | null
    upsend?: StringNullableFilter<"Cs"> | string | null
    rollprint?: StringFilter<"Cs"> | string
    inuser?: StringNullableFilter<"Cs"> | string | null
    upuser?: StringNullableFilter<"Cs"> | string | null
    indate?: StringNullableFilter<"Cs"> | string | null
    update2?: StringNullableFilter<"Cs"> | string | null
    etc8?: StringNullableFilter<"Cs"> | string | null
    etc9?: StringNullableFilter<"Cs"> | string | null
    etc10?: StringNullableFilter<"Cs"> | string | null
    etc11?: StringNullableFilter<"Cs"> | string | null
    etc12?: StringNullableFilter<"Cs"> | string | null
    etc13?: StringNullableFilter<"Cs"> | string | null
    etc14?: StringNullableFilter<"Cs"> | string | null
    etc15?: StringNullableFilter<"Cs"> | string | null
    bogubun?: StringNullableFilter<"Cs"> | string | null
    aschk?: StringNullableFilter<"Cs"> | string | null
    etc16?: StringNullableFilter<"Cs"> | string | null
    etc17?: StringNullableFilter<"Cs"> | string | null
    etc18?: StringNullableFilter<"Cs"> | string | null
    etc19?: StringNullableFilter<"Cs"> | string | null
    etc20?: StringNullableFilter<"Cs"> | string | null
    etc21?: StringNullableFilter<"Cs"> | string | null
    etc22?: StringNullableFilter<"Cs"> | string | null
    etc23?: StringNullableFilter<"Cs"> | string | null
    etc24?: StringNullableFilter<"Cs"> | string | null
    etc25?: StringNullableFilter<"Cs"> | string | null
    etc26?: StringNullableFilter<"Cs"> | string | null
    etc27?: StringNullableFilter<"Cs"> | string | null
    etc28?: StringNullableFilter<"Cs"> | string | null
    etc29?: StringNullableFilter<"Cs"> | string | null
    etc30?: StringNullableFilter<"Cs"> | string | null
    etc31?: StringNullableFilter<"Cs"> | string | null
    etc32?: StringNullableFilter<"Cs"> | string | null
    etc33?: StringNullableFilter<"Cs"> | string | null
    etc34?: StringNullableFilter<"Cs"> | string | null
    etc35?: StringNullableFilter<"Cs"> | string | null
    server_cust?: StringNullableFilter<"Cs"> | string | null
    server_orde?: StringNullableFilter<"Cs"> | string | null
    server_mici?: StringNullableFilter<"Cs"> | string | null
    server_admi?: StringNullableFilter<"Cs"> | string | null
    server_svrp?: StringNullableFilter<"Cs"> | string | null
    server_svrb?: StringNullableFilter<"Cs"> | string | null
    oauthpwd?: StringFilter<"Cs"> | string
    medi_use?: StringNullableFilter<"Cs"> | string | null
    medi_pc?: StringNullableFilter<"Cs"> | string | null
    medi_autoju?: StringNullableFilter<"Cs"> | string | null
    medi_grname?: StringNullableFilter<"Cs"> | string | null
  }

  export type CsOrderByWithRelationInput = {
    gubun?: SortOrder
    code?: SortOrder
    myung?: SortOrderInput | SortOrder
    daepyo?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    fax?: SortOrderInput | SortOrder
    post?: SortOrderInput | SortOrder
    dup?: SortOrderInput | SortOrder
    juso?: SortOrderInput | SortOrder
    bunji?: SortOrderInput | SortOrder
    jisa?: SortOrderInput | SortOrder
    emCode?: SortOrderInput | SortOrder
    damdang?: SortOrderInput | SortOrder
    damdanghp?: SortOrderInput | SortOrder
    jongbl?: SortOrderInput | SortOrder
    upte?: SortOrderInput | SortOrder
    saupnum?: SortOrderInput | SortOrder
    sauppost?: SortOrderInput | SortOrder
    saupdup?: SortOrderInput | SortOrder
    saupjuso?: SortOrderInput | SortOrder
    saupbunji?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    ediid?: SortOrderInput | SortOrder
    edipassword?: SortOrderInput | SortOrder
    local?: SortOrderInput | SortOrder
    nonchart?: SortOrderInput | SortOrder
    fymd?: SortOrderInput | SortOrder
    lymd?: SortOrderInput | SortOrder
    bigo?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    Chonguser?: SortOrderInput | SortOrder
    pro?: SortOrderInput | SortOrder
    yanghan?: SortOrderInput | SortOrder
    chunggu?: SortOrderInput | SortOrder
    cherbang?: SortOrderInput | SortOrder
    youngsu?: SortOrderInput | SortOrder
    pacs?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    yakguk?: SortOrderInput | SortOrder
    update?: SortOrderInput | SortOrder
    askumak?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    etc6?: SortOrderInput | SortOrder
    etc7?: SortOrderInput | SortOrder
    cms?: SortOrderInput | SortOrder
    daegidisp?: SortOrderInput | SortOrder
    gumjinlink?: SortOrderInput | SortOrder
    capture?: SortOrderInput | SortOrder
    sutak?: SortOrderInput | SortOrder
    sutaklink?: SortOrderInput | SortOrder
    gumsalinkyn?: SortOrderInput | SortOrder
    gumsalink?: SortOrderInput | SortOrder
    scaner?: SortOrderInput | SortOrder
    card?: SortOrderInput | SortOrder
    cardlink?: SortOrderInput | SortOrder
    eleccherban?: SortOrderInput | SortOrder
    yakgukprint?: SortOrderInput | SortOrder
    gumsabarcod?: SortOrderInput | SortOrder
    bdbarcode?: SortOrderInput | SortOrder
    updatepath?: SortOrderInput | SortOrder
    server?: SortOrderInput | SortOrder
    sanjae?: SortOrderInput | SortOrder
    paljji?: SortOrderInput | SortOrder
    jungji?: SortOrderInput | SortOrder
    servermodel?: SortOrderInput | SortOrder
    servername?: SortOrderInput | SortOrder
    serverSN?: SortOrderInput | SortOrder
    serverMT?: SortOrderInput | SortOrder
    serverHDD?: SortOrderInput | SortOrder
    serverMemory?: SortOrderInput | SortOrder
    serverLocation?: SortOrderInput | SortOrder
    serversetup?: SortOrderInput | SortOrder
    window?: SortOrderInput | SortOrder
    windowmemo?: SortOrderInput | SortOrder
    virusname?: SortOrderInput | SortOrder
    virussetup?: SortOrderInput | SortOrder
    virusend?: SortOrderInput | SortOrder
    upsname?: SortOrderInput | SortOrder
    upssetup?: SortOrderInput | SortOrder
    upsend?: SortOrderInput | SortOrder
    rollprint?: SortOrder
    inuser?: SortOrderInput | SortOrder
    upuser?: SortOrderInput | SortOrder
    indate?: SortOrderInput | SortOrder
    update2?: SortOrderInput | SortOrder
    etc8?: SortOrderInput | SortOrder
    etc9?: SortOrderInput | SortOrder
    etc10?: SortOrderInput | SortOrder
    etc11?: SortOrderInput | SortOrder
    etc12?: SortOrderInput | SortOrder
    etc13?: SortOrderInput | SortOrder
    etc14?: SortOrderInput | SortOrder
    etc15?: SortOrderInput | SortOrder
    bogubun?: SortOrderInput | SortOrder
    aschk?: SortOrderInput | SortOrder
    etc16?: SortOrderInput | SortOrder
    etc17?: SortOrderInput | SortOrder
    etc18?: SortOrderInput | SortOrder
    etc19?: SortOrderInput | SortOrder
    etc20?: SortOrderInput | SortOrder
    etc21?: SortOrderInput | SortOrder
    etc22?: SortOrderInput | SortOrder
    etc23?: SortOrderInput | SortOrder
    etc24?: SortOrderInput | SortOrder
    etc25?: SortOrderInput | SortOrder
    etc26?: SortOrderInput | SortOrder
    etc27?: SortOrderInput | SortOrder
    etc28?: SortOrderInput | SortOrder
    etc29?: SortOrderInput | SortOrder
    etc30?: SortOrderInput | SortOrder
    etc31?: SortOrderInput | SortOrder
    etc32?: SortOrderInput | SortOrder
    etc33?: SortOrderInput | SortOrder
    etc34?: SortOrderInput | SortOrder
    etc35?: SortOrderInput | SortOrder
    server_cust?: SortOrderInput | SortOrder
    server_orde?: SortOrderInput | SortOrder
    server_mici?: SortOrderInput | SortOrder
    server_admi?: SortOrderInput | SortOrder
    server_svrp?: SortOrderInput | SortOrder
    server_svrb?: SortOrderInput | SortOrder
    oauthpwd?: SortOrder
    medi_use?: SortOrderInput | SortOrder
    medi_pc?: SortOrderInput | SortOrder
    medi_autoju?: SortOrderInput | SortOrder
    medi_grname?: SortOrderInput | SortOrder
  }

  export type CsWhereUniqueInput = Prisma.AtLeast<{
    gubun?: string
    code?: string
    AND?: CsWhereInput | CsWhereInput[]
    OR?: CsWhereInput[]
    NOT?: CsWhereInput | CsWhereInput[]
    myung?: StringNullableFilter<"Cs"> | string | null
    daepyo?: StringNullableFilter<"Cs"> | string | null
    tel?: StringNullableFilter<"Cs"> | string | null
    fax?: StringNullableFilter<"Cs"> | string | null
    post?: StringNullableFilter<"Cs"> | string | null
    dup?: IntNullableFilter<"Cs"> | number | null
    juso?: StringNullableFilter<"Cs"> | string | null
    bunji?: StringNullableFilter<"Cs"> | string | null
    jisa?: StringNullableFilter<"Cs"> | string | null
    emCode?: StringNullableFilter<"Cs"> | string | null
    damdang?: StringNullableFilter<"Cs"> | string | null
    damdanghp?: StringNullableFilter<"Cs"> | string | null
    jongbl?: StringNullableFilter<"Cs"> | string | null
    upte?: StringNullableFilter<"Cs"> | string | null
    saupnum?: StringNullableFilter<"Cs"> | string | null
    sauppost?: StringNullableFilter<"Cs"> | string | null
    saupdup?: IntNullableFilter<"Cs"> | number | null
    saupjuso?: StringNullableFilter<"Cs"> | string | null
    saupbunji?: StringNullableFilter<"Cs"> | string | null
    email?: StringNullableFilter<"Cs"> | string | null
    ediid?: StringNullableFilter<"Cs"> | string | null
    edipassword?: StringNullableFilter<"Cs"> | string | null
    local?: StringNullableFilter<"Cs"> | string | null
    nonchart?: StringNullableFilter<"Cs"> | string | null
    fymd?: StringNullableFilter<"Cs"> | string | null
    lymd?: StringNullableFilter<"Cs"> | string | null
    bigo?: StringNullableFilter<"Cs"> | string | null
    user?: StringNullableFilter<"Cs"> | string | null
    etc1?: StringNullableFilter<"Cs"> | string | null
    etc2?: StringNullableFilter<"Cs"> | string | null
    etc3?: StringNullableFilter<"Cs"> | string | null
    Chonguser?: StringNullableFilter<"Cs"> | string | null
    pro?: StringNullableFilter<"Cs"> | string | null
    yanghan?: StringNullableFilter<"Cs"> | string | null
    chunggu?: StringNullableFilter<"Cs"> | string | null
    cherbang?: StringNullableFilter<"Cs"> | string | null
    youngsu?: StringNullableFilter<"Cs"> | string | null
    pacs?: StringNullableFilter<"Cs"> | string | null
    barcode?: StringNullableFilter<"Cs"> | string | null
    yakguk?: StringNullableFilter<"Cs"> | string | null
    update?: StringNullableFilter<"Cs"> | string | null
    askumak?: IntNullableFilter<"Cs"> | number | null
    etc4?: StringNullableFilter<"Cs"> | string | null
    etc5?: StringNullableFilter<"Cs"> | string | null
    etc6?: StringNullableFilter<"Cs"> | string | null
    etc7?: StringNullableFilter<"Cs"> | string | null
    cms?: StringNullableFilter<"Cs"> | string | null
    daegidisp?: StringNullableFilter<"Cs"> | string | null
    gumjinlink?: StringNullableFilter<"Cs"> | string | null
    capture?: StringNullableFilter<"Cs"> | string | null
    sutak?: StringNullableFilter<"Cs"> | string | null
    sutaklink?: StringNullableFilter<"Cs"> | string | null
    gumsalinkyn?: StringNullableFilter<"Cs"> | string | null
    gumsalink?: StringNullableFilter<"Cs"> | string | null
    scaner?: StringNullableFilter<"Cs"> | string | null
    card?: StringNullableFilter<"Cs"> | string | null
    cardlink?: StringNullableFilter<"Cs"> | string | null
    eleccherban?: StringNullableFilter<"Cs"> | string | null
    yakgukprint?: StringNullableFilter<"Cs"> | string | null
    gumsabarcod?: StringNullableFilter<"Cs"> | string | null
    bdbarcode?: StringNullableFilter<"Cs"> | string | null
    updatepath?: StringNullableFilter<"Cs"> | string | null
    server?: StringNullableFilter<"Cs"> | string | null
    sanjae?: StringNullableFilter<"Cs"> | string | null
    paljji?: StringNullableFilter<"Cs"> | string | null
    jungji?: StringNullableFilter<"Cs"> | string | null
    servermodel?: StringNullableFilter<"Cs"> | string | null
    servername?: StringNullableFilter<"Cs"> | string | null
    serverSN?: StringNullableFilter<"Cs"> | string | null
    serverMT?: StringNullableFilter<"Cs"> | string | null
    serverHDD?: StringNullableFilter<"Cs"> | string | null
    serverMemory?: StringNullableFilter<"Cs"> | string | null
    serverLocation?: StringNullableFilter<"Cs"> | string | null
    serversetup?: StringNullableFilter<"Cs"> | string | null
    window?: StringNullableFilter<"Cs"> | string | null
    windowmemo?: StringNullableFilter<"Cs"> | string | null
    virusname?: StringNullableFilter<"Cs"> | string | null
    virussetup?: StringNullableFilter<"Cs"> | string | null
    virusend?: StringNullableFilter<"Cs"> | string | null
    upsname?: StringNullableFilter<"Cs"> | string | null
    upssetup?: StringNullableFilter<"Cs"> | string | null
    upsend?: StringNullableFilter<"Cs"> | string | null
    rollprint?: StringFilter<"Cs"> | string
    inuser?: StringNullableFilter<"Cs"> | string | null
    upuser?: StringNullableFilter<"Cs"> | string | null
    indate?: StringNullableFilter<"Cs"> | string | null
    update2?: StringNullableFilter<"Cs"> | string | null
    etc8?: StringNullableFilter<"Cs"> | string | null
    etc9?: StringNullableFilter<"Cs"> | string | null
    etc10?: StringNullableFilter<"Cs"> | string | null
    etc11?: StringNullableFilter<"Cs"> | string | null
    etc12?: StringNullableFilter<"Cs"> | string | null
    etc13?: StringNullableFilter<"Cs"> | string | null
    etc14?: StringNullableFilter<"Cs"> | string | null
    etc15?: StringNullableFilter<"Cs"> | string | null
    bogubun?: StringNullableFilter<"Cs"> | string | null
    aschk?: StringNullableFilter<"Cs"> | string | null
    etc16?: StringNullableFilter<"Cs"> | string | null
    etc17?: StringNullableFilter<"Cs"> | string | null
    etc18?: StringNullableFilter<"Cs"> | string | null
    etc19?: StringNullableFilter<"Cs"> | string | null
    etc20?: StringNullableFilter<"Cs"> | string | null
    etc21?: StringNullableFilter<"Cs"> | string | null
    etc22?: StringNullableFilter<"Cs"> | string | null
    etc23?: StringNullableFilter<"Cs"> | string | null
    etc24?: StringNullableFilter<"Cs"> | string | null
    etc25?: StringNullableFilter<"Cs"> | string | null
    etc26?: StringNullableFilter<"Cs"> | string | null
    etc27?: StringNullableFilter<"Cs"> | string | null
    etc28?: StringNullableFilter<"Cs"> | string | null
    etc29?: StringNullableFilter<"Cs"> | string | null
    etc30?: StringNullableFilter<"Cs"> | string | null
    etc31?: StringNullableFilter<"Cs"> | string | null
    etc32?: StringNullableFilter<"Cs"> | string | null
    etc33?: StringNullableFilter<"Cs"> | string | null
    etc34?: StringNullableFilter<"Cs"> | string | null
    etc35?: StringNullableFilter<"Cs"> | string | null
    server_cust?: StringNullableFilter<"Cs"> | string | null
    server_orde?: StringNullableFilter<"Cs"> | string | null
    server_mici?: StringNullableFilter<"Cs"> | string | null
    server_admi?: StringNullableFilter<"Cs"> | string | null
    server_svrp?: StringNullableFilter<"Cs"> | string | null
    server_svrb?: StringNullableFilter<"Cs"> | string | null
    oauthpwd?: StringFilter<"Cs"> | string
    medi_use?: StringNullableFilter<"Cs"> | string | null
    medi_pc?: StringNullableFilter<"Cs"> | string | null
    medi_autoju?: StringNullableFilter<"Cs"> | string | null
    medi_grname?: StringNullableFilter<"Cs"> | string | null
  }, "gubun" | "code">

  export type CsOrderByWithAggregationInput = {
    gubun?: SortOrder
    code?: SortOrder
    myung?: SortOrderInput | SortOrder
    daepyo?: SortOrderInput | SortOrder
    tel?: SortOrderInput | SortOrder
    fax?: SortOrderInput | SortOrder
    post?: SortOrderInput | SortOrder
    dup?: SortOrderInput | SortOrder
    juso?: SortOrderInput | SortOrder
    bunji?: SortOrderInput | SortOrder
    jisa?: SortOrderInput | SortOrder
    emCode?: SortOrderInput | SortOrder
    damdang?: SortOrderInput | SortOrder
    damdanghp?: SortOrderInput | SortOrder
    jongbl?: SortOrderInput | SortOrder
    upte?: SortOrderInput | SortOrder
    saupnum?: SortOrderInput | SortOrder
    sauppost?: SortOrderInput | SortOrder
    saupdup?: SortOrderInput | SortOrder
    saupjuso?: SortOrderInput | SortOrder
    saupbunji?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    ediid?: SortOrderInput | SortOrder
    edipassword?: SortOrderInput | SortOrder
    local?: SortOrderInput | SortOrder
    nonchart?: SortOrderInput | SortOrder
    fymd?: SortOrderInput | SortOrder
    lymd?: SortOrderInput | SortOrder
    bigo?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    etc2?: SortOrderInput | SortOrder
    etc3?: SortOrderInput | SortOrder
    Chonguser?: SortOrderInput | SortOrder
    pro?: SortOrderInput | SortOrder
    yanghan?: SortOrderInput | SortOrder
    chunggu?: SortOrderInput | SortOrder
    cherbang?: SortOrderInput | SortOrder
    youngsu?: SortOrderInput | SortOrder
    pacs?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    yakguk?: SortOrderInput | SortOrder
    update?: SortOrderInput | SortOrder
    askumak?: SortOrderInput | SortOrder
    etc4?: SortOrderInput | SortOrder
    etc5?: SortOrderInput | SortOrder
    etc6?: SortOrderInput | SortOrder
    etc7?: SortOrderInput | SortOrder
    cms?: SortOrderInput | SortOrder
    daegidisp?: SortOrderInput | SortOrder
    gumjinlink?: SortOrderInput | SortOrder
    capture?: SortOrderInput | SortOrder
    sutak?: SortOrderInput | SortOrder
    sutaklink?: SortOrderInput | SortOrder
    gumsalinkyn?: SortOrderInput | SortOrder
    gumsalink?: SortOrderInput | SortOrder
    scaner?: SortOrderInput | SortOrder
    card?: SortOrderInput | SortOrder
    cardlink?: SortOrderInput | SortOrder
    eleccherban?: SortOrderInput | SortOrder
    yakgukprint?: SortOrderInput | SortOrder
    gumsabarcod?: SortOrderInput | SortOrder
    bdbarcode?: SortOrderInput | SortOrder
    updatepath?: SortOrderInput | SortOrder
    server?: SortOrderInput | SortOrder
    sanjae?: SortOrderInput | SortOrder
    paljji?: SortOrderInput | SortOrder
    jungji?: SortOrderInput | SortOrder
    servermodel?: SortOrderInput | SortOrder
    servername?: SortOrderInput | SortOrder
    serverSN?: SortOrderInput | SortOrder
    serverMT?: SortOrderInput | SortOrder
    serverHDD?: SortOrderInput | SortOrder
    serverMemory?: SortOrderInput | SortOrder
    serverLocation?: SortOrderInput | SortOrder
    serversetup?: SortOrderInput | SortOrder
    window?: SortOrderInput | SortOrder
    windowmemo?: SortOrderInput | SortOrder
    virusname?: SortOrderInput | SortOrder
    virussetup?: SortOrderInput | SortOrder
    virusend?: SortOrderInput | SortOrder
    upsname?: SortOrderInput | SortOrder
    upssetup?: SortOrderInput | SortOrder
    upsend?: SortOrderInput | SortOrder
    rollprint?: SortOrder
    inuser?: SortOrderInput | SortOrder
    upuser?: SortOrderInput | SortOrder
    indate?: SortOrderInput | SortOrder
    update2?: SortOrderInput | SortOrder
    etc8?: SortOrderInput | SortOrder
    etc9?: SortOrderInput | SortOrder
    etc10?: SortOrderInput | SortOrder
    etc11?: SortOrderInput | SortOrder
    etc12?: SortOrderInput | SortOrder
    etc13?: SortOrderInput | SortOrder
    etc14?: SortOrderInput | SortOrder
    etc15?: SortOrderInput | SortOrder
    bogubun?: SortOrderInput | SortOrder
    aschk?: SortOrderInput | SortOrder
    etc16?: SortOrderInput | SortOrder
    etc17?: SortOrderInput | SortOrder
    etc18?: SortOrderInput | SortOrder
    etc19?: SortOrderInput | SortOrder
    etc20?: SortOrderInput | SortOrder
    etc21?: SortOrderInput | SortOrder
    etc22?: SortOrderInput | SortOrder
    etc23?: SortOrderInput | SortOrder
    etc24?: SortOrderInput | SortOrder
    etc25?: SortOrderInput | SortOrder
    etc26?: SortOrderInput | SortOrder
    etc27?: SortOrderInput | SortOrder
    etc28?: SortOrderInput | SortOrder
    etc29?: SortOrderInput | SortOrder
    etc30?: SortOrderInput | SortOrder
    etc31?: SortOrderInput | SortOrder
    etc32?: SortOrderInput | SortOrder
    etc33?: SortOrderInput | SortOrder
    etc34?: SortOrderInput | SortOrder
    etc35?: SortOrderInput | SortOrder
    server_cust?: SortOrderInput | SortOrder
    server_orde?: SortOrderInput | SortOrder
    server_mici?: SortOrderInput | SortOrder
    server_admi?: SortOrderInput | SortOrder
    server_svrp?: SortOrderInput | SortOrder
    server_svrb?: SortOrderInput | SortOrder
    oauthpwd?: SortOrder
    medi_use?: SortOrderInput | SortOrder
    medi_pc?: SortOrderInput | SortOrder
    medi_autoju?: SortOrderInput | SortOrder
    medi_grname?: SortOrderInput | SortOrder
    _count?: CsCountOrderByAggregateInput
    _avg?: CsAvgOrderByAggregateInput
    _max?: CsMaxOrderByAggregateInput
    _min?: CsMinOrderByAggregateInput
    _sum?: CsSumOrderByAggregateInput
  }

  export type CsScalarWhereWithAggregatesInput = {
    AND?: CsScalarWhereWithAggregatesInput | CsScalarWhereWithAggregatesInput[]
    OR?: CsScalarWhereWithAggregatesInput[]
    NOT?: CsScalarWhereWithAggregatesInput | CsScalarWhereWithAggregatesInput[]
    gubun?: StringWithAggregatesFilter<"Cs"> | string
    code?: StringWithAggregatesFilter<"Cs"> | string
    myung?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    daepyo?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    tel?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    fax?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    post?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    dup?: IntNullableWithAggregatesFilter<"Cs"> | number | null
    juso?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    bunji?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    jisa?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    emCode?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    damdang?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    damdanghp?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    jongbl?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    upte?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    saupnum?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    sauppost?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    saupdup?: IntNullableWithAggregatesFilter<"Cs"> | number | null
    saupjuso?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    saupbunji?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    ediid?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    edipassword?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    local?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    nonchart?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    fymd?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    lymd?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    bigo?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    user?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc1?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc2?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc3?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    Chonguser?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    pro?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    yanghan?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    chunggu?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    cherbang?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    youngsu?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    pacs?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    yakguk?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    update?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    askumak?: IntNullableWithAggregatesFilter<"Cs"> | number | null
    etc4?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc5?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc6?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc7?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    cms?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    daegidisp?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    gumjinlink?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    capture?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    sutak?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    sutaklink?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    gumsalinkyn?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    gumsalink?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    scaner?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    card?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    cardlink?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    eleccherban?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    yakgukprint?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    gumsabarcod?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    bdbarcode?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    updatepath?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    sanjae?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    paljji?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    jungji?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    servermodel?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    servername?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serverSN?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serverMT?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serverHDD?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serverMemory?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serverLocation?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    serversetup?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    window?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    windowmemo?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    virusname?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    virussetup?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    virusend?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    upsname?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    upssetup?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    upsend?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    rollprint?: StringWithAggregatesFilter<"Cs"> | string
    inuser?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    upuser?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    indate?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    update2?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc8?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc9?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc10?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc11?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc12?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc13?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc14?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc15?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    bogubun?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    aschk?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc16?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc17?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc18?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc19?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc20?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc21?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc22?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc23?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc24?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc25?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc26?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc27?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc28?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc29?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc30?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc31?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc32?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc33?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc34?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    etc35?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_cust?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_orde?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_mici?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_admi?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_svrp?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    server_svrb?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    oauthpwd?: StringWithAggregatesFilter<"Cs"> | string
    medi_use?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    medi_pc?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    medi_autoju?: StringNullableWithAggregatesFilter<"Cs"> | string | null
    medi_grname?: StringNullableWithAggregatesFilter<"Cs"> | string | null
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    ykiho?: StringFilter<"Cart"> | string
    cartItems?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    ykiho?: SortOrder
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    ykiho?: StringFilter<"Cart"> | string
    cartItems?: CartItemListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    ykiho?: SortOrder
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
    id?: IntWithAggregatesFilter<"Cart"> | number
    ykiho?: StringWithAggregatesFilter<"Cart"> | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    code?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    fit?: BoolFilter<"CartItem"> | boolean
    createdDate?: DateTimeFilter<"CartItem"> | Date | string
    updatedDate?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    cart?: XOR<CartRelationFilter, CartWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    code?: SortOrder
    quantity?: SortOrder
    fit?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    cart?: CartOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    code?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    fit?: BoolFilter<"CartItem"> | boolean
    createdDate?: DateTimeFilter<"CartItem"> | Date | string
    updatedDate?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    cart?: XOR<CartRelationFilter, CartWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    code?: SortOrder
    quantity?: SortOrder
    fit?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItem"> | number
    cartId?: IntWithAggregatesFilter<"CartItem"> | number
    code?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    fit?: BoolWithAggregatesFilter<"CartItem"> | boolean
    createdDate?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedDate?: DateTimeNullableWithAggregatesFilter<"CartItem"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    ykiho?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentKey?: StringFilter<"Payment"> | string
    customerName?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    quantity?: IntFilter<"Payment"> | number
    requestedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    sendType?: StringFilter<"Payment"> | string
    cancel?: BoolFilter<"Payment"> | boolean
    test?: IntNullableFilter<"Payment"> | number | null
    paymentItems?: PaymentItemListRelationFilter
    virtual?: XOR<PaymentVirtualNullableRelationFilter, PaymentVirtualWhereInput> | null
    refund?: XOR<PaymentRefundNullableRelationFilter, PaymentRefundWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    ykiho?: SortOrder
    orderId?: SortOrder
    paymentKey?: SortOrder
    customerName?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    requestedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    sendType?: SortOrder
    cancel?: SortOrder
    test?: SortOrderInput | SortOrder
    paymentItems?: PaymentItemOrderByRelationAggregateInput
    virtual?: PaymentVirtualOrderByWithRelationInput
    refund?: PaymentRefundOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    ykiho?: StringFilter<"Payment"> | string
    paymentKey?: StringFilter<"Payment"> | string
    customerName?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    quantity?: IntFilter<"Payment"> | number
    requestedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    approvedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    sendType?: StringFilter<"Payment"> | string
    cancel?: BoolFilter<"Payment"> | boolean
    test?: IntNullableFilter<"Payment"> | number | null
    paymentItems?: PaymentItemListRelationFilter
    virtual?: XOR<PaymentVirtualNullableRelationFilter, PaymentVirtualWhereInput> | null
    refund?: XOR<PaymentRefundNullableRelationFilter, PaymentRefundWhereInput> | null
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    ykiho?: SortOrder
    orderId?: SortOrder
    paymentKey?: SortOrder
    customerName?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    requestedAt?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    sendType?: SortOrder
    cancel?: SortOrder
    test?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    ykiho?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    paymentKey?: StringWithAggregatesFilter<"Payment"> | string
    customerName?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    quantity?: IntWithAggregatesFilter<"Payment"> | number
    requestedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    sendType?: StringWithAggregatesFilter<"Payment"> | string
    cancel?: BoolWithAggregatesFilter<"Payment"> | boolean
    test?: IntNullableWithAggregatesFilter<"Payment"> | number | null
  }

  export type PaymentItemWhereInput = {
    AND?: PaymentItemWhereInput | PaymentItemWhereInput[]
    OR?: PaymentItemWhereInput[]
    NOT?: PaymentItemWhereInput | PaymentItemWhereInput[]
    id?: IntFilter<"PaymentItem"> | number
    paymentId?: IntFilter<"PaymentItem"> | number
    code?: StringFilter<"PaymentItem"> | string
    name?: StringFilter<"PaymentItem"> | string
    fit?: BoolFilter<"PaymentItem"> | boolean
    quantity?: IntFilter<"PaymentItem"> | number
    amount?: FloatFilter<"PaymentItem"> | number
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type PaymentItemOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentItemWhereInput | PaymentItemWhereInput[]
    OR?: PaymentItemWhereInput[]
    NOT?: PaymentItemWhereInput | PaymentItemWhereInput[]
    paymentId?: IntFilter<"PaymentItem"> | number
    code?: StringFilter<"PaymentItem"> | string
    name?: StringFilter<"PaymentItem"> | string
    fit?: BoolFilter<"PaymentItem"> | boolean
    quantity?: IntFilter<"PaymentItem"> | number
    amount?: FloatFilter<"PaymentItem"> | number
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id">

  export type PaymentItemOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
    _count?: PaymentItemCountOrderByAggregateInput
    _avg?: PaymentItemAvgOrderByAggregateInput
    _max?: PaymentItemMaxOrderByAggregateInput
    _min?: PaymentItemMinOrderByAggregateInput
    _sum?: PaymentItemSumOrderByAggregateInput
  }

  export type PaymentItemScalarWhereWithAggregatesInput = {
    AND?: PaymentItemScalarWhereWithAggregatesInput | PaymentItemScalarWhereWithAggregatesInput[]
    OR?: PaymentItemScalarWhereWithAggregatesInput[]
    NOT?: PaymentItemScalarWhereWithAggregatesInput | PaymentItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentItem"> | number
    paymentId?: IntWithAggregatesFilter<"PaymentItem"> | number
    code?: StringWithAggregatesFilter<"PaymentItem"> | string
    name?: StringWithAggregatesFilter<"PaymentItem"> | string
    fit?: BoolWithAggregatesFilter<"PaymentItem"> | boolean
    quantity?: IntWithAggregatesFilter<"PaymentItem"> | number
    amount?: FloatWithAggregatesFilter<"PaymentItem"> | number
  }

  export type PaymentVirtualWhereInput = {
    AND?: PaymentVirtualWhereInput | PaymentVirtualWhereInput[]
    OR?: PaymentVirtualWhereInput[]
    NOT?: PaymentVirtualWhereInput | PaymentVirtualWhereInput[]
    id?: IntFilter<"PaymentVirtual"> | number
    paymentId?: IntFilter<"PaymentVirtual"> | number
    bankCode?: StringFilter<"PaymentVirtual"> | string
    customerName?: StringFilter<"PaymentVirtual"> | string
    dueDate?: DateTimeFilter<"PaymentVirtual"> | Date | string
    accountNumber?: StringFilter<"PaymentVirtual"> | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type PaymentVirtualOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bankCode?: SortOrder
    customerName?: SortOrder
    dueDate?: SortOrder
    accountNumber?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentVirtualWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentId?: number
    AND?: PaymentVirtualWhereInput | PaymentVirtualWhereInput[]
    OR?: PaymentVirtualWhereInput[]
    NOT?: PaymentVirtualWhereInput | PaymentVirtualWhereInput[]
    bankCode?: StringFilter<"PaymentVirtual"> | string
    customerName?: StringFilter<"PaymentVirtual"> | string
    dueDate?: DateTimeFilter<"PaymentVirtual"> | Date | string
    accountNumber?: StringFilter<"PaymentVirtual"> | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id" | "paymentId">

  export type PaymentVirtualOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bankCode?: SortOrder
    customerName?: SortOrder
    dueDate?: SortOrder
    accountNumber?: SortOrder
    _count?: PaymentVirtualCountOrderByAggregateInput
    _avg?: PaymentVirtualAvgOrderByAggregateInput
    _max?: PaymentVirtualMaxOrderByAggregateInput
    _min?: PaymentVirtualMinOrderByAggregateInput
    _sum?: PaymentVirtualSumOrderByAggregateInput
  }

  export type PaymentVirtualScalarWhereWithAggregatesInput = {
    AND?: PaymentVirtualScalarWhereWithAggregatesInput | PaymentVirtualScalarWhereWithAggregatesInput[]
    OR?: PaymentVirtualScalarWhereWithAggregatesInput[]
    NOT?: PaymentVirtualScalarWhereWithAggregatesInput | PaymentVirtualScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentVirtual"> | number
    paymentId?: IntWithAggregatesFilter<"PaymentVirtual"> | number
    bankCode?: StringWithAggregatesFilter<"PaymentVirtual"> | string
    customerName?: StringWithAggregatesFilter<"PaymentVirtual"> | string
    dueDate?: DateTimeWithAggregatesFilter<"PaymentVirtual"> | Date | string
    accountNumber?: StringWithAggregatesFilter<"PaymentVirtual"> | string
  }

  export type PaymentRefundWhereInput = {
    AND?: PaymentRefundWhereInput | PaymentRefundWhereInput[]
    OR?: PaymentRefundWhereInput[]
    NOT?: PaymentRefundWhereInput | PaymentRefundWhereInput[]
    id?: IntFilter<"PaymentRefund"> | number
    paymentId?: IntFilter<"PaymentRefund"> | number
    bank?: StringFilter<"PaymentRefund"> | string
    accountNumber?: StringFilter<"PaymentRefund"> | string
    holderName?: StringFilter<"PaymentRefund"> | string
    amount?: IntFilter<"PaymentRefund"> | number
    reason?: StringFilter<"PaymentRefund"> | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type PaymentRefundOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bank?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentRefundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentId?: number
    AND?: PaymentRefundWhereInput | PaymentRefundWhereInput[]
    OR?: PaymentRefundWhereInput[]
    NOT?: PaymentRefundWhereInput | PaymentRefundWhereInput[]
    bank?: StringFilter<"PaymentRefund"> | string
    accountNumber?: StringFilter<"PaymentRefund"> | string
    holderName?: StringFilter<"PaymentRefund"> | string
    amount?: IntFilter<"PaymentRefund"> | number
    reason?: StringFilter<"PaymentRefund"> | string
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id" | "paymentId">

  export type PaymentRefundOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bank?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    _count?: PaymentRefundCountOrderByAggregateInput
    _avg?: PaymentRefundAvgOrderByAggregateInput
    _max?: PaymentRefundMaxOrderByAggregateInput
    _min?: PaymentRefundMinOrderByAggregateInput
    _sum?: PaymentRefundSumOrderByAggregateInput
  }

  export type PaymentRefundScalarWhereWithAggregatesInput = {
    AND?: PaymentRefundScalarWhereWithAggregatesInput | PaymentRefundScalarWhereWithAggregatesInput[]
    OR?: PaymentRefundScalarWhereWithAggregatesInput[]
    NOT?: PaymentRefundScalarWhereWithAggregatesInput | PaymentRefundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentRefund"> | number
    paymentId?: IntWithAggregatesFilter<"PaymentRefund"> | number
    bank?: StringWithAggregatesFilter<"PaymentRefund"> | string
    accountNumber?: StringWithAggregatesFilter<"PaymentRefund"> | string
    holderName?: StringWithAggregatesFilter<"PaymentRefund"> | string
    amount?: IntWithAggregatesFilter<"PaymentRefund"> | number
    reason?: StringWithAggregatesFilter<"PaymentRefund"> | string
  }

  export type EmWhereInput = {
    AND?: EmWhereInput | EmWhereInput[]
    OR?: EmWhereInput[]
    NOT?: EmWhereInput | EmWhereInput[]
    code?: StringFilter<"Em"> | string
    name?: StringNullableFilter<"Em"> | string | null
    jisa?: StringNullableFilter<"Em"> | string | null
    buCode?: StringNullableFilter<"Em"> | string | null
    endYmd?: StringNullableFilter<"Em"> | string | null
  }

  export type EmOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    jisa?: SortOrderInput | SortOrder
    buCode?: SortOrderInput | SortOrder
    endYmd?: SortOrderInput | SortOrder
  }

  export type EmWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: EmWhereInput | EmWhereInput[]
    OR?: EmWhereInput[]
    NOT?: EmWhereInput | EmWhereInput[]
    name?: StringNullableFilter<"Em"> | string | null
    jisa?: StringNullableFilter<"Em"> | string | null
    buCode?: StringNullableFilter<"Em"> | string | null
    endYmd?: StringNullableFilter<"Em"> | string | null
  }, "code">

  export type EmOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    jisa?: SortOrderInput | SortOrder
    buCode?: SortOrderInput | SortOrder
    endYmd?: SortOrderInput | SortOrder
    _count?: EmCountOrderByAggregateInput
    _max?: EmMaxOrderByAggregateInput
    _min?: EmMinOrderByAggregateInput
  }

  export type EmScalarWhereWithAggregatesInput = {
    AND?: EmScalarWhereWithAggregatesInput | EmScalarWhereWithAggregatesInput[]
    OR?: EmScalarWhereWithAggregatesInput[]
    NOT?: EmScalarWhereWithAggregatesInput | EmScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Em"> | string
    name?: StringNullableWithAggregatesFilter<"Em"> | string | null
    jisa?: StringNullableWithAggregatesFilter<"Em"> | string | null
    buCode?: StringNullableWithAggregatesFilter<"Em"> | string | null
    endYmd?: StringNullableWithAggregatesFilter<"Em"> | string | null
  }

  export type NewCpmMsgWhereInput = {
    AND?: NewCpmMsgWhereInput | NewCpmMsgWhereInput[]
    OR?: NewCpmMsgWhereInput[]
    NOT?: NewCpmMsgWhereInput | NewCpmMsgWhereInput[]
    auto?: IntFilter<"NewCpmMsg"> | number
    chk?: StringFilter<"NewCpmMsg"> | string
    recUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    recDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    msg?: StringNullableFilter<"NewCpmMsg"> | string | null
    bmsg?: BytesNullableFilter<"NewCpmMsg"> | Buffer | null
    senUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    senDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    show?: StringNullableFilter<"NewCpmMsg"> | string | null
    dc?: BoolNullableFilter<"NewCpmMsg"> | boolean | null
    dcUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    dcDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    etc1?: StringNullableFilter<"NewCpmMsg"> | string | null
  }

  export type NewCpmMsgOrderByWithRelationInput = {
    auto?: SortOrder
    chk?: SortOrder
    recUser?: SortOrderInput | SortOrder
    recDate?: SortOrderInput | SortOrder
    msg?: SortOrderInput | SortOrder
    bmsg?: SortOrderInput | SortOrder
    senUser?: SortOrderInput | SortOrder
    senDate?: SortOrderInput | SortOrder
    show?: SortOrderInput | SortOrder
    dc?: SortOrderInput | SortOrder
    dcUser?: SortOrderInput | SortOrder
    dcDate?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
  }

  export type NewCpmMsgWhereUniqueInput = Prisma.AtLeast<{
    auto?: number
    AND?: NewCpmMsgWhereInput | NewCpmMsgWhereInput[]
    OR?: NewCpmMsgWhereInput[]
    NOT?: NewCpmMsgWhereInput | NewCpmMsgWhereInput[]
    chk?: StringFilter<"NewCpmMsg"> | string
    recUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    recDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    msg?: StringNullableFilter<"NewCpmMsg"> | string | null
    bmsg?: BytesNullableFilter<"NewCpmMsg"> | Buffer | null
    senUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    senDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    show?: StringNullableFilter<"NewCpmMsg"> | string | null
    dc?: BoolNullableFilter<"NewCpmMsg"> | boolean | null
    dcUser?: StringNullableFilter<"NewCpmMsg"> | string | null
    dcDate?: StringNullableFilter<"NewCpmMsg"> | string | null
    etc1?: StringNullableFilter<"NewCpmMsg"> | string | null
  }, "auto">

  export type NewCpmMsgOrderByWithAggregationInput = {
    auto?: SortOrder
    chk?: SortOrder
    recUser?: SortOrderInput | SortOrder
    recDate?: SortOrderInput | SortOrder
    msg?: SortOrderInput | SortOrder
    bmsg?: SortOrderInput | SortOrder
    senUser?: SortOrderInput | SortOrder
    senDate?: SortOrderInput | SortOrder
    show?: SortOrderInput | SortOrder
    dc?: SortOrderInput | SortOrder
    dcUser?: SortOrderInput | SortOrder
    dcDate?: SortOrderInput | SortOrder
    etc1?: SortOrderInput | SortOrder
    _count?: NewCpmMsgCountOrderByAggregateInput
    _avg?: NewCpmMsgAvgOrderByAggregateInput
    _max?: NewCpmMsgMaxOrderByAggregateInput
    _min?: NewCpmMsgMinOrderByAggregateInput
    _sum?: NewCpmMsgSumOrderByAggregateInput
  }

  export type NewCpmMsgScalarWhereWithAggregatesInput = {
    AND?: NewCpmMsgScalarWhereWithAggregatesInput | NewCpmMsgScalarWhereWithAggregatesInput[]
    OR?: NewCpmMsgScalarWhereWithAggregatesInput[]
    NOT?: NewCpmMsgScalarWhereWithAggregatesInput | NewCpmMsgScalarWhereWithAggregatesInput[]
    auto?: IntWithAggregatesFilter<"NewCpmMsg"> | number
    chk?: StringWithAggregatesFilter<"NewCpmMsg"> | string
    recUser?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    recDate?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    msg?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    bmsg?: BytesNullableWithAggregatesFilter<"NewCpmMsg"> | Buffer | null
    senUser?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    senDate?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    show?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    dc?: BoolNullableWithAggregatesFilter<"NewCpmMsg"> | boolean | null
    dcUser?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    dcDate?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
    etc1?: StringNullableWithAggregatesFilter<"NewCpmMsg"> | string | null
  }

  export type PgMsgWhereInput = {
    AND?: PgMsgWhereInput | PgMsgWhereInput[]
    OR?: PgMsgWhereInput[]
    NOT?: PgMsgWhereInput | PgMsgWhereInput[]
    id?: IntFilter<"PgMsg"> | number
    msg?: BytesNullableFilter<"PgMsg"> | Buffer | null
  }

  export type PgMsgOrderByWithRelationInput = {
    id?: SortOrder
    msg?: SortOrderInput | SortOrder
  }

  export type PgMsgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PgMsgWhereInput | PgMsgWhereInput[]
    OR?: PgMsgWhereInput[]
    NOT?: PgMsgWhereInput | PgMsgWhereInput[]
    msg?: BytesNullableFilter<"PgMsg"> | Buffer | null
  }, "id">

  export type PgMsgOrderByWithAggregationInput = {
    id?: SortOrder
    msg?: SortOrderInput | SortOrder
    _count?: PgMsgCountOrderByAggregateInput
    _avg?: PgMsgAvgOrderByAggregateInput
    _max?: PgMsgMaxOrderByAggregateInput
    _min?: PgMsgMinOrderByAggregateInput
    _sum?: PgMsgSumOrderByAggregateInput
  }

  export type PgMsgScalarWhereWithAggregatesInput = {
    AND?: PgMsgScalarWhereWithAggregatesInput | PgMsgScalarWhereWithAggregatesInput[]
    OR?: PgMsgScalarWhereWithAggregatesInput[]
    NOT?: PgMsgScalarWhereWithAggregatesInput | PgMsgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PgMsg"> | number
    msg?: BytesNullableWithAggregatesFilter<"PgMsg"> | Buffer | null
  }

  export type AccountCreateInput = {
    userId: string
    password: string
    email: string
    ykiho?: string | null
    saupkiho?: string | null
    token?: string | null
    expiryDate?: Date | string | null
    admin?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderReqMsg?: OrderReqMsgCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: string
    password: string
    email: string
    ykiho?: string | null
    saupkiho?: string | null
    token?: string | null
    expiryDate?: Date | string | null
    admin?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderReqMsg?: OrderReqMsgUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderReqMsg?: OrderReqMsgUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderReqMsg?: OrderReqMsgUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: string
    password: string
    email: string
    ykiho?: string | null
    saupkiho?: string | null
    token?: string | null
    expiryDate?: Date | string | null
    admin?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderReqMsgCreateInput = {
    message: string
    updatedAt: Date | string
    account: AccountCreateNestedOneWithoutOrderReqMsgInput
  }

  export type OrderReqMsgUncheckedCreateInput = {
    id?: number
    accountId: number
    message: string
    updatedAt: Date | string
  }

  export type OrderReqMsgUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutOrderReqMsgNestedInput
  }

  export type OrderReqMsgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderReqMsgCreateManyInput = {
    id?: number
    accountId: number
    message: string
    updatedAt: Date | string
  }

  export type OrderReqMsgUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderReqMsgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductListCreateInput = {
    jisa: string
    smCode: string
    smYmd: string
    addUser: string
    createDt: Date | string
    bigo: string
    web: boolean
    bunryu: string
    step: number
    fit: boolean
    card: boolean
  }

  export type ProductListUncheckedCreateInput = {
    jisa: string
    smCode: string
    smYmd: string
    addUser: string
    createDt: Date | string
    bigo: string
    web: boolean
    bunryu: string
    step: number
    fit: boolean
    card: boolean
  }

  export type ProductListUpdateInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    addUser?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo?: StringFieldUpdateOperationsInput | string
    web?: BoolFieldUpdateOperationsInput | boolean
    bunryu?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductListUncheckedUpdateInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    addUser?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo?: StringFieldUpdateOperationsInput | string
    web?: BoolFieldUpdateOperationsInput | boolean
    bunryu?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductListCreateManyInput = {
    jisa: string
    smCode: string
    smYmd: string
    addUser: string
    createDt: Date | string
    bigo: string
    web: boolean
    bunryu: string
    step: number
    fit: boolean
    card: boolean
  }

  export type ProductListUpdateManyMutationInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    addUser?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo?: StringFieldUpdateOperationsInput | string
    web?: BoolFieldUpdateOperationsInput | boolean
    bunryu?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductListUncheckedUpdateManyInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    addUser?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo?: StringFieldUpdateOperationsInput | string
    web?: BoolFieldUpdateOperationsInput | boolean
    bunryu?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductListSubCreateInput = {
    auto: number
    jisa: string
    smCode: string
    smMyung: string
    smYmd: string
    danga: number
    danwi: string
    etc1: string
    etc2: string
    etc3: string
    etc4: string
    etc5: string
  }

  export type ProductListSubUncheckedCreateInput = {
    auto: number
    jisa: string
    smCode: string
    smMyung: string
    smYmd: string
    danga: number
    danwi: string
    etc1: string
    etc2: string
    etc3: string
    etc4: string
    etc5: string
  }

  export type ProductListSubUpdateInput = {
    auto?: IntFieldUpdateOperationsInput | number
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smMyung?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    danga?: FloatFieldUpdateOperationsInput | number
    danwi?: StringFieldUpdateOperationsInput | string
    etc1?: StringFieldUpdateOperationsInput | string
    etc2?: StringFieldUpdateOperationsInput | string
    etc3?: StringFieldUpdateOperationsInput | string
    etc4?: StringFieldUpdateOperationsInput | string
    etc5?: StringFieldUpdateOperationsInput | string
  }

  export type ProductListSubUncheckedUpdateInput = {
    auto?: IntFieldUpdateOperationsInput | number
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smMyung?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    danga?: FloatFieldUpdateOperationsInput | number
    danwi?: StringFieldUpdateOperationsInput | string
    etc1?: StringFieldUpdateOperationsInput | string
    etc2?: StringFieldUpdateOperationsInput | string
    etc3?: StringFieldUpdateOperationsInput | string
    etc4?: StringFieldUpdateOperationsInput | string
    etc5?: StringFieldUpdateOperationsInput | string
  }

  export type ProductListSubCreateManyInput = {
    auto: number
    jisa: string
    smCode: string
    smMyung: string
    smYmd: string
    danga: number
    danwi: string
    etc1: string
    etc2: string
    etc3: string
    etc4: string
    etc5: string
  }

  export type ProductListSubUpdateManyMutationInput = {
    auto?: IntFieldUpdateOperationsInput | number
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smMyung?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    danga?: FloatFieldUpdateOperationsInput | number
    danwi?: StringFieldUpdateOperationsInput | string
    etc1?: StringFieldUpdateOperationsInput | string
    etc2?: StringFieldUpdateOperationsInput | string
    etc3?: StringFieldUpdateOperationsInput | string
    etc4?: StringFieldUpdateOperationsInput | string
    etc5?: StringFieldUpdateOperationsInput | string
  }

  export type ProductListSubUncheckedUpdateManyInput = {
    auto?: IntFieldUpdateOperationsInput | number
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    smMyung?: StringFieldUpdateOperationsInput | string
    smYmd?: StringFieldUpdateOperationsInput | string
    danga?: FloatFieldUpdateOperationsInput | number
    danwi?: StringFieldUpdateOperationsInput | string
    etc1?: StringFieldUpdateOperationsInput | string
    etc2?: StringFieldUpdateOperationsInput | string
    etc3?: StringFieldUpdateOperationsInput | string
    etc4?: StringFieldUpdateOperationsInput | string
    etc5?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt?: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductUncheckedCreateInput = {
    auto?: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt?: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductUpdateInput = {
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateInput = {
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateManyInput = {
    auto?: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt?: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductUpdateManyMutationInput = {
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductLogCreateInput = {
    logDatetime: Date | string
    logGubun: string
    logUser: string
    logComputer: string
    auto: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductLogUncheckedCreateInput = {
    logAuto?: number
    logDatetime: Date | string
    logGubun: string
    logUser: string
    logComputer: string
    auto: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductLogUpdateInput = {
    logDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    logGubun?: StringFieldUpdateOperationsInput | string
    logUser?: StringFieldUpdateOperationsInput | string
    logComputer?: StringFieldUpdateOperationsInput | string
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductLogUncheckedUpdateInput = {
    logAuto?: IntFieldUpdateOperationsInput | number
    logDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    logGubun?: StringFieldUpdateOperationsInput | string
    logUser?: StringFieldUpdateOperationsInput | string
    logComputer?: StringFieldUpdateOperationsInput | string
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductLogCreateManyInput = {
    logAuto?: number
    logDatetime: Date | string
    logGubun: string
    logUser: string
    logComputer: string
    auto: number
    clCode: string
    jisa: string
    csCode: string
    ctTel: string
    count: number
    receive: string
    receiveYmd: string
    sell: string
    sellYmd: string
    orderCheck: string
    seller: string
    check: string
    check2: string
    rgb: string
    bigo: string
    createDt: Date | string
    bigo2?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    etc4?: string | null
    etc5?: string | null
    web: boolean
    webPaymentItemId?: number | null
    webBNPL: boolean
  }

  export type ProductLogUpdateManyMutationInput = {
    logDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    logGubun?: StringFieldUpdateOperationsInput | string
    logUser?: StringFieldUpdateOperationsInput | string
    logComputer?: StringFieldUpdateOperationsInput | string
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductLogUncheckedUpdateManyInput = {
    logAuto?: IntFieldUpdateOperationsInput | number
    logDatetime?: DateTimeFieldUpdateOperationsInput | Date | string
    logGubun?: StringFieldUpdateOperationsInput | string
    logUser?: StringFieldUpdateOperationsInput | string
    logComputer?: StringFieldUpdateOperationsInput | string
    auto?: IntFieldUpdateOperationsInput | number
    clCode?: StringFieldUpdateOperationsInput | string
    jisa?: StringFieldUpdateOperationsInput | string
    csCode?: StringFieldUpdateOperationsInput | string
    ctTel?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    receive?: StringFieldUpdateOperationsInput | string
    receiveYmd?: StringFieldUpdateOperationsInput | string
    sell?: StringFieldUpdateOperationsInput | string
    sellYmd?: StringFieldUpdateOperationsInput | string
    orderCheck?: StringFieldUpdateOperationsInput | string
    seller?: StringFieldUpdateOperationsInput | string
    check?: StringFieldUpdateOperationsInput | string
    check2?: StringFieldUpdateOperationsInput | string
    rgb?: StringFieldUpdateOperationsInput | string
    bigo?: StringFieldUpdateOperationsInput | string
    createDt?: DateTimeFieldUpdateOperationsInput | Date | string
    bigo2?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    web?: BoolFieldUpdateOperationsInput | boolean
    webPaymentItemId?: NullableIntFieldUpdateOperationsInput | number | null
    webBNPL?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductListWebBunryuCreateInput = {
    code: string
    name: string
    fit?: boolean | null
  }

  export type ProductListWebBunryuUncheckedCreateInput = {
    code: string
    name: string
    fit?: boolean | null
  }

  export type ProductListWebBunryuUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductListWebBunryuUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductListWebBunryuCreateManyInput = {
    code: string
    name: string
    fit?: boolean | null
  }

  export type ProductListWebBunryuUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductListWebBunryuUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductListImageCreateInput = {
    jisa: string
    smCode: string
    image?: Buffer | null
  }

  export type ProductListImageUncheckedCreateInput = {
    jisa: string
    smCode: string
    image?: Buffer | null
  }

  export type ProductListImageUpdateInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ProductListImageUncheckedUpdateInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ProductListImageCreateManyInput = {
    jisa: string
    smCode: string
    image?: Buffer | null
  }

  export type ProductListImageUpdateManyMutationInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ProductListImageUncheckedUpdateManyInput = {
    jisa?: StringFieldUpdateOperationsInput | string
    smCode?: StringFieldUpdateOperationsInput | string
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type CsCreateInput = {
    gubun: string
    code: string
    myung?: string | null
    daepyo?: string | null
    tel?: string | null
    fax?: string | null
    post?: string | null
    dup?: number | null
    juso?: string | null
    bunji?: string | null
    jisa?: string | null
    emCode?: string | null
    damdang?: string | null
    damdanghp?: string | null
    jongbl?: string | null
    upte?: string | null
    saupnum?: string | null
    sauppost?: string | null
    saupdup?: number | null
    saupjuso?: string | null
    saupbunji?: string | null
    email?: string | null
    ediid?: string | null
    edipassword?: string | null
    local?: string | null
    nonchart?: string | null
    fymd?: string | null
    lymd?: string | null
    bigo?: string | null
    user?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    Chonguser?: string | null
    pro?: string | null
    yanghan?: string | null
    chunggu?: string | null
    cherbang?: string | null
    youngsu?: string | null
    pacs?: string | null
    barcode?: string | null
    yakguk?: string | null
    update?: string | null
    askumak?: number | null
    etc4?: string | null
    etc5?: string | null
    etc6?: string | null
    etc7?: string | null
    cms?: string | null
    daegidisp?: string | null
    gumjinlink?: string | null
    capture?: string | null
    sutak?: string | null
    sutaklink?: string | null
    gumsalinkyn?: string | null
    gumsalink?: string | null
    scaner?: string | null
    card?: string | null
    cardlink?: string | null
    eleccherban?: string | null
    yakgukprint?: string | null
    gumsabarcod?: string | null
    bdbarcode?: string | null
    updatepath?: string | null
    server?: string | null
    sanjae?: string | null
    paljji?: string | null
    jungji?: string | null
    servermodel?: string | null
    servername?: string | null
    serverSN?: string | null
    serverMT?: string | null
    serverHDD?: string | null
    serverMemory?: string | null
    serverLocation?: string | null
    serversetup?: string | null
    window?: string | null
    windowmemo?: string | null
    virusname?: string | null
    virussetup?: string | null
    virusend?: string | null
    upsname?: string | null
    upssetup?: string | null
    upsend?: string | null
    rollprint: string
    inuser?: string | null
    upuser?: string | null
    indate?: string | null
    update2?: string | null
    etc8?: string | null
    etc9?: string | null
    etc10?: string | null
    etc11?: string | null
    etc12?: string | null
    etc13?: string | null
    etc14?: string | null
    etc15?: string | null
    bogubun?: string | null
    aschk?: string | null
    etc16?: string | null
    etc17?: string | null
    etc18?: string | null
    etc19?: string | null
    etc20?: string | null
    etc21?: string | null
    etc22?: string | null
    etc23?: string | null
    etc24?: string | null
    etc25?: string | null
    etc26?: string | null
    etc27?: string | null
    etc28?: string | null
    etc29?: string | null
    etc30?: string | null
    etc31?: string | null
    etc32?: string | null
    etc33?: string | null
    etc34?: string | null
    etc35?: string | null
    server_cust?: string | null
    server_orde?: string | null
    server_mici?: string | null
    server_admi?: string | null
    server_svrp?: string | null
    server_svrb?: string | null
    oauthpwd: string
    medi_use?: string | null
    medi_pc?: string | null
    medi_autoju?: string | null
    medi_grname?: string | null
  }

  export type CsUncheckedCreateInput = {
    gubun: string
    code: string
    myung?: string | null
    daepyo?: string | null
    tel?: string | null
    fax?: string | null
    post?: string | null
    dup?: number | null
    juso?: string | null
    bunji?: string | null
    jisa?: string | null
    emCode?: string | null
    damdang?: string | null
    damdanghp?: string | null
    jongbl?: string | null
    upte?: string | null
    saupnum?: string | null
    sauppost?: string | null
    saupdup?: number | null
    saupjuso?: string | null
    saupbunji?: string | null
    email?: string | null
    ediid?: string | null
    edipassword?: string | null
    local?: string | null
    nonchart?: string | null
    fymd?: string | null
    lymd?: string | null
    bigo?: string | null
    user?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    Chonguser?: string | null
    pro?: string | null
    yanghan?: string | null
    chunggu?: string | null
    cherbang?: string | null
    youngsu?: string | null
    pacs?: string | null
    barcode?: string | null
    yakguk?: string | null
    update?: string | null
    askumak?: number | null
    etc4?: string | null
    etc5?: string | null
    etc6?: string | null
    etc7?: string | null
    cms?: string | null
    daegidisp?: string | null
    gumjinlink?: string | null
    capture?: string | null
    sutak?: string | null
    sutaklink?: string | null
    gumsalinkyn?: string | null
    gumsalink?: string | null
    scaner?: string | null
    card?: string | null
    cardlink?: string | null
    eleccherban?: string | null
    yakgukprint?: string | null
    gumsabarcod?: string | null
    bdbarcode?: string | null
    updatepath?: string | null
    server?: string | null
    sanjae?: string | null
    paljji?: string | null
    jungji?: string | null
    servermodel?: string | null
    servername?: string | null
    serverSN?: string | null
    serverMT?: string | null
    serverHDD?: string | null
    serverMemory?: string | null
    serverLocation?: string | null
    serversetup?: string | null
    window?: string | null
    windowmemo?: string | null
    virusname?: string | null
    virussetup?: string | null
    virusend?: string | null
    upsname?: string | null
    upssetup?: string | null
    upsend?: string | null
    rollprint: string
    inuser?: string | null
    upuser?: string | null
    indate?: string | null
    update2?: string | null
    etc8?: string | null
    etc9?: string | null
    etc10?: string | null
    etc11?: string | null
    etc12?: string | null
    etc13?: string | null
    etc14?: string | null
    etc15?: string | null
    bogubun?: string | null
    aschk?: string | null
    etc16?: string | null
    etc17?: string | null
    etc18?: string | null
    etc19?: string | null
    etc20?: string | null
    etc21?: string | null
    etc22?: string | null
    etc23?: string | null
    etc24?: string | null
    etc25?: string | null
    etc26?: string | null
    etc27?: string | null
    etc28?: string | null
    etc29?: string | null
    etc30?: string | null
    etc31?: string | null
    etc32?: string | null
    etc33?: string | null
    etc34?: string | null
    etc35?: string | null
    server_cust?: string | null
    server_orde?: string | null
    server_mici?: string | null
    server_admi?: string | null
    server_svrp?: string | null
    server_svrb?: string | null
    oauthpwd: string
    medi_use?: string | null
    medi_pc?: string | null
    medi_autoju?: string | null
    medi_grname?: string | null
  }

  export type CsUpdateInput = {
    gubun?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    myung?: NullableStringFieldUpdateOperationsInput | string | null
    daepyo?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    dup?: NullableIntFieldUpdateOperationsInput | number | null
    juso?: NullableStringFieldUpdateOperationsInput | string | null
    bunji?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    emCode?: NullableStringFieldUpdateOperationsInput | string | null
    damdang?: NullableStringFieldUpdateOperationsInput | string | null
    damdanghp?: NullableStringFieldUpdateOperationsInput | string | null
    jongbl?: NullableStringFieldUpdateOperationsInput | string | null
    upte?: NullableStringFieldUpdateOperationsInput | string | null
    saupnum?: NullableStringFieldUpdateOperationsInput | string | null
    sauppost?: NullableStringFieldUpdateOperationsInput | string | null
    saupdup?: NullableIntFieldUpdateOperationsInput | number | null
    saupjuso?: NullableStringFieldUpdateOperationsInput | string | null
    saupbunji?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ediid?: NullableStringFieldUpdateOperationsInput | string | null
    edipassword?: NullableStringFieldUpdateOperationsInput | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nonchart?: NullableStringFieldUpdateOperationsInput | string | null
    fymd?: NullableStringFieldUpdateOperationsInput | string | null
    lymd?: NullableStringFieldUpdateOperationsInput | string | null
    bigo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    Chonguser?: NullableStringFieldUpdateOperationsInput | string | null
    pro?: NullableStringFieldUpdateOperationsInput | string | null
    yanghan?: NullableStringFieldUpdateOperationsInput | string | null
    chunggu?: NullableStringFieldUpdateOperationsInput | string | null
    cherbang?: NullableStringFieldUpdateOperationsInput | string | null
    youngsu?: NullableStringFieldUpdateOperationsInput | string | null
    pacs?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    yakguk?: NullableStringFieldUpdateOperationsInput | string | null
    update?: NullableStringFieldUpdateOperationsInput | string | null
    askumak?: NullableIntFieldUpdateOperationsInput | number | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    etc6?: NullableStringFieldUpdateOperationsInput | string | null
    etc7?: NullableStringFieldUpdateOperationsInput | string | null
    cms?: NullableStringFieldUpdateOperationsInput | string | null
    daegidisp?: NullableStringFieldUpdateOperationsInput | string | null
    gumjinlink?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: NullableStringFieldUpdateOperationsInput | string | null
    sutak?: NullableStringFieldUpdateOperationsInput | string | null
    sutaklink?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalinkyn?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalink?: NullableStringFieldUpdateOperationsInput | string | null
    scaner?: NullableStringFieldUpdateOperationsInput | string | null
    card?: NullableStringFieldUpdateOperationsInput | string | null
    cardlink?: NullableStringFieldUpdateOperationsInput | string | null
    eleccherban?: NullableStringFieldUpdateOperationsInput | string | null
    yakgukprint?: NullableStringFieldUpdateOperationsInput | string | null
    gumsabarcod?: NullableStringFieldUpdateOperationsInput | string | null
    bdbarcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatepath?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    sanjae?: NullableStringFieldUpdateOperationsInput | string | null
    paljji?: NullableStringFieldUpdateOperationsInput | string | null
    jungji?: NullableStringFieldUpdateOperationsInput | string | null
    servermodel?: NullableStringFieldUpdateOperationsInput | string | null
    servername?: NullableStringFieldUpdateOperationsInput | string | null
    serverSN?: NullableStringFieldUpdateOperationsInput | string | null
    serverMT?: NullableStringFieldUpdateOperationsInput | string | null
    serverHDD?: NullableStringFieldUpdateOperationsInput | string | null
    serverMemory?: NullableStringFieldUpdateOperationsInput | string | null
    serverLocation?: NullableStringFieldUpdateOperationsInput | string | null
    serversetup?: NullableStringFieldUpdateOperationsInput | string | null
    window?: NullableStringFieldUpdateOperationsInput | string | null
    windowmemo?: NullableStringFieldUpdateOperationsInput | string | null
    virusname?: NullableStringFieldUpdateOperationsInput | string | null
    virussetup?: NullableStringFieldUpdateOperationsInput | string | null
    virusend?: NullableStringFieldUpdateOperationsInput | string | null
    upsname?: NullableStringFieldUpdateOperationsInput | string | null
    upssetup?: NullableStringFieldUpdateOperationsInput | string | null
    upsend?: NullableStringFieldUpdateOperationsInput | string | null
    rollprint?: StringFieldUpdateOperationsInput | string
    inuser?: NullableStringFieldUpdateOperationsInput | string | null
    upuser?: NullableStringFieldUpdateOperationsInput | string | null
    indate?: NullableStringFieldUpdateOperationsInput | string | null
    update2?: NullableStringFieldUpdateOperationsInput | string | null
    etc8?: NullableStringFieldUpdateOperationsInput | string | null
    etc9?: NullableStringFieldUpdateOperationsInput | string | null
    etc10?: NullableStringFieldUpdateOperationsInput | string | null
    etc11?: NullableStringFieldUpdateOperationsInput | string | null
    etc12?: NullableStringFieldUpdateOperationsInput | string | null
    etc13?: NullableStringFieldUpdateOperationsInput | string | null
    etc14?: NullableStringFieldUpdateOperationsInput | string | null
    etc15?: NullableStringFieldUpdateOperationsInput | string | null
    bogubun?: NullableStringFieldUpdateOperationsInput | string | null
    aschk?: NullableStringFieldUpdateOperationsInput | string | null
    etc16?: NullableStringFieldUpdateOperationsInput | string | null
    etc17?: NullableStringFieldUpdateOperationsInput | string | null
    etc18?: NullableStringFieldUpdateOperationsInput | string | null
    etc19?: NullableStringFieldUpdateOperationsInput | string | null
    etc20?: NullableStringFieldUpdateOperationsInput | string | null
    etc21?: NullableStringFieldUpdateOperationsInput | string | null
    etc22?: NullableStringFieldUpdateOperationsInput | string | null
    etc23?: NullableStringFieldUpdateOperationsInput | string | null
    etc24?: NullableStringFieldUpdateOperationsInput | string | null
    etc25?: NullableStringFieldUpdateOperationsInput | string | null
    etc26?: NullableStringFieldUpdateOperationsInput | string | null
    etc27?: NullableStringFieldUpdateOperationsInput | string | null
    etc28?: NullableStringFieldUpdateOperationsInput | string | null
    etc29?: NullableStringFieldUpdateOperationsInput | string | null
    etc30?: NullableStringFieldUpdateOperationsInput | string | null
    etc31?: NullableStringFieldUpdateOperationsInput | string | null
    etc32?: NullableStringFieldUpdateOperationsInput | string | null
    etc33?: NullableStringFieldUpdateOperationsInput | string | null
    etc34?: NullableStringFieldUpdateOperationsInput | string | null
    etc35?: NullableStringFieldUpdateOperationsInput | string | null
    server_cust?: NullableStringFieldUpdateOperationsInput | string | null
    server_orde?: NullableStringFieldUpdateOperationsInput | string | null
    server_mici?: NullableStringFieldUpdateOperationsInput | string | null
    server_admi?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrp?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrb?: NullableStringFieldUpdateOperationsInput | string | null
    oauthpwd?: StringFieldUpdateOperationsInput | string
    medi_use?: NullableStringFieldUpdateOperationsInput | string | null
    medi_pc?: NullableStringFieldUpdateOperationsInput | string | null
    medi_autoju?: NullableStringFieldUpdateOperationsInput | string | null
    medi_grname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CsUncheckedUpdateInput = {
    gubun?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    myung?: NullableStringFieldUpdateOperationsInput | string | null
    daepyo?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    dup?: NullableIntFieldUpdateOperationsInput | number | null
    juso?: NullableStringFieldUpdateOperationsInput | string | null
    bunji?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    emCode?: NullableStringFieldUpdateOperationsInput | string | null
    damdang?: NullableStringFieldUpdateOperationsInput | string | null
    damdanghp?: NullableStringFieldUpdateOperationsInput | string | null
    jongbl?: NullableStringFieldUpdateOperationsInput | string | null
    upte?: NullableStringFieldUpdateOperationsInput | string | null
    saupnum?: NullableStringFieldUpdateOperationsInput | string | null
    sauppost?: NullableStringFieldUpdateOperationsInput | string | null
    saupdup?: NullableIntFieldUpdateOperationsInput | number | null
    saupjuso?: NullableStringFieldUpdateOperationsInput | string | null
    saupbunji?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ediid?: NullableStringFieldUpdateOperationsInput | string | null
    edipassword?: NullableStringFieldUpdateOperationsInput | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nonchart?: NullableStringFieldUpdateOperationsInput | string | null
    fymd?: NullableStringFieldUpdateOperationsInput | string | null
    lymd?: NullableStringFieldUpdateOperationsInput | string | null
    bigo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    Chonguser?: NullableStringFieldUpdateOperationsInput | string | null
    pro?: NullableStringFieldUpdateOperationsInput | string | null
    yanghan?: NullableStringFieldUpdateOperationsInput | string | null
    chunggu?: NullableStringFieldUpdateOperationsInput | string | null
    cherbang?: NullableStringFieldUpdateOperationsInput | string | null
    youngsu?: NullableStringFieldUpdateOperationsInput | string | null
    pacs?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    yakguk?: NullableStringFieldUpdateOperationsInput | string | null
    update?: NullableStringFieldUpdateOperationsInput | string | null
    askumak?: NullableIntFieldUpdateOperationsInput | number | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    etc6?: NullableStringFieldUpdateOperationsInput | string | null
    etc7?: NullableStringFieldUpdateOperationsInput | string | null
    cms?: NullableStringFieldUpdateOperationsInput | string | null
    daegidisp?: NullableStringFieldUpdateOperationsInput | string | null
    gumjinlink?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: NullableStringFieldUpdateOperationsInput | string | null
    sutak?: NullableStringFieldUpdateOperationsInput | string | null
    sutaklink?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalinkyn?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalink?: NullableStringFieldUpdateOperationsInput | string | null
    scaner?: NullableStringFieldUpdateOperationsInput | string | null
    card?: NullableStringFieldUpdateOperationsInput | string | null
    cardlink?: NullableStringFieldUpdateOperationsInput | string | null
    eleccherban?: NullableStringFieldUpdateOperationsInput | string | null
    yakgukprint?: NullableStringFieldUpdateOperationsInput | string | null
    gumsabarcod?: NullableStringFieldUpdateOperationsInput | string | null
    bdbarcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatepath?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    sanjae?: NullableStringFieldUpdateOperationsInput | string | null
    paljji?: NullableStringFieldUpdateOperationsInput | string | null
    jungji?: NullableStringFieldUpdateOperationsInput | string | null
    servermodel?: NullableStringFieldUpdateOperationsInput | string | null
    servername?: NullableStringFieldUpdateOperationsInput | string | null
    serverSN?: NullableStringFieldUpdateOperationsInput | string | null
    serverMT?: NullableStringFieldUpdateOperationsInput | string | null
    serverHDD?: NullableStringFieldUpdateOperationsInput | string | null
    serverMemory?: NullableStringFieldUpdateOperationsInput | string | null
    serverLocation?: NullableStringFieldUpdateOperationsInput | string | null
    serversetup?: NullableStringFieldUpdateOperationsInput | string | null
    window?: NullableStringFieldUpdateOperationsInput | string | null
    windowmemo?: NullableStringFieldUpdateOperationsInput | string | null
    virusname?: NullableStringFieldUpdateOperationsInput | string | null
    virussetup?: NullableStringFieldUpdateOperationsInput | string | null
    virusend?: NullableStringFieldUpdateOperationsInput | string | null
    upsname?: NullableStringFieldUpdateOperationsInput | string | null
    upssetup?: NullableStringFieldUpdateOperationsInput | string | null
    upsend?: NullableStringFieldUpdateOperationsInput | string | null
    rollprint?: StringFieldUpdateOperationsInput | string
    inuser?: NullableStringFieldUpdateOperationsInput | string | null
    upuser?: NullableStringFieldUpdateOperationsInput | string | null
    indate?: NullableStringFieldUpdateOperationsInput | string | null
    update2?: NullableStringFieldUpdateOperationsInput | string | null
    etc8?: NullableStringFieldUpdateOperationsInput | string | null
    etc9?: NullableStringFieldUpdateOperationsInput | string | null
    etc10?: NullableStringFieldUpdateOperationsInput | string | null
    etc11?: NullableStringFieldUpdateOperationsInput | string | null
    etc12?: NullableStringFieldUpdateOperationsInput | string | null
    etc13?: NullableStringFieldUpdateOperationsInput | string | null
    etc14?: NullableStringFieldUpdateOperationsInput | string | null
    etc15?: NullableStringFieldUpdateOperationsInput | string | null
    bogubun?: NullableStringFieldUpdateOperationsInput | string | null
    aschk?: NullableStringFieldUpdateOperationsInput | string | null
    etc16?: NullableStringFieldUpdateOperationsInput | string | null
    etc17?: NullableStringFieldUpdateOperationsInput | string | null
    etc18?: NullableStringFieldUpdateOperationsInput | string | null
    etc19?: NullableStringFieldUpdateOperationsInput | string | null
    etc20?: NullableStringFieldUpdateOperationsInput | string | null
    etc21?: NullableStringFieldUpdateOperationsInput | string | null
    etc22?: NullableStringFieldUpdateOperationsInput | string | null
    etc23?: NullableStringFieldUpdateOperationsInput | string | null
    etc24?: NullableStringFieldUpdateOperationsInput | string | null
    etc25?: NullableStringFieldUpdateOperationsInput | string | null
    etc26?: NullableStringFieldUpdateOperationsInput | string | null
    etc27?: NullableStringFieldUpdateOperationsInput | string | null
    etc28?: NullableStringFieldUpdateOperationsInput | string | null
    etc29?: NullableStringFieldUpdateOperationsInput | string | null
    etc30?: NullableStringFieldUpdateOperationsInput | string | null
    etc31?: NullableStringFieldUpdateOperationsInput | string | null
    etc32?: NullableStringFieldUpdateOperationsInput | string | null
    etc33?: NullableStringFieldUpdateOperationsInput | string | null
    etc34?: NullableStringFieldUpdateOperationsInput | string | null
    etc35?: NullableStringFieldUpdateOperationsInput | string | null
    server_cust?: NullableStringFieldUpdateOperationsInput | string | null
    server_orde?: NullableStringFieldUpdateOperationsInput | string | null
    server_mici?: NullableStringFieldUpdateOperationsInput | string | null
    server_admi?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrp?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrb?: NullableStringFieldUpdateOperationsInput | string | null
    oauthpwd?: StringFieldUpdateOperationsInput | string
    medi_use?: NullableStringFieldUpdateOperationsInput | string | null
    medi_pc?: NullableStringFieldUpdateOperationsInput | string | null
    medi_autoju?: NullableStringFieldUpdateOperationsInput | string | null
    medi_grname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CsCreateManyInput = {
    gubun: string
    code: string
    myung?: string | null
    daepyo?: string | null
    tel?: string | null
    fax?: string | null
    post?: string | null
    dup?: number | null
    juso?: string | null
    bunji?: string | null
    jisa?: string | null
    emCode?: string | null
    damdang?: string | null
    damdanghp?: string | null
    jongbl?: string | null
    upte?: string | null
    saupnum?: string | null
    sauppost?: string | null
    saupdup?: number | null
    saupjuso?: string | null
    saupbunji?: string | null
    email?: string | null
    ediid?: string | null
    edipassword?: string | null
    local?: string | null
    nonchart?: string | null
    fymd?: string | null
    lymd?: string | null
    bigo?: string | null
    user?: string | null
    etc1?: string | null
    etc2?: string | null
    etc3?: string | null
    Chonguser?: string | null
    pro?: string | null
    yanghan?: string | null
    chunggu?: string | null
    cherbang?: string | null
    youngsu?: string | null
    pacs?: string | null
    barcode?: string | null
    yakguk?: string | null
    update?: string | null
    askumak?: number | null
    etc4?: string | null
    etc5?: string | null
    etc6?: string | null
    etc7?: string | null
    cms?: string | null
    daegidisp?: string | null
    gumjinlink?: string | null
    capture?: string | null
    sutak?: string | null
    sutaklink?: string | null
    gumsalinkyn?: string | null
    gumsalink?: string | null
    scaner?: string | null
    card?: string | null
    cardlink?: string | null
    eleccherban?: string | null
    yakgukprint?: string | null
    gumsabarcod?: string | null
    bdbarcode?: string | null
    updatepath?: string | null
    server?: string | null
    sanjae?: string | null
    paljji?: string | null
    jungji?: string | null
    servermodel?: string | null
    servername?: string | null
    serverSN?: string | null
    serverMT?: string | null
    serverHDD?: string | null
    serverMemory?: string | null
    serverLocation?: string | null
    serversetup?: string | null
    window?: string | null
    windowmemo?: string | null
    virusname?: string | null
    virussetup?: string | null
    virusend?: string | null
    upsname?: string | null
    upssetup?: string | null
    upsend?: string | null
    rollprint: string
    inuser?: string | null
    upuser?: string | null
    indate?: string | null
    update2?: string | null
    etc8?: string | null
    etc9?: string | null
    etc10?: string | null
    etc11?: string | null
    etc12?: string | null
    etc13?: string | null
    etc14?: string | null
    etc15?: string | null
    bogubun?: string | null
    aschk?: string | null
    etc16?: string | null
    etc17?: string | null
    etc18?: string | null
    etc19?: string | null
    etc20?: string | null
    etc21?: string | null
    etc22?: string | null
    etc23?: string | null
    etc24?: string | null
    etc25?: string | null
    etc26?: string | null
    etc27?: string | null
    etc28?: string | null
    etc29?: string | null
    etc30?: string | null
    etc31?: string | null
    etc32?: string | null
    etc33?: string | null
    etc34?: string | null
    etc35?: string | null
    server_cust?: string | null
    server_orde?: string | null
    server_mici?: string | null
    server_admi?: string | null
    server_svrp?: string | null
    server_svrb?: string | null
    oauthpwd: string
    medi_use?: string | null
    medi_pc?: string | null
    medi_autoju?: string | null
    medi_grname?: string | null
  }

  export type CsUpdateManyMutationInput = {
    gubun?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    myung?: NullableStringFieldUpdateOperationsInput | string | null
    daepyo?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    dup?: NullableIntFieldUpdateOperationsInput | number | null
    juso?: NullableStringFieldUpdateOperationsInput | string | null
    bunji?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    emCode?: NullableStringFieldUpdateOperationsInput | string | null
    damdang?: NullableStringFieldUpdateOperationsInput | string | null
    damdanghp?: NullableStringFieldUpdateOperationsInput | string | null
    jongbl?: NullableStringFieldUpdateOperationsInput | string | null
    upte?: NullableStringFieldUpdateOperationsInput | string | null
    saupnum?: NullableStringFieldUpdateOperationsInput | string | null
    sauppost?: NullableStringFieldUpdateOperationsInput | string | null
    saupdup?: NullableIntFieldUpdateOperationsInput | number | null
    saupjuso?: NullableStringFieldUpdateOperationsInput | string | null
    saupbunji?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ediid?: NullableStringFieldUpdateOperationsInput | string | null
    edipassword?: NullableStringFieldUpdateOperationsInput | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nonchart?: NullableStringFieldUpdateOperationsInput | string | null
    fymd?: NullableStringFieldUpdateOperationsInput | string | null
    lymd?: NullableStringFieldUpdateOperationsInput | string | null
    bigo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    Chonguser?: NullableStringFieldUpdateOperationsInput | string | null
    pro?: NullableStringFieldUpdateOperationsInput | string | null
    yanghan?: NullableStringFieldUpdateOperationsInput | string | null
    chunggu?: NullableStringFieldUpdateOperationsInput | string | null
    cherbang?: NullableStringFieldUpdateOperationsInput | string | null
    youngsu?: NullableStringFieldUpdateOperationsInput | string | null
    pacs?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    yakguk?: NullableStringFieldUpdateOperationsInput | string | null
    update?: NullableStringFieldUpdateOperationsInput | string | null
    askumak?: NullableIntFieldUpdateOperationsInput | number | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    etc6?: NullableStringFieldUpdateOperationsInput | string | null
    etc7?: NullableStringFieldUpdateOperationsInput | string | null
    cms?: NullableStringFieldUpdateOperationsInput | string | null
    daegidisp?: NullableStringFieldUpdateOperationsInput | string | null
    gumjinlink?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: NullableStringFieldUpdateOperationsInput | string | null
    sutak?: NullableStringFieldUpdateOperationsInput | string | null
    sutaklink?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalinkyn?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalink?: NullableStringFieldUpdateOperationsInput | string | null
    scaner?: NullableStringFieldUpdateOperationsInput | string | null
    card?: NullableStringFieldUpdateOperationsInput | string | null
    cardlink?: NullableStringFieldUpdateOperationsInput | string | null
    eleccherban?: NullableStringFieldUpdateOperationsInput | string | null
    yakgukprint?: NullableStringFieldUpdateOperationsInput | string | null
    gumsabarcod?: NullableStringFieldUpdateOperationsInput | string | null
    bdbarcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatepath?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    sanjae?: NullableStringFieldUpdateOperationsInput | string | null
    paljji?: NullableStringFieldUpdateOperationsInput | string | null
    jungji?: NullableStringFieldUpdateOperationsInput | string | null
    servermodel?: NullableStringFieldUpdateOperationsInput | string | null
    servername?: NullableStringFieldUpdateOperationsInput | string | null
    serverSN?: NullableStringFieldUpdateOperationsInput | string | null
    serverMT?: NullableStringFieldUpdateOperationsInput | string | null
    serverHDD?: NullableStringFieldUpdateOperationsInput | string | null
    serverMemory?: NullableStringFieldUpdateOperationsInput | string | null
    serverLocation?: NullableStringFieldUpdateOperationsInput | string | null
    serversetup?: NullableStringFieldUpdateOperationsInput | string | null
    window?: NullableStringFieldUpdateOperationsInput | string | null
    windowmemo?: NullableStringFieldUpdateOperationsInput | string | null
    virusname?: NullableStringFieldUpdateOperationsInput | string | null
    virussetup?: NullableStringFieldUpdateOperationsInput | string | null
    virusend?: NullableStringFieldUpdateOperationsInput | string | null
    upsname?: NullableStringFieldUpdateOperationsInput | string | null
    upssetup?: NullableStringFieldUpdateOperationsInput | string | null
    upsend?: NullableStringFieldUpdateOperationsInput | string | null
    rollprint?: StringFieldUpdateOperationsInput | string
    inuser?: NullableStringFieldUpdateOperationsInput | string | null
    upuser?: NullableStringFieldUpdateOperationsInput | string | null
    indate?: NullableStringFieldUpdateOperationsInput | string | null
    update2?: NullableStringFieldUpdateOperationsInput | string | null
    etc8?: NullableStringFieldUpdateOperationsInput | string | null
    etc9?: NullableStringFieldUpdateOperationsInput | string | null
    etc10?: NullableStringFieldUpdateOperationsInput | string | null
    etc11?: NullableStringFieldUpdateOperationsInput | string | null
    etc12?: NullableStringFieldUpdateOperationsInput | string | null
    etc13?: NullableStringFieldUpdateOperationsInput | string | null
    etc14?: NullableStringFieldUpdateOperationsInput | string | null
    etc15?: NullableStringFieldUpdateOperationsInput | string | null
    bogubun?: NullableStringFieldUpdateOperationsInput | string | null
    aschk?: NullableStringFieldUpdateOperationsInput | string | null
    etc16?: NullableStringFieldUpdateOperationsInput | string | null
    etc17?: NullableStringFieldUpdateOperationsInput | string | null
    etc18?: NullableStringFieldUpdateOperationsInput | string | null
    etc19?: NullableStringFieldUpdateOperationsInput | string | null
    etc20?: NullableStringFieldUpdateOperationsInput | string | null
    etc21?: NullableStringFieldUpdateOperationsInput | string | null
    etc22?: NullableStringFieldUpdateOperationsInput | string | null
    etc23?: NullableStringFieldUpdateOperationsInput | string | null
    etc24?: NullableStringFieldUpdateOperationsInput | string | null
    etc25?: NullableStringFieldUpdateOperationsInput | string | null
    etc26?: NullableStringFieldUpdateOperationsInput | string | null
    etc27?: NullableStringFieldUpdateOperationsInput | string | null
    etc28?: NullableStringFieldUpdateOperationsInput | string | null
    etc29?: NullableStringFieldUpdateOperationsInput | string | null
    etc30?: NullableStringFieldUpdateOperationsInput | string | null
    etc31?: NullableStringFieldUpdateOperationsInput | string | null
    etc32?: NullableStringFieldUpdateOperationsInput | string | null
    etc33?: NullableStringFieldUpdateOperationsInput | string | null
    etc34?: NullableStringFieldUpdateOperationsInput | string | null
    etc35?: NullableStringFieldUpdateOperationsInput | string | null
    server_cust?: NullableStringFieldUpdateOperationsInput | string | null
    server_orde?: NullableStringFieldUpdateOperationsInput | string | null
    server_mici?: NullableStringFieldUpdateOperationsInput | string | null
    server_admi?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrp?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrb?: NullableStringFieldUpdateOperationsInput | string | null
    oauthpwd?: StringFieldUpdateOperationsInput | string
    medi_use?: NullableStringFieldUpdateOperationsInput | string | null
    medi_pc?: NullableStringFieldUpdateOperationsInput | string | null
    medi_autoju?: NullableStringFieldUpdateOperationsInput | string | null
    medi_grname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CsUncheckedUpdateManyInput = {
    gubun?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    myung?: NullableStringFieldUpdateOperationsInput | string | null
    daepyo?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    dup?: NullableIntFieldUpdateOperationsInput | number | null
    juso?: NullableStringFieldUpdateOperationsInput | string | null
    bunji?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    emCode?: NullableStringFieldUpdateOperationsInput | string | null
    damdang?: NullableStringFieldUpdateOperationsInput | string | null
    damdanghp?: NullableStringFieldUpdateOperationsInput | string | null
    jongbl?: NullableStringFieldUpdateOperationsInput | string | null
    upte?: NullableStringFieldUpdateOperationsInput | string | null
    saupnum?: NullableStringFieldUpdateOperationsInput | string | null
    sauppost?: NullableStringFieldUpdateOperationsInput | string | null
    saupdup?: NullableIntFieldUpdateOperationsInput | number | null
    saupjuso?: NullableStringFieldUpdateOperationsInput | string | null
    saupbunji?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ediid?: NullableStringFieldUpdateOperationsInput | string | null
    edipassword?: NullableStringFieldUpdateOperationsInput | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    nonchart?: NullableStringFieldUpdateOperationsInput | string | null
    fymd?: NullableStringFieldUpdateOperationsInput | string | null
    lymd?: NullableStringFieldUpdateOperationsInput | string | null
    bigo?: NullableStringFieldUpdateOperationsInput | string | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
    etc2?: NullableStringFieldUpdateOperationsInput | string | null
    etc3?: NullableStringFieldUpdateOperationsInput | string | null
    Chonguser?: NullableStringFieldUpdateOperationsInput | string | null
    pro?: NullableStringFieldUpdateOperationsInput | string | null
    yanghan?: NullableStringFieldUpdateOperationsInput | string | null
    chunggu?: NullableStringFieldUpdateOperationsInput | string | null
    cherbang?: NullableStringFieldUpdateOperationsInput | string | null
    youngsu?: NullableStringFieldUpdateOperationsInput | string | null
    pacs?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    yakguk?: NullableStringFieldUpdateOperationsInput | string | null
    update?: NullableStringFieldUpdateOperationsInput | string | null
    askumak?: NullableIntFieldUpdateOperationsInput | number | null
    etc4?: NullableStringFieldUpdateOperationsInput | string | null
    etc5?: NullableStringFieldUpdateOperationsInput | string | null
    etc6?: NullableStringFieldUpdateOperationsInput | string | null
    etc7?: NullableStringFieldUpdateOperationsInput | string | null
    cms?: NullableStringFieldUpdateOperationsInput | string | null
    daegidisp?: NullableStringFieldUpdateOperationsInput | string | null
    gumjinlink?: NullableStringFieldUpdateOperationsInput | string | null
    capture?: NullableStringFieldUpdateOperationsInput | string | null
    sutak?: NullableStringFieldUpdateOperationsInput | string | null
    sutaklink?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalinkyn?: NullableStringFieldUpdateOperationsInput | string | null
    gumsalink?: NullableStringFieldUpdateOperationsInput | string | null
    scaner?: NullableStringFieldUpdateOperationsInput | string | null
    card?: NullableStringFieldUpdateOperationsInput | string | null
    cardlink?: NullableStringFieldUpdateOperationsInput | string | null
    eleccherban?: NullableStringFieldUpdateOperationsInput | string | null
    yakgukprint?: NullableStringFieldUpdateOperationsInput | string | null
    gumsabarcod?: NullableStringFieldUpdateOperationsInput | string | null
    bdbarcode?: NullableStringFieldUpdateOperationsInput | string | null
    updatepath?: NullableStringFieldUpdateOperationsInput | string | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    sanjae?: NullableStringFieldUpdateOperationsInput | string | null
    paljji?: NullableStringFieldUpdateOperationsInput | string | null
    jungji?: NullableStringFieldUpdateOperationsInput | string | null
    servermodel?: NullableStringFieldUpdateOperationsInput | string | null
    servername?: NullableStringFieldUpdateOperationsInput | string | null
    serverSN?: NullableStringFieldUpdateOperationsInput | string | null
    serverMT?: NullableStringFieldUpdateOperationsInput | string | null
    serverHDD?: NullableStringFieldUpdateOperationsInput | string | null
    serverMemory?: NullableStringFieldUpdateOperationsInput | string | null
    serverLocation?: NullableStringFieldUpdateOperationsInput | string | null
    serversetup?: NullableStringFieldUpdateOperationsInput | string | null
    window?: NullableStringFieldUpdateOperationsInput | string | null
    windowmemo?: NullableStringFieldUpdateOperationsInput | string | null
    virusname?: NullableStringFieldUpdateOperationsInput | string | null
    virussetup?: NullableStringFieldUpdateOperationsInput | string | null
    virusend?: NullableStringFieldUpdateOperationsInput | string | null
    upsname?: NullableStringFieldUpdateOperationsInput | string | null
    upssetup?: NullableStringFieldUpdateOperationsInput | string | null
    upsend?: NullableStringFieldUpdateOperationsInput | string | null
    rollprint?: StringFieldUpdateOperationsInput | string
    inuser?: NullableStringFieldUpdateOperationsInput | string | null
    upuser?: NullableStringFieldUpdateOperationsInput | string | null
    indate?: NullableStringFieldUpdateOperationsInput | string | null
    update2?: NullableStringFieldUpdateOperationsInput | string | null
    etc8?: NullableStringFieldUpdateOperationsInput | string | null
    etc9?: NullableStringFieldUpdateOperationsInput | string | null
    etc10?: NullableStringFieldUpdateOperationsInput | string | null
    etc11?: NullableStringFieldUpdateOperationsInput | string | null
    etc12?: NullableStringFieldUpdateOperationsInput | string | null
    etc13?: NullableStringFieldUpdateOperationsInput | string | null
    etc14?: NullableStringFieldUpdateOperationsInput | string | null
    etc15?: NullableStringFieldUpdateOperationsInput | string | null
    bogubun?: NullableStringFieldUpdateOperationsInput | string | null
    aschk?: NullableStringFieldUpdateOperationsInput | string | null
    etc16?: NullableStringFieldUpdateOperationsInput | string | null
    etc17?: NullableStringFieldUpdateOperationsInput | string | null
    etc18?: NullableStringFieldUpdateOperationsInput | string | null
    etc19?: NullableStringFieldUpdateOperationsInput | string | null
    etc20?: NullableStringFieldUpdateOperationsInput | string | null
    etc21?: NullableStringFieldUpdateOperationsInput | string | null
    etc22?: NullableStringFieldUpdateOperationsInput | string | null
    etc23?: NullableStringFieldUpdateOperationsInput | string | null
    etc24?: NullableStringFieldUpdateOperationsInput | string | null
    etc25?: NullableStringFieldUpdateOperationsInput | string | null
    etc26?: NullableStringFieldUpdateOperationsInput | string | null
    etc27?: NullableStringFieldUpdateOperationsInput | string | null
    etc28?: NullableStringFieldUpdateOperationsInput | string | null
    etc29?: NullableStringFieldUpdateOperationsInput | string | null
    etc30?: NullableStringFieldUpdateOperationsInput | string | null
    etc31?: NullableStringFieldUpdateOperationsInput | string | null
    etc32?: NullableStringFieldUpdateOperationsInput | string | null
    etc33?: NullableStringFieldUpdateOperationsInput | string | null
    etc34?: NullableStringFieldUpdateOperationsInput | string | null
    etc35?: NullableStringFieldUpdateOperationsInput | string | null
    server_cust?: NullableStringFieldUpdateOperationsInput | string | null
    server_orde?: NullableStringFieldUpdateOperationsInput | string | null
    server_mici?: NullableStringFieldUpdateOperationsInput | string | null
    server_admi?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrp?: NullableStringFieldUpdateOperationsInput | string | null
    server_svrb?: NullableStringFieldUpdateOperationsInput | string | null
    oauthpwd?: StringFieldUpdateOperationsInput | string
    medi_use?: NullableStringFieldUpdateOperationsInput | string | null
    medi_pc?: NullableStringFieldUpdateOperationsInput | string | null
    medi_autoju?: NullableStringFieldUpdateOperationsInput | string | null
    medi_grname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartCreateInput = {
    ykiho: string
    cartItems?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    ykiho: string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    cartItems?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    ykiho: string
  }

  export type CartUpdateManyMutationInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemCreateInput = {
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    cartId: number
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type CartItemUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateManyInput = {
    id?: number
    cartId: number
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type CartItemUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemCreateNestedManyWithoutPaymentInput
    virtual?: PaymentVirtualCreateNestedOneWithoutPaymentInput
    refund?: PaymentRefundCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemUncheckedCreateNestedManyWithoutPaymentInput
    virtual?: PaymentVirtualUncheckedCreateNestedOneWithoutPaymentInput
    refund?: PaymentRefundUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUpdateManyWithoutPaymentNestedInput
    virtual?: PaymentVirtualUpdateOneWithoutPaymentNestedInput
    refund?: PaymentRefundUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUncheckedUpdateManyWithoutPaymentNestedInput
    virtual?: PaymentVirtualUncheckedUpdateOneWithoutPaymentNestedInput
    refund?: PaymentRefundUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
  }

  export type PaymentUpdateManyMutationInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentItemCreateInput = {
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
    payment: PaymentCreateNestedOneWithoutPaymentItemsInput
  }

  export type PaymentItemUncheckedCreateInput = {
    id?: number
    paymentId: number
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
  }

  export type PaymentItemUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    payment?: PaymentUpdateOneRequiredWithoutPaymentItemsNestedInput
  }

  export type PaymentItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentItemCreateManyInput = {
    id?: number
    paymentId: number
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
  }

  export type PaymentItemUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentVirtualCreateInput = {
    bankCode: string
    customerName: string
    dueDate: Date | string
    accountNumber: string
    payment: PaymentCreateNestedOneWithoutVirtualInput
  }

  export type PaymentVirtualUncheckedCreateInput = {
    id?: number
    paymentId: number
    bankCode: string
    customerName: string
    dueDate: Date | string
    accountNumber: string
  }

  export type PaymentVirtualUpdateInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUpdateOneRequiredWithoutVirtualNestedInput
  }

  export type PaymentVirtualUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentVirtualCreateManyInput = {
    id?: number
    paymentId: number
    bankCode: string
    customerName: string
    dueDate: Date | string
    accountNumber: string
  }

  export type PaymentVirtualUpdateManyMutationInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentVirtualUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRefundCreateInput = {
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
    payment: PaymentCreateNestedOneWithoutRefundInput
  }

  export type PaymentRefundUncheckedCreateInput = {
    id?: number
    paymentId: number
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
  }

  export type PaymentRefundUpdateInput = {
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUpdateOneRequiredWithoutRefundNestedInput
  }

  export type PaymentRefundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRefundCreateManyInput = {
    id?: number
    paymentId: number
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
  }

  export type PaymentRefundUpdateManyMutationInput = {
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRefundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type EmCreateInput = {
    code: string
    name?: string | null
    jisa?: string | null
    buCode?: string | null
    endYmd?: string | null
  }

  export type EmUncheckedCreateInput = {
    code: string
    name?: string | null
    jisa?: string | null
    buCode?: string | null
    endYmd?: string | null
  }

  export type EmUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    buCode?: NullableStringFieldUpdateOperationsInput | string | null
    endYmd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    buCode?: NullableStringFieldUpdateOperationsInput | string | null
    endYmd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmCreateManyInput = {
    code: string
    name?: string | null
    jisa?: string | null
    buCode?: string | null
    endYmd?: string | null
  }

  export type EmUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    buCode?: NullableStringFieldUpdateOperationsInput | string | null
    endYmd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    jisa?: NullableStringFieldUpdateOperationsInput | string | null
    buCode?: NullableStringFieldUpdateOperationsInput | string | null
    endYmd?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewCpmMsgCreateInput = {
    chk: string
    recUser?: string | null
    recDate?: string | null
    msg?: string | null
    bmsg?: Buffer | null
    senUser?: string | null
    senDate?: string | null
    show?: string | null
    dc?: boolean | null
    dcUser?: string | null
    dcDate?: string | null
    etc1?: string | null
  }

  export type NewCpmMsgUncheckedCreateInput = {
    auto?: number
    chk: string
    recUser?: string | null
    recDate?: string | null
    msg?: string | null
    bmsg?: Buffer | null
    senUser?: string | null
    senDate?: string | null
    show?: string | null
    dc?: boolean | null
    dcUser?: string | null
    dcDate?: string | null
    etc1?: string | null
  }

  export type NewCpmMsgUpdateInput = {
    chk?: StringFieldUpdateOperationsInput | string
    recUser?: NullableStringFieldUpdateOperationsInput | string | null
    recDate?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    bmsg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    senUser?: NullableStringFieldUpdateOperationsInput | string | null
    senDate?: NullableStringFieldUpdateOperationsInput | string | null
    show?: NullableStringFieldUpdateOperationsInput | string | null
    dc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dcUser?: NullableStringFieldUpdateOperationsInput | string | null
    dcDate?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewCpmMsgUncheckedUpdateInput = {
    auto?: IntFieldUpdateOperationsInput | number
    chk?: StringFieldUpdateOperationsInput | string
    recUser?: NullableStringFieldUpdateOperationsInput | string | null
    recDate?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    bmsg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    senUser?: NullableStringFieldUpdateOperationsInput | string | null
    senDate?: NullableStringFieldUpdateOperationsInput | string | null
    show?: NullableStringFieldUpdateOperationsInput | string | null
    dc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dcUser?: NullableStringFieldUpdateOperationsInput | string | null
    dcDate?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewCpmMsgCreateManyInput = {
    auto?: number
    chk: string
    recUser?: string | null
    recDate?: string | null
    msg?: string | null
    bmsg?: Buffer | null
    senUser?: string | null
    senDate?: string | null
    show?: string | null
    dc?: boolean | null
    dcUser?: string | null
    dcDate?: string | null
    etc1?: string | null
  }

  export type NewCpmMsgUpdateManyMutationInput = {
    chk?: StringFieldUpdateOperationsInput | string
    recUser?: NullableStringFieldUpdateOperationsInput | string | null
    recDate?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    bmsg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    senUser?: NullableStringFieldUpdateOperationsInput | string | null
    senDate?: NullableStringFieldUpdateOperationsInput | string | null
    show?: NullableStringFieldUpdateOperationsInput | string | null
    dc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dcUser?: NullableStringFieldUpdateOperationsInput | string | null
    dcDate?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewCpmMsgUncheckedUpdateManyInput = {
    auto?: IntFieldUpdateOperationsInput | number
    chk?: StringFieldUpdateOperationsInput | string
    recUser?: NullableStringFieldUpdateOperationsInput | string | null
    recDate?: NullableStringFieldUpdateOperationsInput | string | null
    msg?: NullableStringFieldUpdateOperationsInput | string | null
    bmsg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    senUser?: NullableStringFieldUpdateOperationsInput | string | null
    senDate?: NullableStringFieldUpdateOperationsInput | string | null
    show?: NullableStringFieldUpdateOperationsInput | string | null
    dc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dcUser?: NullableStringFieldUpdateOperationsInput | string | null
    dcDate?: NullableStringFieldUpdateOperationsInput | string | null
    etc1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PgMsgCreateInput = {
    msg?: Buffer | null
  }

  export type PgMsgUncheckedCreateInput = {
    id?: number
    msg?: Buffer | null
  }

  export type PgMsgUpdateInput = {
    msg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type PgMsgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type PgMsgCreateManyInput = {
    id?: number
    msg?: Buffer | null
  }

  export type PgMsgUpdateManyMutationInput = {
    msg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type PgMsgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderReqMsgListRelationFilter = {
    every?: OrderReqMsgWhereInput
    some?: OrderReqMsgWhereInput
    none?: OrderReqMsgWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderReqMsgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    ykiho?: SortOrder
    saupkiho?: SortOrder
    token?: SortOrder
    expiryDate?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    ykiho?: SortOrder
    saupkiho?: SortOrder
    token?: SortOrder
    expiryDate?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    ykiho?: SortOrder
    saupkiho?: SortOrder
    token?: SortOrder
    expiryDate?: SortOrder
    admin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type OrderReqMsgAccountIdMessageCompoundUniqueInput = {
    accountId: number
    message: string
  }

  export type OrderReqMsgCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderReqMsgAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type OrderReqMsgMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderReqMsgMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    message?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderReqMsgSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductListCountOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    smYmd?: SortOrder
    addUser?: SortOrder
    createDt?: SortOrder
    bigo?: SortOrder
    web?: SortOrder
    bunryu?: SortOrder
    step?: SortOrder
    fit?: SortOrder
    card?: SortOrder
  }

  export type ProductListAvgOrderByAggregateInput = {
    step?: SortOrder
  }

  export type ProductListMaxOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    smYmd?: SortOrder
    addUser?: SortOrder
    createDt?: SortOrder
    bigo?: SortOrder
    web?: SortOrder
    bunryu?: SortOrder
    step?: SortOrder
    fit?: SortOrder
    card?: SortOrder
  }

  export type ProductListMinOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    smYmd?: SortOrder
    addUser?: SortOrder
    createDt?: SortOrder
    bigo?: SortOrder
    web?: SortOrder
    bunryu?: SortOrder
    step?: SortOrder
    fit?: SortOrder
    card?: SortOrder
  }

  export type ProductListSumOrderByAggregateInput = {
    step?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductListSubCountOrderByAggregateInput = {
    auto?: SortOrder
    jisa?: SortOrder
    smCode?: SortOrder
    smMyung?: SortOrder
    smYmd?: SortOrder
    danga?: SortOrder
    danwi?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
  }

  export type ProductListSubAvgOrderByAggregateInput = {
    auto?: SortOrder
    danga?: SortOrder
  }

  export type ProductListSubMaxOrderByAggregateInput = {
    auto?: SortOrder
    jisa?: SortOrder
    smCode?: SortOrder
    smMyung?: SortOrder
    smYmd?: SortOrder
    danga?: SortOrder
    danwi?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
  }

  export type ProductListSubMinOrderByAggregateInput = {
    auto?: SortOrder
    jisa?: SortOrder
    smCode?: SortOrder
    smMyung?: SortOrder
    smYmd?: SortOrder
    danga?: SortOrder
    danwi?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
  }

  export type ProductListSubSumOrderByAggregateInput = {
    auto?: SortOrder
    danga?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCountOrderByAggregateInput = {
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    auto?: SortOrder
    count?: SortOrder
    webPaymentItemId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    auto?: SortOrder
    count?: SortOrder
    webPaymentItemId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ProductLogCountOrderByAggregateInput = {
    logAuto?: SortOrder
    logDatetime?: SortOrder
    logGubun?: SortOrder
    logUser?: SortOrder
    logComputer?: SortOrder
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductLogAvgOrderByAggregateInput = {
    logAuto?: SortOrder
    auto?: SortOrder
    count?: SortOrder
    webPaymentItemId?: SortOrder
  }

  export type ProductLogMaxOrderByAggregateInput = {
    logAuto?: SortOrder
    logDatetime?: SortOrder
    logGubun?: SortOrder
    logUser?: SortOrder
    logComputer?: SortOrder
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductLogMinOrderByAggregateInput = {
    logAuto?: SortOrder
    logDatetime?: SortOrder
    logGubun?: SortOrder
    logUser?: SortOrder
    logComputer?: SortOrder
    auto?: SortOrder
    clCode?: SortOrder
    jisa?: SortOrder
    csCode?: SortOrder
    ctTel?: SortOrder
    count?: SortOrder
    receive?: SortOrder
    receiveYmd?: SortOrder
    sell?: SortOrder
    sellYmd?: SortOrder
    orderCheck?: SortOrder
    seller?: SortOrder
    check?: SortOrder
    check2?: SortOrder
    rgb?: SortOrder
    bigo?: SortOrder
    createDt?: SortOrder
    bigo2?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    web?: SortOrder
    webPaymentItemId?: SortOrder
    webBNPL?: SortOrder
  }

  export type ProductLogSumOrderByAggregateInput = {
    logAuto?: SortOrder
    auto?: SortOrder
    count?: SortOrder
    webPaymentItemId?: SortOrder
  }

  export type ProductListWebBunryuCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
  }

  export type ProductListWebBunryuMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
  }

  export type ProductListWebBunryuMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type ProductListImageCountOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    image?: SortOrder
  }

  export type ProductListImageMaxOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    image?: SortOrder
  }

  export type ProductListImageMinOrderByAggregateInput = {
    jisa?: SortOrder
    smCode?: SortOrder
    image?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type CsCountOrderByAggregateInput = {
    gubun?: SortOrder
    code?: SortOrder
    myung?: SortOrder
    daepyo?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    post?: SortOrder
    dup?: SortOrder
    juso?: SortOrder
    bunji?: SortOrder
    jisa?: SortOrder
    emCode?: SortOrder
    damdang?: SortOrder
    damdanghp?: SortOrder
    jongbl?: SortOrder
    upte?: SortOrder
    saupnum?: SortOrder
    sauppost?: SortOrder
    saupdup?: SortOrder
    saupjuso?: SortOrder
    saupbunji?: SortOrder
    email?: SortOrder
    ediid?: SortOrder
    edipassword?: SortOrder
    local?: SortOrder
    nonchart?: SortOrder
    fymd?: SortOrder
    lymd?: SortOrder
    bigo?: SortOrder
    user?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    Chonguser?: SortOrder
    pro?: SortOrder
    yanghan?: SortOrder
    chunggu?: SortOrder
    cherbang?: SortOrder
    youngsu?: SortOrder
    pacs?: SortOrder
    barcode?: SortOrder
    yakguk?: SortOrder
    update?: SortOrder
    askumak?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    etc6?: SortOrder
    etc7?: SortOrder
    cms?: SortOrder
    daegidisp?: SortOrder
    gumjinlink?: SortOrder
    capture?: SortOrder
    sutak?: SortOrder
    sutaklink?: SortOrder
    gumsalinkyn?: SortOrder
    gumsalink?: SortOrder
    scaner?: SortOrder
    card?: SortOrder
    cardlink?: SortOrder
    eleccherban?: SortOrder
    yakgukprint?: SortOrder
    gumsabarcod?: SortOrder
    bdbarcode?: SortOrder
    updatepath?: SortOrder
    server?: SortOrder
    sanjae?: SortOrder
    paljji?: SortOrder
    jungji?: SortOrder
    servermodel?: SortOrder
    servername?: SortOrder
    serverSN?: SortOrder
    serverMT?: SortOrder
    serverHDD?: SortOrder
    serverMemory?: SortOrder
    serverLocation?: SortOrder
    serversetup?: SortOrder
    window?: SortOrder
    windowmemo?: SortOrder
    virusname?: SortOrder
    virussetup?: SortOrder
    virusend?: SortOrder
    upsname?: SortOrder
    upssetup?: SortOrder
    upsend?: SortOrder
    rollprint?: SortOrder
    inuser?: SortOrder
    upuser?: SortOrder
    indate?: SortOrder
    update2?: SortOrder
    etc8?: SortOrder
    etc9?: SortOrder
    etc10?: SortOrder
    etc11?: SortOrder
    etc12?: SortOrder
    etc13?: SortOrder
    etc14?: SortOrder
    etc15?: SortOrder
    bogubun?: SortOrder
    aschk?: SortOrder
    etc16?: SortOrder
    etc17?: SortOrder
    etc18?: SortOrder
    etc19?: SortOrder
    etc20?: SortOrder
    etc21?: SortOrder
    etc22?: SortOrder
    etc23?: SortOrder
    etc24?: SortOrder
    etc25?: SortOrder
    etc26?: SortOrder
    etc27?: SortOrder
    etc28?: SortOrder
    etc29?: SortOrder
    etc30?: SortOrder
    etc31?: SortOrder
    etc32?: SortOrder
    etc33?: SortOrder
    etc34?: SortOrder
    etc35?: SortOrder
    server_cust?: SortOrder
    server_orde?: SortOrder
    server_mici?: SortOrder
    server_admi?: SortOrder
    server_svrp?: SortOrder
    server_svrb?: SortOrder
    oauthpwd?: SortOrder
    medi_use?: SortOrder
    medi_pc?: SortOrder
    medi_autoju?: SortOrder
    medi_grname?: SortOrder
  }

  export type CsAvgOrderByAggregateInput = {
    dup?: SortOrder
    saupdup?: SortOrder
    askumak?: SortOrder
  }

  export type CsMaxOrderByAggregateInput = {
    gubun?: SortOrder
    code?: SortOrder
    myung?: SortOrder
    daepyo?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    post?: SortOrder
    dup?: SortOrder
    juso?: SortOrder
    bunji?: SortOrder
    jisa?: SortOrder
    emCode?: SortOrder
    damdang?: SortOrder
    damdanghp?: SortOrder
    jongbl?: SortOrder
    upte?: SortOrder
    saupnum?: SortOrder
    sauppost?: SortOrder
    saupdup?: SortOrder
    saupjuso?: SortOrder
    saupbunji?: SortOrder
    email?: SortOrder
    ediid?: SortOrder
    edipassword?: SortOrder
    local?: SortOrder
    nonchart?: SortOrder
    fymd?: SortOrder
    lymd?: SortOrder
    bigo?: SortOrder
    user?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    Chonguser?: SortOrder
    pro?: SortOrder
    yanghan?: SortOrder
    chunggu?: SortOrder
    cherbang?: SortOrder
    youngsu?: SortOrder
    pacs?: SortOrder
    barcode?: SortOrder
    yakguk?: SortOrder
    update?: SortOrder
    askumak?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    etc6?: SortOrder
    etc7?: SortOrder
    cms?: SortOrder
    daegidisp?: SortOrder
    gumjinlink?: SortOrder
    capture?: SortOrder
    sutak?: SortOrder
    sutaklink?: SortOrder
    gumsalinkyn?: SortOrder
    gumsalink?: SortOrder
    scaner?: SortOrder
    card?: SortOrder
    cardlink?: SortOrder
    eleccherban?: SortOrder
    yakgukprint?: SortOrder
    gumsabarcod?: SortOrder
    bdbarcode?: SortOrder
    updatepath?: SortOrder
    server?: SortOrder
    sanjae?: SortOrder
    paljji?: SortOrder
    jungji?: SortOrder
    servermodel?: SortOrder
    servername?: SortOrder
    serverSN?: SortOrder
    serverMT?: SortOrder
    serverHDD?: SortOrder
    serverMemory?: SortOrder
    serverLocation?: SortOrder
    serversetup?: SortOrder
    window?: SortOrder
    windowmemo?: SortOrder
    virusname?: SortOrder
    virussetup?: SortOrder
    virusend?: SortOrder
    upsname?: SortOrder
    upssetup?: SortOrder
    upsend?: SortOrder
    rollprint?: SortOrder
    inuser?: SortOrder
    upuser?: SortOrder
    indate?: SortOrder
    update2?: SortOrder
    etc8?: SortOrder
    etc9?: SortOrder
    etc10?: SortOrder
    etc11?: SortOrder
    etc12?: SortOrder
    etc13?: SortOrder
    etc14?: SortOrder
    etc15?: SortOrder
    bogubun?: SortOrder
    aschk?: SortOrder
    etc16?: SortOrder
    etc17?: SortOrder
    etc18?: SortOrder
    etc19?: SortOrder
    etc20?: SortOrder
    etc21?: SortOrder
    etc22?: SortOrder
    etc23?: SortOrder
    etc24?: SortOrder
    etc25?: SortOrder
    etc26?: SortOrder
    etc27?: SortOrder
    etc28?: SortOrder
    etc29?: SortOrder
    etc30?: SortOrder
    etc31?: SortOrder
    etc32?: SortOrder
    etc33?: SortOrder
    etc34?: SortOrder
    etc35?: SortOrder
    server_cust?: SortOrder
    server_orde?: SortOrder
    server_mici?: SortOrder
    server_admi?: SortOrder
    server_svrp?: SortOrder
    server_svrb?: SortOrder
    oauthpwd?: SortOrder
    medi_use?: SortOrder
    medi_pc?: SortOrder
    medi_autoju?: SortOrder
    medi_grname?: SortOrder
  }

  export type CsMinOrderByAggregateInput = {
    gubun?: SortOrder
    code?: SortOrder
    myung?: SortOrder
    daepyo?: SortOrder
    tel?: SortOrder
    fax?: SortOrder
    post?: SortOrder
    dup?: SortOrder
    juso?: SortOrder
    bunji?: SortOrder
    jisa?: SortOrder
    emCode?: SortOrder
    damdang?: SortOrder
    damdanghp?: SortOrder
    jongbl?: SortOrder
    upte?: SortOrder
    saupnum?: SortOrder
    sauppost?: SortOrder
    saupdup?: SortOrder
    saupjuso?: SortOrder
    saupbunji?: SortOrder
    email?: SortOrder
    ediid?: SortOrder
    edipassword?: SortOrder
    local?: SortOrder
    nonchart?: SortOrder
    fymd?: SortOrder
    lymd?: SortOrder
    bigo?: SortOrder
    user?: SortOrder
    etc1?: SortOrder
    etc2?: SortOrder
    etc3?: SortOrder
    Chonguser?: SortOrder
    pro?: SortOrder
    yanghan?: SortOrder
    chunggu?: SortOrder
    cherbang?: SortOrder
    youngsu?: SortOrder
    pacs?: SortOrder
    barcode?: SortOrder
    yakguk?: SortOrder
    update?: SortOrder
    askumak?: SortOrder
    etc4?: SortOrder
    etc5?: SortOrder
    etc6?: SortOrder
    etc7?: SortOrder
    cms?: SortOrder
    daegidisp?: SortOrder
    gumjinlink?: SortOrder
    capture?: SortOrder
    sutak?: SortOrder
    sutaklink?: SortOrder
    gumsalinkyn?: SortOrder
    gumsalink?: SortOrder
    scaner?: SortOrder
    card?: SortOrder
    cardlink?: SortOrder
    eleccherban?: SortOrder
    yakgukprint?: SortOrder
    gumsabarcod?: SortOrder
    bdbarcode?: SortOrder
    updatepath?: SortOrder
    server?: SortOrder
    sanjae?: SortOrder
    paljji?: SortOrder
    jungji?: SortOrder
    servermodel?: SortOrder
    servername?: SortOrder
    serverSN?: SortOrder
    serverMT?: SortOrder
    serverHDD?: SortOrder
    serverMemory?: SortOrder
    serverLocation?: SortOrder
    serversetup?: SortOrder
    window?: SortOrder
    windowmemo?: SortOrder
    virusname?: SortOrder
    virussetup?: SortOrder
    virusend?: SortOrder
    upsname?: SortOrder
    upssetup?: SortOrder
    upsend?: SortOrder
    rollprint?: SortOrder
    inuser?: SortOrder
    upuser?: SortOrder
    indate?: SortOrder
    update2?: SortOrder
    etc8?: SortOrder
    etc9?: SortOrder
    etc10?: SortOrder
    etc11?: SortOrder
    etc12?: SortOrder
    etc13?: SortOrder
    etc14?: SortOrder
    etc15?: SortOrder
    bogubun?: SortOrder
    aschk?: SortOrder
    etc16?: SortOrder
    etc17?: SortOrder
    etc18?: SortOrder
    etc19?: SortOrder
    etc20?: SortOrder
    etc21?: SortOrder
    etc22?: SortOrder
    etc23?: SortOrder
    etc24?: SortOrder
    etc25?: SortOrder
    etc26?: SortOrder
    etc27?: SortOrder
    etc28?: SortOrder
    etc29?: SortOrder
    etc30?: SortOrder
    etc31?: SortOrder
    etc32?: SortOrder
    etc33?: SortOrder
    etc34?: SortOrder
    etc35?: SortOrder
    server_cust?: SortOrder
    server_orde?: SortOrder
    server_mici?: SortOrder
    server_admi?: SortOrder
    server_svrp?: SortOrder
    server_svrb?: SortOrder
    oauthpwd?: SortOrder
    medi_use?: SortOrder
    medi_pc?: SortOrder
    medi_autoju?: SortOrder
    medi_grname?: SortOrder
  }

  export type CsSumOrderByAggregateInput = {
    dup?: SortOrder
    saupdup?: SortOrder
    askumak?: SortOrder
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    code?: SortOrder
    quantity?: SortOrder
    fit?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    code?: SortOrder
    quantity?: SortOrder
    fit?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    code?: SortOrder
    quantity?: SortOrder
    fit?: SortOrder
    createdDate?: SortOrder
    updatedDate?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    quantity?: SortOrder
  }

  export type PaymentItemListRelationFilter = {
    every?: PaymentItemWhereInput
    some?: PaymentItemWhereInput
    none?: PaymentItemWhereInput
  }

  export type PaymentVirtualNullableRelationFilter = {
    is?: PaymentVirtualWhereInput | null
    isNot?: PaymentVirtualWhereInput | null
  }

  export type PaymentRefundNullableRelationFilter = {
    is?: PaymentRefundWhereInput | null
    isNot?: PaymentRefundWhereInput | null
  }

  export type PaymentItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
    orderId?: SortOrder
    paymentKey?: SortOrder
    customerName?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    sendType?: SortOrder
    cancel?: SortOrder
    test?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    test?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
    orderId?: SortOrder
    paymentKey?: SortOrder
    customerName?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    sendType?: SortOrder
    cancel?: SortOrder
    test?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    ykiho?: SortOrder
    orderId?: SortOrder
    paymentKey?: SortOrder
    customerName?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    sendType?: SortOrder
    cancel?: SortOrder
    test?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    test?: SortOrder
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type PaymentItemCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type PaymentItemAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type PaymentItemMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type PaymentItemMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    fit?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type PaymentItemSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    quantity?: SortOrder
    amount?: SortOrder
  }

  export type PaymentVirtualCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bankCode?: SortOrder
    customerName?: SortOrder
    dueDate?: SortOrder
    accountNumber?: SortOrder
  }

  export type PaymentVirtualAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentVirtualMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bankCode?: SortOrder
    customerName?: SortOrder
    dueDate?: SortOrder
    accountNumber?: SortOrder
  }

  export type PaymentVirtualMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bankCode?: SortOrder
    customerName?: SortOrder
    dueDate?: SortOrder
    accountNumber?: SortOrder
  }

  export type PaymentVirtualSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type PaymentRefundCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bank?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type PaymentRefundAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentRefundMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bank?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type PaymentRefundMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    bank?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type PaymentRefundSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
  }

  export type EmCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    jisa?: SortOrder
    buCode?: SortOrder
    endYmd?: SortOrder
  }

  export type EmMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    jisa?: SortOrder
    buCode?: SortOrder
    endYmd?: SortOrder
  }

  export type EmMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    jisa?: SortOrder
    buCode?: SortOrder
    endYmd?: SortOrder
  }

  export type NewCpmMsgCountOrderByAggregateInput = {
    auto?: SortOrder
    chk?: SortOrder
    recUser?: SortOrder
    recDate?: SortOrder
    msg?: SortOrder
    bmsg?: SortOrder
    senUser?: SortOrder
    senDate?: SortOrder
    show?: SortOrder
    dc?: SortOrder
    dcUser?: SortOrder
    dcDate?: SortOrder
    etc1?: SortOrder
  }

  export type NewCpmMsgAvgOrderByAggregateInput = {
    auto?: SortOrder
  }

  export type NewCpmMsgMaxOrderByAggregateInput = {
    auto?: SortOrder
    chk?: SortOrder
    recUser?: SortOrder
    recDate?: SortOrder
    msg?: SortOrder
    bmsg?: SortOrder
    senUser?: SortOrder
    senDate?: SortOrder
    show?: SortOrder
    dc?: SortOrder
    dcUser?: SortOrder
    dcDate?: SortOrder
    etc1?: SortOrder
  }

  export type NewCpmMsgMinOrderByAggregateInput = {
    auto?: SortOrder
    chk?: SortOrder
    recUser?: SortOrder
    recDate?: SortOrder
    msg?: SortOrder
    bmsg?: SortOrder
    senUser?: SortOrder
    senDate?: SortOrder
    show?: SortOrder
    dc?: SortOrder
    dcUser?: SortOrder
    dcDate?: SortOrder
    etc1?: SortOrder
  }

  export type NewCpmMsgSumOrderByAggregateInput = {
    auto?: SortOrder
  }

  export type PgMsgCountOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
  }

  export type PgMsgAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PgMsgMaxOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
  }

  export type PgMsgMinOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
  }

  export type PgMsgSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderReqMsgCreateNestedManyWithoutAccountInput = {
    create?: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput> | OrderReqMsgCreateWithoutAccountInput[] | OrderReqMsgUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: OrderReqMsgCreateOrConnectWithoutAccountInput | OrderReqMsgCreateOrConnectWithoutAccountInput[]
    createMany?: OrderReqMsgCreateManyAccountInputEnvelope
    connect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
  }

  export type OrderReqMsgUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput> | OrderReqMsgCreateWithoutAccountInput[] | OrderReqMsgUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: OrderReqMsgCreateOrConnectWithoutAccountInput | OrderReqMsgCreateOrConnectWithoutAccountInput[]
    createMany?: OrderReqMsgCreateManyAccountInputEnvelope
    connect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderReqMsgUpdateManyWithoutAccountNestedInput = {
    create?: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput> | OrderReqMsgCreateWithoutAccountInput[] | OrderReqMsgUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: OrderReqMsgCreateOrConnectWithoutAccountInput | OrderReqMsgCreateOrConnectWithoutAccountInput[]
    upsert?: OrderReqMsgUpsertWithWhereUniqueWithoutAccountInput | OrderReqMsgUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: OrderReqMsgCreateManyAccountInputEnvelope
    set?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    disconnect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    delete?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    connect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    update?: OrderReqMsgUpdateWithWhereUniqueWithoutAccountInput | OrderReqMsgUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: OrderReqMsgUpdateManyWithWhereWithoutAccountInput | OrderReqMsgUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: OrderReqMsgScalarWhereInput | OrderReqMsgScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderReqMsgUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput> | OrderReqMsgCreateWithoutAccountInput[] | OrderReqMsgUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: OrderReqMsgCreateOrConnectWithoutAccountInput | OrderReqMsgCreateOrConnectWithoutAccountInput[]
    upsert?: OrderReqMsgUpsertWithWhereUniqueWithoutAccountInput | OrderReqMsgUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: OrderReqMsgCreateManyAccountInputEnvelope
    set?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    disconnect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    delete?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    connect?: OrderReqMsgWhereUniqueInput | OrderReqMsgWhereUniqueInput[]
    update?: OrderReqMsgUpdateWithWhereUniqueWithoutAccountInput | OrderReqMsgUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: OrderReqMsgUpdateManyWithWhereWithoutAccountInput | OrderReqMsgUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: OrderReqMsgScalarWhereInput | OrderReqMsgScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutOrderReqMsgInput = {
    create?: XOR<AccountCreateWithoutOrderReqMsgInput, AccountUncheckedCreateWithoutOrderReqMsgInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOrderReqMsgInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutOrderReqMsgNestedInput = {
    create?: XOR<AccountCreateWithoutOrderReqMsgInput, AccountUncheckedCreateWithoutOrderReqMsgInput>
    connectOrCreate?: AccountCreateOrConnectWithoutOrderReqMsgInput
    upsert?: AccountUpsertWithoutOrderReqMsgInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutOrderReqMsgInput, AccountUpdateWithoutOrderReqMsgInput>, AccountUncheckedUpdateWithoutOrderReqMsgInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    connect?: CartWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput
    upsert?: CartUpsertWithoutCartItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCartItemsInput, CartUpdateWithoutCartItemsInput>, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type PaymentItemCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput> | PaymentItemCreateWithoutPaymentInput[] | PaymentItemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentItemCreateOrConnectWithoutPaymentInput | PaymentItemCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentItemCreateManyPaymentInputEnvelope
    connect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
  }

  export type PaymentVirtualCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentVirtualCreateOrConnectWithoutPaymentInput
    connect?: PaymentVirtualWhereUniqueInput
  }

  export type PaymentRefundCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentRefundCreateOrConnectWithoutPaymentInput
    connect?: PaymentRefundWhereUniqueInput
  }

  export type PaymentItemUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput> | PaymentItemCreateWithoutPaymentInput[] | PaymentItemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentItemCreateOrConnectWithoutPaymentInput | PaymentItemCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentItemCreateManyPaymentInputEnvelope
    connect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
  }

  export type PaymentVirtualUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentVirtualCreateOrConnectWithoutPaymentInput
    connect?: PaymentVirtualWhereUniqueInput
  }

  export type PaymentRefundUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentRefundCreateOrConnectWithoutPaymentInput
    connect?: PaymentRefundWhereUniqueInput
  }

  export type PaymentItemUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput> | PaymentItemCreateWithoutPaymentInput[] | PaymentItemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentItemCreateOrConnectWithoutPaymentInput | PaymentItemCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentItemUpsertWithWhereUniqueWithoutPaymentInput | PaymentItemUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentItemCreateManyPaymentInputEnvelope
    set?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    disconnect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    delete?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    connect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    update?: PaymentItemUpdateWithWhereUniqueWithoutPaymentInput | PaymentItemUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentItemUpdateManyWithWhereWithoutPaymentInput | PaymentItemUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentItemScalarWhereInput | PaymentItemScalarWhereInput[]
  }

  export type PaymentVirtualUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentVirtualCreateOrConnectWithoutPaymentInput
    upsert?: PaymentVirtualUpsertWithoutPaymentInput
    disconnect?: PaymentVirtualWhereInput | boolean
    delete?: PaymentVirtualWhereInput | boolean
    connect?: PaymentVirtualWhereUniqueInput
    update?: XOR<XOR<PaymentVirtualUpdateToOneWithWhereWithoutPaymentInput, PaymentVirtualUpdateWithoutPaymentInput>, PaymentVirtualUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentRefundUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentRefundCreateOrConnectWithoutPaymentInput
    upsert?: PaymentRefundUpsertWithoutPaymentInput
    disconnect?: PaymentRefundWhereInput | boolean
    delete?: PaymentRefundWhereInput | boolean
    connect?: PaymentRefundWhereUniqueInput
    update?: XOR<XOR<PaymentRefundUpdateToOneWithWhereWithoutPaymentInput, PaymentRefundUpdateWithoutPaymentInput>, PaymentRefundUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentItemUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput> | PaymentItemCreateWithoutPaymentInput[] | PaymentItemUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentItemCreateOrConnectWithoutPaymentInput | PaymentItemCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentItemUpsertWithWhereUniqueWithoutPaymentInput | PaymentItemUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentItemCreateManyPaymentInputEnvelope
    set?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    disconnect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    delete?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    connect?: PaymentItemWhereUniqueInput | PaymentItemWhereUniqueInput[]
    update?: PaymentItemUpdateWithWhereUniqueWithoutPaymentInput | PaymentItemUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentItemUpdateManyWithWhereWithoutPaymentInput | PaymentItemUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentItemScalarWhereInput | PaymentItemScalarWhereInput[]
  }

  export type PaymentVirtualUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentVirtualCreateOrConnectWithoutPaymentInput
    upsert?: PaymentVirtualUpsertWithoutPaymentInput
    disconnect?: PaymentVirtualWhereInput | boolean
    delete?: PaymentVirtualWhereInput | boolean
    connect?: PaymentVirtualWhereUniqueInput
    update?: XOR<XOR<PaymentVirtualUpdateToOneWithWhereWithoutPaymentInput, PaymentVirtualUpdateWithoutPaymentInput>, PaymentVirtualUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentRefundUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PaymentRefundCreateOrConnectWithoutPaymentInput
    upsert?: PaymentRefundUpsertWithoutPaymentInput
    disconnect?: PaymentRefundWhereInput | boolean
    delete?: PaymentRefundWhereInput | boolean
    connect?: PaymentRefundWhereUniqueInput
    update?: XOR<XOR<PaymentRefundUpdateToOneWithWhereWithoutPaymentInput, PaymentRefundUpdateWithoutPaymentInput>, PaymentRefundUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentCreateNestedOneWithoutPaymentItemsInput = {
    create?: XOR<PaymentCreateWithoutPaymentItemsInput, PaymentUncheckedCreateWithoutPaymentItemsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentItemsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutPaymentItemsNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentItemsInput, PaymentUncheckedCreateWithoutPaymentItemsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentItemsInput
    upsert?: PaymentUpsertWithoutPaymentItemsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPaymentItemsInput, PaymentUpdateWithoutPaymentItemsInput>, PaymentUncheckedUpdateWithoutPaymentItemsInput>
  }

  export type PaymentCreateNestedOneWithoutVirtualInput = {
    create?: XOR<PaymentCreateWithoutVirtualInput, PaymentUncheckedCreateWithoutVirtualInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutVirtualInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutVirtualNestedInput = {
    create?: XOR<PaymentCreateWithoutVirtualInput, PaymentUncheckedCreateWithoutVirtualInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutVirtualInput
    upsert?: PaymentUpsertWithoutVirtualInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutVirtualInput, PaymentUpdateWithoutVirtualInput>, PaymentUncheckedUpdateWithoutVirtualInput>
  }

  export type PaymentCreateNestedOneWithoutRefundInput = {
    create?: XOR<PaymentCreateWithoutRefundInput, PaymentUncheckedCreateWithoutRefundInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutRefundNestedInput = {
    create?: XOR<PaymentCreateWithoutRefundInput, PaymentUncheckedCreateWithoutRefundInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundInput
    upsert?: PaymentUpsertWithoutRefundInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRefundInput, PaymentUpdateWithoutRefundInput>, PaymentUncheckedUpdateWithoutRefundInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type OrderReqMsgCreateWithoutAccountInput = {
    message: string
    updatedAt: Date | string
  }

  export type OrderReqMsgUncheckedCreateWithoutAccountInput = {
    id?: number
    message: string
    updatedAt: Date | string
  }

  export type OrderReqMsgCreateOrConnectWithoutAccountInput = {
    where: OrderReqMsgWhereUniqueInput
    create: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput>
  }

  export type OrderReqMsgCreateManyAccountInputEnvelope = {
    data: OrderReqMsgCreateManyAccountInput | OrderReqMsgCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type OrderReqMsgUpsertWithWhereUniqueWithoutAccountInput = {
    where: OrderReqMsgWhereUniqueInput
    update: XOR<OrderReqMsgUpdateWithoutAccountInput, OrderReqMsgUncheckedUpdateWithoutAccountInput>
    create: XOR<OrderReqMsgCreateWithoutAccountInput, OrderReqMsgUncheckedCreateWithoutAccountInput>
  }

  export type OrderReqMsgUpdateWithWhereUniqueWithoutAccountInput = {
    where: OrderReqMsgWhereUniqueInput
    data: XOR<OrderReqMsgUpdateWithoutAccountInput, OrderReqMsgUncheckedUpdateWithoutAccountInput>
  }

  export type OrderReqMsgUpdateManyWithWhereWithoutAccountInput = {
    where: OrderReqMsgScalarWhereInput
    data: XOR<OrderReqMsgUpdateManyMutationInput, OrderReqMsgUncheckedUpdateManyWithoutAccountInput>
  }

  export type OrderReqMsgScalarWhereInput = {
    AND?: OrderReqMsgScalarWhereInput | OrderReqMsgScalarWhereInput[]
    OR?: OrderReqMsgScalarWhereInput[]
    NOT?: OrderReqMsgScalarWhereInput | OrderReqMsgScalarWhereInput[]
    id?: IntFilter<"OrderReqMsg"> | number
    accountId?: IntFilter<"OrderReqMsg"> | number
    message?: StringFilter<"OrderReqMsg"> | string
    updatedAt?: DateTimeFilter<"OrderReqMsg"> | Date | string
  }

  export type AccountCreateWithoutOrderReqMsgInput = {
    userId: string
    password: string
    email: string
    ykiho?: string | null
    saupkiho?: string | null
    token?: string | null
    expiryDate?: Date | string | null
    admin?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutOrderReqMsgInput = {
    id?: number
    userId: string
    password: string
    email: string
    ykiho?: string | null
    saupkiho?: string | null
    token?: string | null
    expiryDate?: Date | string | null
    admin?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutOrderReqMsgInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutOrderReqMsgInput, AccountUncheckedCreateWithoutOrderReqMsgInput>
  }

  export type AccountUpsertWithoutOrderReqMsgInput = {
    update: XOR<AccountUpdateWithoutOrderReqMsgInput, AccountUncheckedUpdateWithoutOrderReqMsgInput>
    create: XOR<AccountCreateWithoutOrderReqMsgInput, AccountUncheckedCreateWithoutOrderReqMsgInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutOrderReqMsgInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutOrderReqMsgInput, AccountUncheckedUpdateWithoutOrderReqMsgInput>
  }

  export type AccountUpdateWithoutOrderReqMsgInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutOrderReqMsgInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ykiho?: NullableStringFieldUpdateOperationsInput | string | null
    saupkiho?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateWithoutCartInput = {
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    code?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    fit?: BoolFilter<"CartItem"> | boolean
    createdDate?: DateTimeFilter<"CartItem"> | Date | string
    updatedDate?: DateTimeNullableFilter<"CartItem"> | Date | string | null
  }

  export type CartCreateWithoutCartItemsInput = {
    ykiho: string
  }

  export type CartUncheckedCreateWithoutCartItemsInput = {
    id?: number
    ykiho: string
  }

  export type CartCreateOrConnectWithoutCartItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutCartItemsInput = {
    update: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartUpdateWithoutCartItemsInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
  }

  export type CartUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentItemCreateWithoutPaymentInput = {
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
  }

  export type PaymentItemUncheckedCreateWithoutPaymentInput = {
    id?: number
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
  }

  export type PaymentItemCreateOrConnectWithoutPaymentInput = {
    where: PaymentItemWhereUniqueInput
    create: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentItemCreateManyPaymentInputEnvelope = {
    data: PaymentItemCreateManyPaymentInput | PaymentItemCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentVirtualCreateWithoutPaymentInput = {
    bankCode: string
    customerName: string
    dueDate: Date | string
    accountNumber: string
  }

  export type PaymentVirtualUncheckedCreateWithoutPaymentInput = {
    id?: number
    bankCode: string
    customerName: string
    dueDate: Date | string
    accountNumber: string
  }

  export type PaymentVirtualCreateOrConnectWithoutPaymentInput = {
    where: PaymentVirtualWhereUniqueInput
    create: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentRefundCreateWithoutPaymentInput = {
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
  }

  export type PaymentRefundUncheckedCreateWithoutPaymentInput = {
    id?: number
    bank: string
    accountNumber: string
    holderName: string
    amount: number
    reason: string
  }

  export type PaymentRefundCreateOrConnectWithoutPaymentInput = {
    where: PaymentRefundWhereUniqueInput
    create: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentItemUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentItemWhereUniqueInput
    update: XOR<PaymentItemUpdateWithoutPaymentInput, PaymentItemUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentItemCreateWithoutPaymentInput, PaymentItemUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentItemUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentItemWhereUniqueInput
    data: XOR<PaymentItemUpdateWithoutPaymentInput, PaymentItemUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentItemUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentItemScalarWhereInput
    data: XOR<PaymentItemUpdateManyMutationInput, PaymentItemUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentItemScalarWhereInput = {
    AND?: PaymentItemScalarWhereInput | PaymentItemScalarWhereInput[]
    OR?: PaymentItemScalarWhereInput[]
    NOT?: PaymentItemScalarWhereInput | PaymentItemScalarWhereInput[]
    id?: IntFilter<"PaymentItem"> | number
    paymentId?: IntFilter<"PaymentItem"> | number
    code?: StringFilter<"PaymentItem"> | string
    name?: StringFilter<"PaymentItem"> | string
    fit?: BoolFilter<"PaymentItem"> | boolean
    quantity?: IntFilter<"PaymentItem"> | number
    amount?: FloatFilter<"PaymentItem"> | number
  }

  export type PaymentVirtualUpsertWithoutPaymentInput = {
    update: XOR<PaymentVirtualUpdateWithoutPaymentInput, PaymentVirtualUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentVirtualCreateWithoutPaymentInput, PaymentVirtualUncheckedCreateWithoutPaymentInput>
    where?: PaymentVirtualWhereInput
  }

  export type PaymentVirtualUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PaymentVirtualWhereInput
    data: XOR<PaymentVirtualUpdateWithoutPaymentInput, PaymentVirtualUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentVirtualUpdateWithoutPaymentInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentVirtualUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accountNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRefundUpsertWithoutPaymentInput = {
    update: XOR<PaymentRefundUpdateWithoutPaymentInput, PaymentRefundUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentRefundCreateWithoutPaymentInput, PaymentRefundUncheckedCreateWithoutPaymentInput>
    where?: PaymentRefundWhereInput
  }

  export type PaymentRefundUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PaymentRefundWhereInput
    data: XOR<PaymentRefundUpdateWithoutPaymentInput, PaymentRefundUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentRefundUpdateWithoutPaymentInput = {
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentRefundUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateWithoutPaymentItemsInput = {
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    virtual?: PaymentVirtualCreateNestedOneWithoutPaymentInput
    refund?: PaymentRefundCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPaymentItemsInput = {
    id?: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    virtual?: PaymentVirtualUncheckedCreateNestedOneWithoutPaymentInput
    refund?: PaymentRefundUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPaymentItemsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPaymentItemsInput, PaymentUncheckedCreateWithoutPaymentItemsInput>
  }

  export type PaymentUpsertWithoutPaymentItemsInput = {
    update: XOR<PaymentUpdateWithoutPaymentItemsInput, PaymentUncheckedUpdateWithoutPaymentItemsInput>
    create: XOR<PaymentCreateWithoutPaymentItemsInput, PaymentUncheckedCreateWithoutPaymentItemsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutPaymentItemsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutPaymentItemsInput, PaymentUncheckedUpdateWithoutPaymentItemsInput>
  }

  export type PaymentUpdateWithoutPaymentItemsInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    virtual?: PaymentVirtualUpdateOneWithoutPaymentNestedInput
    refund?: PaymentRefundUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPaymentItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    virtual?: PaymentVirtualUncheckedUpdateOneWithoutPaymentNestedInput
    refund?: PaymentRefundUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutVirtualInput = {
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemCreateNestedManyWithoutPaymentInput
    refund?: PaymentRefundCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutVirtualInput = {
    id?: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemUncheckedCreateNestedManyWithoutPaymentInput
    refund?: PaymentRefundUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutVirtualInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutVirtualInput, PaymentUncheckedCreateWithoutVirtualInput>
  }

  export type PaymentUpsertWithoutVirtualInput = {
    update: XOR<PaymentUpdateWithoutVirtualInput, PaymentUncheckedUpdateWithoutVirtualInput>
    create: XOR<PaymentCreateWithoutVirtualInput, PaymentUncheckedCreateWithoutVirtualInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutVirtualInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutVirtualInput, PaymentUncheckedUpdateWithoutVirtualInput>
  }

  export type PaymentUpdateWithoutVirtualInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUpdateManyWithoutPaymentNestedInput
    refund?: PaymentRefundUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutVirtualInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUncheckedUpdateManyWithoutPaymentNestedInput
    refund?: PaymentRefundUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutRefundInput = {
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemCreateNestedManyWithoutPaymentInput
    virtual?: PaymentVirtualCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRefundInput = {
    id?: number
    ykiho: string
    orderId: string
    paymentKey: string
    customerName: string
    method: string
    amount: number
    quantity: number
    requestedAt?: Date | string | null
    approvedAt?: Date | string | null
    sendType: string
    cancel: boolean
    test?: number | null
    paymentItems?: PaymentItemUncheckedCreateNestedManyWithoutPaymentInput
    virtual?: PaymentVirtualUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutRefundInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRefundInput, PaymentUncheckedCreateWithoutRefundInput>
  }

  export type PaymentUpsertWithoutRefundInput = {
    update: XOR<PaymentUpdateWithoutRefundInput, PaymentUncheckedUpdateWithoutRefundInput>
    create: XOR<PaymentCreateWithoutRefundInput, PaymentUncheckedCreateWithoutRefundInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRefundInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRefundInput, PaymentUncheckedUpdateWithoutRefundInput>
  }

  export type PaymentUpdateWithoutRefundInput = {
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUpdateManyWithoutPaymentNestedInput
    virtual?: PaymentVirtualUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRefundInput = {
    id?: IntFieldUpdateOperationsInput | number
    ykiho?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentKey?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sendType?: StringFieldUpdateOperationsInput | string
    cancel?: BoolFieldUpdateOperationsInput | boolean
    test?: NullableIntFieldUpdateOperationsInput | number | null
    paymentItems?: PaymentItemUncheckedUpdateManyWithoutPaymentNestedInput
    virtual?: PaymentVirtualUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type OrderReqMsgCreateManyAccountInput = {
    id?: number
    message: string
    updatedAt: Date | string
  }

  export type OrderReqMsgUpdateWithoutAccountInput = {
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderReqMsgUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderReqMsgUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyCartInput = {
    id?: number
    code: string
    quantity: number
    fit: boolean
    createdDate?: Date | string
    updatedDate?: Date | string | null
  }

  export type CartItemUpdateWithoutCartInput = {
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fit?: BoolFieldUpdateOperationsInput | boolean
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentItemCreateManyPaymentInput = {
    id?: number
    code: string
    name: string
    fit: boolean
    quantity: number
    amount: number
  }

  export type PaymentItemUpdateWithoutPaymentInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentItemUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentItemUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fit?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartCountOutputTypeDefaultArgs instead
     */
    export type CartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentCountOutputTypeDefaultArgs instead
     */
    export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderReqMsgDefaultArgs instead
     */
    export type OrderReqMsgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderReqMsgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductListDefaultArgs instead
     */
    export type ProductListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductListSubDefaultArgs instead
     */
    export type ProductListSubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductListSubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductLogDefaultArgs instead
     */
    export type ProductLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductListWebBunryuDefaultArgs instead
     */
    export type ProductListWebBunryuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductListWebBunryuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductListImageDefaultArgs instead
     */
    export type ProductListImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductListImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CsDefaultArgs instead
     */
    export type CsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartDefaultArgs instead
     */
    export type CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartItemDefaultArgs instead
     */
    export type CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentItemDefaultArgs instead
     */
    export type PaymentItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentVirtualDefaultArgs instead
     */
    export type PaymentVirtualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentVirtualDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentRefundDefaultArgs instead
     */
    export type PaymentRefundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentRefundDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmDefaultArgs instead
     */
    export type EmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewCpmMsgDefaultArgs instead
     */
    export type NewCpmMsgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewCpmMsgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PgMsgDefaultArgs instead
     */
    export type PgMsgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PgMsgDefaultArgs<ExtArgs>

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