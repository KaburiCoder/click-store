
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.ProductListScalarFieldEnum = {
  jisa: 'jisa',
  smCode: 'smCode',
  smYmd: 'smYmd',
  addUser: 'addUser',
  createDt: 'createDt',
  bigo: 'bigo',
  web: 'web',
  bunryu: 'bunryu',
  step: 'step',
  fit: 'fit'
};

exports.Prisma.ProductListSubScalarFieldEnum = {
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

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.ProductLogScalarFieldEnum = {
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

exports.Prisma.ProductListWebBunryuScalarFieldEnum = {
  code: 'code',
  name: 'name',
  fit: 'fit'
};

exports.Prisma.ProductListImageScalarFieldEnum = {
  jisa: 'jisa',
  smCode: 'smCode',
  image: 'image'
};

exports.Prisma.CsScalarFieldEnum = {
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

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  ykiho: 'ykiho'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  code: 'code',
  quantity: 'quantity',
  fit: 'fit',
  createdDate: 'createdDate',
  updatedDate: 'updatedDate'
};

exports.Prisma.PaymentScalarFieldEnum = {
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

exports.Prisma.PaymentItemScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  code: 'code',
  name: 'name',
  fit: 'fit',
  quantity: 'quantity',
  amount: 'amount'
};

exports.Prisma.PaymentVirtualScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  bankCode: 'bankCode',
  customerName: 'customerName',
  dueDate: 'dueDate',
  accountNumber: 'accountNumber'
};

exports.Prisma.PaymentRefundScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  bank: 'bank',
  accountNumber: 'accountNumber',
  holderName: 'holderName',
  amount: 'amount',
  reason: 'reason'
};

exports.Prisma.EmScalarFieldEnum = {
  code: 'code',
  name: 'name',
  jisa: 'jisa',
  buCode: 'buCode',
  endYmd: 'endYmd'
};

exports.Prisma.NewCpmMsgScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Account: 'Account',
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
  NewCpmMsg: 'NewCpmMsg'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
