// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.0
//   protoc               unknown
// source: filter.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address, ValidatorStatus, validatorStatusFromJSON, validatorStatusToJSON } from "./common";

export const protobufPackage = "beaconchain.v2";

/** Beacon Chain DNA definitions (filter). */

export interface Filter {
  /** Include header. */
  readonly header?:
    | HeaderFilter
    | undefined;
  /** Filter transactions. */
  readonly transactions?:
    | readonly TransactionFilter[]
    | undefined;
  /** Filter validators. */
  readonly validators?:
    | readonly ValidatorFilter[]
    | undefined;
  /** Filter blobs. */
  readonly blobs?: readonly BlobFilter[] | undefined;
}

export interface HeaderFilter {
  /** Always include header data. Defaults to `false`. */
  readonly always?: boolean | undefined;
}

export interface TransactionFilter {
  readonly id?:
    | number
    | undefined;
  /** Filter based on the transaction's sender address. */
  readonly from?:
    | Address
    | undefined;
  /** Filter based on the transaction's recipient address. */
  readonly to?:
    | Address
    | undefined;
  /** Only return `creat` transactions. Defaults to `false`. */
  readonly create?:
    | boolean
    | undefined;
  /** Include the transaction's blob. Defaults to `false`. */
  readonly includeBlob?: boolean | undefined;
}

export interface ValidatorFilter {
  readonly id?:
    | number
    | undefined;
  /** Filter the validator based on its index. */
  readonly validatorIndex?:
    | number
    | undefined;
  /** Filter based on the validator's status. */
  readonly status?: ValidatorStatus | undefined;
}

export interface BlobFilter {
  readonly id?:
    | number
    | undefined;
  /** Include the transaction that posted the blob. */
  readonly includeTransaction?: boolean | undefined;
}

