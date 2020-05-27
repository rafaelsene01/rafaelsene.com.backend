import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";

export default new GraphQLObjectType({
  name: "doc",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    text: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  },
});
