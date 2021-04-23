import { resolvers as demandResolvers } from "./Demand/Demand";
import { resolvers as clientResolvers } from "./Client/Client";

const resolvers = {
  ...demandResolvers,
  ...clientResolvers,

  Query: {
    ...clientResolvers.Query,
    ...demandResolvers.Query,
  },
};

export default resolvers;
