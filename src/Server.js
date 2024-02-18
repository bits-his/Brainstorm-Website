// src/mirageServer.js
import { createServer, Model } from "miragejs";
import Imga from './assets/claye.jpg'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      blog: Model,
    },

    seeds(server) {
      for (let i = 0; i < 24; i++) {
        server.create("blog", {
          id:i+1,
          title: `Blog Post ${i + 1}`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          author: "Ahmad Ismail",
          img:Imga
          // You can add other properties like date and image here if needed
        });
      }
    },

    routes() {
      this.namespace = "api";

      this.get("/blogs", (schema) => {
        return schema.blogs.all();
      });

      this.post("/blogs", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.blogs.create(attrs);
      });

      this.patch("/blogs/:id", (schema, request) => {
        let newAttributes = JSON.parse(request.requestBody);
        let blog = schema.blogs.find(request.params.id);
        blog.update(newAttributes);
        return blog;
      });
    },
  });

  return server;
}
