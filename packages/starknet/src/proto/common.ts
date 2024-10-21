// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.0
//   protoc               unknown
// source: common.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "starknet.v2";

/** A field element. */
export interface FieldElement {
  readonly x0?: bigint | undefined;
  readonly x1?: bigint | undefined;
  readonly x2?: bigint | undefined;
  readonly x3?: bigint | undefined;
}

function createBaseFieldElement(): FieldElement {
  return { x0: BigInt("0"), x1: BigInt("0"), x2: BigInt("0"), x3: BigInt("0") };
}

export const FieldElement = {
  encode(message: FieldElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x0 !== undefined && message.x0 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x0) !== message.x0) {
        throw new globalThis.Error("value provided for field message.x0 of type fixed64 too large");
      }
      writer.uint32(9).fixed64(message.x0.toString());
    }
    if (message.x1 !== undefined && message.x1 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x1) !== message.x1) {
        throw new globalThis.Error("value provided for field message.x1 of type fixed64 too large");
      }
      writer.uint32(17).fixed64(message.x1.toString());
    }
    if (message.x2 !== undefined && message.x2 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x2) !== message.x2) {
        throw new globalThis.Error("value provided for field message.x2 of type fixed64 too large");
      }
      writer.uint32(25).fixed64(message.x2.toString());
    }
    if (message.x3 !== undefined && message.x3 !== BigInt("0")) {
      if (BigInt.asUintN(64, message.x3) !== message.x3) {
        throw new globalThis.Error("value provided for field message.x3 of type fixed64 too large");
      }
      writer.uint32(33).fixed64(message.x3.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldElement() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.x0 = longToBigint(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.x1 = longToBigint(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.x2 = longToBigint(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.x3 = longToBigint(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldElement {
    return {
      x0: isSet(object.x0) ? BigInt(object.x0) : BigInt("0"),
      x1: isSet(object.x1) ? BigInt(object.x1) : BigInt("0"),
      x2: isSet(object.x2) ? BigInt(object.x2) : BigInt("0"),
      x3: isSet(object.x3) ? BigInt(object.x3) : BigInt("0"),
    };
  },

  toJSON(message: FieldElement): unknown {
    const obj: any = {};
    if (message.x0 !== undefined && message.x0 !== BigInt("0")) {
      obj.x0 = message.x0.toString();
    }
    if (message.x1 !== undefined && message.x1 !== BigInt("0")) {
      obj.x1 = message.x1.toString();
    }
    if (message.x2 !== undefined && message.x2 !== BigInt("0")) {
      obj.x2 = message.x2.toString();
    }
    if (message.x3 !== undefined && message.x3 !== BigInt("0")) {
      obj.x3 = message.x3.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<FieldElement>): FieldElement {
    return FieldElement.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FieldElement>): FieldElement {
    const message = createBaseFieldElement() as any;
    message.x0 = object.x0 ?? BigInt("0");
    message.x1 = object.x1 ?? BigInt("0");
    message.x2 = object.x2 ?? BigInt("0");
    message.x3 = object.x3 ?? BigInt("0");
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

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}