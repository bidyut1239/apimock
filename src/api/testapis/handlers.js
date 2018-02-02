export let hello = (request, reply) => {
  let helloStr = "Hello, World";
  console.log(`Hello`);
  reply(helloStr);
};

export let helloUnique = (request, reply) => {
  let helloStr = "Hello, " + encodeURIComponent(request.params.name) + "";
  console.log(`Hits`);
  reply(helloStr);
};