function createBaseFilter(): Filter {
  return { header: undefined, transactions: [], validators: [], blobs: [] };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      HeaderFilter.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.transactions !== undefined && message.transactions.length !== 0) {
      for (const v of message.transactions) {
        TransactionFilter.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.validators !== undefined && message.validators.length !== 0) {
      for (const v of message.validators) {
        ValidatorFilter.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.blobs !== undefined && message.blobs.length !== 0) {
      for (const v of message.blobs) {
        BlobFilter.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = HeaderFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transactions!.push(TransactionFilter.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validators!.push(ValidatorFilter.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.blobs!.push(BlobFilter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      header: isSet(object.header) ? HeaderFilter.fromJSON(object.header) : undefined,
      transactions: globalThis.Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => TransactionFilter.fromJSON(e))
        : [],
      validators: globalThis.Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ValidatorFilter.fromJSON(e))
        : [],
      blobs: globalThis.Array.isArray(object?.blobs) ? object.blobs.map((e: any) => BlobFilter.fromJSON(e)) : [],
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = HeaderFilter.toJSON(message.header);
    }
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => TransactionFilter.toJSON(e));
    }
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => ValidatorFilter.toJSON(e));
    }
    if (message.blobs?.length) {
      obj.blobs = message.blobs.map((e) => BlobFilter.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Filter>): Filter {
    return Filter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = createBaseFilter() as any;
    message.header = (object.header !== undefined && object.header !== null)
      ? HeaderFilter.fromPartial(object.header)
      : undefined;
    message.transactions = object.transactions?.map((e) => TransactionFilter.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => ValidatorFilter.fromPartial(e)) || [];
    message.blobs = object.blobs?.map((e) => BlobFilter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHeaderFilter(): HeaderFilter {
  return { always: undefined };
}

export const HeaderFilter = {
  encode(message: HeaderFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.always !== undefined) {
      writer.uint32(8).bool(message.always);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.always = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderFilter {
    return { always: isSet(object.always) ? globalThis.Boolean(object.always) : undefined };
  },

  toJSON(message: HeaderFilter): unknown {
    const obj: any = {};
    if (message.always !== undefined) {
      obj.always = message.always;
    }
    return obj;
  },

  create(base?: DeepPartial<HeaderFilter>): HeaderFilter {
    return HeaderFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HeaderFilter>): HeaderFilter {
    const message = createBaseHeaderFilter() as any;
    message.always = object.always ?? undefined;
    return message;
  },
};

function createBaseTransactionFilter(): TransactionFilter {
  return { id: 0, from: undefined, to: undefined, create: undefined, includeBlob: undefined };
}

export const TransactionFilter = {
  encode(message: TransactionFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.from !== undefined) {
      Address.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Address.encode(message.to, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== undefined) {
      writer.uint32(32).bool(message.create);
    }
    if (message.includeBlob !== undefined) {
      writer.uint32(40).bool(message.includeBlob);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = Address.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.create = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.includeBlob = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionFilter {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      from: isSet(object.from) ? Address.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? Address.fromJSON(object.to) : undefined,
      create: isSet(object.create) ? globalThis.Boolean(object.create) : undefined,
      includeBlob: isSet(object.includeBlob) ? globalThis.Boolean(object.includeBlob) : undefined,
    };
  },

  toJSON(message: TransactionFilter): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.from !== undefined) {
      obj.from = Address.toJSON(message.from);
    }
    if (message.to !== undefined) {
      obj.to = Address.toJSON(message.to);
    }
    if (message.create !== undefined) {
      obj.create = message.create;
    }
    if (message.includeBlob !== undefined) {
      obj.includeBlob = message.includeBlob;
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionFilter>): TransactionFilter {
    return TransactionFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TransactionFilter>): TransactionFilter {
    const message = createBaseTransactionFilter() as any;
    message.id = object.id ?? 0;
    message.from = (object.from !== undefined && object.from !== null) ? Address.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? Address.fromPartial(object.to) : undefined;
    message.create = object.create ?? undefined;
    message.includeBlob = object.includeBlob ?? undefined;
    return message;
  },
};

function createBaseValidatorFilter(): ValidatorFilter {
  return { id: 0, validatorIndex: undefined, status: undefined };
}

export const ValidatorFilter = {
  encode(message: ValidatorFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.validatorIndex !== undefined) {
      writer.uint32(16).uint32(message.validatorIndex);
    }
    if (message.status !== undefined) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.validatorIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorFilter {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      validatorIndex: isSet(object.validatorIndex) ? globalThis.Number(object.validatorIndex) : undefined,
      status: isSet(object.status) ? validatorStatusFromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ValidatorFilter): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.validatorIndex !== undefined) {
      obj.validatorIndex = Math.round(message.validatorIndex);
    }
    if (message.status !== undefined) {
      obj.status = validatorStatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidatorFilter>): ValidatorFilter {
    return ValidatorFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidatorFilter>): ValidatorFilter {
    const message = createBaseValidatorFilter() as any;
    message.id = object.id ?? 0;
    message.validatorIndex = object.validatorIndex ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseBlobFilter(): BlobFilter {
  return { id: 0, includeTransaction: undefined };
}

export const BlobFilter = {
  encode(message: BlobFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.includeTransaction !== undefined) {
      writer.uint32(16).bool(message.includeTransaction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlobFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlobFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.includeTransaction = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlobFilter {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      includeTransaction: isSet(object.includeTransaction) ? globalThis.Boolean(object.includeTransaction) : undefined,
    };
  },

  toJSON(message: BlobFilter): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.includeTransaction !== undefined) {
      obj.includeTransaction = message.includeTransaction;
    }
    return obj;
  },

  create(base?: DeepPartial<BlobFilter>): BlobFilter {
    return BlobFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BlobFilter>): BlobFilter {
    const message = createBaseBlobFilter() as any;
    message.id = object.id ?? 0;
    message.includeTransaction = object.includeTransaction ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { readonly $case: string }
    ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { readonly $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
