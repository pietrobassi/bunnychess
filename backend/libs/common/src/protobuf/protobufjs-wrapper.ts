import * as proto from 'protobufjs';

// Automatically serialize/deserialize gRPC google.protobuf.Timestamp fields from/to JavaScript Date objects.
export function useCustomProtobufTimestampHandler() {
  proto.wrappers['.google.protobuf.Timestamp'] = {
    fromObject(value: Date) {
      return { seconds: value.getTime() / 1000, nanos: (value.getTime() % 1000) * 1e6 };
    },
    toObject(message: { seconds: number; nanos: number }) {
      return new Date(message.seconds * 1000 + message.nanos / 1e6);
    },
  } as any;
}
