require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import { authJWT } from "./passport";
import schema from "./schema";
import { isAuthenticated } from "./utils"
const PORT = process.env.PORT || 4001;

const server = new GraphQLServer({ 
  schema,
  context: ({ request }) => ({ request,isAuthenticated })
});

server.express.use(logger("dev"));
server.express.use(authJWT)

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);