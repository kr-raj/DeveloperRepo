exports.handler = (event, context, callback) => {
  const name = event.name || 'World';
  const response = {greeting: `Hello, ${name}!`};
  callback(null, response);
};