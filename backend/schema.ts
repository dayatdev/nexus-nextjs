import path from "path";
import { makeSchema } from "nexus";
import * as types from "schema";

const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "backend/context.ts"),
    export: "Context",
  },
});

export default schema;
