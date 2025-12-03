
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Dosen
 * 
 */
export type Dosen = $Result.DefaultSelection<Prisma.$DosenPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Matakuliah
 * 
 */
export type Matakuliah = $Result.DefaultSelection<Prisma.$MatakuliahPayload>
/**
 * Model Penjadwalan
 * 
 */
export type Penjadwalan = $Result.DefaultSelection<Prisma.$PenjadwalanPayload>
/**
 * Model Krs
 * 
 */
export type Krs = $Result.DefaultSelection<Prisma.$KrsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<ExtArgs>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs>;

  /**
   * `prisma.matakuliah`: Exposes CRUD operations for the **Matakuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matakuliahs
    * const matakuliahs = await prisma.matakuliah.findMany()
    * ```
    */
  get matakuliah(): Prisma.MatakuliahDelegate<ExtArgs>;

  /**
   * `prisma.penjadwalan`: Exposes CRUD operations for the **Penjadwalan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjadwalans
    * const penjadwalans = await prisma.penjadwalan.findMany()
    * ```
    */
  get penjadwalan(): Prisma.PenjadwalanDelegate<ExtArgs>;

  /**
   * `prisma.krs`: Exposes CRUD operations for the **Krs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Krs
    * const krs = await prisma.krs.findMany()
    * ```
    */
  get krs(): Prisma.KrsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
    User: 'User',
    Dosen: 'Dosen',
    Mahasiswa: 'Mahasiswa',
    Matakuliah: 'Matakuliah',
    Penjadwalan: 'Penjadwalan',
    Krs: 'Krs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "dosen" | "mahasiswa" | "matakuliah" | "penjadwalan" | "krs"
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
      Dosen: {
        payload: Prisma.$DosenPayload<ExtArgs>
        fields: Prisma.DosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findFirst: {
            args: Prisma.DosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findMany: {
            args: Prisma.DosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          create: {
            args: Prisma.DosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          createMany: {
            args: Prisma.DosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          update: {
            args: Prisma.DosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          deleteMany: {
            args: Prisma.DosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.DosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      Matakuliah: {
        payload: Prisma.$MatakuliahPayload<ExtArgs>
        fields: Prisma.MatakuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatakuliahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatakuliahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          findFirst: {
            args: Prisma.MatakuliahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatakuliahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          findMany: {
            args: Prisma.MatakuliahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>[]
          }
          create: {
            args: Prisma.MatakuliahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          createMany: {
            args: Prisma.MatakuliahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatakuliahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          update: {
            args: Prisma.MatakuliahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          deleteMany: {
            args: Prisma.MatakuliahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatakuliahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatakuliahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatakuliahPayload>
          }
          aggregate: {
            args: Prisma.MatakuliahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatakuliah>
          }
          groupBy: {
            args: Prisma.MatakuliahGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatakuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatakuliahCountArgs<ExtArgs>
            result: $Utils.Optional<MatakuliahCountAggregateOutputType> | number
          }
        }
      }
      Penjadwalan: {
        payload: Prisma.$PenjadwalanPayload<ExtArgs>
        fields: Prisma.PenjadwalanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenjadwalanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenjadwalanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          findFirst: {
            args: Prisma.PenjadwalanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenjadwalanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          findMany: {
            args: Prisma.PenjadwalanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>[]
          }
          create: {
            args: Prisma.PenjadwalanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          createMany: {
            args: Prisma.PenjadwalanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PenjadwalanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          update: {
            args: Prisma.PenjadwalanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          deleteMany: {
            args: Prisma.PenjadwalanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenjadwalanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PenjadwalanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjadwalanPayload>
          }
          aggregate: {
            args: Prisma.PenjadwalanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjadwalan>
          }
          groupBy: {
            args: Prisma.PenjadwalanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjadwalanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenjadwalanCountArgs<ExtArgs>
            result: $Utils.Optional<PenjadwalanCountAggregateOutputType> | number
          }
        }
      }
      Krs: {
        payload: Prisma.$KrsPayload<ExtArgs>
        fields: Prisma.KrsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KrsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KrsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          findFirst: {
            args: Prisma.KrsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KrsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          findMany: {
            args: Prisma.KrsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>[]
          }
          create: {
            args: Prisma.KrsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          createMany: {
            args: Prisma.KrsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KrsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          update: {
            args: Prisma.KrsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          deleteMany: {
            args: Prisma.KrsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KrsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KrsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KrsPayload>
          }
          aggregate: {
            args: Prisma.KrsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKrs>
          }
          groupBy: {
            args: Prisma.KrsGroupByArgs<ExtArgs>
            result: $Utils.Optional<KrsGroupByOutputType>[]
          }
          count: {
            args: Prisma.KrsCountArgs<ExtArgs>
            result: $Utils.Optional<KrsCountAggregateOutputType> | number
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
    | 'createManyAndReturn'
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
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    matakuliah: number
    penjadwalan: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matakuliah?: boolean | DosenCountOutputTypeCountMatakuliahArgs
    penjadwalan?: boolean | DosenCountOutputTypeCountPenjadwalanArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountMatakuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatakuliahWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountPenjadwalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    krs: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    krs?: boolean | MahasiswaCountOutputTypeCountKrsArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountKrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KrsWhereInput
  }


  /**
   * Count Type MatakuliahCountOutputType
   */

  export type MatakuliahCountOutputType = {
    penjadwalan: number
    krs: number
  }

  export type MatakuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjadwalan?: boolean | MatakuliahCountOutputTypeCountPenjadwalanArgs
    krs?: boolean | MatakuliahCountOutputTypeCountKrsArgs
  }

  // Custom InputTypes
  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatakuliahCountOutputType
     */
    select?: MatakuliahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeCountPenjadwalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
  }

  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeCountKrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KrsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    mahasiswaId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    mahasiswaId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    mahasiswaId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    mahasiswaId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    mahasiswaId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    mahasiswaId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    mahasiswaId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    mahasiswaId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    mahasiswaId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    mahasiswaId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    mahasiswaId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    role?: boolean
    mahasiswaId?: boolean
    mahasiswa?: boolean | User$mahasiswaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    mahasiswaId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | User$mahasiswaArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      mahasiswaId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends User$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, User$mahasiswaArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly mahasiswaId: FieldRef<"User", 'Int'>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }

  /**
   * User.mahasiswa
   */
  export type User$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenAvgAggregateOutputType = {
    id: number | null
    nidn: number | null
  }

  export type DosenSumAggregateOutputType = {
    id: number | null
    nidn: number | null
  }

  export type DosenMinAggregateOutputType = {
    id: number | null
    nidn: number | null
    nama_dosen: string | null
    jenis_kelamin: string | null
    alamat: string | null
  }

  export type DosenMaxAggregateOutputType = {
    id: number | null
    nidn: number | null
    nama_dosen: string | null
    jenis_kelamin: string | null
    alamat: string | null
  }

  export type DosenCountAggregateOutputType = {
    id: number
    nidn: number
    nama_dosen: number
    jenis_kelamin: number
    alamat: number
    _all: number
  }


  export type DosenAvgAggregateInputType = {
    id?: true
    nidn?: true
  }

  export type DosenSumAggregateInputType = {
    id?: true
    nidn?: true
  }

  export type DosenMinAggregateInputType = {
    id?: true
    nidn?: true
    nama_dosen?: true
    jenis_kelamin?: true
    alamat?: true
  }

  export type DosenMaxAggregateInputType = {
    id?: true
    nidn?: true
    nama_dosen?: true
    jenis_kelamin?: true
    alamat?: true
  }

  export type DosenCountAggregateInputType = {
    id?: true
    nidn?: true
    nama_dosen?: true
    jenis_kelamin?: true
    alamat?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosen to aggregate.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DosenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DosenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithAggregationInput | DosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _avg?: DosenAvgAggregateInputType
    _sum?: DosenSumAggregateInputType
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    id: number
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nidn?: boolean
    nama_dosen?: boolean
    jenis_kelamin?: boolean
    alamat?: boolean
    matakuliah?: boolean | Dosen$matakuliahArgs<ExtArgs>
    penjadwalan?: boolean | Dosen$penjadwalanArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>


  export type DosenSelectScalar = {
    id?: boolean
    nidn?: boolean
    nama_dosen?: boolean
    jenis_kelamin?: boolean
    alamat?: boolean
  }

  export type DosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matakuliah?: boolean | Dosen$matakuliahArgs<ExtArgs>
    penjadwalan?: boolean | Dosen$penjadwalanArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dosen"
    objects: {
      matakuliah: Prisma.$MatakuliahPayload<ExtArgs>[]
      penjadwalan: Prisma.$PenjadwalanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nidn: number
      nama_dosen: string
      jenis_kelamin: string
      alamat: string
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type DosenGetPayload<S extends boolean | null | undefined | DosenDefaultArgs> = $Result.GetResult<Prisma.$DosenPayload, S>

  type DosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DosenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface DosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dosen'], meta: { name: 'Dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosenFindUniqueArgs>(args: SelectSubset<T, DosenFindUniqueArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(args: SelectSubset<T, DosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosenFindFirstArgs>(args?: SelectSubset<T, DosenFindFirstArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(args?: SelectSubset<T, DosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dosenWithIdOnly = await prisma.dosen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DosenFindManyArgs>(args?: SelectSubset<T, DosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends DosenCreateArgs>(args: SelectSubset<T, DosenCreateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dosens.
     * @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosenCreateManyArgs>(args?: SelectSubset<T, DosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends DosenDeleteArgs>(args: SelectSubset<T, DosenDeleteArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosenUpdateArgs>(args: SelectSubset<T, DosenUpdateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosenDeleteManyArgs>(args?: SelectSubset<T, DosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosenUpdateManyArgs>(args: SelectSubset<T, DosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends DosenUpsertArgs>(args: SelectSubset<T, DosenUpsertArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
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
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dosen model
   */
  readonly fields: DosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matakuliah<T extends Dosen$matakuliahArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$matakuliahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findMany"> | Null>
    penjadwalan<T extends Dosen$penjadwalanArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$penjadwalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Dosen model
   */ 
  interface DosenFieldRefs {
    readonly id: FieldRef<"Dosen", 'Int'>
    readonly nidn: FieldRef<"Dosen", 'Int'>
    readonly nama_dosen: FieldRef<"Dosen", 'String'>
    readonly jenis_kelamin: FieldRef<"Dosen", 'String'>
    readonly alamat: FieldRef<"Dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dosen findUnique
   */
  export type DosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findFirst
   */
  export type DosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosens to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen create
   */
  export type DosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dosen.
     */
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }

  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen update
   */
  export type DosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dosen.
     */
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
  }

  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     */
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     */
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }

  /**
   * Dosen delete
   */
  export type DosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter which Dosen to delete.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosens to delete
     */
    where?: DosenWhereInput
  }

  /**
   * Dosen.matakuliah
   */
  export type Dosen$matakuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    where?: MatakuliahWhereInput
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    cursor?: MatakuliahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * Dosen.penjadwalan
   */
  export type Dosen$penjadwalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    where?: PenjadwalanWhereInput
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    cursor?: PenjadwalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }

  /**
   * Dosen without action
   */
  export type DosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    id: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    id: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id: number | null
    nim: string | null
    nama_mahasiswa: string | null
    jenis_kelamin: string | null
    jurusan: string | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id: number | null
    nim: string | null
    nama_mahasiswa: string | null
    jenis_kelamin: string | null
    jurusan: string | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id: number
    nim: number
    nama_mahasiswa: number
    jenis_kelamin: number
    jurusan: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    id?: true
  }

  export type MahasiswaSumAggregateInputType = {
    id?: true
  }

  export type MahasiswaMinAggregateInputType = {
    id?: true
    nim?: true
    nama_mahasiswa?: true
    jenis_kelamin?: true
    jurusan?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id?: true
    nim?: true
    nama_mahasiswa?: true
    jenis_kelamin?: true
    jurusan?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id?: true
    nim?: true
    nama_mahasiswa?: true
    jenis_kelamin?: true
    jurusan?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id: number
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nama_mahasiswa?: boolean
    jenis_kelamin?: boolean
    jurusan?: boolean
    user?: boolean | Mahasiswa$userArgs<ExtArgs>
    krs?: boolean | Mahasiswa$krsArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>


  export type MahasiswaSelectScalar = {
    id?: boolean
    nim?: boolean
    nama_mahasiswa?: boolean
    jenis_kelamin?: boolean
    jurusan?: boolean
  }

  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Mahasiswa$userArgs<ExtArgs>
    krs?: boolean | Mahasiswa$krsArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      krs: Prisma.$KrsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nim: string
      nama_mahasiswa: string
      jenis_kelamin: string
      jurusan: string
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Mahasiswa$userArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    krs<T extends Mahasiswa$krsArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$krsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Mahasiswa model
   */ 
  interface MahasiswaFieldRefs {
    readonly id: FieldRef<"Mahasiswa", 'Int'>
    readonly nim: FieldRef<"Mahasiswa", 'String'>
    readonly nama_mahasiswa: FieldRef<"Mahasiswa", 'String'>
    readonly jenis_kelamin: FieldRef<"Mahasiswa", 'String'>
    readonly jurusan: FieldRef<"Mahasiswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
  }

  /**
   * Mahasiswa.user
   */
  export type Mahasiswa$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Mahasiswa.krs
   */
  export type Mahasiswa$krsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    where?: KrsWhereInput
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    cursor?: KrsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KrsScalarFieldEnum | KrsScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model Matakuliah
   */

  export type AggregateMatakuliah = {
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  export type MatakuliahAvgAggregateOutputType = {
    id_matakuliah: number | null
    sks: number | null
    id_dosen: number | null
  }

  export type MatakuliahSumAggregateOutputType = {
    id_matakuliah: number | null
    sks: number | null
    id_dosen: number | null
  }

  export type MatakuliahMinAggregateOutputType = {
    id_matakuliah: number | null
    nama_matakuliah: string | null
    sks: number | null
    id_dosen: number | null
  }

  export type MatakuliahMaxAggregateOutputType = {
    id_matakuliah: number | null
    nama_matakuliah: string | null
    sks: number | null
    id_dosen: number | null
  }

  export type MatakuliahCountAggregateOutputType = {
    id_matakuliah: number
    nama_matakuliah: number
    sks: number
    id_dosen: number
    _all: number
  }


  export type MatakuliahAvgAggregateInputType = {
    id_matakuliah?: true
    sks?: true
    id_dosen?: true
  }

  export type MatakuliahSumAggregateInputType = {
    id_matakuliah?: true
    sks?: true
    id_dosen?: true
  }

  export type MatakuliahMinAggregateInputType = {
    id_matakuliah?: true
    nama_matakuliah?: true
    sks?: true
    id_dosen?: true
  }

  export type MatakuliahMaxAggregateInputType = {
    id_matakuliah?: true
    nama_matakuliah?: true
    sks?: true
    id_dosen?: true
  }

  export type MatakuliahCountAggregateInputType = {
    id_matakuliah?: true
    nama_matakuliah?: true
    sks?: true
    id_dosen?: true
    _all?: true
  }

  export type MatakuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matakuliah to aggregate.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matakuliahs
    **/
    _count?: true | MatakuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatakuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatakuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatakuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatakuliahMaxAggregateInputType
  }

  export type GetMatakuliahAggregateType<T extends MatakuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMatakuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatakuliah[P]>
      : GetScalarType<T[P], AggregateMatakuliah[P]>
  }




  export type MatakuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatakuliahWhereInput
    orderBy?: MatakuliahOrderByWithAggregationInput | MatakuliahOrderByWithAggregationInput[]
    by: MatakuliahScalarFieldEnum[] | MatakuliahScalarFieldEnum
    having?: MatakuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatakuliahCountAggregateInputType | true
    _avg?: MatakuliahAvgAggregateInputType
    _sum?: MatakuliahSumAggregateInputType
    _min?: MatakuliahMinAggregateInputType
    _max?: MatakuliahMaxAggregateInputType
  }

  export type MatakuliahGroupByOutputType = {
    id_matakuliah: number
    nama_matakuliah: string
    sks: number
    id_dosen: number
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  type GetMatakuliahGroupByPayload<T extends MatakuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatakuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatakuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
            : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
        }
      >
    >


  export type MatakuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_matakuliah?: boolean
    nama_matakuliah?: boolean
    sks?: boolean
    id_dosen?: boolean
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    penjadwalan?: boolean | Matakuliah$penjadwalanArgs<ExtArgs>
    krs?: boolean | Matakuliah$krsArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matakuliah"]>


  export type MatakuliahSelectScalar = {
    id_matakuliah?: boolean
    nama_matakuliah?: boolean
    sks?: boolean
    id_dosen?: boolean
  }

  export type MatakuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    penjadwalan?: boolean | Matakuliah$penjadwalanArgs<ExtArgs>
    krs?: boolean | Matakuliah$krsArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MatakuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matakuliah"
    objects: {
      dosen: Prisma.$DosenPayload<ExtArgs>
      penjadwalan: Prisma.$PenjadwalanPayload<ExtArgs>[]
      krs: Prisma.$KrsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_matakuliah: number
      nama_matakuliah: string
      sks: number
      id_dosen: number
    }, ExtArgs["result"]["matakuliah"]>
    composites: {}
  }

  type MatakuliahGetPayload<S extends boolean | null | undefined | MatakuliahDefaultArgs> = $Result.GetResult<Prisma.$MatakuliahPayload, S>

  type MatakuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatakuliahFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatakuliahCountAggregateInputType | true
    }

  export interface MatakuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matakuliah'], meta: { name: 'Matakuliah' } }
    /**
     * Find zero or one Matakuliah that matches the filter.
     * @param {MatakuliahFindUniqueArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatakuliahFindUniqueArgs>(args: SelectSubset<T, MatakuliahFindUniqueArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Matakuliah that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatakuliahFindUniqueOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatakuliahFindUniqueOrThrowArgs>(args: SelectSubset<T, MatakuliahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Matakuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindFirstArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatakuliahFindFirstArgs>(args?: SelectSubset<T, MatakuliahFindFirstArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Matakuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindFirstOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatakuliahFindFirstOrThrowArgs>(args?: SelectSubset<T, MatakuliahFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matakuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany()
     * 
     * // Get first 10 Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany({ take: 10 })
     * 
     * // Only select the `id_matakuliah`
     * const matakuliahWithId_matakuliahOnly = await prisma.matakuliah.findMany({ select: { id_matakuliah: true } })
     * 
     */
    findMany<T extends MatakuliahFindManyArgs>(args?: SelectSubset<T, MatakuliahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Matakuliah.
     * @param {MatakuliahCreateArgs} args - Arguments to create a Matakuliah.
     * @example
     * // Create one Matakuliah
     * const Matakuliah = await prisma.matakuliah.create({
     *   data: {
     *     // ... data to create a Matakuliah
     *   }
     * })
     * 
     */
    create<T extends MatakuliahCreateArgs>(args: SelectSubset<T, MatakuliahCreateArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matakuliahs.
     * @param {MatakuliahCreateManyArgs} args - Arguments to create many Matakuliahs.
     * @example
     * // Create many Matakuliahs
     * const matakuliah = await prisma.matakuliah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatakuliahCreateManyArgs>(args?: SelectSubset<T, MatakuliahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matakuliah.
     * @param {MatakuliahDeleteArgs} args - Arguments to delete one Matakuliah.
     * @example
     * // Delete one Matakuliah
     * const Matakuliah = await prisma.matakuliah.delete({
     *   where: {
     *     // ... filter to delete one Matakuliah
     *   }
     * })
     * 
     */
    delete<T extends MatakuliahDeleteArgs>(args: SelectSubset<T, MatakuliahDeleteArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Matakuliah.
     * @param {MatakuliahUpdateArgs} args - Arguments to update one Matakuliah.
     * @example
     * // Update one Matakuliah
     * const matakuliah = await prisma.matakuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatakuliahUpdateArgs>(args: SelectSubset<T, MatakuliahUpdateArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matakuliahs.
     * @param {MatakuliahDeleteManyArgs} args - Arguments to filter Matakuliahs to delete.
     * @example
     * // Delete a few Matakuliahs
     * const { count } = await prisma.matakuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatakuliahDeleteManyArgs>(args?: SelectSubset<T, MatakuliahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matakuliahs
     * const matakuliah = await prisma.matakuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatakuliahUpdateManyArgs>(args: SelectSubset<T, MatakuliahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matakuliah.
     * @param {MatakuliahUpsertArgs} args - Arguments to update or create a Matakuliah.
     * @example
     * // Update or create a Matakuliah
     * const matakuliah = await prisma.matakuliah.upsert({
     *   create: {
     *     // ... data to create a Matakuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matakuliah we want to update
     *   }
     * })
     */
    upsert<T extends MatakuliahUpsertArgs>(args: SelectSubset<T, MatakuliahUpsertArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahCountArgs} args - Arguments to filter Matakuliahs to count.
     * @example
     * // Count the number of Matakuliahs
     * const count = await prisma.matakuliah.count({
     *   where: {
     *     // ... the filter for the Matakuliahs we want to count
     *   }
     * })
    **/
    count<T extends MatakuliahCountArgs>(
      args?: Subset<T, MatakuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatakuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatakuliahAggregateArgs>(args: Subset<T, MatakuliahAggregateArgs>): Prisma.PrismaPromise<GetMatakuliahAggregateType<T>>

    /**
     * Group by Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahGroupByArgs} args - Group by arguments.
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
      T extends MatakuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatakuliahGroupByArgs['orderBy'] }
        : { orderBy?: MatakuliahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatakuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatakuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matakuliah model
   */
  readonly fields: MatakuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matakuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatakuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    penjadwalan<T extends Matakuliah$penjadwalanArgs<ExtArgs> = {}>(args?: Subset<T, Matakuliah$penjadwalanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findMany"> | Null>
    krs<T extends Matakuliah$krsArgs<ExtArgs> = {}>(args?: Subset<T, Matakuliah$krsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Matakuliah model
   */ 
  interface MatakuliahFieldRefs {
    readonly id_matakuliah: FieldRef<"Matakuliah", 'Int'>
    readonly nama_matakuliah: FieldRef<"Matakuliah", 'String'>
    readonly sks: FieldRef<"Matakuliah", 'Int'>
    readonly id_dosen: FieldRef<"Matakuliah", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Matakuliah findUnique
   */
  export type MatakuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where: MatakuliahWhereUniqueInput
  }

  /**
   * Matakuliah findUniqueOrThrow
   */
  export type MatakuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where: MatakuliahWhereUniqueInput
  }

  /**
   * Matakuliah findFirst
   */
  export type MatakuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * Matakuliah findFirstOrThrow
   */
  export type MatakuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliah to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * Matakuliah findMany
   */
  export type MatakuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter, which Matakuliahs to fetch.
     */
    where?: MatakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matakuliahs to fetch.
     */
    orderBy?: MatakuliahOrderByWithRelationInput | MatakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matakuliahs.
     */
    cursor?: MatakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matakuliahs.
     */
    skip?: number
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * Matakuliah create
   */
  export type MatakuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a Matakuliah.
     */
    data: XOR<MatakuliahCreateInput, MatakuliahUncheckedCreateInput>
  }

  /**
   * Matakuliah createMany
   */
  export type MatakuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matakuliahs.
     */
    data: MatakuliahCreateManyInput | MatakuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matakuliah update
   */
  export type MatakuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a Matakuliah.
     */
    data: XOR<MatakuliahUpdateInput, MatakuliahUncheckedUpdateInput>
    /**
     * Choose, which Matakuliah to update.
     */
    where: MatakuliahWhereUniqueInput
  }

  /**
   * Matakuliah updateMany
   */
  export type MatakuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matakuliahs.
     */
    data: XOR<MatakuliahUpdateManyMutationInput, MatakuliahUncheckedUpdateManyInput>
    /**
     * Filter which Matakuliahs to update
     */
    where?: MatakuliahWhereInput
  }

  /**
   * Matakuliah upsert
   */
  export type MatakuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the Matakuliah to update in case it exists.
     */
    where: MatakuliahWhereUniqueInput
    /**
     * In case the Matakuliah found by the `where` argument doesn't exist, create a new Matakuliah with this data.
     */
    create: XOR<MatakuliahCreateInput, MatakuliahUncheckedCreateInput>
    /**
     * In case the Matakuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatakuliahUpdateInput, MatakuliahUncheckedUpdateInput>
  }

  /**
   * Matakuliah delete
   */
  export type MatakuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
    /**
     * Filter which Matakuliah to delete.
     */
    where: MatakuliahWhereUniqueInput
  }

  /**
   * Matakuliah deleteMany
   */
  export type MatakuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matakuliahs to delete
     */
    where?: MatakuliahWhereInput
  }

  /**
   * Matakuliah.penjadwalan
   */
  export type Matakuliah$penjadwalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    where?: PenjadwalanWhereInput
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    cursor?: PenjadwalanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }

  /**
   * Matakuliah.krs
   */
  export type Matakuliah$krsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    where?: KrsWhereInput
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    cursor?: KrsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KrsScalarFieldEnum | KrsScalarFieldEnum[]
  }

  /**
   * Matakuliah without action
   */
  export type MatakuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matakuliah
     */
    select?: MatakuliahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatakuliahInclude<ExtArgs> | null
  }


  /**
   * Model Penjadwalan
   */

  export type AggregatePenjadwalan = {
    _count: PenjadwalanCountAggregateOutputType | null
    _avg: PenjadwalanAvgAggregateOutputType | null
    _sum: PenjadwalanSumAggregateOutputType | null
    _min: PenjadwalanMinAggregateOutputType | null
    _max: PenjadwalanMaxAggregateOutputType | null
  }

  export type PenjadwalanAvgAggregateOutputType = {
    id: number | null
    id_dosen: number | null
    id_matakuliah: number | null
    semester: number | null
  }

  export type PenjadwalanSumAggregateOutputType = {
    id: number | null
    id_dosen: number | null
    id_matakuliah: number | null
    semester: number | null
  }

  export type PenjadwalanMinAggregateOutputType = {
    id: number | null
    id_dosen: number | null
    id_matakuliah: number | null
    jadwal: string | null
    tahun_ajaran: string | null
    semester: number | null
  }

  export type PenjadwalanMaxAggregateOutputType = {
    id: number | null
    id_dosen: number | null
    id_matakuliah: number | null
    jadwal: string | null
    tahun_ajaran: string | null
    semester: number | null
  }

  export type PenjadwalanCountAggregateOutputType = {
    id: number
    id_dosen: number
    id_matakuliah: number
    jadwal: number
    tahun_ajaran: number
    semester: number
    _all: number
  }


  export type PenjadwalanAvgAggregateInputType = {
    id?: true
    id_dosen?: true
    id_matakuliah?: true
    semester?: true
  }

  export type PenjadwalanSumAggregateInputType = {
    id?: true
    id_dosen?: true
    id_matakuliah?: true
    semester?: true
  }

  export type PenjadwalanMinAggregateInputType = {
    id?: true
    id_dosen?: true
    id_matakuliah?: true
    jadwal?: true
    tahun_ajaran?: true
    semester?: true
  }

  export type PenjadwalanMaxAggregateInputType = {
    id?: true
    id_dosen?: true
    id_matakuliah?: true
    jadwal?: true
    tahun_ajaran?: true
    semester?: true
  }

  export type PenjadwalanCountAggregateInputType = {
    id?: true
    id_dosen?: true
    id_matakuliah?: true
    jadwal?: true
    tahun_ajaran?: true
    semester?: true
    _all?: true
  }

  export type PenjadwalanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjadwalan to aggregate.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penjadwalans
    **/
    _count?: true | PenjadwalanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjadwalanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjadwalanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjadwalanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjadwalanMaxAggregateInputType
  }

  export type GetPenjadwalanAggregateType<T extends PenjadwalanAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjadwalan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjadwalan[P]>
      : GetScalarType<T[P], AggregatePenjadwalan[P]>
  }




  export type PenjadwalanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjadwalanWhereInput
    orderBy?: PenjadwalanOrderByWithAggregationInput | PenjadwalanOrderByWithAggregationInput[]
    by: PenjadwalanScalarFieldEnum[] | PenjadwalanScalarFieldEnum
    having?: PenjadwalanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjadwalanCountAggregateInputType | true
    _avg?: PenjadwalanAvgAggregateInputType
    _sum?: PenjadwalanSumAggregateInputType
    _min?: PenjadwalanMinAggregateInputType
    _max?: PenjadwalanMaxAggregateInputType
  }

  export type PenjadwalanGroupByOutputType = {
    id: number
    id_dosen: number
    id_matakuliah: number
    jadwal: string
    tahun_ajaran: string
    semester: number
    _count: PenjadwalanCountAggregateOutputType | null
    _avg: PenjadwalanAvgAggregateOutputType | null
    _sum: PenjadwalanSumAggregateOutputType | null
    _min: PenjadwalanMinAggregateOutputType | null
    _max: PenjadwalanMaxAggregateOutputType | null
  }

  type GetPenjadwalanGroupByPayload<T extends PenjadwalanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjadwalanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjadwalanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjadwalanGroupByOutputType[P]>
            : GetScalarType<T[P], PenjadwalanGroupByOutputType[P]>
        }
      >
    >


  export type PenjadwalanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_dosen?: boolean
    id_matakuliah?: boolean
    jadwal?: boolean
    tahun_ajaran?: boolean
    semester?: boolean
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    matakuliah?: boolean | MatakuliahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjadwalan"]>


  export type PenjadwalanSelectScalar = {
    id?: boolean
    id_dosen?: boolean
    id_matakuliah?: boolean
    jadwal?: boolean
    tahun_ajaran?: boolean
    semester?: boolean
  }

  export type PenjadwalanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | DosenDefaultArgs<ExtArgs>
    matakuliah?: boolean | MatakuliahDefaultArgs<ExtArgs>
  }

  export type $PenjadwalanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penjadwalan"
    objects: {
      dosen: Prisma.$DosenPayload<ExtArgs>
      matakuliah: Prisma.$MatakuliahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_dosen: number
      id_matakuliah: number
      jadwal: string
      tahun_ajaran: string
      semester: number
    }, ExtArgs["result"]["penjadwalan"]>
    composites: {}
  }

  type PenjadwalanGetPayload<S extends boolean | null | undefined | PenjadwalanDefaultArgs> = $Result.GetResult<Prisma.$PenjadwalanPayload, S>

  type PenjadwalanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PenjadwalanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PenjadwalanCountAggregateInputType | true
    }

  export interface PenjadwalanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penjadwalan'], meta: { name: 'Penjadwalan' } }
    /**
     * Find zero or one Penjadwalan that matches the filter.
     * @param {PenjadwalanFindUniqueArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenjadwalanFindUniqueArgs>(args: SelectSubset<T, PenjadwalanFindUniqueArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Penjadwalan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PenjadwalanFindUniqueOrThrowArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenjadwalanFindUniqueOrThrowArgs>(args: SelectSubset<T, PenjadwalanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Penjadwalan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindFirstArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenjadwalanFindFirstArgs>(args?: SelectSubset<T, PenjadwalanFindFirstArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Penjadwalan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindFirstOrThrowArgs} args - Arguments to find a Penjadwalan
     * @example
     * // Get one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenjadwalanFindFirstOrThrowArgs>(args?: SelectSubset<T, PenjadwalanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Penjadwalans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjadwalans
     * const penjadwalans = await prisma.penjadwalan.findMany()
     * 
     * // Get first 10 Penjadwalans
     * const penjadwalans = await prisma.penjadwalan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjadwalanWithIdOnly = await prisma.penjadwalan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenjadwalanFindManyArgs>(args?: SelectSubset<T, PenjadwalanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Penjadwalan.
     * @param {PenjadwalanCreateArgs} args - Arguments to create a Penjadwalan.
     * @example
     * // Create one Penjadwalan
     * const Penjadwalan = await prisma.penjadwalan.create({
     *   data: {
     *     // ... data to create a Penjadwalan
     *   }
     * })
     * 
     */
    create<T extends PenjadwalanCreateArgs>(args: SelectSubset<T, PenjadwalanCreateArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Penjadwalans.
     * @param {PenjadwalanCreateManyArgs} args - Arguments to create many Penjadwalans.
     * @example
     * // Create many Penjadwalans
     * const penjadwalan = await prisma.penjadwalan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenjadwalanCreateManyArgs>(args?: SelectSubset<T, PenjadwalanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penjadwalan.
     * @param {PenjadwalanDeleteArgs} args - Arguments to delete one Penjadwalan.
     * @example
     * // Delete one Penjadwalan
     * const Penjadwalan = await prisma.penjadwalan.delete({
     *   where: {
     *     // ... filter to delete one Penjadwalan
     *   }
     * })
     * 
     */
    delete<T extends PenjadwalanDeleteArgs>(args: SelectSubset<T, PenjadwalanDeleteArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Penjadwalan.
     * @param {PenjadwalanUpdateArgs} args - Arguments to update one Penjadwalan.
     * @example
     * // Update one Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenjadwalanUpdateArgs>(args: SelectSubset<T, PenjadwalanUpdateArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Penjadwalans.
     * @param {PenjadwalanDeleteManyArgs} args - Arguments to filter Penjadwalans to delete.
     * @example
     * // Delete a few Penjadwalans
     * const { count } = await prisma.penjadwalan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenjadwalanDeleteManyArgs>(args?: SelectSubset<T, PenjadwalanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjadwalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjadwalans
     * const penjadwalan = await prisma.penjadwalan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenjadwalanUpdateManyArgs>(args: SelectSubset<T, PenjadwalanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penjadwalan.
     * @param {PenjadwalanUpsertArgs} args - Arguments to update or create a Penjadwalan.
     * @example
     * // Update or create a Penjadwalan
     * const penjadwalan = await prisma.penjadwalan.upsert({
     *   create: {
     *     // ... data to create a Penjadwalan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjadwalan we want to update
     *   }
     * })
     */
    upsert<T extends PenjadwalanUpsertArgs>(args: SelectSubset<T, PenjadwalanUpsertArgs<ExtArgs>>): Prisma__PenjadwalanClient<$Result.GetResult<Prisma.$PenjadwalanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Penjadwalans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanCountArgs} args - Arguments to filter Penjadwalans to count.
     * @example
     * // Count the number of Penjadwalans
     * const count = await prisma.penjadwalan.count({
     *   where: {
     *     // ... the filter for the Penjadwalans we want to count
     *   }
     * })
    **/
    count<T extends PenjadwalanCountArgs>(
      args?: Subset<T, PenjadwalanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjadwalanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjadwalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjadwalanAggregateArgs>(args: Subset<T, PenjadwalanAggregateArgs>): Prisma.PrismaPromise<GetPenjadwalanAggregateType<T>>

    /**
     * Group by Penjadwalan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjadwalanGroupByArgs} args - Group by arguments.
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
      T extends PenjadwalanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenjadwalanGroupByArgs['orderBy'] }
        : { orderBy?: PenjadwalanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenjadwalanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjadwalanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penjadwalan model
   */
  readonly fields: PenjadwalanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penjadwalan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenjadwalanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    matakuliah<T extends MatakuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatakuliahDefaultArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Penjadwalan model
   */ 
  interface PenjadwalanFieldRefs {
    readonly id: FieldRef<"Penjadwalan", 'Int'>
    readonly id_dosen: FieldRef<"Penjadwalan", 'Int'>
    readonly id_matakuliah: FieldRef<"Penjadwalan", 'Int'>
    readonly jadwal: FieldRef<"Penjadwalan", 'String'>
    readonly tahun_ajaran: FieldRef<"Penjadwalan", 'String'>
    readonly semester: FieldRef<"Penjadwalan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Penjadwalan findUnique
   */
  export type PenjadwalanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where: PenjadwalanWhereUniqueInput
  }

  /**
   * Penjadwalan findUniqueOrThrow
   */
  export type PenjadwalanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where: PenjadwalanWhereUniqueInput
  }

  /**
   * Penjadwalan findFirst
   */
  export type PenjadwalanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjadwalans.
     */
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }

  /**
   * Penjadwalan findFirstOrThrow
   */
  export type PenjadwalanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalan to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjadwalans.
     */
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }

  /**
   * Penjadwalan findMany
   */
  export type PenjadwalanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter, which Penjadwalans to fetch.
     */
    where?: PenjadwalanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjadwalans to fetch.
     */
    orderBy?: PenjadwalanOrderByWithRelationInput | PenjadwalanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penjadwalans.
     */
    cursor?: PenjadwalanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjadwalans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjadwalans.
     */
    skip?: number
    distinct?: PenjadwalanScalarFieldEnum | PenjadwalanScalarFieldEnum[]
  }

  /**
   * Penjadwalan create
   */
  export type PenjadwalanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The data needed to create a Penjadwalan.
     */
    data: XOR<PenjadwalanCreateInput, PenjadwalanUncheckedCreateInput>
  }

  /**
   * Penjadwalan createMany
   */
  export type PenjadwalanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penjadwalans.
     */
    data: PenjadwalanCreateManyInput | PenjadwalanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penjadwalan update
   */
  export type PenjadwalanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The data needed to update a Penjadwalan.
     */
    data: XOR<PenjadwalanUpdateInput, PenjadwalanUncheckedUpdateInput>
    /**
     * Choose, which Penjadwalan to update.
     */
    where: PenjadwalanWhereUniqueInput
  }

  /**
   * Penjadwalan updateMany
   */
  export type PenjadwalanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penjadwalans.
     */
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyInput>
    /**
     * Filter which Penjadwalans to update
     */
    where?: PenjadwalanWhereInput
  }

  /**
   * Penjadwalan upsert
   */
  export type PenjadwalanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * The filter to search for the Penjadwalan to update in case it exists.
     */
    where: PenjadwalanWhereUniqueInput
    /**
     * In case the Penjadwalan found by the `where` argument doesn't exist, create a new Penjadwalan with this data.
     */
    create: XOR<PenjadwalanCreateInput, PenjadwalanUncheckedCreateInput>
    /**
     * In case the Penjadwalan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenjadwalanUpdateInput, PenjadwalanUncheckedUpdateInput>
  }

  /**
   * Penjadwalan delete
   */
  export type PenjadwalanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
    /**
     * Filter which Penjadwalan to delete.
     */
    where: PenjadwalanWhereUniqueInput
  }

  /**
   * Penjadwalan deleteMany
   */
  export type PenjadwalanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjadwalans to delete
     */
    where?: PenjadwalanWhereInput
  }

  /**
   * Penjadwalan without action
   */
  export type PenjadwalanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjadwalan
     */
    select?: PenjadwalanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjadwalanInclude<ExtArgs> | null
  }


  /**
   * Model Krs
   */

  export type AggregateKrs = {
    _count: KrsCountAggregateOutputType | null
    _avg: KrsAvgAggregateOutputType | null
    _sum: KrsSumAggregateOutputType | null
    _min: KrsMinAggregateOutputType | null
    _max: KrsMaxAggregateOutputType | null
  }

  export type KrsAvgAggregateOutputType = {
    id: number | null
    mahasiswa_id: number | null
    matakuliah_id: number | null
  }

  export type KrsSumAggregateOutputType = {
    id: number | null
    mahasiswa_id: number | null
    matakuliah_id: number | null
  }

  export type KrsMinAggregateOutputType = {
    id: number | null
    mahasiswa_id: number | null
    matakuliah_id: number | null
  }

  export type KrsMaxAggregateOutputType = {
    id: number | null
    mahasiswa_id: number | null
    matakuliah_id: number | null
  }

  export type KrsCountAggregateOutputType = {
    id: number
    mahasiswa_id: number
    matakuliah_id: number
    _all: number
  }


  export type KrsAvgAggregateInputType = {
    id?: true
    mahasiswa_id?: true
    matakuliah_id?: true
  }

  export type KrsSumAggregateInputType = {
    id?: true
    mahasiswa_id?: true
    matakuliah_id?: true
  }

  export type KrsMinAggregateInputType = {
    id?: true
    mahasiswa_id?: true
    matakuliah_id?: true
  }

  export type KrsMaxAggregateInputType = {
    id?: true
    mahasiswa_id?: true
    matakuliah_id?: true
  }

  export type KrsCountAggregateInputType = {
    id?: true
    mahasiswa_id?: true
    matakuliah_id?: true
    _all?: true
  }

  export type KrsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Krs to aggregate.
     */
    where?: KrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Krs to fetch.
     */
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Krs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Krs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Krs
    **/
    _count?: true | KrsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KrsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KrsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KrsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KrsMaxAggregateInputType
  }

  export type GetKrsAggregateType<T extends KrsAggregateArgs> = {
        [P in keyof T & keyof AggregateKrs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKrs[P]>
      : GetScalarType<T[P], AggregateKrs[P]>
  }




  export type KrsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KrsWhereInput
    orderBy?: KrsOrderByWithAggregationInput | KrsOrderByWithAggregationInput[]
    by: KrsScalarFieldEnum[] | KrsScalarFieldEnum
    having?: KrsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KrsCountAggregateInputType | true
    _avg?: KrsAvgAggregateInputType
    _sum?: KrsSumAggregateInputType
    _min?: KrsMinAggregateInputType
    _max?: KrsMaxAggregateInputType
  }

  export type KrsGroupByOutputType = {
    id: number
    mahasiswa_id: number
    matakuliah_id: number
    _count: KrsCountAggregateOutputType | null
    _avg: KrsAvgAggregateOutputType | null
    _sum: KrsSumAggregateOutputType | null
    _min: KrsMinAggregateOutputType | null
    _max: KrsMaxAggregateOutputType | null
  }

  type GetKrsGroupByPayload<T extends KrsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KrsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KrsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KrsGroupByOutputType[P]>
            : GetScalarType<T[P], KrsGroupByOutputType[P]>
        }
      >
    >


  export type KrsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswa_id?: boolean
    matakuliah_id?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    matakuliah?: boolean | MatakuliahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["krs"]>


  export type KrsSelectScalar = {
    id?: boolean
    mahasiswa_id?: boolean
    matakuliah_id?: boolean
  }

  export type KrsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    matakuliah?: boolean | MatakuliahDefaultArgs<ExtArgs>
  }

  export type $KrsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Krs"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      matakuliah: Prisma.$MatakuliahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mahasiswa_id: number
      matakuliah_id: number
    }, ExtArgs["result"]["krs"]>
    composites: {}
  }

  type KrsGetPayload<S extends boolean | null | undefined | KrsDefaultArgs> = $Result.GetResult<Prisma.$KrsPayload, S>

  type KrsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KrsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KrsCountAggregateInputType | true
    }

  export interface KrsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Krs'], meta: { name: 'Krs' } }
    /**
     * Find zero or one Krs that matches the filter.
     * @param {KrsFindUniqueArgs} args - Arguments to find a Krs
     * @example
     * // Get one Krs
     * const krs = await prisma.krs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KrsFindUniqueArgs>(args: SelectSubset<T, KrsFindUniqueArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Krs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KrsFindUniqueOrThrowArgs} args - Arguments to find a Krs
     * @example
     * // Get one Krs
     * const krs = await prisma.krs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KrsFindUniqueOrThrowArgs>(args: SelectSubset<T, KrsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Krs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsFindFirstArgs} args - Arguments to find a Krs
     * @example
     * // Get one Krs
     * const krs = await prisma.krs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KrsFindFirstArgs>(args?: SelectSubset<T, KrsFindFirstArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Krs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsFindFirstOrThrowArgs} args - Arguments to find a Krs
     * @example
     * // Get one Krs
     * const krs = await prisma.krs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KrsFindFirstOrThrowArgs>(args?: SelectSubset<T, KrsFindFirstOrThrowArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Krs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Krs
     * const krs = await prisma.krs.findMany()
     * 
     * // Get first 10 Krs
     * const krs = await prisma.krs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const krsWithIdOnly = await prisma.krs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KrsFindManyArgs>(args?: SelectSubset<T, KrsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Krs.
     * @param {KrsCreateArgs} args - Arguments to create a Krs.
     * @example
     * // Create one Krs
     * const Krs = await prisma.krs.create({
     *   data: {
     *     // ... data to create a Krs
     *   }
     * })
     * 
     */
    create<T extends KrsCreateArgs>(args: SelectSubset<T, KrsCreateArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Krs.
     * @param {KrsCreateManyArgs} args - Arguments to create many Krs.
     * @example
     * // Create many Krs
     * const krs = await prisma.krs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KrsCreateManyArgs>(args?: SelectSubset<T, KrsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Krs.
     * @param {KrsDeleteArgs} args - Arguments to delete one Krs.
     * @example
     * // Delete one Krs
     * const Krs = await prisma.krs.delete({
     *   where: {
     *     // ... filter to delete one Krs
     *   }
     * })
     * 
     */
    delete<T extends KrsDeleteArgs>(args: SelectSubset<T, KrsDeleteArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Krs.
     * @param {KrsUpdateArgs} args - Arguments to update one Krs.
     * @example
     * // Update one Krs
     * const krs = await prisma.krs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KrsUpdateArgs>(args: SelectSubset<T, KrsUpdateArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Krs.
     * @param {KrsDeleteManyArgs} args - Arguments to filter Krs to delete.
     * @example
     * // Delete a few Krs
     * const { count } = await prisma.krs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KrsDeleteManyArgs>(args?: SelectSubset<T, KrsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Krs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Krs
     * const krs = await prisma.krs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KrsUpdateManyArgs>(args: SelectSubset<T, KrsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Krs.
     * @param {KrsUpsertArgs} args - Arguments to update or create a Krs.
     * @example
     * // Update or create a Krs
     * const krs = await prisma.krs.upsert({
     *   create: {
     *     // ... data to create a Krs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Krs we want to update
     *   }
     * })
     */
    upsert<T extends KrsUpsertArgs>(args: SelectSubset<T, KrsUpsertArgs<ExtArgs>>): Prisma__KrsClient<$Result.GetResult<Prisma.$KrsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Krs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsCountArgs} args - Arguments to filter Krs to count.
     * @example
     * // Count the number of Krs
     * const count = await prisma.krs.count({
     *   where: {
     *     // ... the filter for the Krs we want to count
     *   }
     * })
    **/
    count<T extends KrsCountArgs>(
      args?: Subset<T, KrsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KrsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Krs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KrsAggregateArgs>(args: Subset<T, KrsAggregateArgs>): Prisma.PrismaPromise<GetKrsAggregateType<T>>

    /**
     * Group by Krs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KrsGroupByArgs} args - Group by arguments.
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
      T extends KrsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KrsGroupByArgs['orderBy'] }
        : { orderBy?: KrsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KrsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKrsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Krs model
   */
  readonly fields: KrsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Krs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KrsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    matakuliah<T extends MatakuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatakuliahDefaultArgs<ExtArgs>>): Prisma__MatakuliahClient<$Result.GetResult<Prisma.$MatakuliahPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Krs model
   */ 
  interface KrsFieldRefs {
    readonly id: FieldRef<"Krs", 'Int'>
    readonly mahasiswa_id: FieldRef<"Krs", 'Int'>
    readonly matakuliah_id: FieldRef<"Krs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Krs findUnique
   */
  export type KrsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter, which Krs to fetch.
     */
    where: KrsWhereUniqueInput
  }

  /**
   * Krs findUniqueOrThrow
   */
  export type KrsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter, which Krs to fetch.
     */
    where: KrsWhereUniqueInput
  }

  /**
   * Krs findFirst
   */
  export type KrsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter, which Krs to fetch.
     */
    where?: KrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Krs to fetch.
     */
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Krs.
     */
    cursor?: KrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Krs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Krs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Krs.
     */
    distinct?: KrsScalarFieldEnum | KrsScalarFieldEnum[]
  }

  /**
   * Krs findFirstOrThrow
   */
  export type KrsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter, which Krs to fetch.
     */
    where?: KrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Krs to fetch.
     */
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Krs.
     */
    cursor?: KrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Krs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Krs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Krs.
     */
    distinct?: KrsScalarFieldEnum | KrsScalarFieldEnum[]
  }

  /**
   * Krs findMany
   */
  export type KrsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter, which Krs to fetch.
     */
    where?: KrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Krs to fetch.
     */
    orderBy?: KrsOrderByWithRelationInput | KrsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Krs.
     */
    cursor?: KrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Krs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Krs.
     */
    skip?: number
    distinct?: KrsScalarFieldEnum | KrsScalarFieldEnum[]
  }

  /**
   * Krs create
   */
  export type KrsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * The data needed to create a Krs.
     */
    data: XOR<KrsCreateInput, KrsUncheckedCreateInput>
  }

  /**
   * Krs createMany
   */
  export type KrsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Krs.
     */
    data: KrsCreateManyInput | KrsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Krs update
   */
  export type KrsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * The data needed to update a Krs.
     */
    data: XOR<KrsUpdateInput, KrsUncheckedUpdateInput>
    /**
     * Choose, which Krs to update.
     */
    where: KrsWhereUniqueInput
  }

  /**
   * Krs updateMany
   */
  export type KrsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Krs.
     */
    data: XOR<KrsUpdateManyMutationInput, KrsUncheckedUpdateManyInput>
    /**
     * Filter which Krs to update
     */
    where?: KrsWhereInput
  }

  /**
   * Krs upsert
   */
  export type KrsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * The filter to search for the Krs to update in case it exists.
     */
    where: KrsWhereUniqueInput
    /**
     * In case the Krs found by the `where` argument doesn't exist, create a new Krs with this data.
     */
    create: XOR<KrsCreateInput, KrsUncheckedCreateInput>
    /**
     * In case the Krs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KrsUpdateInput, KrsUncheckedUpdateInput>
  }

  /**
   * Krs delete
   */
  export type KrsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
    /**
     * Filter which Krs to delete.
     */
    where: KrsWhereUniqueInput
  }

  /**
   * Krs deleteMany
   */
  export type KrsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Krs to delete
     */
    where?: KrsWhereInput
  }

  /**
   * Krs without action
   */
  export type KrsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Krs
     */
    select?: KrsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KrsInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role',
    mahasiswaId: 'mahasiswaId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id: 'id',
    nidn: 'nidn',
    nama_dosen: 'nama_dosen',
    jenis_kelamin: 'jenis_kelamin',
    alamat: 'alamat'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    nama_mahasiswa: 'nama_mahasiswa',
    jenis_kelamin: 'jenis_kelamin',
    jurusan: 'jurusan'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const MatakuliahScalarFieldEnum: {
    id_matakuliah: 'id_matakuliah',
    nama_matakuliah: 'nama_matakuliah',
    sks: 'sks',
    id_dosen: 'id_dosen'
  };

  export type MatakuliahScalarFieldEnum = (typeof MatakuliahScalarFieldEnum)[keyof typeof MatakuliahScalarFieldEnum]


  export const PenjadwalanScalarFieldEnum: {
    id: 'id',
    id_dosen: 'id_dosen',
    id_matakuliah: 'id_matakuliah',
    jadwal: 'jadwal',
    tahun_ajaran: 'tahun_ajaran',
    semester: 'semester'
  };

  export type PenjadwalanScalarFieldEnum = (typeof PenjadwalanScalarFieldEnum)[keyof typeof PenjadwalanScalarFieldEnum]


  export const KrsScalarFieldEnum: {
    id: 'id',
    mahasiswa_id: 'mahasiswa_id',
    matakuliah_id: 'matakuliah_id'
  };

  export type KrsScalarFieldEnum = (typeof KrsScalarFieldEnum)[keyof typeof KrsScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mahasiswaId?: IntNullableFilter<"User"> | number | null
    mahasiswa?: XOR<MahasiswaNullableRelationFilter, MahasiswaWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mahasiswaId?: SortOrderInput | SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    mahasiswaId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    mahasiswa?: XOR<MahasiswaNullableRelationFilter, MahasiswaWhereInput> | null
  }, "id" | "username" | "mahasiswaId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mahasiswaId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    mahasiswaId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type DosenWhereInput = {
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    id?: IntFilter<"Dosen"> | number
    nidn?: IntFilter<"Dosen"> | number
    nama_dosen?: StringFilter<"Dosen"> | string
    jenis_kelamin?: StringFilter<"Dosen"> | string
    alamat?: StringFilter<"Dosen"> | string
    matakuliah?: MatakuliahListRelationFilter
    penjadwalan?: PenjadwalanListRelationFilter
  }

  export type DosenOrderByWithRelationInput = {
    id?: SortOrder
    nidn?: SortOrder
    nama_dosen?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
    matakuliah?: MatakuliahOrderByRelationAggregateInput
    penjadwalan?: PenjadwalanOrderByRelationAggregateInput
  }

  export type DosenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nidn?: number
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    nama_dosen?: StringFilter<"Dosen"> | string
    jenis_kelamin?: StringFilter<"Dosen"> | string
    alamat?: StringFilter<"Dosen"> | string
    matakuliah?: MatakuliahListRelationFilter
    penjadwalan?: PenjadwalanListRelationFilter
  }, "id" | "nidn">

  export type DosenOrderByWithAggregationInput = {
    id?: SortOrder
    nidn?: SortOrder
    nama_dosen?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _avg?: DosenAvgOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
    _sum?: DosenSumOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    OR?: DosenScalarWhereWithAggregatesInput[]
    NOT?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dosen"> | number
    nidn?: IntWithAggregatesFilter<"Dosen"> | number
    nama_dosen?: StringWithAggregatesFilter<"Dosen"> | string
    jenis_kelamin?: StringWithAggregatesFilter<"Dosen"> | string
    alamat?: StringWithAggregatesFilter<"Dosen"> | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    id?: IntFilter<"Mahasiswa"> | number
    nim?: StringFilter<"Mahasiswa"> | string
    nama_mahasiswa?: StringFilter<"Mahasiswa"> | string
    jenis_kelamin?: StringFilter<"Mahasiswa"> | string
    jurusan?: StringFilter<"Mahasiswa"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    krs?: KrsListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama_mahasiswa?: SortOrder
    jenis_kelamin?: SortOrder
    jurusan?: SortOrder
    user?: UserOrderByWithRelationInput
    krs?: KrsOrderByRelationAggregateInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nim?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nama_mahasiswa?: StringFilter<"Mahasiswa"> | string
    jenis_kelamin?: StringFilter<"Mahasiswa"> | string
    jurusan?: StringFilter<"Mahasiswa"> | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    krs?: KrsListRelationFilter
  }, "id" | "nim">

  export type MahasiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama_mahasiswa?: SortOrder
    jenis_kelamin?: SortOrder
    jurusan?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _avg?: MahasiswaAvgOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
    _sum?: MahasiswaSumOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mahasiswa"> | number
    nim?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nama_mahasiswa?: StringWithAggregatesFilter<"Mahasiswa"> | string
    jenis_kelamin?: StringWithAggregatesFilter<"Mahasiswa"> | string
    jurusan?: StringWithAggregatesFilter<"Mahasiswa"> | string
  }

  export type MatakuliahWhereInput = {
    AND?: MatakuliahWhereInput | MatakuliahWhereInput[]
    OR?: MatakuliahWhereInput[]
    NOT?: MatakuliahWhereInput | MatakuliahWhereInput[]
    id_matakuliah?: IntFilter<"Matakuliah"> | number
    nama_matakuliah?: StringFilter<"Matakuliah"> | string
    sks?: IntFilter<"Matakuliah"> | number
    id_dosen?: IntFilter<"Matakuliah"> | number
    dosen?: XOR<DosenRelationFilter, DosenWhereInput>
    penjadwalan?: PenjadwalanListRelationFilter
    krs?: KrsListRelationFilter
  }

  export type MatakuliahOrderByWithRelationInput = {
    id_matakuliah?: SortOrder
    nama_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
    dosen?: DosenOrderByWithRelationInput
    penjadwalan?: PenjadwalanOrderByRelationAggregateInput
    krs?: KrsOrderByRelationAggregateInput
  }

  export type MatakuliahWhereUniqueInput = Prisma.AtLeast<{
    id_matakuliah?: number
    AND?: MatakuliahWhereInput | MatakuliahWhereInput[]
    OR?: MatakuliahWhereInput[]
    NOT?: MatakuliahWhereInput | MatakuliahWhereInput[]
    nama_matakuliah?: StringFilter<"Matakuliah"> | string
    sks?: IntFilter<"Matakuliah"> | number
    id_dosen?: IntFilter<"Matakuliah"> | number
    dosen?: XOR<DosenRelationFilter, DosenWhereInput>
    penjadwalan?: PenjadwalanListRelationFilter
    krs?: KrsListRelationFilter
  }, "id_matakuliah">

  export type MatakuliahOrderByWithAggregationInput = {
    id_matakuliah?: SortOrder
    nama_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
    _count?: MatakuliahCountOrderByAggregateInput
    _avg?: MatakuliahAvgOrderByAggregateInput
    _max?: MatakuliahMaxOrderByAggregateInput
    _min?: MatakuliahMinOrderByAggregateInput
    _sum?: MatakuliahSumOrderByAggregateInput
  }

  export type MatakuliahScalarWhereWithAggregatesInput = {
    AND?: MatakuliahScalarWhereWithAggregatesInput | MatakuliahScalarWhereWithAggregatesInput[]
    OR?: MatakuliahScalarWhereWithAggregatesInput[]
    NOT?: MatakuliahScalarWhereWithAggregatesInput | MatakuliahScalarWhereWithAggregatesInput[]
    id_matakuliah?: IntWithAggregatesFilter<"Matakuliah"> | number
    nama_matakuliah?: StringWithAggregatesFilter<"Matakuliah"> | string
    sks?: IntWithAggregatesFilter<"Matakuliah"> | number
    id_dosen?: IntWithAggregatesFilter<"Matakuliah"> | number
  }

  export type PenjadwalanWhereInput = {
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    id_dosen?: IntFilter<"Penjadwalan"> | number
    id_matakuliah?: IntFilter<"Penjadwalan"> | number
    jadwal?: StringFilter<"Penjadwalan"> | string
    tahun_ajaran?: StringFilter<"Penjadwalan"> | string
    semester?: IntFilter<"Penjadwalan"> | number
    dosen?: XOR<DosenRelationFilter, DosenWhereInput>
    matakuliah?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
  }

  export type PenjadwalanOrderByWithRelationInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    jadwal?: SortOrder
    tahun_ajaran?: SortOrder
    semester?: SortOrder
    dosen?: DosenOrderByWithRelationInput
    matakuliah?: MatakuliahOrderByWithRelationInput
  }

  export type PenjadwalanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    OR?: PenjadwalanWhereInput[]
    NOT?: PenjadwalanWhereInput | PenjadwalanWhereInput[]
    id_dosen?: IntFilter<"Penjadwalan"> | number
    id_matakuliah?: IntFilter<"Penjadwalan"> | number
    jadwal?: StringFilter<"Penjadwalan"> | string
    tahun_ajaran?: StringFilter<"Penjadwalan"> | string
    semester?: IntFilter<"Penjadwalan"> | number
    dosen?: XOR<DosenRelationFilter, DosenWhereInput>
    matakuliah?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
  }, "id">

  export type PenjadwalanOrderByWithAggregationInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    jadwal?: SortOrder
    tahun_ajaran?: SortOrder
    semester?: SortOrder
    _count?: PenjadwalanCountOrderByAggregateInput
    _avg?: PenjadwalanAvgOrderByAggregateInput
    _max?: PenjadwalanMaxOrderByAggregateInput
    _min?: PenjadwalanMinOrderByAggregateInput
    _sum?: PenjadwalanSumOrderByAggregateInput
  }

  export type PenjadwalanScalarWhereWithAggregatesInput = {
    AND?: PenjadwalanScalarWhereWithAggregatesInput | PenjadwalanScalarWhereWithAggregatesInput[]
    OR?: PenjadwalanScalarWhereWithAggregatesInput[]
    NOT?: PenjadwalanScalarWhereWithAggregatesInput | PenjadwalanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penjadwalan"> | number
    id_dosen?: IntWithAggregatesFilter<"Penjadwalan"> | number
    id_matakuliah?: IntWithAggregatesFilter<"Penjadwalan"> | number
    jadwal?: StringWithAggregatesFilter<"Penjadwalan"> | string
    tahun_ajaran?: StringWithAggregatesFilter<"Penjadwalan"> | string
    semester?: IntWithAggregatesFilter<"Penjadwalan"> | number
  }

  export type KrsWhereInput = {
    AND?: KrsWhereInput | KrsWhereInput[]
    OR?: KrsWhereInput[]
    NOT?: KrsWhereInput | KrsWhereInput[]
    id?: IntFilter<"Krs"> | number
    mahasiswa_id?: IntFilter<"Krs"> | number
    matakuliah_id?: IntFilter<"Krs"> | number
    mahasiswa?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
    matakuliah?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
  }

  export type KrsOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    matakuliah?: MatakuliahOrderByWithRelationInput
  }

  export type KrsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mahasiswa_id_matakuliah_id?: KrsMahasiswa_idMatakuliah_idCompoundUniqueInput
    AND?: KrsWhereInput | KrsWhereInput[]
    OR?: KrsWhereInput[]
    NOT?: KrsWhereInput | KrsWhereInput[]
    mahasiswa_id?: IntFilter<"Krs"> | number
    matakuliah_id?: IntFilter<"Krs"> | number
    mahasiswa?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
    matakuliah?: XOR<MatakuliahRelationFilter, MatakuliahWhereInput>
  }, "id" | "mahasiswa_id_matakuliah_id">

  export type KrsOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
    _count?: KrsCountOrderByAggregateInput
    _avg?: KrsAvgOrderByAggregateInput
    _max?: KrsMaxOrderByAggregateInput
    _min?: KrsMinOrderByAggregateInput
    _sum?: KrsSumOrderByAggregateInput
  }

  export type KrsScalarWhereWithAggregatesInput = {
    AND?: KrsScalarWhereWithAggregatesInput | KrsScalarWhereWithAggregatesInput[]
    OR?: KrsScalarWhereWithAggregatesInput[]
    NOT?: KrsScalarWhereWithAggregatesInput | KrsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Krs"> | number
    mahasiswa_id?: IntWithAggregatesFilter<"Krs"> | number
    matakuliah_id?: IntWithAggregatesFilter<"Krs"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: string
    mahasiswa?: MahasiswaCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: string
    mahasiswaId?: number | null
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mahasiswa?: MahasiswaUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: string
    mahasiswaId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DosenCreateInput = {
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    matakuliah?: MatakuliahCreateNestedManyWithoutDosenInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateInput = {
    id?: number
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    matakuliah?: MatakuliahUncheckedCreateNestedManyWithoutDosenInput
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenUpdateInput = {
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    matakuliah?: MatakuliahUpdateManyWithoutDosenNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    matakuliah?: MatakuliahUncheckedUpdateManyWithoutDosenNestedInput
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenCreateManyInput = {
    id?: number
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
  }

  export type DosenUpdateManyMutationInput = {
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DosenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateInput = {
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    user?: UserCreateNestedOneWithoutMahasiswaInput
    krs?: KrsCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id?: number
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    user?: UserUncheckedCreateNestedOneWithoutMahasiswaInput
    krs?: KrsUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutMahasiswaNestedInput
    krs?: KrsUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutMahasiswaNestedInput
    krs?: KrsUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id?: number
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
  }

  export type MahasiswaUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
  }

  export type MatakuliahCreateInput = {
    nama_matakuliah: string
    sks: number
    dosen: DosenCreateNestedOneWithoutMatakuliahInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutMatakuliahInput
    krs?: KrsCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahUncheckedCreateInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
    id_dosen: number
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutMatakuliahInput
    krs?: KrsUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahUpdateInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    dosen?: DosenUpdateOneRequiredWithoutMatakuliahNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutMatakuliahNestedInput
    krs?: KrsUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahUncheckedUpdateInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutMatakuliahNestedInput
    krs?: KrsUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahCreateManyInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
    id_dosen: number
  }

  export type MatakuliahUpdateManyMutationInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
  }

  export type MatakuliahUncheckedUpdateManyInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateInput = {
    jadwal: string
    tahun_ajaran: string
    semester: number
    dosen: DosenCreateNestedOneWithoutPenjadwalanInput
    matakuliah: MatakuliahCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateInput = {
    id?: number
    id_dosen: number
    id_matakuliah: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type PenjadwalanUpdateInput = {
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    dosen?: DosenUpdateOneRequiredWithoutPenjadwalanNestedInput
    matakuliah?: MatakuliahUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateManyInput = {
    id?: number
    id_dosen: number
    id_matakuliah: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type PenjadwalanUpdateManyMutationInput = {
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type KrsCreateInput = {
    mahasiswa: MahasiswaCreateNestedOneWithoutKrsInput
    matakuliah: MatakuliahCreateNestedOneWithoutKrsInput
  }

  export type KrsUncheckedCreateInput = {
    id?: number
    mahasiswa_id: number
    matakuliah_id: number
  }

  export type KrsUpdateInput = {
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKrsNestedInput
    matakuliah?: MatakuliahUpdateOneRequiredWithoutKrsNestedInput
  }

  export type KrsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mahasiswa_id?: IntFieldUpdateOperationsInput | number
    matakuliah_id?: IntFieldUpdateOperationsInput | number
  }

  export type KrsCreateManyInput = {
    id?: number
    mahasiswa_id: number
    matakuliah_id: number
  }

  export type KrsUpdateManyMutationInput = {

  }

  export type KrsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mahasiswa_id?: IntFieldUpdateOperationsInput | number
    matakuliah_id?: IntFieldUpdateOperationsInput | number
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

  export type MahasiswaNullableRelationFilter = {
    is?: MahasiswaWhereInput | null
    isNot?: MahasiswaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mahasiswaId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mahasiswaId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    mahasiswaId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
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

  export type MatakuliahListRelationFilter = {
    every?: MatakuliahWhereInput
    some?: MatakuliahWhereInput
    none?: MatakuliahWhereInput
  }

  export type PenjadwalanListRelationFilter = {
    every?: PenjadwalanWhereInput
    some?: PenjadwalanWhereInput
    none?: PenjadwalanWhereInput
  }

  export type MatakuliahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenjadwalanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosenCountOrderByAggregateInput = {
    id?: SortOrder
    nidn?: SortOrder
    nama_dosen?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
  }

  export type DosenAvgOrderByAggregateInput = {
    id?: SortOrder
    nidn?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    id?: SortOrder
    nidn?: SortOrder
    nama_dosen?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    id?: SortOrder
    nidn?: SortOrder
    nama_dosen?: SortOrder
    jenis_kelamin?: SortOrder
    alamat?: SortOrder
  }

  export type DosenSumOrderByAggregateInput = {
    id?: SortOrder
    nidn?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type KrsListRelationFilter = {
    every?: KrsWhereInput
    some?: KrsWhereInput
    none?: KrsWhereInput
  }

  export type KrsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama_mahasiswa?: SortOrder
    jenis_kelamin?: SortOrder
    jurusan?: SortOrder
  }

  export type MahasiswaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama_mahasiswa?: SortOrder
    jenis_kelamin?: SortOrder
    jurusan?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama_mahasiswa?: SortOrder
    jenis_kelamin?: SortOrder
    jurusan?: SortOrder
  }

  export type MahasiswaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DosenRelationFilter = {
    is?: DosenWhereInput
    isNot?: DosenWhereInput
  }

  export type MatakuliahCountOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    nama_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
  }

  export type MatakuliahAvgOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
  }

  export type MatakuliahMaxOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    nama_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
  }

  export type MatakuliahMinOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    nama_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
  }

  export type MatakuliahSumOrderByAggregateInput = {
    id_matakuliah?: SortOrder
    sks?: SortOrder
    id_dosen?: SortOrder
  }

  export type MatakuliahRelationFilter = {
    is?: MatakuliahWhereInput
    isNot?: MatakuliahWhereInput
  }

  export type PenjadwalanCountOrderByAggregateInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    jadwal?: SortOrder
    tahun_ajaran?: SortOrder
    semester?: SortOrder
  }

  export type PenjadwalanAvgOrderByAggregateInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    semester?: SortOrder
  }

  export type PenjadwalanMaxOrderByAggregateInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    jadwal?: SortOrder
    tahun_ajaran?: SortOrder
    semester?: SortOrder
  }

  export type PenjadwalanMinOrderByAggregateInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    jadwal?: SortOrder
    tahun_ajaran?: SortOrder
    semester?: SortOrder
  }

  export type PenjadwalanSumOrderByAggregateInput = {
    id?: SortOrder
    id_dosen?: SortOrder
    id_matakuliah?: SortOrder
    semester?: SortOrder
  }

  export type MahasiswaRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type KrsMahasiswa_idMatakuliah_idCompoundUniqueInput = {
    mahasiswa_id: number
    matakuliah_id: number
  }

  export type KrsCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
  }

  export type KrsAvgOrderByAggregateInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
  }

  export type KrsMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
  }

  export type KrsMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
  }

  export type KrsSumOrderByAggregateInput = {
    id?: SortOrder
    mahasiswa_id?: SortOrder
    matakuliah_id?: SortOrder
  }

  export type MahasiswaCreateNestedOneWithoutUserInput = {
    create?: XOR<MahasiswaCreateWithoutUserInput, MahasiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUserInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MahasiswaUpdateOneWithoutUserNestedInput = {
    create?: XOR<MahasiswaCreateWithoutUserInput, MahasiswaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutUserInput
    upsert?: MahasiswaUpsertWithoutUserInput
    disconnect?: MahasiswaWhereInput | boolean
    delete?: MahasiswaWhereInput | boolean
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutUserInput, MahasiswaUpdateWithoutUserInput>, MahasiswaUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
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

  export type MatakuliahCreateNestedManyWithoutDosenInput = {
    create?: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput> | MatakuliahCreateWithoutDosenInput[] | MatakuliahUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: MatakuliahCreateOrConnectWithoutDosenInput | MatakuliahCreateOrConnectWithoutDosenInput[]
    createMany?: MatakuliahCreateManyDosenInputEnvelope
    connect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
  }

  export type PenjadwalanCreateNestedManyWithoutDosenInput = {
    create?: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput> | PenjadwalanCreateWithoutDosenInput[] | PenjadwalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutDosenInput | PenjadwalanCreateOrConnectWithoutDosenInput[]
    createMany?: PenjadwalanCreateManyDosenInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type MatakuliahUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput> | MatakuliahCreateWithoutDosenInput[] | MatakuliahUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: MatakuliahCreateOrConnectWithoutDosenInput | MatakuliahCreateOrConnectWithoutDosenInput[]
    createMany?: MatakuliahCreateManyDosenInputEnvelope
    connect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
  }

  export type PenjadwalanUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput> | PenjadwalanCreateWithoutDosenInput[] | PenjadwalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutDosenInput | PenjadwalanCreateOrConnectWithoutDosenInput[]
    createMany?: PenjadwalanCreateManyDosenInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type MatakuliahUpdateManyWithoutDosenNestedInput = {
    create?: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput> | MatakuliahCreateWithoutDosenInput[] | MatakuliahUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: MatakuliahCreateOrConnectWithoutDosenInput | MatakuliahCreateOrConnectWithoutDosenInput[]
    upsert?: MatakuliahUpsertWithWhereUniqueWithoutDosenInput | MatakuliahUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: MatakuliahCreateManyDosenInputEnvelope
    set?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    disconnect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    delete?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    connect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    update?: MatakuliahUpdateWithWhereUniqueWithoutDosenInput | MatakuliahUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: MatakuliahUpdateManyWithWhereWithoutDosenInput | MatakuliahUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: MatakuliahScalarWhereInput | MatakuliahScalarWhereInput[]
  }

  export type PenjadwalanUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput> | PenjadwalanCreateWithoutDosenInput[] | PenjadwalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutDosenInput | PenjadwalanCreateOrConnectWithoutDosenInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutDosenInput | PenjadwalanUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PenjadwalanCreateManyDosenInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutDosenInput | PenjadwalanUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutDosenInput | PenjadwalanUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type MatakuliahUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput> | MatakuliahCreateWithoutDosenInput[] | MatakuliahUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: MatakuliahCreateOrConnectWithoutDosenInput | MatakuliahCreateOrConnectWithoutDosenInput[]
    upsert?: MatakuliahUpsertWithWhereUniqueWithoutDosenInput | MatakuliahUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: MatakuliahCreateManyDosenInputEnvelope
    set?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    disconnect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    delete?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    connect?: MatakuliahWhereUniqueInput | MatakuliahWhereUniqueInput[]
    update?: MatakuliahUpdateWithWhereUniqueWithoutDosenInput | MatakuliahUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: MatakuliahUpdateManyWithWhereWithoutDosenInput | MatakuliahUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: MatakuliahScalarWhereInput | MatakuliahScalarWhereInput[]
  }

  export type PenjadwalanUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput> | PenjadwalanCreateWithoutDosenInput[] | PenjadwalanUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutDosenInput | PenjadwalanCreateOrConnectWithoutDosenInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutDosenInput | PenjadwalanUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PenjadwalanCreateManyDosenInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutDosenInput | PenjadwalanUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutDosenInput | PenjadwalanUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMahasiswaInput
    connect?: UserWhereUniqueInput
  }

  export type KrsCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput> | KrsCreateWithoutMahasiswaInput[] | KrsUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMahasiswaInput | KrsCreateOrConnectWithoutMahasiswaInput[]
    createMany?: KrsCreateManyMahasiswaInputEnvelope
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMahasiswaInput
    connect?: UserWhereUniqueInput
  }

  export type KrsUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput> | KrsCreateWithoutMahasiswaInput[] | KrsUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMahasiswaInput | KrsCreateOrConnectWithoutMahasiswaInput[]
    createMany?: KrsCreateManyMahasiswaInputEnvelope
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMahasiswaInput
    upsert?: UserUpsertWithoutMahasiswaInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMahasiswaInput, UserUpdateWithoutMahasiswaInput>, UserUncheckedUpdateWithoutMahasiswaInput>
  }

  export type KrsUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput> | KrsCreateWithoutMahasiswaInput[] | KrsUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMahasiswaInput | KrsCreateOrConnectWithoutMahasiswaInput[]
    upsert?: KrsUpsertWithWhereUniqueWithoutMahasiswaInput | KrsUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: KrsCreateManyMahasiswaInputEnvelope
    set?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    disconnect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    delete?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    update?: KrsUpdateWithWhereUniqueWithoutMahasiswaInput | KrsUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: KrsUpdateManyWithWhereWithoutMahasiswaInput | KrsUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: KrsScalarWhereInput | KrsScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMahasiswaInput
    upsert?: UserUpsertWithoutMahasiswaInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMahasiswaInput, UserUpdateWithoutMahasiswaInput>, UserUncheckedUpdateWithoutMahasiswaInput>
  }

  export type KrsUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput> | KrsCreateWithoutMahasiswaInput[] | KrsUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMahasiswaInput | KrsCreateOrConnectWithoutMahasiswaInput[]
    upsert?: KrsUpsertWithWhereUniqueWithoutMahasiswaInput | KrsUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: KrsCreateManyMahasiswaInputEnvelope
    set?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    disconnect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    delete?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    update?: KrsUpdateWithWhereUniqueWithoutMahasiswaInput | KrsUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: KrsUpdateManyWithWhereWithoutMahasiswaInput | KrsUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: KrsScalarWhereInput | KrsScalarWhereInput[]
  }

  export type DosenCreateNestedOneWithoutMatakuliahInput = {
    create?: XOR<DosenCreateWithoutMatakuliahInput, DosenUncheckedCreateWithoutMatakuliahInput>
    connectOrCreate?: DosenCreateOrConnectWithoutMatakuliahInput
    connect?: DosenWhereUniqueInput
  }

  export type PenjadwalanCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput> | PenjadwalanCreateWithoutMatakuliahInput[] | PenjadwalanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutMatakuliahInput | PenjadwalanCreateOrConnectWithoutMatakuliahInput[]
    createMany?: PenjadwalanCreateManyMatakuliahInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type KrsCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput> | KrsCreateWithoutMatakuliahInput[] | KrsUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMatakuliahInput | KrsCreateOrConnectWithoutMatakuliahInput[]
    createMany?: KrsCreateManyMatakuliahInputEnvelope
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
  }

  export type PenjadwalanUncheckedCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput> | PenjadwalanCreateWithoutMatakuliahInput[] | PenjadwalanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutMatakuliahInput | PenjadwalanCreateOrConnectWithoutMatakuliahInput[]
    createMany?: PenjadwalanCreateManyMatakuliahInputEnvelope
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
  }

  export type KrsUncheckedCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput> | KrsCreateWithoutMatakuliahInput[] | KrsUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMatakuliahInput | KrsCreateOrConnectWithoutMatakuliahInput[]
    createMany?: KrsCreateManyMatakuliahInputEnvelope
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
  }

  export type DosenUpdateOneRequiredWithoutMatakuliahNestedInput = {
    create?: XOR<DosenCreateWithoutMatakuliahInput, DosenUncheckedCreateWithoutMatakuliahInput>
    connectOrCreate?: DosenCreateOrConnectWithoutMatakuliahInput
    upsert?: DosenUpsertWithoutMatakuliahInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutMatakuliahInput, DosenUpdateWithoutMatakuliahInput>, DosenUncheckedUpdateWithoutMatakuliahInput>
  }

  export type PenjadwalanUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput> | PenjadwalanCreateWithoutMatakuliahInput[] | PenjadwalanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutMatakuliahInput | PenjadwalanCreateOrConnectWithoutMatakuliahInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutMatakuliahInput | PenjadwalanUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: PenjadwalanCreateManyMatakuliahInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutMatakuliahInput | PenjadwalanUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutMatakuliahInput | PenjadwalanUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type KrsUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput> | KrsCreateWithoutMatakuliahInput[] | KrsUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMatakuliahInput | KrsCreateOrConnectWithoutMatakuliahInput[]
    upsert?: KrsUpsertWithWhereUniqueWithoutMatakuliahInput | KrsUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: KrsCreateManyMatakuliahInputEnvelope
    set?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    disconnect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    delete?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    update?: KrsUpdateWithWhereUniqueWithoutMatakuliahInput | KrsUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: KrsUpdateManyWithWhereWithoutMatakuliahInput | KrsUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: KrsScalarWhereInput | KrsScalarWhereInput[]
  }

  export type PenjadwalanUncheckedUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput> | PenjadwalanCreateWithoutMatakuliahInput[] | PenjadwalanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: PenjadwalanCreateOrConnectWithoutMatakuliahInput | PenjadwalanCreateOrConnectWithoutMatakuliahInput[]
    upsert?: PenjadwalanUpsertWithWhereUniqueWithoutMatakuliahInput | PenjadwalanUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: PenjadwalanCreateManyMatakuliahInputEnvelope
    set?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    disconnect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    delete?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    connect?: PenjadwalanWhereUniqueInput | PenjadwalanWhereUniqueInput[]
    update?: PenjadwalanUpdateWithWhereUniqueWithoutMatakuliahInput | PenjadwalanUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: PenjadwalanUpdateManyWithWhereWithoutMatakuliahInput | PenjadwalanUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
  }

  export type KrsUncheckedUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput> | KrsCreateWithoutMatakuliahInput[] | KrsUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: KrsCreateOrConnectWithoutMatakuliahInput | KrsCreateOrConnectWithoutMatakuliahInput[]
    upsert?: KrsUpsertWithWhereUniqueWithoutMatakuliahInput | KrsUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: KrsCreateManyMatakuliahInputEnvelope
    set?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    disconnect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    delete?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    connect?: KrsWhereUniqueInput | KrsWhereUniqueInput[]
    update?: KrsUpdateWithWhereUniqueWithoutMatakuliahInput | KrsUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: KrsUpdateManyWithWhereWithoutMatakuliahInput | KrsUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: KrsScalarWhereInput | KrsScalarWhereInput[]
  }

  export type DosenCreateNestedOneWithoutPenjadwalanInput = {
    create?: XOR<DosenCreateWithoutPenjadwalanInput, DosenUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenjadwalanInput
    connect?: DosenWhereUniqueInput
  }

  export type MatakuliahCreateNestedOneWithoutPenjadwalanInput = {
    create?: XOR<MatakuliahCreateWithoutPenjadwalanInput, MatakuliahUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutPenjadwalanInput
    connect?: MatakuliahWhereUniqueInput
  }

  export type DosenUpdateOneRequiredWithoutPenjadwalanNestedInput = {
    create?: XOR<DosenCreateWithoutPenjadwalanInput, DosenUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPenjadwalanInput
    upsert?: DosenUpsertWithoutPenjadwalanInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutPenjadwalanInput, DosenUpdateWithoutPenjadwalanInput>, DosenUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type MatakuliahUpdateOneRequiredWithoutPenjadwalanNestedInput = {
    create?: XOR<MatakuliahCreateWithoutPenjadwalanInput, MatakuliahUncheckedCreateWithoutPenjadwalanInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutPenjadwalanInput
    upsert?: MatakuliahUpsertWithoutPenjadwalanInput
    connect?: MatakuliahWhereUniqueInput
    update?: XOR<XOR<MatakuliahUpdateToOneWithWhereWithoutPenjadwalanInput, MatakuliahUpdateWithoutPenjadwalanInput>, MatakuliahUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type MahasiswaCreateNestedOneWithoutKrsInput = {
    create?: XOR<MahasiswaCreateWithoutKrsInput, MahasiswaUncheckedCreateWithoutKrsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKrsInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MatakuliahCreateNestedOneWithoutKrsInput = {
    create?: XOR<MatakuliahCreateWithoutKrsInput, MatakuliahUncheckedCreateWithoutKrsInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutKrsInput
    connect?: MatakuliahWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutKrsNestedInput = {
    create?: XOR<MahasiswaCreateWithoutKrsInput, MahasiswaUncheckedCreateWithoutKrsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKrsInput
    upsert?: MahasiswaUpsertWithoutKrsInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutKrsInput, MahasiswaUpdateWithoutKrsInput>, MahasiswaUncheckedUpdateWithoutKrsInput>
  }

  export type MatakuliahUpdateOneRequiredWithoutKrsNestedInput = {
    create?: XOR<MatakuliahCreateWithoutKrsInput, MatakuliahUncheckedCreateWithoutKrsInput>
    connectOrCreate?: MatakuliahCreateOrConnectWithoutKrsInput
    upsert?: MatakuliahUpsertWithoutKrsInput
    connect?: MatakuliahWhereUniqueInput
    update?: XOR<XOR<MatakuliahUpdateToOneWithWhereWithoutKrsInput, MatakuliahUpdateWithoutKrsInput>, MatakuliahUncheckedUpdateWithoutKrsInput>
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

  export type MahasiswaCreateWithoutUserInput = {
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    krs?: KrsCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutUserInput = {
    id?: number
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    krs?: KrsUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutUserInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutUserInput, MahasiswaUncheckedCreateWithoutUserInput>
  }

  export type MahasiswaUpsertWithoutUserInput = {
    update: XOR<MahasiswaUpdateWithoutUserInput, MahasiswaUncheckedUpdateWithoutUserInput>
    create: XOR<MahasiswaCreateWithoutUserInput, MahasiswaUncheckedCreateWithoutUserInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutUserInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutUserInput, MahasiswaUncheckedUpdateWithoutUserInput>
  }

  export type MahasiswaUpdateWithoutUserInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    krs?: KrsUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    krs?: KrsUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MatakuliahCreateWithoutDosenInput = {
    nama_matakuliah: string
    sks: number
    penjadwalan?: PenjadwalanCreateNestedManyWithoutMatakuliahInput
    krs?: KrsCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahUncheckedCreateWithoutDosenInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutMatakuliahInput
    krs?: KrsUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahCreateOrConnectWithoutDosenInput = {
    where: MatakuliahWhereUniqueInput
    create: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput>
  }

  export type MatakuliahCreateManyDosenInputEnvelope = {
    data: MatakuliahCreateManyDosenInput | MatakuliahCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type PenjadwalanCreateWithoutDosenInput = {
    jadwal: string
    tahun_ajaran: string
    semester: number
    matakuliah: MatakuliahCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateWithoutDosenInput = {
    id?: number
    id_matakuliah: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type PenjadwalanCreateOrConnectWithoutDosenInput = {
    where: PenjadwalanWhereUniqueInput
    create: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput>
  }

  export type PenjadwalanCreateManyDosenInputEnvelope = {
    data: PenjadwalanCreateManyDosenInput | PenjadwalanCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type MatakuliahUpsertWithWhereUniqueWithoutDosenInput = {
    where: MatakuliahWhereUniqueInput
    update: XOR<MatakuliahUpdateWithoutDosenInput, MatakuliahUncheckedUpdateWithoutDosenInput>
    create: XOR<MatakuliahCreateWithoutDosenInput, MatakuliahUncheckedCreateWithoutDosenInput>
  }

  export type MatakuliahUpdateWithWhereUniqueWithoutDosenInput = {
    where: MatakuliahWhereUniqueInput
    data: XOR<MatakuliahUpdateWithoutDosenInput, MatakuliahUncheckedUpdateWithoutDosenInput>
  }

  export type MatakuliahUpdateManyWithWhereWithoutDosenInput = {
    where: MatakuliahScalarWhereInput
    data: XOR<MatakuliahUpdateManyMutationInput, MatakuliahUncheckedUpdateManyWithoutDosenInput>
  }

  export type MatakuliahScalarWhereInput = {
    AND?: MatakuliahScalarWhereInput | MatakuliahScalarWhereInput[]
    OR?: MatakuliahScalarWhereInput[]
    NOT?: MatakuliahScalarWhereInput | MatakuliahScalarWhereInput[]
    id_matakuliah?: IntFilter<"Matakuliah"> | number
    nama_matakuliah?: StringFilter<"Matakuliah"> | string
    sks?: IntFilter<"Matakuliah"> | number
    id_dosen?: IntFilter<"Matakuliah"> | number
  }

  export type PenjadwalanUpsertWithWhereUniqueWithoutDosenInput = {
    where: PenjadwalanWhereUniqueInput
    update: XOR<PenjadwalanUpdateWithoutDosenInput, PenjadwalanUncheckedUpdateWithoutDosenInput>
    create: XOR<PenjadwalanCreateWithoutDosenInput, PenjadwalanUncheckedCreateWithoutDosenInput>
  }

  export type PenjadwalanUpdateWithWhereUniqueWithoutDosenInput = {
    where: PenjadwalanWhereUniqueInput
    data: XOR<PenjadwalanUpdateWithoutDosenInput, PenjadwalanUncheckedUpdateWithoutDosenInput>
  }

  export type PenjadwalanUpdateManyWithWhereWithoutDosenInput = {
    where: PenjadwalanScalarWhereInput
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyWithoutDosenInput>
  }

  export type PenjadwalanScalarWhereInput = {
    AND?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    OR?: PenjadwalanScalarWhereInput[]
    NOT?: PenjadwalanScalarWhereInput | PenjadwalanScalarWhereInput[]
    id?: IntFilter<"Penjadwalan"> | number
    id_dosen?: IntFilter<"Penjadwalan"> | number
    id_matakuliah?: IntFilter<"Penjadwalan"> | number
    jadwal?: StringFilter<"Penjadwalan"> | string
    tahun_ajaran?: StringFilter<"Penjadwalan"> | string
    semester?: IntFilter<"Penjadwalan"> | number
  }

  export type UserCreateWithoutMahasiswaInput = {
    username: string
    password: string
    role: string
  }

  export type UserUncheckedCreateWithoutMahasiswaInput = {
    id?: number
    username: string
    password: string
    role: string
  }

  export type UserCreateOrConnectWithoutMahasiswaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
  }

  export type KrsCreateWithoutMahasiswaInput = {
    matakuliah: MatakuliahCreateNestedOneWithoutKrsInput
  }

  export type KrsUncheckedCreateWithoutMahasiswaInput = {
    id?: number
    matakuliah_id: number
  }

  export type KrsCreateOrConnectWithoutMahasiswaInput = {
    where: KrsWhereUniqueInput
    create: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput>
  }

  export type KrsCreateManyMahasiswaInputEnvelope = {
    data: KrsCreateManyMahasiswaInput | KrsCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMahasiswaInput = {
    update: XOR<UserUpdateWithoutMahasiswaInput, UserUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<UserCreateWithoutMahasiswaInput, UserUncheckedCreateWithoutMahasiswaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMahasiswaInput, UserUncheckedUpdateWithoutMahasiswaInput>
  }

  export type UserUpdateWithoutMahasiswaInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type KrsUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: KrsWhereUniqueInput
    update: XOR<KrsUpdateWithoutMahasiswaInput, KrsUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<KrsCreateWithoutMahasiswaInput, KrsUncheckedCreateWithoutMahasiswaInput>
  }

  export type KrsUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: KrsWhereUniqueInput
    data: XOR<KrsUpdateWithoutMahasiswaInput, KrsUncheckedUpdateWithoutMahasiswaInput>
  }

  export type KrsUpdateManyWithWhereWithoutMahasiswaInput = {
    where: KrsScalarWhereInput
    data: XOR<KrsUpdateManyMutationInput, KrsUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type KrsScalarWhereInput = {
    AND?: KrsScalarWhereInput | KrsScalarWhereInput[]
    OR?: KrsScalarWhereInput[]
    NOT?: KrsScalarWhereInput | KrsScalarWhereInput[]
    id?: IntFilter<"Krs"> | number
    mahasiswa_id?: IntFilter<"Krs"> | number
    matakuliah_id?: IntFilter<"Krs"> | number
  }

  export type DosenCreateWithoutMatakuliahInput = {
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    penjadwalan?: PenjadwalanCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutMatakuliahInput = {
    id?: number
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutMatakuliahInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutMatakuliahInput, DosenUncheckedCreateWithoutMatakuliahInput>
  }

  export type PenjadwalanCreateWithoutMatakuliahInput = {
    jadwal: string
    tahun_ajaran: string
    semester: number
    dosen: DosenCreateNestedOneWithoutPenjadwalanInput
  }

  export type PenjadwalanUncheckedCreateWithoutMatakuliahInput = {
    id?: number
    id_dosen: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type PenjadwalanCreateOrConnectWithoutMatakuliahInput = {
    where: PenjadwalanWhereUniqueInput
    create: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput>
  }

  export type PenjadwalanCreateManyMatakuliahInputEnvelope = {
    data: PenjadwalanCreateManyMatakuliahInput | PenjadwalanCreateManyMatakuliahInput[]
    skipDuplicates?: boolean
  }

  export type KrsCreateWithoutMatakuliahInput = {
    mahasiswa: MahasiswaCreateNestedOneWithoutKrsInput
  }

  export type KrsUncheckedCreateWithoutMatakuliahInput = {
    id?: number
    mahasiswa_id: number
  }

  export type KrsCreateOrConnectWithoutMatakuliahInput = {
    where: KrsWhereUniqueInput
    create: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput>
  }

  export type KrsCreateManyMatakuliahInputEnvelope = {
    data: KrsCreateManyMatakuliahInput | KrsCreateManyMatakuliahInput[]
    skipDuplicates?: boolean
  }

  export type DosenUpsertWithoutMatakuliahInput = {
    update: XOR<DosenUpdateWithoutMatakuliahInput, DosenUncheckedUpdateWithoutMatakuliahInput>
    create: XOR<DosenCreateWithoutMatakuliahInput, DosenUncheckedCreateWithoutMatakuliahInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutMatakuliahInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutMatakuliahInput, DosenUncheckedUpdateWithoutMatakuliahInput>
  }

  export type DosenUpdateWithoutMatakuliahInput = {
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutMatakuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type PenjadwalanUpsertWithWhereUniqueWithoutMatakuliahInput = {
    where: PenjadwalanWhereUniqueInput
    update: XOR<PenjadwalanUpdateWithoutMatakuliahInput, PenjadwalanUncheckedUpdateWithoutMatakuliahInput>
    create: XOR<PenjadwalanCreateWithoutMatakuliahInput, PenjadwalanUncheckedCreateWithoutMatakuliahInput>
  }

  export type PenjadwalanUpdateWithWhereUniqueWithoutMatakuliahInput = {
    where: PenjadwalanWhereUniqueInput
    data: XOR<PenjadwalanUpdateWithoutMatakuliahInput, PenjadwalanUncheckedUpdateWithoutMatakuliahInput>
  }

  export type PenjadwalanUpdateManyWithWhereWithoutMatakuliahInput = {
    where: PenjadwalanScalarWhereInput
    data: XOR<PenjadwalanUpdateManyMutationInput, PenjadwalanUncheckedUpdateManyWithoutMatakuliahInput>
  }

  export type KrsUpsertWithWhereUniqueWithoutMatakuliahInput = {
    where: KrsWhereUniqueInput
    update: XOR<KrsUpdateWithoutMatakuliahInput, KrsUncheckedUpdateWithoutMatakuliahInput>
    create: XOR<KrsCreateWithoutMatakuliahInput, KrsUncheckedCreateWithoutMatakuliahInput>
  }

  export type KrsUpdateWithWhereUniqueWithoutMatakuliahInput = {
    where: KrsWhereUniqueInput
    data: XOR<KrsUpdateWithoutMatakuliahInput, KrsUncheckedUpdateWithoutMatakuliahInput>
  }

  export type KrsUpdateManyWithWhereWithoutMatakuliahInput = {
    where: KrsScalarWhereInput
    data: XOR<KrsUpdateManyMutationInput, KrsUncheckedUpdateManyWithoutMatakuliahInput>
  }

  export type DosenCreateWithoutPenjadwalanInput = {
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    matakuliah?: MatakuliahCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutPenjadwalanInput = {
    id?: number
    nidn: number
    nama_dosen: string
    jenis_kelamin: string
    alamat: string
    matakuliah?: MatakuliahUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutPenjadwalanInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutPenjadwalanInput, DosenUncheckedCreateWithoutPenjadwalanInput>
  }

  export type MatakuliahCreateWithoutPenjadwalanInput = {
    nama_matakuliah: string
    sks: number
    dosen: DosenCreateNestedOneWithoutMatakuliahInput
    krs?: KrsCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahUncheckedCreateWithoutPenjadwalanInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
    id_dosen: number
    krs?: KrsUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahCreateOrConnectWithoutPenjadwalanInput = {
    where: MatakuliahWhereUniqueInput
    create: XOR<MatakuliahCreateWithoutPenjadwalanInput, MatakuliahUncheckedCreateWithoutPenjadwalanInput>
  }

  export type DosenUpsertWithoutPenjadwalanInput = {
    update: XOR<DosenUpdateWithoutPenjadwalanInput, DosenUncheckedUpdateWithoutPenjadwalanInput>
    create: XOR<DosenCreateWithoutPenjadwalanInput, DosenUncheckedCreateWithoutPenjadwalanInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutPenjadwalanInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutPenjadwalanInput, DosenUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type DosenUpdateWithoutPenjadwalanInput = {
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    matakuliah?: MatakuliahUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutPenjadwalanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nidn?: IntFieldUpdateOperationsInput | number
    nama_dosen?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    matakuliah?: MatakuliahUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type MatakuliahUpsertWithoutPenjadwalanInput = {
    update: XOR<MatakuliahUpdateWithoutPenjadwalanInput, MatakuliahUncheckedUpdateWithoutPenjadwalanInput>
    create: XOR<MatakuliahCreateWithoutPenjadwalanInput, MatakuliahUncheckedCreateWithoutPenjadwalanInput>
    where?: MatakuliahWhereInput
  }

  export type MatakuliahUpdateToOneWithWhereWithoutPenjadwalanInput = {
    where?: MatakuliahWhereInput
    data: XOR<MatakuliahUpdateWithoutPenjadwalanInput, MatakuliahUncheckedUpdateWithoutPenjadwalanInput>
  }

  export type MatakuliahUpdateWithoutPenjadwalanInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    dosen?: DosenUpdateOneRequiredWithoutMatakuliahNestedInput
    krs?: KrsUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahUncheckedUpdateWithoutPenjadwalanInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    krs?: KrsUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type MahasiswaCreateWithoutKrsInput = {
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    user?: UserCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutKrsInput = {
    id?: number
    nim: string
    nama_mahasiswa: string
    jenis_kelamin: string
    jurusan: string
    user?: UserUncheckedCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutKrsInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutKrsInput, MahasiswaUncheckedCreateWithoutKrsInput>
  }

  export type MatakuliahCreateWithoutKrsInput = {
    nama_matakuliah: string
    sks: number
    dosen: DosenCreateNestedOneWithoutMatakuliahInput
    penjadwalan?: PenjadwalanCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahUncheckedCreateWithoutKrsInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
    id_dosen: number
    penjadwalan?: PenjadwalanUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type MatakuliahCreateOrConnectWithoutKrsInput = {
    where: MatakuliahWhereUniqueInput
    create: XOR<MatakuliahCreateWithoutKrsInput, MatakuliahUncheckedCreateWithoutKrsInput>
  }

  export type MahasiswaUpsertWithoutKrsInput = {
    update: XOR<MahasiswaUpdateWithoutKrsInput, MahasiswaUncheckedUpdateWithoutKrsInput>
    create: XOR<MahasiswaCreateWithoutKrsInput, MahasiswaUncheckedCreateWithoutKrsInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutKrsInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutKrsInput, MahasiswaUncheckedUpdateWithoutKrsInput>
  }

  export type MahasiswaUpdateWithoutKrsInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutKrsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    nama_mahasiswa?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutMahasiswaNestedInput
  }

  export type MatakuliahUpsertWithoutKrsInput = {
    update: XOR<MatakuliahUpdateWithoutKrsInput, MatakuliahUncheckedUpdateWithoutKrsInput>
    create: XOR<MatakuliahCreateWithoutKrsInput, MatakuliahUncheckedCreateWithoutKrsInput>
    where?: MatakuliahWhereInput
  }

  export type MatakuliahUpdateToOneWithWhereWithoutKrsInput = {
    where?: MatakuliahWhereInput
    data: XOR<MatakuliahUpdateWithoutKrsInput, MatakuliahUncheckedUpdateWithoutKrsInput>
  }

  export type MatakuliahUpdateWithoutKrsInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    dosen?: DosenUpdateOneRequiredWithoutMatakuliahNestedInput
    penjadwalan?: PenjadwalanUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahUncheckedUpdateWithoutKrsInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahCreateManyDosenInput = {
    id_matakuliah?: number
    nama_matakuliah: string
    sks: number
  }

  export type PenjadwalanCreateManyDosenInput = {
    id?: number
    id_matakuliah: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type MatakuliahUpdateWithoutDosenInput = {
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    penjadwalan?: PenjadwalanUpdateManyWithoutMatakuliahNestedInput
    krs?: KrsUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahUncheckedUpdateWithoutDosenInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    penjadwalan?: PenjadwalanUncheckedUpdateManyWithoutMatakuliahNestedInput
    krs?: KrsUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type MatakuliahUncheckedUpdateManyWithoutDosenInput = {
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    nama_matakuliah?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUpdateWithoutDosenInput = {
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    matakuliah?: MatakuliahUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUncheckedUpdateManyWithoutDosenInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_matakuliah?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type KrsCreateManyMahasiswaInput = {
    id?: number
    matakuliah_id: number
  }

  export type KrsUpdateWithoutMahasiswaInput = {
    matakuliah?: MatakuliahUpdateOneRequiredWithoutKrsNestedInput
  }

  export type KrsUncheckedUpdateWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    matakuliah_id?: IntFieldUpdateOperationsInput | number
  }

  export type KrsUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    matakuliah_id?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanCreateManyMatakuliahInput = {
    id?: number
    id_dosen: number
    jadwal: string
    tahun_ajaran: string
    semester: number
  }

  export type KrsCreateManyMatakuliahInput = {
    id?: number
    mahasiswa_id: number
  }

  export type PenjadwalanUpdateWithoutMatakuliahInput = {
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    dosen?: DosenUpdateOneRequiredWithoutPenjadwalanNestedInput
  }

  export type PenjadwalanUncheckedUpdateWithoutMatakuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type PenjadwalanUncheckedUpdateManyWithoutMatakuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_dosen?: IntFieldUpdateOperationsInput | number
    jadwal?: StringFieldUpdateOperationsInput | string
    tahun_ajaran?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type KrsUpdateWithoutMatakuliahInput = {
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKrsNestedInput
  }

  export type KrsUncheckedUpdateWithoutMatakuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    mahasiswa_id?: IntFieldUpdateOperationsInput | number
  }

  export type KrsUncheckedUpdateManyWithoutMatakuliahInput = {
    id?: IntFieldUpdateOperationsInput | number
    mahasiswa_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DosenCountOutputTypeDefaultArgs instead
     */
    export type DosenCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DosenCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MahasiswaCountOutputTypeDefaultArgs instead
     */
    export type MahasiswaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatakuliahCountOutputTypeDefaultArgs instead
     */
    export type MatakuliahCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DosenDefaultArgs instead
     */
    export type DosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DosenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MahasiswaDefaultArgs instead
     */
    export type MahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MahasiswaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatakuliahDefaultArgs instead
     */
    export type MatakuliahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatakuliahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PenjadwalanDefaultArgs instead
     */
    export type PenjadwalanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PenjadwalanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KrsDefaultArgs instead
     */
    export type KrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KrsDefaultArgs<ExtArgs>

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