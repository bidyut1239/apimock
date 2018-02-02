export let hello = (request, reply) => {
  let helloStr = "Hello, World";
  reply(helloStr);
};

export let helloUnique = (request, reply) => {
  let helloStr = "Hello, " + encodeURIComponent(request.params.name) + "";
  reply(helloStr);
};
