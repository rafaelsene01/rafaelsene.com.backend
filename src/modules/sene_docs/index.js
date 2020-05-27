import {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from "graphql";

import DocType from "./DocType";
import { getDoc, saveDoc, deleteComments } from "./DocLoader";

export const queries = {
  doc: {
    type: DocType,
    resolve: getDoc,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
  },
};

export const mutations = {
  saveDoc: {
    type: DocType,
    resolve: saveDoc,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "DocInput",
          fields: {
            id: {
              type: GraphQLString,
            },
            text: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  },
  deleteComments: {
    type: DocType,
    resolve: deleteComments,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
  },
};
