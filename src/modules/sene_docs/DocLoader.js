import Doc from "./DocModel";

export async function saveDoc(_, { input }) {
  await Doc.updateOne({ id: input.id }, input, {
    upsert: true,
    setDefaultsOnInsert: true,
  });
  const doc = await Doc.findOne({ id: input.id });
  return doc;
}

export async function getDoc(_, { id }) {
  const doc = await Doc.findOne({ id });
  return doc;
}

export async function deleteComments(_, { id }) {
  const doc = await Doc.findByIdAndDelete(id);
  return doc;
}
